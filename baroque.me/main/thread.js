/** 
 * @fileoverview 包含Thread类
 * @author Alexander Chen alex@chenalexander.com
 * @version 0.1 
 */
/**
 * 这里的线Thread指的是车的运行轨迹
 * I：这里的我指的是线
 * 车和用户可以改变线
 * note：音符
 * thread：轨迹
 * line：中间的线？
 * 振动、振幅、强度
 * 车：指的是引导线的白色圆点
 */ 
/**
 * 定义一个距离范围，可以从线的中间点垂直拉升线（单位为像素）
 * 一条线可以多松或多紧
 */
var SLACK_LONG = 10;
var SLACK_SHORT = 10;

/**
 * 定义线之间的垂直距离 
 * 同时允许鼠标即时的拉动
 */
var DISTANCE_INSTANT_GRAB = 8;

/**
 * 这个值调节线上控制点的弯曲度     
 * 应该设置成一个0-1的比率
 * 0表示不弯曲，导致一个锋利的点
 * 1表示一个宽弧，值在0.5附近最好
 */
var CURVATURE_RATIO = 0.45;

/**
 * Defines a range for the oscillation speed of low note threads by the number
 * of pixels the center point will travel per update call.
 */
var OSCILLATION_SPEED_LOW_NOTES = 1.2;
var OSCILLATION_SPEED_HIGH_NOTES = 3.0;

 /**
 * 当一个用户刷子经过一条线但没有拉它时，移动线
 * 这个像素值可以使得我们总是能够展示一些运动.
 * @type {number}
 * @const
 */
var MINIMUM_AMPLITUDE = 7;

/**
 * 为低音符的线的振幅控制定义一个范围
 * 每次调用更新时，振幅就会利用这个比率作为乘数进行控制
 */
var AMPLITUDE_DAMPEN_LOW_NOTES = 0.92;
var AMPLITUDE_DAMPEN_HIGH_NOTES = 0.87;

/**
 * 演奏一个音符的最小和最大音量
 */
var VOLUME_MIN = 0.5;
var VOLUME_MAX = 0.7;

/**
 * 个个音符可以表达的最左和最右
 */
var PAN_LEFT = -0.3;
var PAN_RIGHT = 0.3; 

/**
 * 创建一条新的线，一条pluckable的线
 * @class 这是一个Thread类
 * constructor
 * @param {number} ypPm描述
 */
var Thread = function(ypPm, pitchPm, strPm, hexPm, indPm, cvPm) { 
  //初始化点对象.
  this.pt0 = new Point(0,0);
  this.pt1 = new Point(0,0);
  //线的y位置
  this.yp0 = this.yp1 = ypPm;
  //设置我的初始音高
  this.pitchInd = pitchPm;
  //设置初始长度
  this.len = 0;
  //我永远的中间点
  this.xMid; this.yMid;    
  //晃动钟摆的位置（中间点）
  this.xc; this.yc;
  //我被用户拉动的点
  this.xg; this.yg; this.xgi; this.ygi;
  this.xg1; this.yg1;
  this.xg0; this.yg0;
  //画点
  this.xd; this.yd;
  //存储永远的dx, dy
  this.dx; this.dy;
  //设置最小的移动距离、振幅，所以如果你刷它的话它将总会移动
  this.ampPxMin = 3;
  this.freq;
  this.ampDamp;
  //临时距离变量
  this.distMax; this.distPerp;
  //存储0~1的一个比率值，表示用户可以把线拉到哪
  this.rGrab; this.rHalf;
  //我主要的角度
  this.ang;
  //我的垂直角度
  this.angPerp;
  //线的总体长度（没有延伸时）
  this.len;
  //临时变量
  this.dx0; this.dy0; this.dx1; this.dy1; this.dist0; this.dist1;
  this.dxBez0; this.dyBez0; this.dxBez1; this.dyBez1;  
  //我的索引值
  this.ind = indPm;
  //从参数设置轻抚权重
  this.str = strPm;
  //从参数设置16进制范围
  this.hex = hexPm; //正常状态
  //把16进制数存储成RGB颜色
  this.col = hex2rgb(this.hex);
  //振动次数  
  this.t = 0;
  //当前的振幅
  this.ampStart; this.amp; this.ampMax;
  //当前的延伸长度（比率）
  this.rStrength; 
  //是否打开更新
  this.isUpdOn = false;
  //振动方向
  this.oscDir;
  //目前是否被抢占
  this.isGrabbed = false;
  //目前是否振动
  this.isOsc = false;
  //刚刚被放下
  this.isFirstOsc = false;
  //目前是否重置大小
  this.isShifting = false;
  //正在抢占我的车
  this.carGrab = null;
  
  //链接到主cnavas
  this.cv = cvPm;  
  //初始化
  this.init();
}      

