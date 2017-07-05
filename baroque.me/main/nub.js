/**
 * @fileoverview 这个文件是Nub类
 * @author Alexander Chen alex@chenalexander.com
 * @version 0.1
 */
 
/**
 * nub：就是移动的白点
 * orbit：nub的运行轨道
 * grab：鼠标拉动nub
 * string：应该是中间的线
 * pluck：通过振动中间的线来发出声音
 * follow跟随模式：当拉动一个nub时其它的nub也会跟过来
 * orbiting模式：在轨道运行的模式
 * grab抢占：鼠标控制了一个nub
/**
 * 常量定义
 */
//画圆的半径
var RAD_NORM = 6;
//当用户经过时，圆的半径
var RAD_OVER = 15;
//当拉动时，我的半径
var RAD_GRAB = 10;
//半径放松比率从0到1
var RAD_EASE = 0.4;
//当拉动时，放松轨迹
var EASE_ORBIT_GRAB = 0.2;
//当跟随时，慢慢变到新的轨道上
var EASE_ORBIT_FOLLOW = 0.02;
//释放时，就慢慢回到原来的车轮
var EASE_ORBIT_RESTORE = 0.02;
//拉动时，慢慢变到新的轨道中心
var EASE_CENTER_GRAB = 0.3;
////释放时，就慢慢回到原来的中心位置
var EASE_CENTER_RESTORE = 0.015;
//跟随时，慢慢靠近新的轨道中心
var EASE_CENTER_FOLLOW_MIN = 0.04;
var EASE_CENTER_FOLLOW_MAX = 0.01;
//加载时，慢慢靠近新的轨道尺寸和位置
var EASE_ORBIT_LOADER = 0.003;
var EASE_CENTER_LOADER = 0.03;

var EASE_ORBIT_EXIT_LOADER = 0.1; //Make it go back really fast
var EASE_CENTER_EXIT_LOADER = 0.1; //Make it go back really fast

//跟踪开始和结束的透明度
var TRAIL_OPAC_MIN = 0.04; var TRAIL_OPAC_MAX = 0.5;
//在哪一个点(0 to 1)，我们应该开始让它退出去
var TRAIL_FADEOUT = 0.6;
//有多少个点存储轨迹
var TRAIL_PTS = 24;
//轨迹的采样比例（不用更新每个帧）
var TRAIL_SAMPLE = 4;
//用户需要离一个nub多近才可以滚动它
//用平方，这样就不用用sqrt来计算距离
// e.g. 距离半径为10，则设置为100
var ROLLOVER_RAD_SQ = 3500;
//在一个frame中，我们需要弹动多少条线
var PLUCK_FRAME_MAX = 2;
//当我是一个跟随者的轨道
var ORBIT_FOLLOW_MIN = WHEEL_RADIUS*0.3;
var ORBIT_FOLLOW_MAX = WHEEL_RADIUS*0.5;
//如果我是预加载的nub的轨道
var ORBIT_LOADER = 35;
//当我被拉动时的轨道
var ORBIT_GRAB = 15;
//在用户释放后覆盖速度，给它最大值这样它就不会飞走
//给它最小值，这样释放时，它可以有一点延迟
var THROW_SPD_MAX = 23;
var THROW_SPD_MIN = 6;

/**
 * 创建一个新的Nub.
 * @class 这是一个Nub类
 * @constructor
 * @param
 */
var Nub = function(indPm, indAllPm, machinePm, wheelPm, cvPm) {  
  //存储我真实的目前和原来位置
  this.xp0; this.yp0; this.xp1; this.yp1;
  //存储我们想要在车轮的哪个位置
  this.xpw; this.ypw;
  //作为点对象
  this.pt0 = new Point();
  this.pt1 = new Point();
  //连接到我拉车轮
  this.wheel = wheelPm;
  
  this.machine = machinePm;
  //我在车轮中的索引0或1
  this.ind = indPm;
  //我的所有索引 0, 1, 2, 3 
  this.indAll = indAllPm;
  // Canvas 对象
  this.cv = cvPm;
  //我的轨道和目标的目前中心
  this.xpOrbit = this.xpOrbitTarg = this.wheel.xp;
  this.ypOrbit = this.ypOrbitTarg = this.wheel.yp;
  //我目前和目标轨迹（半径）
  this.orbit = this.orbitTarg = WHEEL_RADIUS;
  //我目前的半径
  this.rad = RAD_NORM;
  //我的目标半径
  this.radTarg = RAD_NORM;
  //我目前的比例0 (最小) 到 1 (转滚尺寸)
  this.scaleRat = 0;
  //速率
  this.velX = 0; this.velY = 0;
  //利用这个摩擦来抑制速率
  this.dampVel = 0.93;
  //nub已经经过的点的数组
  this.arrTrail = new Array(TRAIL_PTS);
  //一般的frame计数-当我们开始更新轨迹时从不同的点开始出发
  this.frameCt = this.indAll;
  //目前的速度
  this.spd = 0;
  //鼠标是否滚动过我？
  this.isMouseOver = false;
  //鼠标是否在控制我？
  this.isGrabbed = false;
  //我目前是follow模式？
  this.isFollowing = false;
  //第一次执行?
  this.isFirstRun = true;
  //我是否已经进入还是在等待模式?
  this.hasEntered = false;
  //我是否在加载模式？
  this.isLoading = false;
  //当我刚被丢出去，就让它停止
  this.isTossing = false;
  this.init();
};

