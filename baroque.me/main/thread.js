/** 
 * @fileoverview ����Thread��
 * @author Alexander Chen alex@chenalexander.com
 * @version 0.1 
 */
/**
 * �������Threadָ���ǳ������й켣
 * I���������ָ������
 * �����û����Ըı���
 * note������
 * thread���켣
 * line���м���ߣ�
 * �񶯡������ǿ��
 * ����ָ���������ߵİ�ɫԲ��
 */ 
/**
 * ����һ�����뷶Χ�����Դ��ߵ��м�㴹ֱ�����ߣ���λΪ���أ�
 * һ���߿��Զ��ɻ���
 */
var SLACK_LONG = 10;
var SLACK_SHORT = 10;

/**
 * ������֮��Ĵ�ֱ���� 
 * ͬʱ������꼴ʱ������
 */
var DISTANCE_INSTANT_GRAB = 8;

/**
 * ���ֵ�������Ͽ��Ƶ��������     
 * Ӧ�����ó�һ��0-1�ı���
 * 0��ʾ������������һ�������ĵ�
 * 1��ʾһ������ֵ��0.5�������
 */
var CURVATURE_RATIO = 0.45;

/**
 * Defines a range for the oscillation speed of low note threads by the number
 * of pixels the center point will travel per update call.
 */
var OSCILLATION_SPEED_LOW_NOTES = 1.2;
var OSCILLATION_SPEED_HIGH_NOTES = 3.0;

 /**
 * ��һ���û�ˢ�Ӿ���һ���ߵ�û������ʱ���ƶ���
 * �������ֵ����ʹ�����������ܹ�չʾһЩ�˶�.
 * @type {number}
 * @const
 */
var MINIMUM_AMPLITUDE = 7;

/**
 * Ϊ���������ߵ�������ƶ���һ����Χ
 * ÿ�ε��ø���ʱ������ͻ��������������Ϊ�������п���
 */
var AMPLITUDE_DAMPEN_LOW_NOTES = 0.92;
var AMPLITUDE_DAMPEN_HIGH_NOTES = 0.87;

/**
 * ����һ����������С���������
 */
var VOLUME_MIN = 0.5;
var VOLUME_MAX = 0.7;

/**
 * �����������Ա������������
 */
var PAN_LEFT = -0.3;
var PAN_RIGHT = 0.3; 

/**
 * ����һ���µ��ߣ�һ��pluckable����
 * @class ����һ��Thread��
 * constructor
 * @param {number} ypPm����
 */
var Thread = function(ypPm, pitchPm, strPm, hexPm, indPm, cvPm) { 
  //��ʼ�������.
  this.pt0 = new Point(0,0);
  this.pt1 = new Point(0,0);
  //�ߵ�yλ��
  this.yp0 = this.yp1 = ypPm;
  //�����ҵĳ�ʼ����
  this.pitchInd = pitchPm;
  //���ó�ʼ����
  this.len = 0;
  //����Զ���м��
  this.xMid; this.yMid;    
  //�ζ��Ӱڵ�λ�ã��м�㣩
  this.xc; this.yc;
  //�ұ��û������ĵ�
  this.xg; this.yg; this.xgi; this.ygi;
  this.xg1; this.yg1;
  this.xg0; this.yg0;
  //����
  this.xd; this.yd;
  //�洢��Զ��dx, dy
  this.dx; this.dy;
  //������С���ƶ����롢��������������ˢ���Ļ������ܻ��ƶ�
  this.ampPxMin = 3;
  this.freq;
  this.ampDamp;
  //��ʱ�������
  this.distMax; this.distPerp;
  //�洢0~1��һ������ֵ����ʾ�û����԰���������
  this.rGrab; this.rHalf;
  //����Ҫ�ĽǶ�
  this.ang;
  //�ҵĴ�ֱ�Ƕ�
  this.angPerp;
  //�ߵ����峤�ȣ�û������ʱ��
  this.len;
  //��ʱ����
  this.dx0; this.dy0; this.dx1; this.dy1; this.dist0; this.dist1;
  this.dxBez0; this.dyBez0; this.dxBez1; this.dyBez1;  
  //�ҵ�����ֵ
  this.ind = indPm;
  //�Ӳ��������ḧȨ��
  this.str = strPm;
  //�Ӳ�������16���Ʒ�Χ
  this.hex = hexPm; //����״̬
  //��16�������洢��RGB��ɫ
  this.col = hex2rgb(this.hex);
  //�񶯴���  
  this.t = 0;
  //��ǰ�����
  this.ampStart; this.amp; this.ampMax;
  //��ǰ�����쳤�ȣ����ʣ�
  this.rStrength; 
  //�Ƿ�򿪸���
  this.isUpdOn = false;
  //�񶯷���
  this.oscDir;
  //Ŀǰ�Ƿ���ռ
  this.isGrabbed = false;
  //Ŀǰ�Ƿ���
  this.isOsc = false;
  //�ոձ�����
  this.isFirstOsc = false;
  //Ŀǰ�Ƿ����ô�С
  this.isShifting = false;
  //������ռ�ҵĳ�
  this.carGrab = null;
  
  //���ӵ���cnavas
  this.cv = cvPm;  
  //��ʼ��
  this.init();
}      