/**
 * 初始化Thread实例
 */
Thread.prototype.init = function(){
    //链接到主machine类
    this.m = suite.machine;
    //更新我的位置以初始化
    this.updPos();
};

/**
 * 设置目标音高
 */
Thread.prototype.setTargetPitch = function(p) {
  //是否是rest？(-1 音高)
  if (p == -1) {
    this.pitchInd = -1;
    var lenTarg = 0;
  } else {
    //立即设置我的新音高
    this.pitchInd = p;
    //0~1的音高比率
    this.rPitch = this.pitchInd/(TOTAL_NOTES-1);
    //想要减缓的长度以使得这个音高可以工作
    var lenTarg = this.m.arrLength[this.pitchInd];
  }
  if (lenTarg != this.len) this.easeToLength(lenTarg);
}

/**
 * 设置线的长度
 */
Thread.prototype.setLength = function(l) {
  this.len = l;
  //更新位置
  this.updPos();
};      

/**
 * 放松到新的目标长度
 */
Thread.prototype.easeToLength = function(l){
  this.isShifting = true;
  this.lenTarg = l;
}

/**
 * 当线改变大小时更新
 */
Thread.prototype.updShifting = function(){
    var ease = 0.2;
    var dl = (this.lenTarg - this.len) * ease;
    //已经在那了？
    if (Math.abs(dl) < 1) {
        //完成设置并停止更新
        this.setLength(this.lenTarg);
        this.isShifting = false;
    } else {
        this.setLength(this.len + dl);
  }
}

/**
 * 更新开始和结束的位置
 */
Thread.prototype.updPos = function() {
  //设置新的x位置
  this.xp0 = -this.len/2;
  this.xp1 =  this.len/2;
  
  //为结束点更新点对象
  this.pt0.setX(this.xp0); this.pt0.setY(this.yp0);
  this.pt1.setX(this.xp1); this.pt1.setY(this.yp1);
  
  this.dx = this.xp1-this.xp0;
  this.dy = this.yp1-this.yp0;
  //存储中间点
  this.xMid = this.xp0 + this.dx*0.5;
  this.yMid = this.yp0 + this.dy*0.5;
  //存储角度
  this.ang = Math.atan2(this.dy, this.dx);
  
  this.angPerp = Math.PI/2 - this.ang;
  //设置新长度
  //开始把钟摆设置到中间位置
  this.xc = this.xMid; this.yc = this.yMid;
  //可以垂直拉动线的最大距离
  // i.e. looseness of the thread.
  this.distMax = lerp(SLACK_SHORT, SLACK_LONG, (this.len-MIN_LENGTH)/(MAX_LENGTH-MIN_LENGTH));
  //振动频率
  this.freq = lerp(OSCILLATION_SPEED_LOW_NOTES, OSCILLATION_SPEED_HIGH_NOTES, this.rPitch);
  this.ampDamp = lerp(AMPLITUDE_DAMPEN_LOW_NOTES, AMPLITUDE_DAMPEN_HIGH_NOTES, this.rPitch);
  //最大的振幅de
  this.ampMax = this.distMax;
  //角度和垂直角度的sin和cos值
  //这样就不用每次计算for every frame
  this.sinAng = Math.sin(this.ang);
  this.cosAng = Math.cos(this.ang);
  this.sinPerp = Math.sin(this.angPerp);
  this.cosPerp = Math.cos(this.angPerp);
};       

