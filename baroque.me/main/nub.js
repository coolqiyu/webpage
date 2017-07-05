/**
 * @fileoverview ����ļ���Nub��
 * @author Alexander Chen alex@chenalexander.com
 * @version 0.1
 */
 
/**
 * nub�������ƶ��İ׵�
 * orbit��nub�����й��
 * grab���������nub
 * string��Ӧ�����м����
 * pluck��ͨ�����м��������������
 * follow����ģʽ��������һ��nubʱ������nubҲ�������
 * orbitingģʽ���ڹ�����е�ģʽ
 * grab��ռ����������һ��nub
/**
 * ��������
 */
//��Բ�İ뾶
var RAD_NORM = 6;
//���û�����ʱ��Բ�İ뾶
var RAD_OVER = 15;
//������ʱ���ҵİ뾶
var RAD_GRAB = 10;
//�뾶���ɱ��ʴ�0��1
var RAD_EASE = 0.4;
//������ʱ�����ɹ켣
var EASE_ORBIT_GRAB = 0.2;
//������ʱ�������䵽�µĹ����
var EASE_ORBIT_FOLLOW = 0.02;
//�ͷ�ʱ���������ص�ԭ���ĳ���
var EASE_ORBIT_RESTORE = 0.02;
//����ʱ�������䵽�µĹ������
var EASE_CENTER_GRAB = 0.3;
////�ͷ�ʱ���������ص�ԭ��������λ��
var EASE_CENTER_RESTORE = 0.015;
//����ʱ�����������µĹ������
var EASE_CENTER_FOLLOW_MIN = 0.04;
var EASE_CENTER_FOLLOW_MAX = 0.01;
//����ʱ�����������µĹ���ߴ��λ��
var EASE_ORBIT_LOADER = 0.003;
var EASE_CENTER_LOADER = 0.03;

var EASE_ORBIT_EXIT_LOADER = 0.1; //Make it go back really fast
var EASE_CENTER_EXIT_LOADER = 0.1; //Make it go back really fast

//���ٿ�ʼ�ͽ�����͸����
var TRAIL_OPAC_MIN = 0.04; var TRAIL_OPAC_MAX = 0.5;
//����һ����(0 to 1)������Ӧ�ÿ�ʼ�����˳�ȥ
var TRAIL_FADEOUT = 0.6;
//�ж��ٸ���洢�켣
var TRAIL_PTS = 24;
//�켣�Ĳ������������ø���ÿ��֡��
var TRAIL_SAMPLE = 4;
//�û���Ҫ��һ��nub����ſ��Թ�����
//��ƽ���������Ͳ�����sqrt���������
// e.g. ����뾶Ϊ10��������Ϊ100
var ROLLOVER_RAD_SQ = 3500;
//��һ��frame�У�������Ҫ������������
var PLUCK_FRAME_MAX = 2;
//������һ�������ߵĹ��
var ORBIT_FOLLOW_MIN = WHEEL_RADIUS*0.3;
var ORBIT_FOLLOW_MAX = WHEEL_RADIUS*0.5;
//�������Ԥ���ص�nub�Ĺ��
var ORBIT_LOADER = 35;
//���ұ�����ʱ�Ĺ��
var ORBIT_GRAB = 15;
//���û��ͷź󸲸��ٶȣ��������ֵ�������Ͳ������
//������Сֵ�������ͷ�ʱ����������һ���ӳ�
var THROW_SPD_MAX = 23;
var THROW_SPD_MIN = 6;

/**
 * ����һ���µ�Nub.
 * @class ����һ��Nub��
 * @constructor
 * @param
 */