/**
 * ��ʼ��Threadʵ��
 */
Thread.prototype.init = function(){
    //���ӵ���machine��
    this.m = suite.machine;
    //�����ҵ�λ���Գ�ʼ��
    this.updPos();
};

/**
 * ����Ŀ������
 */
Thread.prototype.setTargetPitch = function(p) {
  //�Ƿ���rest��(-1 ����)
  if (p == -1) {
    this.pitchInd = -1;
    var lenTarg = 0;
  } else {
    //���������ҵ�������
    this.pitchInd = p;
    //0~1�����߱���
    this.rPitch = this.pitchInd/(TOTAL_NOTES-1);
    //��Ҫ�����ĳ�����ʹ��������߿��Թ���
    var lenTarg = this.m.arrLength[this.pitchInd];
  }
  if (lenTarg != this.len) this.easeToLength(lenTarg);
}

/**
 * �����ߵĳ���
 */
Thread.prototype.setLength = function(l) {
  this.len = l;
  //����λ��
  this.updPos();
};      

/**
 * ���ɵ��µ�Ŀ�곤��
 */
Thread.prototype.easeToLength = function(l){
  this.isShifting = true;
  this.lenTarg = l;
}

/**
 * ���߸ı��Сʱ����
 */
Thread.prototype.updShifting = function(){
    var ease = 0.2;
    var dl = (this.lenTarg - this.len) * ease;
    //�Ѿ������ˣ�
    if (Math.abs(dl) < 1) {
        //������ò�ֹͣ����
        this.setLength(this.lenTarg);
        this.isShifting = false;
    } else {
        this.setLength(this.len + dl);
  }
}

/**
 * ���¿�ʼ�ͽ�����λ��
 */
Thread.prototype.updPos = function() {
  //�����µ�xλ��
  this.xp0 = -this.len/2;
  this.xp1 =  this.len/2;
  
  //Ϊ��������µ����
  this.pt0.setX(this.xp0); this.pt0.setY(this.yp0);
  this.pt1.setX(this.xp1); this.pt1.setY(this.yp1);
  
  this.dx = this.xp1-this.xp0;
  this.dy = this.yp1-this.yp0;
  //�洢�м��
  this.xMid = this.xp0 + this.dx*0.5;
  this.yMid = this.yp0 + this.dy*0.5;
  //�洢�Ƕ�
  this.ang = Math.atan2(this.dy, this.dx);
  
  this.angPerp = Math.PI/2 - this.ang;
  //�����³���
  //��ʼ���Ӱ����õ��м�λ��
  this.xc = this.xMid; this.yc = this.yMid;
  //���Դ�ֱ�����ߵ�������
  // i.e. looseness of the thread.
  this.distMax = lerp(SLACK_SHORT, SLACK_LONG, (this.len-MIN_LENGTH)/(MAX_LENGTH-MIN_LENGTH));
  //��Ƶ��
  this.freq = lerp(OSCILLATION_SPEED_LOW_NOTES, OSCILLATION_SPEED_HIGH_NOTES, this.rPitch);
  this.ampDamp = lerp(AMPLITUDE_DAMPEN_LOW_NOTES, AMPLITUDE_DAMPEN_HIGH_NOTES, this.rPitch);
  //�������de
  this.ampMax = this.distMax;
  //�ǶȺʹ�ֱ�Ƕȵ�sin��cosֵ
  //�����Ͳ���ÿ�μ���for every frame
  this.sinAng = Math.sin(this.ang);
  this.cosAng = Math.cos(this.ang);
  this.sinPerp = Math.sin(this.angPerp);
  this.cosPerp = Math.cos(this.angPerp);
};       