/**
 * 重新在canvas上绘制线
 */
Thread.prototype.redraw = function() {  
  if (this.len == 0) return;  
	//目前的原始点
	this.xo = this.m.xo;
	this.yo = this.m.yo;
	
	//一个bug：用第一个线运行它时，它break了
	if (isNaN(this.xp1)) { return; }	

  this.cv.beginPath();
  this.cv.lineCap = "round";
  this.cv.strokeStyle = this.hex;
  this.cv.lineWidth = this.str;

  //被抢占模式（或者是被放下后的第一次振荡）
  if (this.isGrabbed || this.isFirstOsc) {
    this.xd = this.xg; this.yd = this.yg;
  //自由振动模式
  } else {
    this.xd = this.xc; this.yd = this.yc;
  }
  
  if (isNaN(this.xd)) { return; }
	  
  this.dx0 = this.xd-this.xp0; this.dy0 = this.yd-this.yp0;
  this.dx1 = this.xp1-this.xd; this.dy1 = this.yp1-this.yd;
  //距离
  this.dist0 = Math.sqrt(this.dx0*this.dx0 + this.dy0*this.dy0);
  this.dist1 = Math.sqrt(this.dx1*this.dx1 + this.dy1*this.dy1);
  //移动到中间钟摆点
  this.dxBez0 = CURVATURE_RATIO*this.dist0*this.cosAng;
  this.dyBez0 = CURVATURE_RATIO*this.dist0*this.sinAng;      
  //移动到中间钟摆点
  this.dxBez1 = CURVATURE_RATIO*this.dist1*this.cosAng;
  this.dyBez1 = CURVATURE_RATIO*this.dist1*this.sinAng;
  //移动到起点
  this.cv.moveTo(this.xp0+this.xo, this.yp0+this.yo);
  //画Bezier曲线
  this.cv.bezierCurveTo(
    this.xd - this.dxBez0 + this.xo,
    this.yd - this.dyBez0 + this.yo,
    this.xd + this.dxBez1 + this.xo,
    this.yd + this.dyBez1 + this.yo,
    this.xp1 + this.xo,
    this.yp1 + this.yo
  );
  //关闭路径
  this.cv.stroke();
  this.cv.closePath();
}                                                                                                                

/**
 * 运行每个frame时的更新函数
 * 其它更新函数触发器
 */
Thread.prototype.upd = function() {	
  //这个线目前是否改变大小
  if (this.isShifting) {
    this.updShifting(); 
  }
  //线目前是否被抢占
  if (this.isGrabbed) {
    this.updGrab();
  //线目前是否在振动
  } else if (this.isOsc) {
    this.updOsc();
  }
}

/**
 * 在振动模式时更新线，在被plucked
 */
Thread.prototype.updOsc = function() {  
  //首先把线ease成0
  if (this.isFirstOsc) {
    var ease = 0.8;
    var dxg = this.xg1 - this.xg;
    var dyg = this.yg1 - this.yg;
    
    this.xg += dxg*ease;
    this.yg += dyg*ease;
    //我们是否已经到达？
    if ((Math.abs(dxg) < 2) && (Math.abs(dyg) < 2)) {
      //初始化
      this.t = 0; this.oscDir = 1;
      this.isFirstOsc = false;
      //它正去往哪个方向
      var sx0 = sign(dxg);
      var sx1 = sign(this.sinAng);
      //如果需要的话，把原始的振动反向
      if (sx0 != sx1) { this.oscDir *= -1; }
    }
  }
  else {
    //增加计数
    this.t += this.freq*this.oscDir;
    //用sin让c振动在0~1间 
    var c = Math.sin(this.t);
    //调整振幅
    this.amp *= this.ampDamp;
    
    this.xc = this.xMid + c*this.sinAng*this.amp;
    this.yc = this.yMid - c*this.cosAng*this.amp;
    //3/10 - 降低限制，使得颜色可以慢慢消失
    //如果振幅低于最低，把它减去
    if (this.amp <= 0.15) {
      this.amp = 0; 
      this.isOsc = false;
      //每当一条线停止振动，只要记录是否有什么正在移动
      this.m.checkMoving();
    }
  }
}