var Nub = function(indPm, indAllPm, machinePm, wheelPm, cvPm) {  
  //�洢����ʵ��Ŀǰ��ԭ��λ��
  this.xp0; this.yp0; this.xp1; this.yp1;
  //�洢������Ҫ�ڳ��ֵ��ĸ�λ��
  this.xpw; this.ypw;
  //��Ϊ�����
  this.pt0 = new Point();
  this.pt1 = new Point();
  //���ӵ���������
  this.wheel = wheelPm;
  
  this.machine = machinePm;
  //���ڳ����е�����0��1
  this.ind = indPm;
  //�ҵ��������� 0, 1, 2, 3 
  this.indAll = indAllPm;
  // Canvas ����
  this.cv = cvPm;
  //�ҵĹ����Ŀ���Ŀǰ����
  this.xpOrbit = this.xpOrbitTarg = this.wheel.xp;
  this.ypOrbit = this.ypOrbitTarg = this.wheel.yp;
  //��Ŀǰ��Ŀ��켣���뾶��
  this.orbit = this.orbitTarg = WHEEL_RADIUS;
  //��Ŀǰ�İ뾶
  this.rad = RAD_NORM;
  //�ҵ�Ŀ��뾶
  this.radTarg = RAD_NORM;
  //��Ŀǰ�ı���0 (��С) �� 1 (ת���ߴ�)
  this.scaleRat = 0;
  //����
  this.velX = 0; this.velY = 0;
  //�������Ħ������������
  this.dampVel = 0.93;
  //nub�Ѿ������ĵ������
  this.arrTrail = new Array(TRAIL_PTS);
  //һ���frame����-�����ǿ�ʼ���¹켣ʱ�Ӳ�ͬ�ĵ㿪ʼ����
  this.frameCt = this.indAll;
  //Ŀǰ���ٶ�
  this.spd = 0;
  //����Ƿ�������ң�
  this.isMouseOver = false;
  //����Ƿ��ڿ����ң�
  this.isGrabbed = false;
  //��Ŀǰ��followģʽ��
  this.isFollowing = false;
  //��һ��ִ��?
  this.isFirstRun = true;
  //���Ƿ��Ѿ����뻹���ڵȴ�ģʽ?
  this.hasEntered = false;
  //���Ƿ��ڼ���ģʽ��
  this.isLoading = false;
  //���Ҹձ�����ȥ��������ֹͣ
  this.isTossing = false;
  this.init();
};

Nub.prototype.init = function() {
  this.m = this.machine;
};

/**
 * ���º���
 */
Nub.prototype.upd = function() {
  //����������ڼ��أ��������Ǽ���clip����ִ��
  if (!this.hasEntered) return;
  this.updPos();
  this.updInteract();
};

/**
 * ���º���
 */
Nub.prototype.updInteract = function() {
  //���ڳ�����ת�����ҵ�λ��
  //��һ��ִ��ʱ��ִ��
  if (this.isFirstRun) { this.isFirstRun = false; return; }
  //�����������̫Զ����ִ�� (������ѭ��ʱ����)
  if (this.spd > SPD_IGNORE_MAX) return;
  
  var xi; var yi; var th;
  var ctPluck = 0;
  
  //������
  for (var i = 0; i < this.m.arrThreads.length; i++) {
    th = this.m.arrThreads[i];
    //�ҵ��ߵĽ����
    var pt = lineIntersect(this.pt0, this.pt1, th.pt0, th.pt1);
    //�����Ƿ�õ�һ����
    if (pt == null) continue;
    xi = pt.x; yi = pt.y;    
		//�������û����ռ������ռ��
		if ((!th.isGrabbed) && (!isNaN(xi)) && (!isNaN(yi))) {    
  		if (this.spd > SPD_GRAB) {      
        //ˢ����
        th.pluck(xi, yi, true, this);
        //��ռ��̫��
        ctPluck++; 
        if (ctPluck > PLUCK_FRAME_MAX) break;
      } else {
        //ˢ����
        th.grab(xi, yi, true, this);
        break;
      }
        //����û����ڿ���������Ҫ������
        // if (th.isGrabbed) th.drop(); 
    }
  } 
}

/**
 * Ϊÿ��frame����ѭ��ִ�У���#upd����
 */
