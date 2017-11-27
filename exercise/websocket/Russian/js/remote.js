var Remote = function(gameDiv, nextDiv, score, time, startBtn){	
	//初始化游戏区域
	this.game = new Game({
		none:"none", 
		done:"done", 
		current:"current"},
		gameDiv, nextDiv);
	this.game.init({width: 10, height: 15}, {width: 5, height: 5});
}

//对ws收到的msg进行响应
Remote.prototype.recieveMsg = function(msg){
	msg = JSON.parse(msg);
	if(msg["move"])
		this.game.move(msg["move"]);
	if(msg["rotate"])
		this.game.rotate();
	if(msg["score"])
		score.innerHTML = msg["score"];
	else{
		// switch(msg["status"]){
		// 	case 1:
		// 		this.game.start();
		// 		break;
		// 	case 2:
		// 		this.game.end();
		// 		break;
		// }
	}	
}