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
	if(msg["currentSq"]){
		this.game.currentSq.data = msg["currentSq"].data;
		this.game.currentSq.origin = msg["currentSq"].origin;
	}
	if(msg["nextSq"]){		
		this.game.nextSq.data = msg["nextSq"].data;
		this.game.nextSq.origin = msg["nextSq"].origin;
		this.game.clearData(this.game.nextData, this.game.nextSq.origin, this.game.nextSq.data);			
		this.game.setData(this.game.gameData, this.game.currentSq.origin, this.game.currentSq.data);
		this.game.drawData(this.game.gameData, this.game.gameDiv);
		this.game.setData(this.game.nextData, this.game.nextSq.origin, this.game.nextSq.data);
		this.game.drawData(this.game.nextData, this.game.nextDiv);
	}
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