Nub.prototype.updPos = function() {  
  //���ڸ��������е��ٶ�
  //����һ�θ����Ѿ������˶�ã�
  var d = new Date(); this.t1 = d.getTime()/1000;
  var elap = this.t1-this.t0; this.t0 = this.t1;
  
  //��������
  this.velX *= this.dampVel;
  this.velY *= this.dampVel;
  if (Math.abs(this.velX) < 0.5) this.velX = 0;
  if (Math.abs(this.velY) < 0.5) this.velY = 0;  
  //�������ȫ���ٶ��ϣ�����Ӧ��ȥ�ģ�
  this.xpv = this.xp0 + this.velX;
  this.ypv = this.yp0 + this.velY;
  
  //���µ�Ĵ�С
  if (this.rad != this.radTarg) {
    var dr = (this.radTarg-this.rad);
    if (Math.abs(dr) < 1) { this.rad = this.radTarg;
    } else { this.rad += dr * RAD_EASE; }
  }  
    
  //������ʵ��λ��
  if (Math.abs(this.velX) > 0 || Math.abs(this.velY) > 0) this.isTossing = true;
  else this.isTossing = false;  
  
  //�����Ǵ��ڱ�������ģʽ��ֻҪ������������������λ��
  if (this.isTossing) {    
    this.setPos(this.xpv, this.ypv);
    this.xpOrbit = this.xpv;
    this.ypOrbit = this.ypv;
    this.orbit = 0;
    
  //���������ó���λ�ã��ڹ�����е�ģʽ
  } else {    
    //����û�����һ��nub
    if (this.machine.isHoldingNub) {
      //���������û�λ��
      this.xpOrbitTarg = this.machine.getUserX();
      this.ypOrbitTarg = this.machine.getUserY();
    } else if (this.isMouseOver) {
      this.xpOrbitTarg = this.machine.getUserX();
      this.ypOrbitTarg = this.machine.getUserY();
    //����û�û�п���һ��nub�����ó��ֵ�êλ����ΪĿ��
    } else if (!this.isLoading) {
      //�ڹ�����е�Ŀ��λ��
      this.xpOrbitTarg = this.wheel.xp;
      this.ypOrbitTarg = this.wheel.yp;
    } else {
      //�����һ������nub������ҪΪÿ��frame�����ڹ�����е�λ��
      this.xpOrbitTarg = this.wheel.xp;
      this.ypOrbitTarg = this.wheel.yp;
    }
  
    //���������µĹ���뾶
    //�����꾭������0����д���
    var orbitTargTrue = this.isMouseOver ? 0 : this.orbitTarg;
    if (this.orbit != orbitTargTrue) {
      this.orbit += (orbitTargTrue - this.orbit) * this.easeOrbit;
      if (Math.abs(this.orbitTarg - this.orbit) < 1) this.orbit = this.orbitTarg; // Close enough?
    }  
    //������x����������
    if (this.xpOrbit != this.xpOrbitTarg) { 
      this.xpOrbit += (this.xpOrbitTarg - this.xpOrbit) * this.easeCenter;
      if (Math.abs(this.xpOrbitTarg - this.xpOrbit) < 1) this.xpOrbit = this.xpOrbitTarg; // Close enough?
    }
    //������y����������
    if (this.ypOrbit != this.ypOrbitTarg) { 
      this.ypOrbit += (this.ypOrbitTarg - this.ypOrbit) * this.easeCenter;
      if (Math.abs(this.ypOrbitTarg - this.ypOrbit) < 1) this.ypOrbit = this.ypOrbitTarg; // Close enough?
    }
  
    //���ڳ�����ת����nub����λ��
    if (this.ind == 0) {
      this.xpw = this.xpOrbit + this.wheel.cosAng*this.orbit;
      this.ypw = this.ypOrbit + this.wheel.sinAng*this.orbit;
    } else {
      this.xpw = this.xpOrbit - this.wheel.cosAng*this.orbit
      this.ypw = this.ypOrbit - this.wheel.sinAng*this.orbit;
    }
    
    //��һ�����У���λ�ó�ʼ��Ϊ����λ��
    if (this.isFirstRun) {
      // this.isFirstRun = false; (It sets isFirstrun to false in updInteract)
      this.xp0 = this.xp1 = this.xpw; this.yp0 = this.yp1 = this.ypw;
      //��ʼ���켣����
      for (var i = 0; i < TRAIL_PTS; i++) {
        this.arrTrail[i] = new Point(this.xpw, this.ypw);
      }
    }
    //����λ��
    this.setPos(this.xpw, this.ypw);
  }

  //�ı�λ��
  this.dx = this.xp1-this.xp0;
  this.dy = this.yp1-this.yp0;
  //���µ����
  this.pt0.x = this.xp0; this.pt0.y = this.yp0;
  this.pt1.x = this.xp1; this.pt1.y = this.yp1;
  //����
  this.xp0 = this.xp1; this.yp0 = this.yp1;
	//�����frame�У�����Ӧ���߶�Զ
	this.dist = Math.sqrt(this.dx*this.dx + this.dy*this.dy);
	//�����洢Ϊ�ҵ��ٶȣ������frame������Ӧ���߶���px
	//this.spd = this.dist/elap;
	this.spd = this.dist;
  //Ϊ�켣����
  if (this.frameCt % TRAIL_SAMPLE == 0) {
    this.arrTrail.shift();
    this.arrTrail[TRAIL_PTS-1] = new Point(this.xp0, this.yp0);
  }
  //�жϹ켣�е����е� against bounding box
  for (var i = 0; i < this.arrTrail.length; i++) {
    this.m.checkBoxLimit(this.arrTrail[i].x, this.arrTrail[i].y);      
  }
  this.frameCt++;
};

