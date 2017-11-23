var gameDiv = document.getElementById("game");
var nextDiv = document.getElementById("next");
var game = new Game({
	none:"none", 
	done:"done", 
	current:"current"},
	gameDiv, nextDiv);
game.init({width: 10, height: 15}, {width: 5, height: 5});
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