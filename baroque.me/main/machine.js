/**
 * 定义常量
 */
 
/**
 * nub：圆圈
 * 加载盒子
 * about ？盒子
 */
 
//设置轮胎半径和其它常量
var WHEEL_RADIUS = 172;
var WHEEL_RADIUS_SQUARED = Math.pow(WHEEL_RADIUS, 2);
var WHEEL_CIRCUMFERENCE = Math.PI*WHEEL_RADIUS_SQUARED;
//一条线段的长度，由圆的1/4弧画出来的
var WHEEL_QUARTER_SEG = Math.sqrt(2*WHEEL_RADIUS_SQUARED);

//机器中总共有多少nub
var NUBS = 4;
//我们想用哪一条线来预加载（索引数字）
var THREAD_LOADER = 0;

//加载两个声音的最小等待时间，来帮助预加载动作
//哪一条线仍然在建造
var TIME_BETWEEN_LOAD = 0.25;
//我们大概需要多久来得到整体的建造序列
var LOAD_TIME_OVERALL = 12.5;
// Margin around the bounding clearRect calls.
var CLEAR_RECT_MARG = 50;
//线程栈占据了多少垂直空间
var HEIGHT_ALL_THREADS = WHEEL_QUARTER_SEG;
//在这个framerate下，我们假设它是在一个背景tab阈值
var FPS_BACKGROUND = 2;

/**
 * 建造一个新的Machine类，它执行所有
 * @class 这是一个Machine类
 * @constructor
 * @param {object} cvPm是canvas上下文绘制的位置
 */
