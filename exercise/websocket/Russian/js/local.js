var Local = function(gameDiv, nextDiv, score, time, startBtn){
	// var gameDiv = document.getElementById("game");
	// var nextDiv = document.getElementById("next");
	// var score = document.getElementById("js-score");
	// var time = document.getElementById("js-time");
	// var startBtn = document.getElementById("js-start-btn");
	
	//初始化游戏区域
	var game = new Game({
		none:"none", 
		done:"done", 
		current:"current"},
		gameDiv, nextDiv);
	game.init({width: 10, height: 15}, {width: 5, height: 5});
	
	var bindEvent = function(e){
		switch(e.keyCode){
			case 37://左
				game.move("left");
				ws.send(JSON.stringify({"move":"left"}));
				break;
			case 38://上
				game.move("top");
				ws.send(JSON.stringify({"move":"top"}));
				break;
			case 39://右
				game.move("right");
				ws.send(JSON.stringify({"move":"right"}));
				break;
			case 40://下
				game.move("down");
				ws.send(JSON.stringify({"move":"down"}));
				break;
			case 32://空格
				game.rotate();
				ws.send(JSON.stringify({"rotate":1}));
				break;
		}
	};
	//开始游戏
	startBtn.addEventListener("click", function(){
		game.start();
		document.addEventListener("keydown", bindEvent);
		//每一秒更新
		var timeInterval = setInterval(function(){
			score.innerHTML = game.score;
			ws.send(JSON.stringify({"score":game.score}));
			time.innerHTML = Math.floor((new Date().getTime() - game.startTime) / 1000);
			//如果游戏状态为结束
			if(game.status === 1){
				clearInterval(timeInterval);
				document.removeEventListener("keydown", bindEvent);
				ws.send(JSON.stringify({"game":1}));
			}
		}, 1000);
	})
}