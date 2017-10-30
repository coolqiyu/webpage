/**
 * 父类：element对象
 */
//构造函数，初始化工作
var Element = function(opts){
	var opts = opts || {};
	this.x = opts.x;
	this.y = opts.y;
	this.width = opts.width;
	this.height = opts.height;
	this.speed = opts.speed;
};
//对象原型，定义对象的方法属性
Element.prototype = {
/**
 * 原型方法 move
 */
 move: function(x, y){
 	var addX = x || 0;
 	var addY = y || 0;
 	this.x += x;
 	this.y += y;
 },
 draw: function(){
 }
};
