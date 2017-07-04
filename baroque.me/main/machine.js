/**
 * ���峣��
 */
 
/**
 * nub��ԲȦ
 * ���غ���
 * about ������
 */
 
//������̥�뾶����������
var WHEEL_RADIUS = 172;
var WHEEL_RADIUS_SQUARED = Math.pow(WHEEL_RADIUS, 2);
var WHEEL_CIRCUMFERENCE = Math.PI*WHEEL_RADIUS_SQUARED;
//һ���߶εĳ��ȣ���Բ��1/4����������
var WHEEL_QUARTER_SEG = Math.sqrt(2*WHEEL_RADIUS_SQUARED);

//�������ܹ��ж���nub
var NUBS = 4;
//����������һ������Ԥ���أ��������֣�
var THREAD_LOADER = 0;

//����������������С�ȴ�ʱ�䣬������Ԥ���ض���
//��һ������Ȼ�ڽ���
var TIME_BETWEEN_LOAD = 0.25;
//���Ǵ����Ҫ������õ�����Ľ�������
var LOAD_TIME_OVERALL = 12.5;
// Margin around the bounding clearRect calls.
var CLEAR_RECT_MARG = 50;
//�߳�ջռ���˶��ٴ�ֱ�ռ�
var HEIGHT_ALL_THREADS = WHEEL_QUARTER_SEG;
//�����framerate�£����Ǽ���������һ������tab��ֵ
var FPS_BACKGROUND = 2;

/**
 * ����һ���µ�Machine�࣬��ִ������
 * @class ����һ��Machine��
 * @constructor
 * @param {object} cvPm��canvas�����Ļ��Ƶ�λ��
 */