/**
 * ������canvas�ϻ�����
 */
Thread.prototype.redraw = function() {  
  if (this.len == 0) return;  
	//Ŀǰ��ԭʼ��
	this.xo = this.m.xo;
	this.yo = this.m.yo;
	
	//һ��bug���õ�һ����������ʱ����break��
	if (isNaN(this.xp1)) { return; }	

  this.cv.beginPath();
  this.cv.lineCap = "round";
  this.cv.strokeStyle = this.hex;
  this.cv.lineWidth = this.str;

  //����ռģʽ�������Ǳ����º�ĵ�һ���񵴣�
  if (this.isGrabbed || this.isFirstOsc) {
    this.xd = this.xg; this.yd = this.yg;
  //������ģʽ
  } else {
    this.xd = this.xc; this.yd = this.yc;
  }
  
  if (isNaN(this.xd)) { return; }
	  
  this.dx0 = this.xd-this.xp0; this.dy0 = this.yd-this.yp0;
  this.dx1 = this.xp1-this.xd; this.dy1 = this.yp1-this.yd;
  //����
  this.dist0 = Math.sqrt(this.dx0*this.dx0 + this.dy0*this.dy0);
  this.dist1 = Math.sqrt(this.dx1*this.dx1 + this.dy1*this.dy1);
  //�ƶ����м��Ӱڵ�
  this.dxBez0 = CURVATURE_RATIO*this.dist0*this.cosAng;
  this.dyBez0 = CURVATURE_RATIO*this.dist0*this.sinAng;      
  //�ƶ����м��Ӱڵ�
  this.dxBez1 = CURVATURE_RATIO*this.dist1*this.cosAng;
  this.dyBez1 = CURVATURE_RATIO*this.dist1*this.sinAng;
  //�ƶ������
  this.cv.moveTo(this.xp0+this.xo, this.yp0+this.yo);
  //��Bezier����
  this.cv.bezierCurveTo(
    this.xd - this.dxBez0 + this.xo,
    this.yd - this.dyBez0 + this.yo,
    this.xd + this.dxBez1 + this.xo,
    this.yd + this.dyBez1 + this.yo,
    this.xp1 + this.xo,
    this.yp1 + this.yo
  );
  //�ر�·��
  this.cv.stroke();
  this.cv.closePath();
}                                                                                                                

/**
 * ����ÿ��frameʱ�ĸ��º���
 * �������º���������
 */
Thread.prototype.upd = function() {	
  //�����Ŀǰ�Ƿ�ı��С
  if (this.isShifting) {
    this.updShifting(); 
  }
  //��Ŀǰ�Ƿ���ռ
  if (this.isGrabbed) {
    this.updGrab();
  //��Ŀǰ�Ƿ�����
  } else if (this.isOsc) {
    this.updOsc();
  }
}

/**
 * ����ģʽʱ�����ߣ��ڱ�plucked
 */
Thread.prototype.updOsc = function() {  
  //���Ȱ���ease��0
  if (this.isFirstOsc) {
    var ease = 0.8;
    var dxg = this.xg1 - this.xg;
    var dyg = this.yg1 - this.yg;
    
    this.xg += dxg*ease;
    this.yg += dyg*ease;
    //�����Ƿ��Ѿ����
    if ((Math.abs(dxg) < 2) && (Math.abs(dyg) < 2)) {
      //��ʼ��
      this.t = 0; this.oscDir = 1;
      this.isFirstOsc = false;
      //����ȥ���ĸ�����
      var sx0 = sign(dxg);
      var sx1 = sign(this.sinAng);
      //�����Ҫ�Ļ�����ԭʼ���񶯷���
      if (sx0 != sx1) { this.oscDir *= -1; }
    }
  }
  else {
    //���Ӽ���
    this.t += this.freq*this.oscDir;
    //��sin��c����0~1�� 
    var c = Math.sin(this.t);
    //�������
    this.amp *= this.ampDamp;
    
    this.xc = this.xMid + c*this.sinAng*this.amp;
    this.yc = this.yMid - c*this.cosAng*this.amp;
    //3/10 - �������ƣ�ʹ����ɫ����������ʧ
    //������������ͣ�������ȥ
    if (this.amp <= 0.15) {
      this.amp = 0; 
      this.isOsc = false;
      //ÿ��һ����ֹͣ�񶯣�ֻҪ��¼�Ƿ���ʲô�����ƶ�
      this.m.checkMoving();
    }
  }
}

