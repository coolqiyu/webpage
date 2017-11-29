var oScore, oTime, currentSq, nextSq;
var Local = function(gameDiv, nextDiv, score, time, startBtn){
	// var gameDiv = document.getElementById("game");
	// var nextDiv = document.getElementById("next");
	// var score = document.getElementById("js-score");
	// var time = document.getElementById("js-time");
	// var startBtn = document.getElementById("js-start-btn");
	var self = this;
	oScore = score;
	oTime = time;
	//初始化游戏区域
	self.game = new Game({
		none:"none", 
		done:"done", 
		current:"current"},
		gameDiv, nextDiv);
	self.game.init({width: 10, height: 15}, {width: 5, height: 5});
	
	self.bindEvent = function(e){
		var msg = {};
		msg["id"] = ID;
		switch(e.keyCode){
			case 37://左
				self.game.move("left");
				msg["move"] = "left";
				break;
			case 38://上
				self.game.move("top");
				msg["move"] = "top";
				break;
			case 39://右
				self.game.move("right");
				msg["move"] = "right";
				break;
			case 40://下
				self.game.move("down");
				msg["move"] = "down";
				break;
			case 32://空格
				self.game.rotate();
				msg["rotate"] = 1;
				break;
		}
		ws.send(JSON.stringify(msg));
	};
	//开始游戏，准备按钮
	startBtn.addEventListener("click", function(){
		ws.send(JSON.stringify({"status":0}));
		//game.start();
		document.addEventListener("keydown", self.bindEvent);	
	})
}

Local.prototype.recieveMsg = function(msg){
	var self = this;
	
	//已经设置过id
	if("status" in msg && msg["status"] === 1){//服务端发来开始游戏的信息
		self.game.start();
		//每一秒更新
		var timeInterval = setInterval(function(){
			//更新得分和时间
			oScore.innerHTML = self.game.score;
			oTime.innerHTML = Math.floor((new Date().getTime() - self.game.startTime) / 1000);

			//发送当前状态的数据
			//1. 每次都把整个sq数据发过去，这个数据传输大一点
			//2. 只发送指令，可是next和current会变化的
			//	- 怎么确定应该修改sq数据？把上一次的存下来，判断不同的话才发数据
			msg = {"id": ID};
			if(currentSq !== self.game.currentSq){
				msg["currentSq"] = self.game.currentSq;
				msg["nextSq"] = self.game.nextSq;
			}
			msg["score"] = self.game.score;
			//每次自然下落的信息应该怎么传递？
			//msg["move"] = "down";
			ws.send(JSON.stringify(msg));

			//如果游戏状态为结束
			if(self.game.status === 1){
				clearInterval(timeInterval);
				document.removeEventListener("keydown", this.bindEvent);
				ws.send(JSON.stringify({"id": ID, "status": 2}));
			}
		}, 1000);
	}
}