Nub.prototype.init = function() {
  this.m = this.machine;
};

/**
 * 更新函数
 */
Nub.prototype.upd = function() {
  //如果我们仍在加载，且它不是加载clip，则不执行
  if (!this.hasEntered) return;
  this.updPos();
  this.updInteract();
};

/**
 * 更新函数
 */
Nub.prototype.updInteract = function() {
  //基于车轮旋转设置我的位置
  //第一次执行时不执行
  if (this.isFirstRun) { this.isFirstRun = false; return; }
  //如果我们跳过太远，则不执行 (这是在循环时发生)
  if (this.spd > SPD_IGNORE_MAX) return;
  
  var xi; var yi; var th;
  var ctPluck = 0;
  
  //遍历线
  for (var i = 0; i < this.m.arrThreads.length; i++) {
    th = this.m.arrThreads[i];
    //找到线的交叉点
    var pt = lineIntersect(this.pt0, this.pt1, th.pt0, th.pt1);
    //我们是否得到一个点
    if (pt == null) continue;
    xi = pt.x; yi = pt.y;    
		//如果它还没被抢占，则抢占它
		if ((!th.isGrabbed) && (!isNaN(xi)) && (!isNaN(yi))) {    
  		if (this.spd > SPD_GRAB) {      
        //刷过线
        th.pluck(xi, yi, true, this);
        //抢占得太多
        ctPluck++; 
        if (ctPluck > PLUCK_FRAME_MAX) break;
      } else {
        //刷过线
        th.grab(xi, yi, true, this);
        break;
      }
        //如果用户正在控制它，需要丢弃它
        // if (th.isGrabbed) th.drop(); 
    }
  } 
}

/**
 * 为每个frame更新循环执行，由#upd触发
 */
