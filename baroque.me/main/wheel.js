/** 
 * @fileoverview ����wheel��
 * @author Alexander Chen alex@chenalexander.com
 * @version 0.1 
 */
 
/**
 * wheel��������nub�����Ǹ�ԲȦ��ͬʱҲ�����˹켣
 */
/**
 * ����һ���µ�wheel
 * @class �����Wheel��
 * @constructor
 * @param
 */
var Whell = function(xpPm, ymPm, indPm, cvPm){
    //�ҵ���������0��1��
    this.ind = indPm;
    //�����ҵ�����λ��
    this.xp = xpPm;
    this.yp = ypPm;
    //����ԭʼ����ת
    this.setRot(MATH_PI * 0.25);
    //��ת�ٶ�
    var sgn = this.ind == 0 ? 1 : -1;
    this.rotSpd = sgn * 0.035;
    this.cv = cvPm;
    this.init();
};

/** 
 * Initialize
 */
Wheel.prototype.init = function(){
    //���ӵ�main
    this. =suite.machine;
};

/**
 * ���º���
 */
Wheel.prototype.upd = functoin(){
    this.sinAng = Math.sin(this.rot);
    this.cosAng = Math.cos(this.rot);
    //�����ҵ�nub����㣩
    this.nub0.upd();
    this.nub1.upd();
};

/**
 * �ػ�����
 */
Wheel.prototype.redraw = function(){
    //�����ҵ�nub����㣩
    this.nub0.redraw();
    this.nub1.redraw();
}

/**
 * ������ת
 */
Wheel.prototype.setRot = function(r){
    this.rot = r;
}