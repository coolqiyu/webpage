/** 
 * @fileoverview 包含wheel类
 * @author Alexander Chen alex@chenalexander.com
 * @version 0.1 
 */
 
/**
 * wheel：包括了nub这是那个圆圈，同时也包含了轨迹
 */
/**
 * 建造一个新的wheel
 * @class 这个是Wheel类
 * @constructor
 * @param
 */
var Whell = function(xpPm, ymPm, indPm, cvPm){
    //我的索引数（0或1）
    this.ind = indPm;
    //设置我的中心位置
    this.xp = xpPm;
    this.yp = ypPm;
    //设置原始的旋转
    this.setRot(MATH_PI * 0.25);
    //旋转速度
    var sgn = this.ind == 0 ? 1 : -1;
    this.rotSpd = sgn * 0.035;
    this.cv = cvPm;
    this.init();
};

/** 
 * Initialize
 */
Wheel.prototype.init = function(){
    //链接到main
    this. =suite.machine;
};

/**
 * 更新函数
 */
Wheel.prototype.upd = functoin(){
    this.sinAng = Math.sin(this.rot);
    this.cosAng = Math.cos(this.rot);
    //更新我的nub（结点）
    this.nub0.upd();
    this.nub1.upd();
};

/**
 * 重画函数
 */
Wheel.prototype.redraw = function(){
    //更新我的nub（结点）
    this.nub0.redraw();
    this.nub1.redraw();
}

/**
 * 设置旋转
 */
Wheel.prototype.setRot = function(r){
    this.rot = r;
}