Nub.prototype.updPos = function() {  
  //现在更新我游行的速度
  //从上一次更新已经经过了多久？
  var d = new Date(); this.t1 = d.getTime()/1000;
  var elap = this.t1-this.t0; this.t0 = this.t1;
  
  //抑制速率
  this.velX *= this.dampVel;
  this.velY *= this.dampVel;
  if (Math.abs(this.velX) < 0.5) this.velX = 0;
  if (Math.abs(this.velY) < 0.5) this.velY = 0;  
  //如果它完全在速度上，我们应该去哪？
  this.xpv = this.xp0 + this.velX;
  this.ypv = this.yp0 + this.velY;
  
  //更新点的大小
  if (this.rad != this.radTarg) {
    var dr = (this.radTarg-this.rad);
    if (Math.abs(dr) < 1) { this.rad = this.radTarg;
    } else { this.rad += dr * RAD_EASE; }
  }  
    
  //设置真实的位置
  if (Math.abs(this.velX) > 0 || Math.abs(this.velY) > 0) this.isTossing = true;
  else this.isTossing = false;  
  
  //当我们处于被抛弃的模式，只要按照速率来设置它的位置
  if (this.isTossing) {    
    this.setPos(this.xpv, this.ypv);
    this.xpOrbit = this.xpv;
    this.ypOrbit = this.ypv;
    this.orbit = 0;
    
  //否则，我们用车轮位置，在轨道运行的模式
  } else {    
    //如果用户控制一个nub
    if (this.machine.isHoldingNub) {
      //慢慢靠近用户位置
      this.xpOrbitTarg = this.machine.getUserX();
      this.ypOrbitTarg = this.machine.getUserY();
    } else if (this.isMouseOver) {
      this.xpOrbitTarg = this.machine.getUserX();
      this.ypOrbitTarg = this.machine.getUserY();
    //如果用户没有控制一个nub，就用车轮的锚位置作为目标
    } else if (!this.isLoading) {
      //在轨道运行的目标位置
      this.xpOrbitTarg = this.wheel.xp;
      this.ypOrbitTarg = this.wheel.yp;
    } else {
      //如果是一个加载nub，不需要为每个frame设置在轨道运行的位置
      this.xpOrbitTarg = this.wheel.xp;
      this.ypOrbitTarg = this.wheel.yp;
    }
  
    //慢慢靠近新的轨道半径
    //如果鼠标经过，用0来重写轨道
    var orbitTargTrue = this.isMouseOver ? 0 : this.orbitTarg;
    if (this.orbit != orbitTargTrue) {
      this.orbit += (orbitTargTrue - this.orbit) * this.easeOrbit;
      if (Math.abs(this.orbitTarg - this.orbit) < 1) this.orbit = this.orbitTarg; // Close enough?
    }  
    //慢慢把x移向轨道中心
    if (this.xpOrbit != this.xpOrbitTarg) { 
      this.xpOrbit += (this.xpOrbitTarg - this.xpOrbit) * this.easeCenter;
      if (Math.abs(this.xpOrbitTarg - this.xpOrbit) < 1) this.xpOrbit = this.xpOrbitTarg; // Close enough?
    }
    //慢慢把y移向轨道中心
    if (this.ypOrbit != this.ypOrbitTarg) { 
      this.ypOrbit += (this.ypOrbitTarg - this.ypOrbit) * this.easeCenter;
      if (Math.abs(this.ypOrbitTarg - this.ypOrbit) < 1) this.ypOrbit = this.ypOrbitTarg; // Close enough?
    }
  
    //基于车轮旋转设置nub的新位置
    if (this.ind == 0) {
      this.xpw = this.xpOrbit + this.wheel.cosAng*this.orbit;
      this.ypw = this.ypOrbit + this.wheel.sinAng*this.orbit;
    } else {
      this.xpw = this.xpOrbit - this.wheel.cosAng*this.orbit
      this.ypw = this.ypOrbit - this.wheel.sinAng*this.orbit;
    }
    
    //第一次运行，将位置初始化为车轮位置
    if (this.isFirstRun) {
      // this.isFirstRun = false; (It sets isFirstrun to false in updInteract)
      this.xp0 = this.xp1 = this.xpw; this.yp0 = this.yp1 = this.ypw;
      //初始化轨迹数组
      for (var i = 0; i < TRAIL_PTS; i++) {
        this.arrTrail[i] = new Point(this.xpw, this.ypw);
      }
    }
    //设置位置
    this.setPos(this.xpw, this.ypw);
  }

  //改变位置
  this.dx = this.xp1-this.xp0;
  this.dy = this.yp1-this.yp0;
  //更新点对象
  this.pt0.x = this.xp0; this.pt0.y = this.yp0;
  this.pt1.x = this.xp1; this.pt1.y = this.yp1;
  //增加
  this.xp0 = this.xp1; this.yp0 = this.yp1;
	//在这个frame中，我们应该走多远
	this.dist = Math.sqrt(this.dx*this.dx + this.dy*this.dy);
	//把它存储为我的速度，在这个frame中我们应该走多少px
	//this.spd = this.dist/elap;
	this.spd = this.dist;
  //为轨迹采样
  if (this.frameCt % TRAIL_SAMPLE == 0) {
    this.arrTrail.shift();
    this.arrTrail[TRAIL_PTS-1] = new Point(this.xp0, this.yp0);
  }
  //判断轨迹中的所有点 against bounding box
  for (var i = 0; i < this.arrTrail.length; i++) {
    this.m.checkBoxLimit(this.arrTrail[i].x, this.arrTrail[i].y);      
  }
  this.frameCt++;
};

/**
 * 把我设置成一个加载nub
 */
Nub.prototype.enter = function() {
  this.hasEntered = true;
  this.isLoading = true;

  //首先进入
  if (this.indAll == 0) {    
    this.xpOrbit = -150;   
    this.ypOrbit = this.m.height*0.6;
    this.orbit = ORBIT_LOADER * 0.3;
  //第三个进入
  } else if (this.indAll == 1) {
    
    this.xpOrbit = this.m.width*1.0;    
    this.ypOrbit = -this.m.height*0.9;    
    this.orbit = ORBIT_LOADER * 5.5;
  //第二个进入
  } else if (this.indAll == 2) {
    
    this.xpOrbit = -this.m.width*1.5;    
    this.ypOrbit = this.m.height*1.0;    
    this.orbit = ORBIT_LOADER * 6;
  //最后进入
  } else if (this.indAll == 3) {
    
    this.xpOrbit = this.m.width*1.2;    
    this.ypOrbit = -this.m.height*0.8;    
    this.orbit = ORBIT_LOADER * 1.5;    
  }
  //设置目标中心位置
  // this.xpOrbitTarg = 0;
  //this.ypOrbitTarg = this.ypOrbit = this.machine.arrThreads[this.indAll*2+1].yp1;
  //
  this.radTarg = RAD_NORM; //设置新的目标半径大小  
  
  //临时！确定是否是无缝的
  this.orbitTarg = WHEEL_RADIUS;
  this.easeOrbit = EASE_ORBIT_LOADER; //让它快速返回
  this.easeCenter = EASE_CENTER_LOADER; //让它快速返回
  this.radTarg = RAD_NORM;  
};

