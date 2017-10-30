/**
 * 飞机类
 * 特有属性：status、icon、bullet、bulletSpeed、bulletSize
 * 特有方法：修改位置、是否碰撞、是否击中、开始发射
 * 重写：draw、drawBullets
 */

//hasHit
//这个目标要怎么判断？？？要遍历每个敌击吗？
//为什么要从后向前遍历呢？？？
//为什么很多函数都返回this？
//组合继承？？call 和 = new Element()
/**
 * 子类 Plane飞机
 * 1. 继承Element
 * 2. 依赖Bullet
 */
var Plane = function(opts){
	var opts = opts || {};
	Element.call(this, opts);

	this.status = 'normal';
	this.icon = opts.icon;
	this.bullets = [];
	this.bulletSize = opts.bulletSize;
	this.bulletSpeed = opts.bulletSpeed;
	this.bulletIcon = opts.bulletIcon;

	this.boomIcon = opts.boomIcon;
	this.boomCount = opts.boomCount || 5;
}

Plane.prototype = new Element();

/**
 * 是否与target碰撞
 * @param  {target}  target 目标元素
 * @return {Boolean}        是否碰撞
 */
Plane.prototype.hasCrash = function(target){
	var crash = false;
	//检测四个方向
	if(!(this.x + this.width < target.x) &&
	!(target.x + target.width < this.x) &&
	!(this.y + this.height < target.y) &&
	!(target.y + target.height < this.y)){
		crash = true;
	}
	return crash;
}

/**
 * 判断是否击中target元素
 * @param  {target}  target 目标元素
 * @return {Boolean}        是否击中
 */
Plane.prototype.hasHit = function(target){
	var bullets = this.bullets;
	var hasHit = false;
	//遍历发出的每个子弹，判断是否碰撞
	for(var j = bullets.length - 1; j>= 0; j--){
		//如果碰撞，则销毁
		if(bullets[j].hasCrash(target)){
			this.bullets.splice(j, 1);
			hasHit = true;
			break;
		}
	}
	return hasHit;
};

Plane.prototype.setPosition = function(newPlaneX, newPlaneY){
	this.x = newPlaneX;
	this.y = newPlaneY;
	return this;
}

/**
 * 自动进行射击，通过定时器实现
 */
Plane.prototype.startShoot = function(){
	var self = this;
	//获取子弹的大小
	var bulletWidth = this.bulletSize.width;
	var bulletHeight = this.bulletSize.height;

	//定时发射子弹
	this.shootingInterval = setInterval(function(){
		var bulletX = self.x + self.width / 2 - bulletWidth / 2;
		var bulletY = self.y - bulletHeight;
		self.bullets.push(new Bullet({
			x: bulletX,
			y: bulletY,
			width: bulletWidth,
			height: bulletHeight,
			speed: self.bulletSpeed,
			icon: self.bulletIcon,
		}));
	}, 200);
}

/**
 * 绘制子弹
 */
Plane.prototype.drawBullets = function(){
	var bullets = this.bullets;
	var i = bullets.length;
	//遍历每个子弹
	while(i--){
		var bullet = bullets[i];
		//子弹移动
		bullet.fly();
		//如果出去了，则删除
		if(bullet.y <= 0){
			bullets.splice(i, 1);
		}else{//还在范围内，则绘制
			bullet.draw();
		}
	}
}

Plane.prototype.booming = function(){
	this.status = 'booming';
	this.boomCount--;
	if(this.boomCount === 0){
		this.status = 'boomed';
		//清空射击的定时器
		clearInterval(this.shootingInterval);
	}
}

Plane.prototype.draw = function(){
	switch(this.status){
		case 'booming':
		context.drawImage(this.boomIcon, this.x, this.y, this.width, this.height);
		break;
		default:
		context.drawImage(this.icon, this.x, this.y, this.width, this.height);
		break;
	}
	this.drawBullets();
	return this;
}