/**
 * 当我被用户拉或抢占时更新模式
 */
Thread.prototype.updGrab = function() {
  
	// 获取鼠标目前的位置
	// 是否被车抢占
	if (this.carGrab != null) {
		var xu = this.carGrab.xp1; var yu = this.carGrab.yp1;
	// 或者被用户抢占
	} else {
		var xu = this.m.getUserX(); var yu = this.m.getUserY(); 
	}  
  
  //从线可以离开多远
  var dxu = xu-this.xp0; var dyu = yu-this.yp0;
  //角度
  var ang0 = Math.atan2(dyu,dxu); var ang1 = this.ang-ang0;
  //直接距离 
  var hyp = Math.sqrt(dxu*dxu + dyu*dyu);
  //垂直距离
  this.distPerp = hyp*Math.sin(ang1);
  //线之间的平行距离
  var distPara = hyp*Math.cos(ang1);
  //线上可以有多远，作为0~1的比率
  this.rGrab = lim(distPara/this.len, 0, 1);
  //在中间将它归一化以增加到1
  if (this.rGrab <= 0.5) {
    this.rHalf = this.rGrab/0.5;
   }
  else {
   this.rHalf = 1-(this.rGrab-0.5)/0.5;
  }
  //的这个点可以把线拉多远
  var distMaxAllow = this.distMax*this.rHalf;
  //设置目前的延伸长度
  this.rStrength = lim(Math.abs(this.distPerp)/this.distMax, 0, 1);

  //用户是否把点拉得太远
  if (Math.abs(this.distPerp) > distMaxAllow) {
    this.drop();//直接放下
  } else {
    //被grab抢占的点是ok，那就允许它
    this.xg = xu; this.yg = yu;
  }
}

/**
 * 当用户刷子在一个frame中经过一条线时，且没有抢占它，那pluck可执行
 * 同时也可以用keystrokes为自动点击auto-pluck
 * @param {number} xp 是 x 位置，与用户交互的线
 * @param {number} yp 是 y 位置，与用户交互的线
 * @param {boolean} isNub: true 如果用nub做pluck
 */
Thread.prototype.pluck = function(xp, yp, isNub, car) {
  //存储为一个初始位置
  this.xgi = this.xg = xp; this.ygi = this.yg = yp;
  //用户目前的鼠标位置
  var xu = this.m.getUserX(); var yu = this.m.getUserY(); 
  //它和线有多远
  var dxu = xu-this.xp0; var dyu = yu-this.yp0;      
  //用我们目前的xg和yg，它是用户和线交互的位置
  var dxg = this.xgi-this.xp0; var dyg = this.ygi-this.yp0;
  var hyp = Math.sqrt(dxu*dxu + dyu*dyu);
  //作为比率0~1
  this.rGrab = lim(hyp/this.len, 0, 1);
  //在半路点的位置，归一化以增加到1
  if (this.rGrab <= 0.5) { 
  this.rHalf = this.rGrab/0.5;
   }
  else { 
  this.rHalf = 1-(this.rGrab-0.5)/0.5;
  }          
  var distMaxAllow = this.distMax*this.rHalf;
  //如果它被鼠标plucked，那就基于用户速度，否则用最大速度
  var spdAvg = isNub ? 1 : this.m.getSpdAvg();
  //我们希望它被拉得多远
  this.distPerp = (1-spdAvg)*distMaxAllow;
  //设置新的strength
  if (isNub) { 
  this.rStrength = 1;
   }
  else { this.rStrength = lim(Math.abs(this.distPerp)/this.distMax, 0, 1); }
  
  //如果比最小值小，那就设置成最小
  if (this.distPerp < this.ampPxMin) this.distPerp = this.ampPxMin;
  //设置
  this.xg = this.xgi + this.distPerp*this.cosPerp;
  this.yg = this.ygi + this.distPerp*this.sinPerp;  
  // ------------------
  //把我重置为中间点
  this.xc = this.xMid; this.yc = this.yMid;
  //已经在振动
  if (this.isOsc) {
    //已经在振动-启动振动加强
    this.rStrength = lim(
      (this.rStrength*0.5) + (this.amp/this.ampMax),
      0, 1);
    //设置新的振幅
    this.amp = this.rStrength*this.ampMax;        
  //没有振动-开始振动
  } else {
    //根据强度存储当前的振幅
    this.amp = this.rStrength*this.ampMax;
    //开始振动
    this.startOsc();
  }
  var rPan = this.m.xAsRatio(xp);
  // play note
  this.playNote(this.rStrength, rPan, false);
}