/**
 * 从加载模式释放我
 */
Nub.prototype.exitLoader = function() {
  this.isLoading = false;
  this.orbitTarg = WHEEL_RADIUS;
  
  this.easeOrbit = EASE_ORBIT_EXIT_LOADER; //让它快速返回
  this.easeCenter = EASE_CENTER_EXIT_LOADER; //让它快速返回
  this.radTarg = RAD_NORM;
};

/**
 * 滚动过
 */
Nub.prototype.rollOver = function() {
  this.isMouseOver = true;
  this.radTarg = RAD_OVER; //设置新的目标半径 
};

/**
 * 滚动出去
 */
Nub.prototype.rollOut = function() {
  this.isMouseOver = false;
  this.radTarg = RAD_NORM; //设置新的目标半径 
};

/**
 * 抢占nub
 */
Nub.prototype.grab = function() {
  this.velX = this.velY = 0; //被抢占时折断速度为0  
  this.easeOrbit = EASE_ORBIT_GRAB;
  this.easeCenter = EASE_CENTER_GRAB;
  
  this.isGrabbed = true;
  this.radTarg = RAD_GRAB; //设置新的目标半径
  this.orbitTarg = ORBIT_GRAB; //设置新的目标半径
  
  //在一个随机位置开始
  var ind = Math.floor(Math.random()*NUBS);
  if (ind == NUBS) ind = NUBS-1;
  //初始化跟随者
  for (var i = 0; i < NUBS; i++) {
    var n = this.machine.arrNubs[ind];
    if (n != this) { n.follow(i); }
    ind = (ind + 1) % NUBS;
  }
};

/**
 * 释放nub
 */
Nub.prototype.drop = function() {
  this.isGrabbed = false;
  this.orbitTarg = WHEEL_RADIUS;
  
  this.easeOrbit = EASE_ORBIT_RESTORE;
  this.easeCenter = EASE_CENTER_RESTORE;
  this.radTarg = RAD_NORM;
  
  //把速度设置成最后两个点的不同
  this.velX = this.m.dx;
  this.velY = this.m.dy;
  var vxa = Math.abs(this.velX);
  var vya = Math.abs(this.velY);
  
  //把它限制到最小、最大
  if (vxa > THROW_SPD_MAX) {
    this.velX = vxa/this.velX * THROW_SPD_MAX;
  } else if (vxa < THROW_SPD_MIN) {
    //因为用户没有移动，需要使用我们自己的dx
    if (this.dx == 0) this.velX = (Math.random() > 0.5 ? -1 : 1) * THROW_SPD_MIN; //不要用0来除
    else this.velX = Math.abs(this.dx) / this.dx * THROW_SPD_MIN;
  }
  
  if (vya > THROW_SPD_MAX) {
    this.velY = vya/this.velY * THROW_SPD_MAX;
  } else if (vya < THROW_SPD_MIN) {
    //因为用户没有移动，需要使用我们自己的dx
    if (this.dy == 0) this.velY = (Math.random() > 0.5 ? -1 : 1) * THROW_SPD_MIN; //不要用0来除
    else this.velY = Math.abs(this.dy) / this.dy * THROW_SPD_MIN;
  }
  
  var spd = Math.sqrt(vxa*vxa + vya*vya);
  //告诉跟随者停止跟随
  var ct = 1; var nub;
  for (var i = 0; i < NUBS; i++) {
    nub = this.machine.arrNubs[i];
    if (nub != this && nub.hasEntered) nub.unfollow(this, this.velX, this.velY, ct/NUBS);
    ct++;
  }  
};

/**
 * 这个nub开始跟随
 */