/**
 * �������ó�һ������nub
 */
Nub.prototype.enter = function() {
  this.hasEntered = true;
  this.isLoading = true;

  //���Ƚ���
  if (this.indAll == 0) {    
    this.xpOrbit = -150;   
    this.ypOrbit = this.m.height*0.6;
    this.orbit = ORBIT_LOADER * 0.3;
  //����������
  } else if (this.indAll == 1) {
    
    this.xpOrbit = this.m.width*1.0;    
    this.ypOrbit = -this.m.height*0.9;    
    this.orbit = ORBIT_LOADER * 5.5;
  //�ڶ�������
  } else if (this.indAll == 2) {
    
    this.xpOrbit = -this.m.width*1.5;    
    this.ypOrbit = this.m.height*1.0;    
    this.orbit = ORBIT_LOADER * 6;
  //������
  } else if (this.indAll == 3) {
    
    this.xpOrbit = this.m.width*1.2;    
    this.ypOrbit = -this.m.height*0.8;    
    this.orbit = ORBIT_LOADER * 1.5;    
  }
  //����Ŀ������λ��
  // this.xpOrbitTarg = 0;
  //this.ypOrbitTarg = this.ypOrbit = this.machine.arrThreads[this.indAll*2+1].yp1;
  //
  this.radTarg = RAD_NORM; //�����µ�Ŀ��뾶��С  
  
  //��ʱ��ȷ���Ƿ����޷��
  this.orbitTarg = WHEEL_RADIUS;
  this.easeOrbit = EASE_ORBIT_LOADER; //�������ٷ���
  this.easeCenter = EASE_CENTER_LOADER; //�������ٷ���
  this.radTarg = RAD_NORM;  
};

/**
 * �Ӽ���ģʽ�ͷ���
 */
Nub.prototype.exitLoader = function() {
  this.isLoading = false;
  this.orbitTarg = WHEEL_RADIUS;
  
  this.easeOrbit = EASE_ORBIT_EXIT_LOADER; //�������ٷ���
  this.easeCenter = EASE_CENTER_EXIT_LOADER; //�������ٷ���
  this.radTarg = RAD_NORM;
};

/**
 * ������
 */
Nub.prototype.rollOver = function() {
  this.isMouseOver = true;
  this.radTarg = RAD_OVER; //�����µ�Ŀ��뾶 
};

/**
 * ������ȥ
 */