var Machine = function(cvPm({
    //�洢�ҵ�canvas
    this.cv = cvPm;
    //�洢����Ƿ����ƶ�
    this.isMouseMoving = false;
    //�߳�����
    this.arrThreads = new Array();
    //ÿ���������߳�������
    this.arrLength = new Array();
    //��������
    this.arrNubs = new Array(4);
    //�洢�ߵ���ʼ������
    this.arrPitchStart = new Array(TOTAL_THREADS);
    //���Ŀǰ�Ƿ񱻵��
    this.isMouseDown = false;
    //��С ����ٶ���Ϊ����
    this.rSpd = 0;
    //����frames��ƽ���ٶ�
    this.rSpdAvg = 0;
    //�ж��ٸ�frame��ȡƽ��
    this.fAvg = 5;
  
    this.setTempo(BPM_NORM);
    //�û��ٶȵ��½磬���ǿ�����ռ�������ߣ���Ϊ���ʣ�0~1��
  this.rSpdGrab = 0.4;
  //�������λ��
  this.xp0; this.yp0; this.xp1; this.yp1;
  //��Ϊ�����
  this.pt0 = new Point();
  this.pt1 = new Point();
  //�����Ƿ��һ��ִ�и���
  this.isFirstRun = true;
  this.wasResized = false;
  //�û�Ŀǰ�Ƿ񱣳�nub
  this.isHoldingNub = false;
  //�洢�û�Ŀǰ�ڹ�����nub
  this.nubOver = null;
  //�洢��һ��8����������������
  this.indGroup = 0;
  //Ŀǰ�ж���threadĿǰ���û���ռ
  this.ctGrab = 0;
  //������һ��frame����pluck������
  this.pluckMax = 2;
  //Ŀǰ������������������ΪԤ����
  this.indThreadLoader = 0;
  //�����Ƿ���Ԥ����ģʽ
  this.isIntro = true;
  //�����Ƿ��Ѿ���ɣ������Ƿ��Ѿ�׼���ÿ���Ÿ�
  this.isIntroDone = false;
  //�洢�����ڸ������һ������
  this.noteSongRdPrev = 0;
  //�Ƿ����е��߶������ǵ�����λ��
  this.threadsInPlace = false;
  //��Ŀǰ�Ƿ��ڱ���tab��
  this.isInBackground = false;
  //�洢�ߵı߽���ӵ���С�ߴ�
  this.xbLimitMin = -MAX_LENGTH*0.5;
  this.xbLimitMax =  MAX_LENGTH*0.5;
  this.ybLimitMin = -HEIGHT_ALL_THREADS*0.5;
  this.ybLimitMax =  HEIGHT_ALL_THREADS*0.5;
  //Ϊ���ǵ�clearRect refresh���ô洢�߽���ӵ�����
  this.xbMin = this.xbLimitMin;
  this.xbMax = this.xbLimitMax;
  this.ybMin = this.ybLimitMin;
  this.ybMax = this.ybLimitMax;
  //��ʼ��machine
  this.init();
};

/**
 * ��ʼ��machine.
 */
Machine.prototype.init = function() {
	this.elmAbout = document.getElementById("about");
	this.elmLoader = document.getElementById("loader");
	//���� about ����
	this.elmAbout.innerHTML = "<a href=\""+aboutURL+"\" target=\"_blank\">&nbsp;&nbsp;?&nbsp;</a>";
};

/**
 * ����Thread����
 */
Machine.prototype.build = function() { 
	this.setOrigin();  
	//����ÿһ��������������
	var lenCurr = MAX_LENGTH;
	for (var i = 0; i < TOTAL_NOTES; i++) {
	  this.arrLength[i] = lenCurr;
	  lenCurr *= HALF_STEP_MULTIPLIER;
	}	
	
  var len, str, hex, pitch;
  //������֮��Ĵ�ֱ����
  var dy = WHEEL_QUARTER_SEG/TOTAL_THREADS;
  var yp = (TOTAL_THREADS/2)*dy - 0.5*dy;
  //���������ߣ�����������
  for (var i = 0; i < TOTAL_THREADS; i++) {
    //�洢�ߵĿ�ʼ������
    this.arrPitchStart[i] = suite.arrMidiMap[SONG_DATA_ARRAY[i]];
    hex = "#FFFFFF";
    str = 3;
    var pitch = -1;
    var thr = new Thread(yp, pitch, str, hex, i, this.cv);
    yp -= dy;
    this.arrThreads.push(thr);
  }
  //������̥ - x, y, ����index, canvas
  this.wheel0 = new Wheel( WHEEL_RADIUS, 0, 0, this.cv);
  this.wheel1 = new Wheel(-WHEEL_RADIUS, 0, 1, this.cv);
  //Ϊ���Ǵ���nub
    this.arrNubs[0] = this.wheel0.nub0 = new Nub(0, 0, suite.machine, this.wheel0, this.cv);
    this.arrNubs[1] = this.wheel0.nub1 = new Nub(1, 1, suite.machine, this.wheel0, this.cv);
    this.arrNubs[2] = this.wheel1.nub0 = new Nub(0, 2, suite.machine, this.wheel1, this.cv);
    this.arrNubs[3] = this.wheel1.nub1 = new Nub(1, 3, suite.machine, this.wheel1, this.cv);
    //���ģʽ
	this.cv.globalCompositeOperation = "lighter";
	//�ѵ�һ��nub��Ϊ����nub
    this.arrNubs[0].enter();
};

/**
 * ��ʼ��������
 */
Machine.prototype.beginLoading = function() {
  //��ʼ����ʱ��
  this.tFrame0 = this.tSong0 = this.tNotes0 = this.tLoadPrev = this.tLoading0 = this.t0 = (new Date()).getTime()/1000;
  this.ctFrame = 0;
  //��ȡ���Ŀǰλ��
  this.xp0 = this.getUserX(); this.yp0 = this.getUserY();  
};

/**
 * �˳���������
 */
Machine.prototype.exitLoading = function() {
  this.isIntro = false;
	//�Ӽ���ģʽ�ͷ�nub
	for (var i = 0; i < this.arrNubs.length; i++) this.arrNubs[i].exitLoader();
    //һ���Ը���������
    this.updThreads();
};

/**
 * ����걻ѹ
 */
Machine.prototype.mouseDown = function() {
  this.isMouseDown = true;
};

/**
 * ����걻�ͷ�
 */
Machine.prototype.mouseUp = function() {
  //ֹͣ����
  this.isMouseDown = false;
};

/**
 * ������������nλ�ÿ�ʼ��8������
 */
Machine.prototype.setGroup = function(n) {
  this.indGroup = n;
  for (var i = 0; i < this.arrThreads.length; i++) {
    var note = SONG_DATA_ARRAY[this.indGroup + i];
    //�Ƿ���rest
    if (note == -1) {
      pitch = -1;
    } else {
      //������Ҫ������Ϊ�ĸ�����
      pitch = suite.arrMidiMap[note];    
    }
    this.arrThreads[i].setTargetPitch(pitch);
  }
}

/**
 * ����Ŀǰ���ٶȣ����ӣ�
 */
Machine.prototype.setTempo = function(t) {
  this.bpm = t;
  this.bps = t/60;
};

/**
 * ���������canva�е�xλ��
 * ����ռ�
 * @return {number} ����xλ��
 */
Machine.prototype.getUserX = function() {
  return mouseX-this.xo;
};

/**
 * ���������canva�е�yλ��
 * ����ռ�
 * @return {number} ����yλ��
 */
Machine.prototype.getUserX = function() {
  return mouseX-this.xo;
};

/**
 * ������canvas�е�����xλ��ת����-1~1�ı���
 * -1ָ������1ָ�����ң�0.5���м�
 * @param {number} xp��Ҫת����xλ��
 */
Machine.prototype.xAsRatio = function(xp) {
  xp = lim(xp, 0, this.width);
  return xp/this.width;
};

/**
 * Machine���£�����ÿ��frame��ִ��
 */
Machine.prototype.upd = function() {
  //ÿ������ѭ����ʼ�����ñ߽�������ٸ�����
  this.xbMin = this.xbLimitMin;
  this.xbMax = this.xbLimitMax;
  this.ybMin = this.ybLimitMin;
  this.ybMax = this.ybLimitMax;
  //�����Ƿ����ڼ���
  if (SHOW_FRAMERATE) 
      this.updFramerate(); //��ʾ֡��
  if (this.isIntro)
      this.updLoading(); //��ʾ��������
  //���¼�ʱ
  if (this.isIntro) {
    this.updTime();
  } else {
    this.updTime();
  }
  //����λ��
  this.updPos();
  //����Ƿ�ѹ
  if (!this.isMouseDown) {
    this.updMouseUp();
  }
	//���ģʽ
	if (this.wasResized) { 
	  this.wasResized = false;
	  this.cv.globalCompositeOperation = "lighter";
	}
  //����enter canvas
  // this.cv.clearRect(0, 0, this.width, this.height);  

  //����������
  //this.updThreads();
  //��������
  this.updWheels();
  
  this.cv.clearRect(
    this.xo+this.xbMin-CLEAR_RECT_MARG,
    this.yo+this.ybMin-CLEAR_RECT_MARG,
    this.xbMax-this.xbMin+CLEAR_RECT_MARG*2,
    this.ybMax-this.ybMin+CLEAR_RECT_MARG*2
  );
  
  //this.updThreads();
  this.updateAndRedrawThreads();
  this.redrawNubs();
};

/**
 * ���¼�ʱ
 */
Machine.prototype.updTime = function() {
  //����һ�θ����Ѿ���ȥ����ʱ��
  this.t1 = (new Date()).getTime()/1000;
  this.elapFrame = this.t1-this.t0;
  this.t0 = this.t1;

  //��������Ƿ��ڱ���tab�еĺ���λ��
  var fps = 1/this.elapFrame;
  if (fps <= FPS_BACKGROUND) {
    if (!this.isInBackground) {
      this.switchBackgroundMode(1);
      this.isInBackground = true;
    }
  } else {
    if (this.isInBackground) {
      this.switchBackgroundMode(0);
      this.isInBackground = false;
    }
  }
  
  //�����ڸ����е��ĸ�λ��
  this.elapSong = this.t1-this.tSong0;
  this.beatSong = this.bps*this.elapSong;
  this.noteSong = this.beatSong*NOTE_UNIT;
  this.noteSongRd = Math.floor(this.noteSong);
  
  //�����Ƿ��ڽ���ģʽ
  if (this.isIntro) {	  
    //�����Ƿ���һ���µ�����
    if (this.noteSongRd != this.noteSongRdPrev) {
		
      //�����Ƿ���ǰ��
      if (this.isIntroDone) {
		  
        //�����Ƿ�����һ����ϣ����������ǿ��Կ�ʼ����
        if ((this.noteSongRdPrev < this.nextNoteBreak) && (this.noteSongRd >= this.nextNoteBreak)) {
        	// Set the time to where it would have been... to make it seamless.
        	var beatSingle = this.beatSong % 1;
        	var elapFudge = beatSingle / this.bps;
        	// Now back-date it.
        	this.tSong0 = this.tNotes0 = this.t1 - elapFudge;
          this.exitLoading();
        }
      }
      this.noteSongRdPrev = this.noteSongRd;
    }
    
  //����ģʽ
  } else {
    if (this.noteSong > this.indGroup+TOTAL_THREADS) {
      this.tNotes0 = this.t1;
      //���ӵ���һ����
      var nextGroup = this.indGroup+TOTAL_THREADS;
      //�Ƿ��Ѿ����������
      if (nextGroup >= TOTAL_NOTES_IN_SONG) {
        nextGroup = 0;
        //���ø�ļ�����
        this.tSong0 = this.t1;
      }    
      this.setGroup(nextGroup);
    }  
  }
  
  //��һ���ֽ紦���ģ��������ǿ�ʼ����
  //�Ƿ�Ӧ��Լ��Ϊ32 (or 16?)����
  this.nextNoteBreak = this.noteSongRd + (32 - (this.noteSongRd % 32));  
};

/**
 * ���������ߣ����£������»�������
 */
Machine.prototype.updWheels = function() {
  //������߳��ֵ���ת
  var rot;
  this.wheel0.setRot((MATH_PI*(0.25 + (this.beatSong % 16)/16 * 2)) % (2*MATH_PI));
  this.wheel1.setRot((MATH_PI*(0.25 - (this.beatSong % 16)/16 * 2)) % (2*MATH_PI));
  
  this.wheel0.upd();
  this.wheel1.upd(); 
};

/**
 * ���¼�ʱ
 */
Machine.prototype.switchBackgroundMode = function(n) {  
  switch (n) {
    //�򿪱���ģʽ
    case 1:
      break;
    //�رձ���ģʽ      
    case 0:
      for (var i = 0; i < 4; i++) this.arrNubs[i].returnFromBackground();
      break;
    default:
      break;
  }
};

/**
 * ���»��Ƴ���
 */
Machine.prototype.redrawNubs = function() {
  this.wheel0.nub0.redraw(); 
  this.wheel0.nub1.redraw(); 
  this.wheel1.nub0.redraw(); 
  this.wheel1.nub1.redraw(); 
};

/**
 * ���������ߣ����£������»�������
 */
Machine.prototype.updThreads = function() {
  for (var i = 0; i < this.arrThreads.length; i++) {
    this.arrThreads[i].upd();
  }
};

/**
 * ���������ߣ����£������»�������
 */
Machine.prototype.redrawThreads = function() {
  for (var i = 0; i < this.arrThreads.length; i++) {
    this.arrThreads[i].redraw();
  }
};

/**
 * ���������ߣ����£������»�������
 */
Machine.prototype.updateAndRedrawThreads = function() {
  for (var i = 0; i < this.arrThreads.length; i++) {
    this.arrThreads[i].upd();
    this.arrThreads[i].redraw();
  }
};

/**
 * ����״̬�ı�
 */
Machine.prototype.updLoading = function() {
	var str;
	//�����Ƿ����ڼ�����Ƶ
	if (!suite.soundReady) {
		var perc = Math.round(suite.indNoteLd/TOTAL_NOTES*100);		
		if (SHOW_FRAMERATE) {
		  //this.elmLoader.innerHTML += "<span class=\"loading\">" + str + "</span>";
		} else {
      //this.elmLoader.innerHTML = "<span class=\"loading\">" + str + "</span>";
		}
	}
	//�Դ�������һ�θ��¼��ض������Ѿ������˶���ʱ��
  this.tLoadCurr = (new Date).getTime()/1000;
  var elap = this.tLoadCurr - this.tLoadPrev;
  
  //�������г����˶��
  this.rLoad = (this.tLoadCurr-this.tLoading0) / LOAD_TIME_OVERALL;
  if (this.rLoad >= 1) this.rLoad = 1;
  //�Ƿ�ִ�е�ʱ��
  if (elap > TIME_BETWEEN_LOAD) {
    this.tLoadPrev = this.tLoadCurr;
    this.incrLoad();
  }
};

/**
 * ����֡�ټ���
 */
Machine.prototype.updFramerate = function() {
	this.tFrame1 = (new Date).getTime()/1000;
  var elap = this.tFrame1 - this.tFrame0;
  this.tFrame0 = this.tFrame1;

	//�����Ƿ����ڼ�����Ƶ
	this.ctFrame++;
	if (this.ctFrame % 5 == 0) {
  	this.numFrame = Math.round(100/elap)/100;
  }
	this.elmLoader.innerHTML = "<span class=\"loading\">" + this.numFrame + "</span> &nbsp; ";
};

/**
 * �����߶�������һ��
 */
Machine.prototype.incrLoad = function() {  
  //�ͷ���һ��nub
  var nub;
  if (this.rLoad > 0.15) {
    nub = this.arrNubs[2]; if (!nub.hasEntered) nub.enter();
    nub = this.arrNubs[0]; if (!nub.hasEntered) nub.enter(); //����ȷ�ϵ�һ���Ѿ����룬�Ǿ�����һ��
  }
  if (this.rLoad > 0.85) {
    nub = this.arrNubs[1]; if (!nub.hasEntered) nub.enter();
  }
  if (this.rLoad > 0.97) {
    nub = this.arrNubs[3]; if (!nub.hasEntered) nub.enter();
  }
    
  //Ŀǰչʾ������
  var rCut0 = 0.4; var rCut1 = 0.8;
  var rShow;
  if (this.rLoad < rCut0) {
    rShow = 0; //ֻչʾһ����һ��ʱ��
  } else {
    rShow = (this.rLoad-rCut0)/(rCut1-rCut0);
    if (rShow > 1) rShow = 1;
  }
  var showThreads = rShow*TOTAL_THREADS;
  //��һ�����λ�ÿ�ʼ
  var ind = Math.floor((Math.random()*0.999)*showThreads);
  var pitchStart, pitchTarg, thr;
  var ctThreadsInPlace = 0;
  //ѭ��������
  for (var i = 0; i < TOTAL_THREADS; i++) {
    if (i > showThreads) break;
    pitchStart = this.arrPitchStart[ind];
    thr = this.arrThreads[ind];
    //�������Ƿ��Ѿ�������Ŀ��λ��
    if (thr.pitchInd == pitchStart) {
      ind = (ind + 1) % TOTAL_THREADS; //����
      ctThreadsInPlace++;
    } else {
      //��Ҫ�����ߵ�������һ�������������Ƿ��Ѿ���������
      var incr;
      if (showThreads == 0) { incr = 1; }
      else { incr = 1 + Math.round(Math.random()*2); }
      //����ʱ�����ţ������Ƿ������Ż�
      off = Math.floor(lerp(-3, 0, this.rLoad));
      pitchTarg = thr.pitchInd + incr + off;
      if (pitchTarg < 0) pitchTarg = 0;
      //ȷ��������������Ҫ�ĸ�
      if (pitchTarg > pitchStart) pitchTarg = pitchStart;
      if ((suite.indNoteLd > 0) && (suite.indNoteLd-1 >= pitchTarg)) {
        thr.setTargetPitch(pitchTarg);
        break;
      }
    }
  }
  //�����Ƿ��ҵ�һ����ȥ�ı�
  if ((ctThreadsInPlace == TOTAL_THREADS) && !this.threadsInPlace) this.threadsInPlace = true;

  //��������߶��Ѿ���λ�������Ѿ����أ���ô�Ϳ�ʼ
  if (this.threadsInPlace && suite.soundReady && this.rLoad >= 1 && !this.isIntroDone) {
    console.log("isIntroDone true!");
    this.isIntroDone = true;
  }
};

/**
 * ���������ߣ�ͳ�ƶ��ٱ���ռ��ڶ��������Ϳ���֪���Ƿ���Ҫ���»���
 */
Machine.prototype.checkMoving = function() {
  //var ctGrab = 0;
  var ctOsc = 0;
  for (var i = 0; i < this.arrThreads.length; i++) {
    //if (this.arrThreads[i].isGrabbed) ctGrab++;
    if (this.arrThreads[i].isOsc) ctOsc++;
  }
};

/**
 * �����û�����ٶ���Ϊ0~1���ʣ���һ��ΪspdMin, spdMax��Χ��
 * ����ڸ���ѭ��������
 * @return {number} �û�����ٶȱ���0~1
 */
Machine.prototype.getSpd = function() {
  return this.rSpd;
};

/**
 * �����û�����ٶ���Ϊ0~1���ʣ���һ��ΪspdMin, spdMax��Χ��
 * ����ڸ���ѭ��������
 * ��ͬ�������Ƿ���ÿ��few framesȡƽ��
 * @return {number} �û�����ٶ���Ϊ0~1����
 */
Machine.prototype.getSpdAvg = function() {
  return this.rSpdAvg;
};

/**
 * ����ѭ����ִ��ÿ��frame����#upd����
 */
Machine.prototype.updPos = function() {  
  //����µ�λ��
  this.xp1 = this.getUserX(); this.yp1 = this.getUserY();
  //���µ����
  this.pt0.x = this.xp0; this.pt0.y = this.yp0;
  this.pt1.x = this.xp1; this.pt1.y = this.yp1;
  
  this.dx = this.xp1-this.xp0;
  this.dy = this.yp1-this.yp0;
  
  this.dist = Math.sqrt(this.dx*this.dx + this.dy*this.dy);
  //����Ƿ����ƶ�
  this.isMouseMoving = (this.dist > 0.2);
  //Ŀǰ���ٶ� - ����ÿ��
  this.spd = this.dist/this.elapFrame;
  //��һ����0~1
  this.rSpd = lim((this.spd-MOUSE_SPEED_MIN)/(MOUSE_SPEED_MAX - MOUSE_SPEED_MIN), 0, 1);
  //��ȡƽ��ֵ
  this.rSpdAvg = (this.rSpdAvg*(this.fAvg-1)/this.fAvg) + (this.rSpd*(1/this.fAvg));
  //�洢ԭ����λ��
  this.xp0 = this.xp1; this.yp0 = this.yp1;
};

/**
 * �����ſ�ʱ����ģʽ
 */
Machine.prototype.updMouseUp = function() {
  //�����Ƿ��Ѿ�����һ��nub
  if ((this.nubOver != null) && (!this.isHoldingNub)) {
    //�����Ƿ���Ȼ�ڹ������nub
    if (this.nubOver.checkMouseOver()) {
      return; //��������nub�ϣ��Ǻ�������
    } else {
      this.nubOver.rollOut(); //���ǰ���������ȥ
      this.nubOver = null;
    }
  }
  
  //ȷ�������Ƿ�����κ�һ��nub
  for (var i = 0; i < 4; i++) {
    if (this.arrNubs[i].checkMouseOver()) {
     this.nubOver = this.arrNubs[i];
     this.nubOver.rollOver();
     break; //���ټ�飬ÿ��ֻ����һ��nub
    }
  }
}

/**
 * ����걻����ʱ����
 */
Machine.prototype.mouseDown = function() {
	this.isMouseDown = true;
  //�����Ƿ񾭹�һ��nub
  if (this.nubOver != null) {
    this.nubOver.grab(); //��ռ��
    this.isHoldingNub = true; //��ס���ǿ���һ��nub��״̬
  }
}

/**
 * ������ͷ�ʱ����
 */
Machine.prototype.mouseUp = function() {
	this.isMouseDown = false;
  //����Ŀǰ�Ƿ����һ��nub
  if (this.isHoldingNub) {
    this.nubOver.drop();
    this.isHoldingNub = false;
  }
}

/**
 * ����Ŀǰ����ռ��������
 */
Machine.prototype.dropAll = function() {
  for (var i = 0; i < this.arrThreads.length; i++) {
    if (this.arrThreads[i].isGrabbed) this.arrThreads[i].drop();
  }
};

/**
 * ��ɼ���
 */
Machine.prototype.doneLoading = function() {
    //����"loading audio text"
    if (!SHOW_FRAMERATE) this.elmLoader.style.display = 'none';
}

/**
 * ��window���ô�Сʱ����
 */
Machine.prototype.checkBoxLimit = function(x,y) {  
  //�Ƿ񳬹���Ŀǰ�߽���ӵ�����
  if (x < this.xbMin) this.xbMin = x;
  else if (x > this.xbMax) this.xbMax = x;
  
  if (y < this.ybMin) this.ybMin = y;
  else if (y > this.ybMax) this.ybMax = y;
}

/**
 * ��window���ô�Сʱ����
 */
Machine.prototype.rsize = function() {
  this.wasResized = true;
	//��canvas����ƥ��window�ߴ�
	this.width = suite.canvasEl.width = window.innerWidth;
	this.height = suite.canvasEl.height = window.innerHeight;
	//�ƶ����غ���
	this.elmLoader.style.left = "20px";
	this.elmLoader.style.top = (this.height - 28) + "px";
	//�ƶ�about ������
	this.elmAbout.style.left = (this.width - 35) + "px";
	this.elmAbout.style.top = (this.height - 32) + "px";	
	//����ԭʼ��
	this.setOrigin();
};

/**
 * ����ԭʼ��
 */
Machine.prototype.setOrigin = function() {
	this.xo = Math.round(this.width/2);
	this.yo = Math.round(this.height/2);
}