Nub.prototype.follow = function(indPm) {
  var r = indPm/(NUBS-1);
  this.orbitTarg = lerp(ORBIT_FOLLOW_MIN, ORBIT_FOLLOW_MAX, r);
  this.easeCenterFollow = lerp(EASE_CENTER_FOLLOW_MIN, EASE_CENTER_FOLLOW_MAX, r);

  this.easeOrbit = EASE_ORBIT_FOLLOW;
  this.easeCenter = this.easeCenterFollow; 
};

/**
 * 这个nub停止跟随
 */
Nub.prototype.unfollow = function(nubSource, vx, vy, damp) {
  //使得它用源节点一半速度，一半驾驶到源节点方向
  var dx = nubSource.xp1-this.xp1;
  var dy = nubSource.yp1-this.yp1;
  
  var r = 0.05; //用多少来驾驶向源节点 (0 to 1)
  this.velX = (dx*r + vx*(1-r))*damp;
  this.velY = (dy*r + vy*(1-r))*damp;
  this.orbitTarg = WHEEL_RADIUS;
  this.easeOrbit = EASE_ORBIT_RESTORE;
  this.easeCenter = EASE_CENTER_RESTORE;
};

/**
 * 检测鼠标是否经过
 */
Nub.prototype.checkMouseOver = function() {
  //如果鼠标已经滚动过另一个nub，那不用打扰它
  var dx = this.machine.getUserX() - this.xp1;
  var dy = this.machine.getUserY() - this.yp1;
  var distSq = dx*dx + dy*dy;
  return (distSq < ROLLOVER_RAD_SQ);
}

/**
 * 当我们从背景返回，在第一次运行时运行
 */
Nub.prototype.returnFromBackground = function() {
  //初始化轨迹数组
  for (var i = 0; i < TRAIL_PTS; i++) {
    this.arrTrail[i] = new Point(this.xp0, this.yp0);
  }  
};

/**
 * 重新绘制函数
 */
Nub.prototype.redraw = function() {  
  //如果我们仍在加载，且它不是加载clip，则不执行
  if (!this.hasEntered) return;

  this.cv.beginPath();
  this.cv.fillStyle = '#FFFFFF';
  this.cv.arc(this.xp1+this.m.xo, this.yp1+this.m.yo, this.rad, 0, 2*MATH_PI);
  this.cv.fill();
  this.cv.closePath();
  
  var x0, y0, x1, y1, x2, y2, xh0, yh0, xh1, yh1, opac, rat;
  
  //如果我们在背景中，则不用绘制轨迹
  if (this.machine.isInBackground) return;
  
  x0 = this.arrTrail[0].x; y0 = this.arrTrail[0].y;
  x1 = this.arrTrail[1].x; y1 = this.arrTrail[1].y;
  
  //我们想要离nub多近 - 应该是 TRAIL_PTS-1 或更小
  var TRAIL_PTS_LIM = TRAIL_PTS-2;
  //绘制轨迹
  for (var i = 1; i < TRAIL_PTS_LIM; i++) {
    //在轨迹边用比率0~1
    rat = (i-1)/(TRAIL_PTS_LIM-2);
    //我们目前的点
    x2 = this.arrTrail[i].x; y2 = this.arrTrail[i].y;

    //计算第一个半路点
    xh0 = x0 + (x1-x0)*0.5;
    yh0 = y0 + (y1-y0)*0.5;
    //如果它是第二个点，就在这结束
    if (i == 1) continue;
    //或者计算下一个半路点
    xh1 = x1 + (x2-x1)*0.5;
    yh1 = y1 + (y2-y1)*0.5;
    
    this.cv.beginPath();
    this.cv.lineWidth = 1;
    //计算透明度
    if (rat < TRAIL_FADEOUT) {
      opac = lerp(TRAIL_OPAC_MIN, TRAIL_OPAC_MAX, rat/TRAIL_FADEOUT);
    } else {
      opac = lerp(TRAIL_OPAC_MAX, TRAIL_OPAC_MIN, (rat-TRAIL_FADEOUT)/(1-TRAIL_FADEOUT));
    }
    this.cv.strokeStyle = 'rgba(255,255,255,'+opac+')';
    this.cv.moveTo(this.m.xo + xh0, this.m.yo + yh0);
    this.cv.quadraticCurveTo(
      this.m.xo + x1, this.m.yo + y1, //第一个控制点
      this.m.xo + xh1, this.m.yo + yh1 //结束锚点
    );
    //增加点
    x0 = x1; y0 = y1; x1 = x2; y1 = y2;
    
    this.cv.stroke();
    this.cv.closePath();
  }
};

/**
 * 更新函数
 */
Nub.prototype.setPos = function(x,y) {
  this.xp1 = x;
  this.yp1 = y;
};