/**
 * 用户抢占这个线并保持它
 * @param {number} xp 是 x 位置，用户抢占的线
 * @param {number} yp 是 y 位置，用户抢占的线
 */
Thread.prototype.grab = function(xp, yp, isNub, car) {
	if (!isNub) {
		//
		this.carGrab = null;
	} else {
		//存储正在抢占我的车，并把我连接到这个车上
		this.carGrab = car;
		this.carGrab.thrGrab = this;
		//被车拉动
	}  
  //存储初始的位置
  this.xgi = this.xg = xp; this.ygi = this.yg = yp;
  this.isGrabbed = true;
  //
  this.m.ctGrab++;
  //现在更新
  this.updGrab();  
}

/**
 * 用户目前正在抢占，线，释放它，触发drop()函数
 */
Thread.prototype.drop = function() {
  this.m.ctGrab--;  
  
  this.isGrabbed = false;
  //重置我
  this.xc = this.xMid; this.yc = this.yMid;
  //基于强度，存储目前的振幅
  this.amp = this.rStrength*this.ampMax;
	//演奏音符-它是由一辆车引导
	if (this.carGrab != null) {
		this.carGrab.thrGrab = null;
		this.carGrab = null;
	//否则用正常的用户音量限制
	} else {
		//var vol = lerp(VOLUME_MIN, VOLUME_MAX, this.rStrength);
		//var pan = this.m.xAsRatio(this.m.getUserX());
	} 
	//设置比率 -1 ~ 1
	var rPan = this.m.xAsRatio(this.xg+this.xo);
  
  //演奏音符-用强度控制音量，并把用户的光标作为位置panning
  this.playNote(this.rStrength, rPan);
  //开始振动
  this.startOsc();  
}

/**
 * 在被释放后，线开始振动
 */
Thread.prototype.startOsc = function() {
  //被拉动点应该回到哪
  this.xg1 = this.xp0 + this.rGrab*this.dx;
  this.yg1 = this.yp0 + this.rGrab*this.dy;      
  //保存开始位置
  this.xg0 = this.xg; this.yg0 = this.yg;      
  //计数器
  this.t = 0;
  //我们在我们的第一次振动循环
  this.isFirstOsc = this.isOsc = true;      
}

/**
 * 演奏的音符
 * 变量vol0 和 vol1 用来定义真实的音量范围
 * 变量pan0 和 pan1 用来定义真实的panning范围
 * @param {number} rVol 是0~1音量的比率
 * @param {number} rPan 是-1~1时左/右 panning的比率
 */
Thread.prototype.playNote = function(rVol, rPan) {
  //如果我目前是空，那就不演奏音符
  if (this.pitchInd == -1) return;
  var pre = this.pitchInd < 10 ? '0' : '';
  //确定声音已经被加载
  suite.playSound(
    this.pitchInd,
    VOLUME_MIN + rVol * (VOLUME_MAX - VOLUME_MIN),
    PAN_LEFT + rPan * (PAN_RIGHT - PAN_LEFT)      
  );
}