/**
 * 子类，emeny对象
 */
var Enemy = function(opts){
	var opts = opts || {};
	//执行父类构造函数，把父类有的属性初始化一下
	Element.call(this, opts);

	//特有属性状态和图标
	this.status = 'normal';//normal, boom
	this.icon = opts.icon;
	this.live = opts.live;//生命值，击中多少次才会爆炸
	this.type = opts.type;
	this.boomIcon = opts.boomIcon;
	this.boomCount = opts.boomCount || 5;
	this.score = opts.score || 1;
};
//继承Element的方法
Enemy.prototype = new Element();

/**
 * down 向下移动一个身位，把down添加到Enemy.prototype中
 */
Enemy.prototype.down = function(){
	this.move(0, this.speed);
}
Enemy.prototype.booming = function(){
	this.status = 'booming';
	this.boomCount--;
	//用6帧来展示爆炸，所以爆炸次数超过6次时消失
	if(this.boomCount === 0){
		this.status = 'boomed';
	}
}
/**
 * draw方法，重写
 */
Enemy.prototype.draw = function(){
	// context.drawRect(2, 2, 10, 10);
	switch(this.status){
		case 'normal':
			context.drawImage(this.icon, this.x, this.y, this.width, this.height);
			break;
		case 'booming':
			context.drawImage(this.boomIcon, this.x, this.y, this.width, this.height);
			break;
	}
}