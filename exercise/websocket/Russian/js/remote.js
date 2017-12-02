var Remote = function(gameDiv, nextDiv, score, startBtn, ws, msgDiv){	
	//初始化游戏区域
	var game = new Game({
		none:"none", 
		done:"done", 
		current:"current"},
		gameDiv, nextDiv);
	game.init({width: 10, height: 15}, {width: 5, height: 5});

	var handleMsg = function(msg){
		console.log("server: ", msg);
		if("status" in msg)
			switch(msg["status"]){
				case -1:
					startBtn.innerHTML = "未准备";
					break;
				case 0:
					startBtn.innerHTML = "已准备";
					break;
				case 1:
					startBtn.style.display = "none";
					break;
				case 3:
					msgDiv.style.display = "block";
					if(ID === msg["id"])//local发出的结束信息
						msgDiv.innerHTML = "赢了";
					else if(ID !== msg["id"])//其它local发出的结束信息
						msgDiv.innerHTML = "输了";
					break;
				case 5://断开了连接
					startBtn.style.display = "block";
					startBtn.innerHTML = "未连接";
					break;
		}		
		if(msg["current"]){
			game.createSq(msg["current"].type, msg["current"].dir, 0);
			game.resetOrigin(0);
			game.refresh(0);
		}
		if(msg["next"]){	
			if(!msg["current"]){//如果只发了一个next数据
				game.performNext(msg["next"].type, msg["next"].dir);
			}
			else{
				game.createSq(msg["next"].type, msg["next"].dir, 1);
				game.resetOrigin(1);
				game.refresh(1);
			}			
		}
		if(msg["move"])
			game.move(msg["move"]);
		if(msg["rotate"])
			game.rotate();
		if(msg["score"])
			score.innerHTML = msg["score"];	
		if(msg["fixed"]){
			game.fixed();
		}
		if(msg["clearline"])
			game.clearLine();
		if(msg["addline"]){
			game.addLines(msg["addline"]);
		}
	};
	ws.addEventListener("message", function(e){
		var msg = JSON.parse(e.data);
		handleMsg(msg);
	});
}
// //对ws收到的msg进行响应
// Remote.prototype.recieveMsg = function(msg){	
// }