Nub.prototype.rollOut = function() {
  this.isMouseOver = false;
  this.radTarg = RAD_NORM; //�����µ�Ŀ��뾶 
};

/**
 * ��ռnub
 */
Nub.prototype.grab = function() {
  this.velX = this.velY = 0; //����ռʱ�۶��ٶ�Ϊ0  
  this.easeOrbit = EASE_ORBIT_GRAB;
  this.easeCenter = EASE_CENTER_GRAB;
  
  this.isGrabbed = true;
  this.radTarg = RAD_GRAB; //�����µ�Ŀ��뾶
  this.orbitTarg = ORBIT_GRAB; //�����µ�Ŀ��뾶
  
  //��һ�����λ�ÿ�ʼ
  var ind = Math.floor(Math.random()*NUBS);
  if (ind == NUBS) ind = NUBS-1;
  //��ʼ��������
  for (var i = 0; i < NUBS; i++) {
    var n = this.machine.arrNubs[ind];
    if (n != this) { n.follow(i); }
    ind = (ind + 1) % NUBS;
  }
};

/**
 * �ͷ�nub
 */
Nub.prototype.drop = function() {
  this.isGrabbed = false;
  this.orbitTarg = WHEEL_RADIUS;
  
  this.easeOrbit = EASE_ORBIT_RESTORE;
  this.easeCenter = EASE_CENTER_RESTORE;
  this.radTarg = RAD_NORM;
  
  //���ٶ����ó����������Ĳ�ͬ
  this.velX = this.m.dx;
  this.velY = this.m.dy;
  var vxa = Math.abs(this.velX);
  var vya = Math.abs(this.velY);
  
  //�������Ƶ���С�����
  if (vxa > THROW_SPD_MAX) {
    this.velX = vxa/this.velX * THROW_SPD_MAX;
  } else if (vxa < THROW_SPD_MIN) {
    //��Ϊ�û�û���ƶ�����Ҫʹ�������Լ���dx
    if (this.dx == 0) this.velX = (Math.random() > 0.5 ? -1 : 1) * THROW_SPD_MIN; //��Ҫ��0����
    else this.velX = Math.abs(this.dx) / this.dx * THROW_SPD_MIN;
  }
  
  if (vya > THROW_SPD_MAX) {
    this.velY = vya/this.velY * THROW_SPD_MAX;
  } else if (vya < THROW_SPD_MIN) {
    //��Ϊ�û�û���ƶ�����Ҫʹ�������Լ���dx
    if (this.dy == 0) this.velY = (Math.random() > 0.5 ? -1 : 1) * THROW_SPD_MIN; //��Ҫ��0����
    else this.velY = Math.abs(this.dy) / this.dy * THROW_SPD_MIN;
  }
  
  var spd = Math.sqrt(vxa*vxa + vya*vya);
  //���߸�����ֹͣ����
  var ct = 1; var nub;
  for (var i = 0; i < NUBS; i++) {
    nub = this.machine.arrNubs[i];
    if (nub != this && nub.hasEntered) nub.unfollow(this, this.velX, this.velY, ct/NUBS);
    ct++;
  }  
};

/**
 * ���nub��ʼ����
 */
Nub.prototype.follow = function(indPm) {
  var r = indPm/(NUBS-1);
  this.orbitTarg = lerp(ORBIT_FOLLOW_MIN, ORBIT_FOLLOW_MAX, r);
  this.easeCenterFollow = lerp(EASE_CENTER_FOLLOW_MIN, EASE_CENTER_FOLLOW_MAX, r);

  this.easeOrbit = EASE_ORBIT_FOLLOW;
  this.easeCenter = this.easeCenterFollow; 
};

/**
 * ���nubֹͣ����
 */