/**
 * ���ұ��û�������ռʱ����ģʽ
 */
Thread.prototype.updGrab = function() {
  
	// ��ȡ���Ŀǰ��λ��
	// �Ƿ񱻳���ռ
	if (this.carGrab != null) {
		var xu = this.carGrab.xp1; var yu = this.carGrab.yp1;
	// ���߱��û���ռ
	} else {
		var xu = this.m.getUserX(); var yu = this.m.getUserY(); 
	}  
  
  //���߿����뿪��Զ
  var dxu = xu-this.xp0; var dyu = yu-this.yp0;
  //�Ƕ�
  var ang0 = Math.atan2(dyu,dxu); var ang1 = this.ang-ang0;
  //ֱ�Ӿ��� 
  var hyp = Math.sqrt(dxu*dxu + dyu*dyu);
  //��ֱ����
  this.distPerp = hyp*Math.sin(ang1);
  //��֮���ƽ�о���
  var distPara = hyp*Math.cos(ang1);
  //���Ͽ����ж�Զ����Ϊ0~1�ı���
  this.rGrab = lim(distPara/this.len, 0, 1);
  //���м佫����һ�������ӵ�1
  if (this.rGrab <= 0.5) {
    this.rHalf = this.rGrab/0.5;
   }
  else {
   this.rHalf = 1-(this.rGrab-0.5)/0.5;
  }
  //���������԰�������Զ
  var distMaxAllow = this.distMax*this.rHalf;
  //����Ŀǰ�����쳤��
  this.rStrength = lim(Math.abs(this.distPerp)/this.distMax, 0, 1);

  //�û��Ƿ�ѵ�����̫Զ
  if (Math.abs(this.distPerp) > distMaxAllow) {
    this.drop();//ֱ�ӷ���
  } else {
    //��grab��ռ�ĵ���ok���Ǿ�������
    this.xg = xu; this.yg = yu;
  }
}

/**
 * ���û�ˢ����һ��frame�о���һ����ʱ����û����ռ������pluck��ִ��
 * ͬʱҲ������keystrokesΪ�Զ����auto-pluck
 * @param {number} xp �� x λ�ã����û���������
 * @param {number} yp �� y λ�ã����û���������
 * @param {boolean} isNub: true �����nub��pluck
 */
Thread.prototype.pluck = function(xp, yp, isNub, car) {
  //�洢Ϊһ����ʼλ��
  this.xgi = this.xg = xp; this.ygi = this.yg = yp;
  //�û�Ŀǰ�����λ��
  var xu = this.m.getUserX(); var yu = this.m.getUserY(); 
  //�������ж�Զ
  var dxu = xu-this.xp0; var dyu = yu-this.yp0;      
  //������Ŀǰ��xg��yg�������û����߽�����λ��
  var dxg = this.xgi-this.xp0; var dyg = this.ygi-this.yp0;
  var hyp = Math.sqrt(dxu*dxu + dyu*dyu);
  //��Ϊ����0~1
  this.rGrab = lim(hyp/this.len, 0, 1);
  //�ڰ�·���λ�ã���һ�������ӵ�1
  if (this.rGrab <= 0.5) { 
  this.rHalf = this.rGrab/0.5;
   }
  else { 
  this.rHalf = 1-(this.rGrab-0.5)/0.5;
  }          
  var distMaxAllow = this.distMax*this.rHalf;
  //����������plucked���Ǿͻ����û��ٶȣ�����������ٶ�
  var spdAvg = isNub ? 1 : this.m.getSpdAvg();
  //����ϣ���������ö�Զ
  this.distPerp = (1-spdAvg)*distMaxAllow;
  //�����µ�strength
  if (isNub) { 
  this.rStrength = 1;
   }
  else { this.rStrength = lim(Math.abs(this.distPerp)/this.distMax, 0, 1); }
  
  //�������СֵС���Ǿ����ó���С
  if (this.distPerp < this.ampPxMin) this.distPerp = this.ampPxMin;
  //����
  this.xg = this.xgi + this.distPerp*this.cosPerp;
  this.yg = this.ygi + this.distPerp*this.sinPerp;  
  // ------------------
  //��������Ϊ�м��
  this.xc = this.xMid; this.yc = this.yMid;
  //�Ѿ�����
  if (this.isOsc) {
    //�Ѿ�����-�����񶯼�ǿ
    this.rStrength = lim(
      (this.rStrength*0.5) + (this.amp/this.ampMax),
      0, 1);
    //�����µ����
    this.amp = this.rStrength*this.ampMax;        
  //û����-��ʼ��
  } else {
    //����ǿ�ȴ洢��ǰ�����
    this.amp = this.rStrength*this.ampMax;
    //��ʼ��
    this.startOsc();
  }
  var rPan = this.m.xAsRatio(xp);
  // play note
  this.playNote(this.rStrength, rPan, false);
}

