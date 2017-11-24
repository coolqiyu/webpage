var gameDiv = document.getElementById("game");
var nextDiv = document.getElementById("next");
var score = document.getElementById("js-score");
var time = document.getElementById("js-time");
var startBtn = document.getElementById("js-start-btn");
var game = new Game({
	none:"none", 
	done:"done", 
	current:"current"},
	gameDiv, nextDiv);
game.init({width: 10, height: 15}, {width: 5, height: 5});
startBtn.addEventListener("click", function(){
	game.start();
	document.addEventListener("keydown", function(e){
		switch(e.keyCode){
			case 37://左
				game.move("left");
				break;
			case 38://上
				game.move("top");
				break;
			case 39://右
				game.move("right");
				break;
			case 40://下
				game.move("down");
				break;
			case 32://空格
				game.rotate();
				break;
		}
	})

	//每一秒更新
	setInterval(function(){
		score.innerHTML = game.score;
		time.innerHTML = Math.floor((new Date().getTime() - game.startTime) / 1000);
	}, 1000);
})