Nub.prototype.unfollow = function(nubSource, vx, vy, damp) {
  //ʹ������Դ�ڵ�һ���ٶȣ�һ���ʻ��Դ�ڵ㷽��
  var dx = nubSource.xp1-this.xp1;
  var dy = nubSource.yp1-this.yp1;
  
  var r = 0.05; //�ö�������ʻ��Դ�ڵ� (0 to 1)
  this.velX = (dx*r + vx*(1-r))*damp;
  this.velY = (dy*r + vy*(1-r))*damp;
  this.orbitTarg = WHEEL_RADIUS;
  this.easeOrbit = EASE_ORBIT_RESTORE;
  this.easeCenter = EASE_CENTER_RESTORE;
};

/**
 * �������Ƿ񾭹�
 */
Nub.prototype.checkMouseOver = function() {
  //�������Ѿ���������һ��nub���ǲ��ô�����
  var dx = this.machine.getUserX() - this.xp1;
  var dy = this.machine.getUserY() - this.yp1;
  var distSq = dx*dx + dy*dy;
  return (distSq < ROLLOVER_RAD_SQ);
}

/**
 * �����Ǵӱ������أ��ڵ�һ������ʱ����
 */
Nub.prototype.returnFromBackground = function() {
  //��ʼ���켣����
  for (var i = 0; i < TRAIL_PTS; i++) {
    this.arrTrail[i] = new Point(this.xp0, this.yp0);
  }  
};

/**
 * ���»��ƺ���
 */
Nub.prototype.redraw = function() {  
  //����������ڼ��أ��������Ǽ���clip����ִ��
  if (!this.hasEntered) return;

  this.cv.beginPath();
  this.cv.fillStyle = '#FFFFFF';
  this.cv.arc(this.xp1+this.m.xo, this.yp1+this.m.yo, this.rad, 0, 2*MATH_PI);
  this.cv.fill();
  this.cv.closePath();
  
  var x0, y0, x1, y1, x2, y2, xh0, yh0, xh1, yh1, opac, rat;
  
  //��������ڱ����У����û��ƹ켣
  if (this.machine.isInBackground) return;
  
  x0 = this.arrTrail[0].x; y0 = this.arrTrail[0].y;
  x1 = this.arrTrail[1].x; y1 = this.arrTrail[1].y;
  
  //������Ҫ��nub��� - Ӧ���� TRAIL_PTS-1 ���С
  var TRAIL_PTS_LIM = TRAIL_PTS-2;
  //���ƹ켣
  for (var i = 1; i < TRAIL_PTS_LIM; i++) {
    //�ڹ켣���ñ���0~1
    rat = (i-1)/(TRAIL_PTS_LIM-2);
    //����Ŀǰ�ĵ�
    x2 = this.arrTrail[i].x; y2 = this.arrTrail[i].y;

    //�����һ����·��
    xh0 = x0 + (x1-x0)*0.5;
    yh0 = y0 + (y1-y0)*0.5;
    //������ǵڶ����㣬���������
    if (i == 1) continue;
    //���߼�����һ����·��
    xh1 = x1 + (x2-x1)*0.5;
    yh1 = y1 + (y2-y1)*0.5;
    
    this.cv.beginPath();
    this.cv.lineWidth = 1;
    //����͸����
    if (rat < TRAIL_FADEOUT) {
      opac = lerp(TRAIL_OPAC_MIN, TRAIL_OPAC_MAX, rat/TRAIL_FADEOUT);
    } else {
      opac = lerp(TRAIL_OPAC_MAX, TRAIL_OPAC_MIN, (rat-TRAIL_FADEOUT)/(1-TRAIL_FADEOUT));
    }
    this.cv.strokeStyle = 'rgba(255,255,255,'+opac+')';
    this.cv.moveTo(this.m.xo + xh0, this.m.yo + yh0);
    this.cv.quadraticCurveTo(
      this.m.xo + x1, this.m.yo + y1, //��һ�����Ƶ�
      this.m.xo + xh1, this.m.yo + yh1 //����ê��
    );
    //���ӵ�
    x0 = x1; y0 = y1; x1 = x2; y1 = y2;
    
    this.cv.stroke();
    this.cv.closePath();
  }
};

/**
 * ���º���
 */
Nub.prototype.setPos = function(x,y) {
  this.xp1 = x;
  this.yp1 = y;
};