/*首页的基本按钮功能*/
//常用的元素和变量
var body = document.body;
// var startBtn = document.getElementById("js-start");
// var ruleBtn = document.getElementById("js-rule");
// var setBtn = document.getElementById("js-setting");
// var oIndex = document.getElementById("js-index");
// var oRule = document.getElementById("js-rule");
// var oSetting = document.getElementById("js-setting");
// var ruleDone = document.getElementById("js-ruleDone");
// var setDone = document.getElementById("js-setDone");
var endHeader = document.getElementById("js-end-head");
var score = document.getElementById("js-score");
var bg = document.getElementById("js-bg");
var audio = document.getElementById("js-audio");
var music = document.getElementById("js-music");
var plane = document.getElementById("js-plane");
/*通过修改data-status和CSS来修改内容应该展示什么，就不用下面这种方法了*/
// startBtn.onclick = function(){
// 	oIndex.style.display = "block";
// 	oRule.style.display = "none";
// 	oSetting.style.display = "none";
// }
// ruleBtn.onclick = function(){
// 	oIndex.style.display = "none";
// 	oRule.style.display = "block";
// 	oSetting.style.display = "none";
// }
// setBtn.onclick = function(){
// 	oIndex.style.display = "none";
// 	oRule.style.display = "none";
// 	oSetting.style.display = "block";
// }
// ruleDone.onclick = function(){
// 	oIndex.style.display = "block";
// 	oRule.style.display = "none";
// 	oSetting.style.display = "none";
// }
// setDone.onclick = function(){
// 	oIndex.style.display = "block";
// 	oRule.style.display = "none";
// 	oSetting.style.display = "none";
// 	switch(bg.selectedIndex){
// 		case 0:
// 			document.body.className = "bg1";
// 			document.body.style.backgroundImage = "url(../img/bg_1.jpg)";
// 			break;
// 		case 1:
// 			document.body.className = "bg2";
// 			document.body.style.backgroundImage = "url(../img/bg_2.jpg)";
// 			break;
// 		case 2:
// 			document.body.className = "bg3";
// 			document.body.style.backgroundImage = "url(../img/bg_3.jpg)";
// 			break;
// 		case 3:
// 			document.body.className = "bg4";
// 			document.body.style.backgroundImage = "url(../img/bg_4.jpg)";
// 			break;	
// 	}
// }

//绑定button事件
function bindEvent(){
	var self = this;
	body.onclick = function(e){
		//按钮点击时需要重设音乐
		audio.src = resourceHelper.getSound("button");
		audio.loop = false;
		if(!e.target)
			return;
		switch(e.target.id){
			case "js-start":
				body.setAttribute("data-status", "");
				GAME.start();
				audio.src = resourceHelper.getSound("biu");
				audio.loop = true;
				audio.play();
				break;
			case "js-restart":
				body.setAttribute("data-status", "");
				GAME.start();
				audio.src = resourceHelper.getSound("biu");
				audio.loop = true;
				break;
			case "js-rule":
				//自定义属性需要用这个来修改
				body.setAttribute("data-status", "rule");
				break;
			case "js-setting":
				//设置的窗口
				body.setAttribute("data-status", "setting");
				break;
			case "js-confirm-rule":
				//阅读完规则
				body.setAttribute("data-status", "index");
				audio.src = resourceHelper.getSound("music");
				audio.loop = true;
				break;
			case "js-end":
				body.setAttribute("data-status", "index");
				audio.src = resourceHelper.getSound("music");
				audio.loop = true;
				break;
			case "js-confirm-set":
				//完成设置
				body.setAttribute("data-status", "index");
				audio.src = resourceHelper.getSound("music");
				audio.loop = true;
				switch(bg.selectedIndex){
					case 0:
						body.className = "bg1";
						body.style.backgroundImage = "url(../img/bg_1.jpg)";
						break;
					case 1:
						body.className = "bg2";
						body.style.backgroundImage = "url(../img/bg_2.jpg)";
						break;
					case 2:
						body.className = "bg3";
						body.style.backgroundImage = "url(../img/bg_3.jpg)";
						break;
					case 3:
						body.className = "bg4";
						body.style.backgroundImage = "url(../img/bg_4.jpg)";
						break;	
				}
				switch(plane.value){
					case "0":
						CONFIG.planeType = "bluePlaneIcon";
						break;
					case "1":
						CONFIG.planeType = "pinkPlaneIcon";
						break;
				}
				switch(music.value){
					case "0":
						audio.volume = 0;
						break;
					case "1":
						audio.volume = .8;
						break;
				}
				break;
			default:
				break;
		}
	}
}