var Machine = function(cvPm({
    //存储我的canvas
    this.cv = cvPm;
    //存储鼠标是否在移动
    this.isMouseMoving = false;
    //线程数组
    this.arrThreads = new Array();
    //每个音符的线长度数组
    this.arrLength = new Array();
    //音符数组
    this.arrNubs = new Array(4);
    //存储线的起始点数组
    this.arrPitchStart = new Array(TOTAL_THREADS);
    //鼠标目前是否被点击
    this.isMouseDown = false;
    //最小 最大速度作为比率
    this.rSpd = 0;
    //经过frames的平均速度
    this.rSpdAvg = 0;
    //有多少个frame来取平均
    this.fAvg = 5;
  
    this.setTempo(BPM_NORM);
    //用户速度的下界，我们可以抢占并保持线，作为比率（0~1）
  this.rSpdGrab = 0.4;
  //跟踪鼠标位置
  this.xp0; this.yp0; this.xp1; this.yp1;
  //作为点对象
  this.pt0 = new Point();
  this.pt1 = new Point();
  //存在是否第一次执行更新
  this.isFirstRun = true;
  this.wasResized = false;
  //用户目前是否保持nub
  this.isHoldingNub = false;
  //存储用户目前在滚动的nub
  this.nubOver = null;
  //存储第一个8个音符的索引设置
  this.indGroup = 0;
  //目前有多少thread目前被用户抢占
  this.ctGrab = 0;
  //限制在一个frame中以pluck多少线
  this.pluckMax = 2;
  //目前我们在哪条线上来作为预加载
  this.indThreadLoader = 0;
  //我们是否在预加载模式
  this.isIntro = true;
  //介绍是否已经完成，我们是否已经准备好开妈放歌
  this.isIntroDone = false;
  //存储我们在歌里的哪一个音符
  this.noteSongRdPrev = 0;
  //是否所有的线都在他们的最终位置
  this.threadsInPlace = false;
  //我目前是否在背景tab中
  this.isInBackground = false;
  //存储线的边界盒子的最小尺寸
  this.xbLimitMin = -MAX_LENGTH*0.5;
  this.xbLimitMax =  MAX_LENGTH*0.5;
  this.ybLimitMin = -HEIGHT_ALL_THREADS*0.5;
  this.ybLimitMax =  HEIGHT_ALL_THREADS*0.5;
  //为我们的clearRect refresh调用存储边界盒子的限制
  this.xbMin = this.xbLimitMin;
  this.xbMax = this.xbLimitMax;
  this.ybMin = this.ybLimitMin;
  this.ybMax = this.ybLimitMax;
  //初始化machine
  this.init();
};

/**
 * 初始化machine.
 */
Machine.prototype.init = function() {
	this.elmAbout = document.getElementById("about");
	this.elmLoader = document.getElementById("loader");
	//创建 about 链接
	this.elmAbout.innerHTML = "<a href=\""+aboutURL+"\" target=\"_blank\">&nbsp;&nbsp;?&nbsp;</a>";
};

/**
 * 建造Thread对象
 */
Machine.prototype.build = function() { 
	this.setOrigin();  
	//创建每一个音符长度数组
	var lenCurr = MAX_LENGTH;
	for (var i = 0; i < TOTAL_NOTES; i++) {
	  this.arrLength[i] = lenCurr;
	  lenCurr *= HALF_STEP_MULTIPLIER;
	}	
	
  var len, str, hex, pitch;
  //两条线之间的垂直距离
  var dy = WHEEL_QUARTER_SEG/TOTAL_THREADS;
  var yp = (TOTAL_THREADS/2)*dy - 0.5*dy;
  //遍历所有线，并绘制他们
  for (var i = 0; i < TOTAL_THREADS; i++) {
    //存储线的开始的音高
    this.arrPitchStart[i] = suite.arrMidiMap[SONG_DATA_ARRAY[i]];
    hex = "#FFFFFF";
    str = 3;
    var pitch = -1;
    var thr = new Thread(yp, pitch, str, hex, i, this.cv);
    yp -= dy;
    this.arrThreads.push(thr);
  }
  //创建轮胎 - x, y, 索引index, canvas
  this.wheel0 = new Wheel( WHEEL_RADIUS, 0, 0, this.cv);
  this.wheel1 = new Wheel(-WHEEL_RADIUS, 0, 1, this.cv);
  //为他们创建nub
    this.arrNubs[0] = this.wheel0.nub0 = new Nub(0, 0, suite.machine, this.wheel0, this.cv);
    this.arrNubs[1] = this.wheel0.nub1 = new Nub(1, 1, suite.machine, this.wheel0, this.cv);
    this.arrNubs[2] = this.wheel1.nub0 = new Nub(0, 2, suite.machine, this.wheel1, this.cv);
    this.arrNubs[3] = this.wheel1.nub1 = new Nub(1, 3, suite.machine, this.wheel1, this.cv);
    //组合模式
	this.cv.globalCompositeOperation = "lighter";
	//把第一个nub作为加载nub
    this.arrNubs[0].enter();
};

/**
 * 开始加载序列
 */
Machine.prototype.beginLoading = function() {
  //初始化计时器
  this.tFrame0 = this.tSong0 = this.tNotes0 = this.tLoadPrev = this.tLoading0 = this.t0 = (new Date()).getTime()/1000;
  this.ctFrame = 0;
  //获取鼠标目前位置
  this.xp0 = this.getUserX(); this.yp0 = this.getUserY();  
};

/**
 * 退出加载序列
 */
Machine.prototype.exitLoading = function() {
  this.isIntro = false;
	//从加载模式释放nub
	for (var i = 0; i < this.arrNubs.length; i++) this.arrNubs[i].exitLoader();
    //一次性更新所有线
    this.updThreads();
};

/**
 * 当鼠标被压
 */
Machine.prototype.mouseDown = function() {
  this.isMouseDown = true;
};

/**
 * 当鼠标被释放
 */
Machine.prototype.mouseUp = function() {
  //停止更新
  this.isMouseDown = false;
};

/**
 * 设置线在索引n位置开始的8个音符
 */
Machine.prototype.setGroup = function(n) {
  this.indGroup = n;
  for (var i = 0; i < this.arrThreads.length; i++) {
    var note = SONG_DATA_ARRAY[this.indGroup + i];
    //是否是rest
    if (note == -1) {
      pitch = -1;
    } else {
      //我们想要把它作为哪个音高
      pitch = suite.arrMidiMap[note];    
    }
    this.arrThreads[i].setTargetPitch(pitch);
  }
}

/**
 * 设置目前的速度（拍子）
 */
Machine.prototype.setTempo = function(t) {
  this.bpm = t;
  this.bps = t/60;
};

/**
 * 返回鼠标在canva中的x位置
 * 坐标空间
 * @return {number} 鼠标的x位置
 */
Machine.prototype.getUserX = function() {
  return mouseX-this.xo;
};

/**
 * 返回鼠标在canva中的y位置
 * 坐标空间
 * @return {number} 鼠标的y位置
 */
Machine.prototype.getUserX = function() {
  return mouseX-this.xo;
};

/**
 * 把我们canvas中的坐标x位置转换成-1~1的比率
 * -1指在最左，1指在最右，0.5在中间
 * @param {number} xp是要转换的x位置
 */
Machine.prototype.xAsRatio = function(xp) {
  xp = lim(xp, 0, this.width);
  return xp/this.width;
};

/**
 * Machine更新，它在每个frame中执行
 */
Machine.prototype.upd = function() {
  //每个更新循环开始，设置边界盒子至少更新线
  this.xbMin = this.xbLimitMin;
  this.xbMax = this.xbLimitMax;
  this.ybMin = this.ybLimitMin;
  this.ybMax = this.ybLimitMax;
  //我们是否仍在加载
  if (SHOW_FRAMERATE) 
      this.updFramerate(); //显示帧速
  if (this.isIntro)
      this.updLoading(); //显示加载数量
  //更新计时
  if (this.isIntro) {
    this.updTime();
  } else {
    this.updTime();
  }
  //更新位置
  this.updPos();
  //鼠标是否被压
  if (!this.isMouseDown) {
    this.updMouseUp();
  }
	//组合模式
	if (this.wasResized) { 
	  this.wasResized = false;
	  this.cv.globalCompositeOperation = "lighter";
	}
  //清理enter canvas
  // this.cv.clearRect(0, 0, this.width, this.height);  

  //更新所有线
  //this.updThreads();
  //更新轮子
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
 * 更新计时
 */
Machine.prototype.updTime = function() {
  //从上一次更新已经过去多少时间
  this.t1 = (new Date()).getTime()/1000;
  this.elapFrame = this.t1-this.t0;
  this.t0 = this.t1;

  //检查我们是否在背景tab中的合适位置
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
  
  //我们在歌曲中的哪个位置
  this.elapSong = this.t1-this.tSong0;
  this.beatSong = this.bps*this.elapSong;
  this.noteSong = this.beatSong*NOTE_UNIT;
  this.noteSongRd = Math.floor(this.noteSong);
  
  //我们是否在介绍模式
  if (this.isIntro) {	  
    //我们是否在一个新的音符
    if (this.noteSongRd != this.noteSongRdPrev) {
		
      //现在是否在前进
      if (this.isIntroDone) {
		  
        //我们是否跳过一个间断，从这里我们可以开始歌曲
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
    
  //正常模式
  } else {
    if (this.noteSong > this.indGroup+TOTAL_THREADS) {
      this.tNotes0 = this.t1;
      //增加到下一个组
      var nextGroup = this.indGroup+TOTAL_THREADS;
      //是否已经到达歌的最后
      if (nextGroup >= TOTAL_NOTES_IN_SONG) {
        nextGroup = 0;
        //重置歌的计数点
        this.tSong0 = this.t1;
      }    
      this.setGroup(nextGroup);
    }  
  }
  
  //下一个分界处在哪，可以在那开始歌曲
  //是否应该约等为32 (or 16?)的组
  this.nextNoteBreak = this.noteSongRd + (32 - (this.noteSongRd % 32));  
};

/**
 * 遍历所有线，更新，并重新绘制他们
 */
Machine.prototype.updWheels = function() {
  //设置左边车轮的旋转
  var rot;
  this.wheel0.setRot((MATH_PI*(0.25 + (this.beatSong % 16)/16 * 2)) % (2*MATH_PI));
  this.wheel1.setRot((MATH_PI*(0.25 - (this.beatSong % 16)/16 * 2)) % (2*MATH_PI));
  
  this.wheel0.upd();
  this.wheel1.upd(); 
};

/**
 * 更新计时
 */
Machine.prototype.switchBackgroundMode = function(n) {  
  switch (n) {
    //打开背景模式
    case 1:
      break;
    //关闭背景模式      
    case 0:
      for (var i = 0; i < 4; i++) this.arrNubs[i].returnFromBackground();
      break;
    default:
      break;
  }
};

/**
 * 重新绘制车轮
 */
Machine.prototype.redrawNubs = function() {
  this.wheel0.nub0.redraw(); 
  this.wheel0.nub1.redraw(); 
  this.wheel1.nub0.redraw(); 
  this.wheel1.nub1.redraw(); 
};

/**
 * 遍历所有线，更新，且重新绘制它们
 */
Machine.prototype.updThreads = function() {
  for (var i = 0; i < this.arrThreads.length; i++) {
    this.arrThreads[i].upd();
  }
};

/**
 * 遍历所有线，更新，且重新绘制它们
 */
Machine.prototype.redrawThreads = function() {
  for (var i = 0; i < this.arrThreads.length; i++) {
    this.arrThreads[i].redraw();
  }
};

/**
 * 遍历所有线，更新，且重新绘制它们
 */
Machine.prototype.updateAndRedrawThreads = function() {
  for (var i = 0; i < this.arrThreads.length; i++) {
    this.arrThreads[i].upd();
    this.arrThreads[i].redraw();
  }
};

/**
 * 更新状态文本
 */
Machine.prototype.updLoading = function() {
	var str;
	//我们是否正在加载音频
	if (!suite.soundReady) {
		var perc = Math.round(suite.indNoteLd/TOTAL_NOTES*100);		
		if (SHOW_FRAMERATE) {
		  //this.elmLoader.innerHTML += "<span class=\"loading\">" + str + "</span>";
		} else {
      //this.elmLoader.innerHTML = "<span class=\"loading\">" + str + "</span>";
		}
	}
	//自从我们上一次更新加载动画，已经经历了多少时间
  this.tLoadCurr = (new Date).getTime()/1000;
  var elap = this.tLoadCurr - this.tLoadPrev;
  
  //加载序列持续了多久
  this.rLoad = (this.tLoadCurr-this.tLoading0) / LOAD_TIME_OVERALL;
  if (this.rLoad >= 1) this.rLoad = 1;
  //是否到执行的时间
  if (elap > TIME_BETWEEN_LOAD) {
    this.tLoadPrev = this.tLoadCurr;
    this.incrLoad();
  }
};

/**
 * 更新帧速计数
 */
Machine.prototype.updFramerate = function() {
	this.tFrame1 = (new Date).getTime()/1000;
  var elap = this.tFrame1 - this.tFrame0;
  this.tFrame0 = this.tFrame1;

	//我们是否正在加载音频
	this.ctFrame++;
	if (this.ctFrame % 5 == 0) {
  	this.numFrame = Math.round(100/elap)/100;
  }
	this.elmLoader.innerHTML = "<span class=\"loading\">" + this.numFrame + "</span> &nbsp; ";
};

/**
 * 加载线动作的下一步
 */
Machine.prototype.incrLoad = function() {  
  //释放另一个nub
  var nub;
  if (this.rLoad > 0.15) {
    nub = this.arrNubs[2]; if (!nub.hasEntered) nub.enter();
    nub = this.arrNubs[0]; if (!nub.hasEntered) nub.enter(); //两次确认第一个已经进入，那就跳过一次
  }
  if (this.rLoad > 0.85) {
    nub = this.arrNubs[1]; if (!nub.hasEntered) nub.enter();
  }
  if (this.rLoad > 0.97) {
    nub = this.arrNubs[3]; if (!nub.hasEntered) nub.enter();
  }
    
  //目前展示多少线
  var rCut0 = 0.4; var rCut1 = 0.8;
  var rShow;
  if (this.rLoad < rCut0) {
    rShow = 0; //只展示一条线一段时间
  } else {
    rShow = (this.rLoad-rCut0)/(rCut1-rCut0);
    if (rShow > 1) rShow = 1;
  }
  var showThreads = rShow*TOTAL_THREADS;
  //从一个随机位置开始
  var ind = Math.floor((Math.random()*0.999)*showThreads);
  var pitchStart, pitchTarg, thr;
  var ctThreadsInPlace = 0;
  //循环这条线
  for (var i = 0; i < TOTAL_THREADS; i++) {
    if (i > showThreads) break;
    pitchStart = this.arrPitchStart[ind];
    thr = this.arrThreads[ind];
    //这条线是否已经在它的目标位置
    if (thr.pitchInd == pitchStart) {
      ind = (ind + 1) % TOTAL_THREADS; //继续
      ctThreadsInPlace++;
    } else {
      //想要增加线到它的下一个音符，我们是否已经加载音符
      var incr;
      if (showThreads == 0) { incr = 1; }
      else { incr = 1 + Math.round(Math.random()*2); }
      //随着时间流逝，音符是否慢慢放缓
      off = Math.floor(lerp(-3, 0, this.rLoad));
      pitchTarg = thr.pitchInd + incr + off;
      if (pitchTarg < 0) pitchTarg = 0;
      //确定他不比我们想要的高
      if (pitchTarg > pitchStart) pitchTarg = pitchStart;
      if ((suite.indNoteLd > 0) && (suite.indNoteLd-1 >= pitchTarg)) {
        thr.setTargetPitch(pitchTarg);
        break;
      }
    }
  }
  //我们是否找到一条线去改变
  if ((ctThreadsInPlace == TOTAL_THREADS) && !this.threadsInPlace) this.threadsInPlace = true;

  //如查所有线都已经就位，音乐已经加载，那么就开始
  if (this.threadsInPlace && suite.soundReady && this.rLoad >= 1 && !this.isIntroDone) {
    console.log("isIntroDone true!");
    this.isIntroDone = true;
  }
};

/**
 * 遍历所有线，统计多少被抢占或摆动，这样就可以知道是否需要重新绘制
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
 * 返回用户鼠标速度作为0~1比率，归一化为spdMin, spdMax范围内
 * 这个在更新循环中设置
 * @return {number} 用户鼠标速度比率0~1
 */
Machine.prototype.getSpd = function() {
  return this.rSpd;
};

/**
 * 返回用户鼠标速度作为0~1比率，归一化为spdMin, spdMax范围内
 * 这个在更新循环中设置
 * 不同的是它是否在每个few frames取平均
 * @return {number} 用户鼠标速度作为0~1比率
 */
Machine.prototype.getSpdAvg = function() {
  return this.rSpdAvg;
};

/**
 * 更新循环来执行每个frame，由#upd触发
 */
Machine.prototype.updPos = function() {  
  //获得新的位置
  this.xp1 = this.getUserX(); this.yp1 = this.getUserY();
  //更新点对象
  this.pt0.x = this.xp0; this.pt0.y = this.yp0;
  this.pt1.x = this.xp1; this.pt1.y = this.yp1;
  
  this.dx = this.xp1-this.xp0;
  this.dy = this.yp1-this.yp0;
  
  this.dist = Math.sqrt(this.dx*this.dx + this.dy*this.dy);
  //鼠标是否在移动
  this.isMouseMoving = (this.dist > 0.2);
  //目前的速度 - 像素每秒
  this.spd = this.dist/this.elapFrame;
  //归一化成0~1
  this.rSpd = lim((this.spd-MOUSE_SPEED_MIN)/(MOUSE_SPEED_MAX - MOUSE_SPEED_MIN), 0, 1);
  //获取平均值
  this.rSpdAvg = (this.rSpdAvg*(this.fAvg-1)/this.fAvg) + (this.rSpd*(1/this.fAvg));
  //存储原来的位置
  this.xp0 = this.xp1; this.yp0 = this.yp1;
};

/**
 * 当鼠标放开时更新模式
 */
Machine.prototype.updMouseUp = function() {
  //我们是否已经滚动一个nub
  if ((this.nubOver != null) && (!this.isHoldingNub)) {
    //我们是否仍然在滚动这个nub
    if (this.nubOver.checkMouseOver()) {
      return; //我们仍在nub上，那忽略其它
    } else {
      this.nubOver.rollOut(); //我们把它滚动出去
      this.nubOver = null;
    }
  }
  
  //确定我们是否滚动任何一个nub
  for (var i = 0; i < 4; i++) {
    if (this.arrNubs[i].checkMouseOver()) {
     this.nubOver = this.arrNubs[i];
     this.nubOver.rollOver();
     break; //不再检查，每次只滚动一个nub
    }
  }
}

/**
 * 当鼠标被按下时触发
 */
Machine.prototype.mouseDown = function() {
	this.isMouseDown = true;
  //我们是否经过一个nub
  if (this.nubOver != null) {
    this.nubOver.grab(); //抢占它
    this.isHoldingNub = true; //记住我们控制一个nub的状态
  }
}

/**
 * 当鼠标释放时触发
 */
Machine.prototype.mouseUp = function() {
	this.isMouseDown = false;
  //我们目前是否控制一个nub
  if (this.isHoldingNub) {
    this.nubOver.drop();
    this.isHoldingNub = false;
  }
}

/**
 * 放下目前被抢占的所有线
 */
Machine.prototype.dropAll = function() {
  for (var i = 0; i < this.arrThreads.length; i++) {
    if (this.arrThreads[i].isGrabbed) this.arrThreads[i].drop();
  }
};

/**
 * 完成加载
 */
Machine.prototype.doneLoading = function() {
    //隐藏"loading audio text"
    if (!SHOW_FRAMERATE) this.elmLoader.style.display = 'none';
}

/**
 * 当window重置大小时触发
 */
Machine.prototype.checkBoxLimit = function(x,y) {  
  //是否超过了目前边界盒子的限制
  if (x < this.xbMin) this.xbMin = x;
  else if (x > this.xbMax) this.xbMax = x;
  
  if (y < this.ybMin) this.ybMin = y;
  else if (y > this.ybMax) this.ybMax = y;
}

/**
 * 当window重置大小时触发
 */
Machine.prototype.rsize = function() {
  this.wasResized = true;
	//让canvas对象匹配window尺寸
	this.width = suite.canvasEl.width = window.innerWidth;
	this.height = suite.canvasEl.height = window.innerHeight;
	//移动加载盒子
	this.elmLoader.style.left = "20px";
	this.elmLoader.style.top = (this.height - 28) + "px";
	//移动about ？盒子
	this.elmAbout.style.left = (this.width - 35) + "px";
	this.elmAbout.style.top = (this.height - 32) + "px";	
	//更新原始点
	this.setOrigin();
};

/**
 * 更新原始点
 */
Machine.prototype.setOrigin = function() {
	this.xo = Math.round(this.width/2);
	this.yo = Math.round(this.height/2);
}
