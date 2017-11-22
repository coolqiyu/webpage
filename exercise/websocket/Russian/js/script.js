var gameDiv = document.getElementById("game");
var nextDiv = document.getElementById("next");
var game = new Game({
	none:"none", 
	done:"done", 
	current:"current"},
	gameDiv, nextDiv);
game.init({width: 10, height: 15}, {width: 5, height: 5});