/*游戏开始-canva画布*/
/*初始化工作*/
//画布相关
var canvas = document.getElementById("game");
var context = canvas.getContext("2d");
//设置画布的大小 这里是用width和height，不用style.widht吗？？？
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
//获取画布的相关信息
var canvasWidth = canvas.clientWidth;
var canvasHeight = canvas.clientHeight;

//判断是否有requestAnimationFrame方法
window.requestAnimationFrame = window.requestAnimationFrame ||
window.webkitRequestAnimationFrame ||
window.msRequestAnimationFrame ||
window.mozRequestAnimationFrame ||
function(callback){
	setTimeout(callback, 1000/60);
};

/**
 * 游戏对象，不需要生成GAME对象，那就不用构造函数
 */
var GAME = {
	/**
	 * 初始化基本属性
	 */
	init: function(opts){
		//设置opts
		var opts = Object.assign({}, opts, CONFIG);
		this.opts = opts;
		//计算飞机的初始坐标
		this.planePosX = canvasWidth / 2 - opts.planeSize.width / 2;
		this.planePosY = canvasHeight - opts.planeSize.height - 50;
		//记录每次的得分
		this.score = 0;//初始为0
		this.musicSswitch = music.switch || "on";
	},
	/**
	 * 开始游戏
	 */
	start: function(){
		var self = this;
		//初始化(清空原数据)
		var opts = this.opts;
		var images = this.images;
		this.enemies = [];
		this.score = 0;

		//随机生成敌机
		this.createSmallEnemyInterval = setInterval(function(){
			self.createEnemy('normal');
		}, 500);
		this.createBigEnemyInterval = setInterval(function(){
			self.createEnemy('big');
		}, 1500);

		//创建战机
		this.plane = new Plane({
			x: this.planePosX,
			y: this.planePosY,
			width: opts.planeSize.width,
			height: opts.planeSize.height,
			bulletSize: opts.bulletSize,
			bulletSpeed: opts.bulletSpeed,
			icon: resourceHelper.getImage(CONFIG.planeType),
			bulletIcon: resourceHelper.getImage('fireIcon'),
			boomIcon: resourceHelper.getImage('enemyBigBoomIcon'),
			boomCount: 10
		});
		this.plane.startShoot();
		//开始更新操作
		this.update();
	},
	/**
	 * 更新元素并进行重绘画布
	 */
	update: function(){
		var self = this;
		var opts = this.opts;
		//更新元素位置，然后进行绘制
		this.updateElement();
		//清空画布
		context.clearRect(0, 0, canvasWidth, canvasHeight);
		
		if(this.plane.status === 'boomed'){
			audio.src = resourceHelper.getSound('die');
			audio.loop = false;
			this.end();
			return;
		}

		this.draw();
		requestAnimationFrame(function(){
			self.update();
		});
	},
	/**
	 * 生成敌机
	 */
	createEnemy: function(enemyType){
		var enemies = this.enemies;
		var opts = this.opts;
		var images = this.images || {};
		var enemySize = opts.enemySmallSize;
		var enemySpeed = opts.enemySpeed;
		var	enemyIcon = resourceHelper.getImage('enemySmallIcon');
		var	enemyBoomIcon = resourceHelper.getImage('enemySmallBoomIcon');
		var enemyLive = 1;
		var enemyScore = 1;//击中该敌机可得多少分
		var boomCount = 6;//爆炸的时长
		//设置大型敌机
		if(enemyType === 'big'){
			enemySize = opts.enemyBigSize;
			enemyIcon = resourceHelper.getImage('enemyBigIcon');
			enemyBoomIcon = resourceHelper.getImage('enemyBigBoomIcon');
			enemySpeed = opts.enemySpeed * 0.6;
			enemyLive = 10;
			enemyScore = 10;
		}

		//把参数整合成一个对象
		var initOpt = {
			x: Math.floor(Math.random() * (canvasWidth - enemySize.width)),
			y: -enemySize.height,
			enemyType: enemyType,
			live: enemyLive,
			width: enemySize.width,
			height: enemySize.height,
			speed: enemySpeed,
			icon: enemyIcon,
			boomIcon: enemyBoomIcon,
			score: enemyScore,
			boomCount: boomCount
		}
		//如果敌机数量不大于最大值，则新增
		if(enemies.length < opts.enemyMaxNum){
			enemies.push(new Enemy(initOpt));
		}
	},
	/**
	 * 更新敌机位置的方法
	 */
	updateElement: function(){
		var opts = this.opts;
		var enemySize =opts.enemySize;
		var enemies = this.enemies;
		var i = enemies.length;

		//飞机已经在爆炸过程中
		if(this.plane.status === 'booming'){
			this.plane.booming();
			return;
		}

		//更新敌机
		while(i--){
			var enemy = enemies[i];
			enemy.down();
			//如果超过边界，则让它消失
			if(enemy.y >= canvasHeight){
				this.enemies.splice(i, 1);
			}else{
			//判断战机的状态，如果发生碰撞，则变成 booming
			if(this.plane.status === 'normal'){
				if(this.plane.hasCrash(enemy)){
					audio.src = resourceHelper.getSound("boom");
					audio.loop = true;
					this.plane.booming();
				}
			}
			//根据敌机的状态来设置
			//为什么6帧：直接消失的话，肉眼没感觉
			//normal-booming 6帧-boomed消失
			switch(enemy.status){
				case 'normal':
				//为什么要多一个hit方法？而不直接用bullet的方法？
				//答：为了区分不同的用户，如果可以多人玩
				if(this.plane.hasHit(enemy)){
					enemy.live -= 1;
					if(enemy.live === 0){
						enemy.booming();
					}
				}
				break;
				case 'booming':
				enemy.booming();
				break;
				case 'boomed':
				this.score = this.score + enemy.score;
				enemies.splice(i, 1);
				break;
			}
			}
		}
	},
	//绑定触屏事件
	bindTouchAction:function(){
		var opts = this.opts;
		var self = this;
		var planeMinX = 0;
		var planeMinY = 0;
		var planeMaxX = canvasWidth - opts.planeSize.width;
		var planeMaxY = canvasHeight - opts.planeSize.height;

		var startTouchX;
		var startTouchY;
		var startPlaneX;
		var startPlaneY;

		//开始触摸
		canvas.addEventListener('touchstart', function(e){
			var plane = self.plane;
			startTouchX = e.touches[0].clientX;
			startTouchY = e.touches[0].clientY;
			startPlaneX = plane.x;
			startPlaneY = plane.y;
		});
		//手指移动
		canvas.addEventListener('touchmove', function(e){
			var newTouchX = e.touches[0].clientX;
			var newTouchY = e.touches[0].clientY;

			var newPlaneX = startPlaneX + newTouchX - startTouchX;
			var newPlaneY = startPlaneY + newTouchY - startTouchY;
			//保证飞机不会越界
			if(newPlaneX < planeMinX){
				newPlaneX = planeMinX;
			}
			if(newPlaneX > planeMaxX){
				newPlaneX = planeMaxX;
			}
			if(newPlaneY < planeMinY){
				newPlaneY = planeMinY;
			}
			if(newPlaneY > planeMaxY){
				newPlaneY = planeMaxY;
			}
			self.plane.setPosition(newPlaneX, newPlaneY);
			return false;
		});
		canvas.addEventListener('touchend', function(e){
			
			// var newTouchX = e.touches[0].clientX;
			// var newTouchY = e.touches[0].clientY;
		})
	},
	/**
	 * 结束
	 */
	end: function(){
		body.setAttribute("data-status", "end");
		score.innerHTML = this.score;
		for(var i = 0, len = CONFIG.endHeader.length; i < len; i++){
			if(this.score <= CONFIG.endHeader[i].score){
				endHeader.innerHTML = CONFIG.endHeader[i].text;
				break;
			}
		}
	},
	/**
	 * 绘制整个画布上的元素
	 */
	draw: function(){
		//遍历绘制敌机
		this.enemies.forEach(function(enemy){
			//console.log(enemy);
			enemy.draw();
		});
		//绘制战机
		this.plane.draw();

		//写分数
		context.fillStyle = "white";
		context.font = "20px Arial";
		context.fillText("得分：" + this.score, canvasWidth - 100, 30);
	},
};


/*页面主入口*/
!(function init(){
	resourceHelper.load(CONFIG.resources, function(){
		GAME.init();
		GAME.bindTouchAction();
		bindEvent();
	});	
})()