/**
 * �û���ռ����߲�������
 * @param {number} xp �� x λ�ã��û���ռ����
 * @param {number} yp �� y λ�ã��û���ռ����
 */
Thread.prototype.grab = function(xp, yp, isNub, car) {
	if (!isNub) {
		//
		this.carGrab = null;
	} else {
		//�洢������ռ�ҵĳ������������ӵ��������
		this.carGrab = car;
		this.carGrab.thrGrab = this;
		//��������
	}  
  //�洢��ʼ��λ��
  this.xgi = this.xg = xp; this.ygi = this.yg = yp;
  this.isGrabbed = true;
  //
  this.m.ctGrab++;
  //���ڸ���
  this.updGrab();  
}

/**
 * �û�Ŀǰ������ռ���ߣ��ͷ���������drop()����
 */
Thread.prototype.drop = function() {
  this.m.ctGrab--;  
  
  this.isGrabbed = false;
  //������
  this.xc = this.xMid; this.yc = this.yMid;
  //����ǿ�ȣ��洢Ŀǰ�����
  this.amp = this.rStrength*this.ampMax;
	//��������-������һ��������
	if (this.carGrab != null) {
		this.carGrab.thrGrab = null;
		this.carGrab = null;
	//�������������û���������
	} else {
		//var vol = lerp(VOLUME_MIN, VOLUME_MAX, this.rStrength);
		//var pan = this.m.xAsRatio(this.m.getUserX());
	} 
	//���ñ��� -1 ~ 1
	var rPan = this.m.xAsRatio(this.xg+this.xo);
  
  //��������-��ǿ�ȿ��������������û��Ĺ����Ϊλ��panning
  this.playNote(this.rStrength, rPan);
  //��ʼ��
  this.startOsc();  
}

/**
 * �ڱ��ͷź��߿�ʼ��
 */
Thread.prototype.startOsc = function() {
  //��������Ӧ�ûص���
  this.xg1 = this.xp0 + this.rGrab*this.dx;
  this.yg1 = this.yp0 + this.rGrab*this.dy;      
  //���濪ʼλ��
  this.xg0 = this.xg; this.yg0 = this.yg;      
  //������
  this.t = 0;
  //���������ǵĵ�һ����ѭ��
  this.isFirstOsc = this.isOsc = true;      
}

/**
 * ���������
 * ����vol0 �� vol1 ����������ʵ��������Χ
 * ����pan0 �� pan1 ����������ʵ��panning��Χ
 * @param {number} rVol ��0~1�����ı���
 * @param {number} rPan ��-1~1ʱ��/�� panning�ı���
 */
Thread.prototype.playNote = function(rVol, rPan) {
  //�����Ŀǰ�ǿգ��ǾͲ���������
  if (this.pitchInd == -1) return;
  var pre = this.pitchInd < 10 ? '0' : '';
  //ȷ�������Ѿ�������
  suite.playSound(
    this.pitchInd,
    VOLUME_MIN + rVol * (VOLUME_MAX - VOLUME_MIN),
    PAN_LEFT + rPan * (PAN_RIGHT - PAN_LEFT)      
  );
}