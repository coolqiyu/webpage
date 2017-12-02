var Local = function(gameDiv, nextDiv, score, startBtn, ws, msgDiv){
	var oScore, currentSq, nextSq;
	var timeSpan = 1000;
	oScore = score;
	//初始化游戏区域
	var game = new Game({
		none:"none", 
		done:"done", 
		current:"current"},
		gameDiv, nextDiv);
	game.init({width: 10, height: 15}, {width: 5, height: 5});
	
	//绑定键盘事件
	var bindEvent = function(e){
		var msg = {};
		msg["id"] = ID;
		switch(e.keyCode){
			case 37://左
				game.move("left");
				msg["move"] = "left";
				break;
			case 38://上
				game.move("top");
				msg["move"] = "top";
				break;
			case 39://右
				game.move("right");
				msg["move"] = "right";
				break;
			case 40://下
				game.move("down");
				msg["move"] = "down";
				break;
			case 32://空格
				game.rotate();
				msg["rotate"] = 1;
				break;
		}
		ws.send(JSON.stringify(msg));
	};

	var randomSq = function(){
		var type = Math.floor(Math.random() * 7) + 1;
		var dir = Math.floor(Math.random() * 4) + 1;
		return {"type": type, "dir": dir};
	}
	var intervalTimer;//定时器
	var start = function(){
		var msg = {"id": ID};
		//current
		var sqData = randomSq();
		game.createSq(sqData.type, sqData.dir, 0);
		msg["current"] = sqData;
		//next
		sqData = randomSq();
		game.createSq(sqData.type, sqData.dir, 1);
		msg["next"] = sqData;		
		//发送自己的数据到服务端
		ws.send(JSON.stringify(msg));

		//绘制current和next方块
		game.refresh(0);
		game.refresh(1);
		startTime = new Date().getTime();
		
		//定时控制当前方块下落，基本逻辑
		intervalTimer = setInterval(function(){
			ws.send(JSON.stringify({"id": ID, "move": "down"}));
			if(!game.move("down")){
				//当current不能动了，需要把它的样式改掉
				game.fixed();
				ws.send(JSON.stringify({"id": ID, "fixed": 1}));
				//先fixed，再判断结束，否则最后一个的样式不会变
				//如果当前方块在y=0位置时就无法移动，则游戏结束
				if(!game.currentSq.origin.y){
					clearInterval(intervalTimer);
					//游戏结束的信息要群发，且每个人的local/remote都需要处理
					ws.send(JSON.stringify({"id": ID, "status": 3}));
					// alert("game over");
					game.status = 3;
					return;
				}				
				var lineCnt = game.clearLine();
				if(lineCnt){
					score.innerHTML = game.score;
					ws.send(JSON.stringify({"id": ID, "score": game.score}));
					ws.send(JSON.stringify({"id": ID, "clearline": lineCnt}));
					//ID给所有target addline消息					
					ws.send(JSON.stringify({"id": ID, "target": 0, "addline": lineCnt}));
				}
				//当current不能动了，需要让current = next，且重新生成一个next
				sqData = randomSq();
				game.performNext(sqData.type, sqData.dir, 1);
				ws.send(JSON.stringify({"id": ID, "next": sqData}));
			}
			ws.send(JSON.stringify({"id": ID, "score": game.score}));
		}, timeSpan);
	};

	//准备按钮
	startBtn.addEventListener("click", function(){
		if(game.status === -1)//未准备
			ws.send(JSON.stringify({"id": ID, "try":0}));
		else if(game.status === 0)//已准备
			ws.send(JSON.stringify({"id": ID, "try":-1}));				
	});	

	var handleMsg = function(msg){
		if("op" in msg){
			//未设置过id
			if(ID === undefined && msg["op"] === "setid"){
				ID = msg["id"];
			}
			else if(msg["op"] === "start"){//服务端发来开始游戏的信息			
				ws.send(JSON.stringify({"id": ID, "status": 1}));//告知自己开始游戏
				localStartBtn.style.display = "none";
				start();
				game.status = 2;
				//game.start();
				document.addEventListener("keydown", bindEvent);
			}
			else if(msg["op"] === "prepare"){
				game.status = 0;
				startBtn.innerHTML = "已准备";
				ws.send(JSON.stringify({"id": ID, "status": 0}));
			}
			else if(msg["op"] === "unprepare"){
				game.status = -1;
				startBtn.innerHTML = "准备";
				ws.send(JSON.stringify({"id": ID, "status": -1}));
			}
		}	
		if("status" in msg){
			if(msg["status"] === 3){
				msgDiv.style.display = "block";
				if(msg["id"] !== ID){//别人发出结束的消息
					msgDiv.innerHTML = "赢了";
				}				
				else//自己发出的就不用处理
					msgDiv.innerHTML = "输了";
				clearInterval(intervalTimer);
				document.removeEventListener("keydown", bindEvent);
			}	
		}
		if("target" in msg){
			//增加行：目标是当前id，或者目标是所有且不是当前local发出的消息
			if(msg["addline"]){
				var lines = game.randLines(msg["addline"]);
				game.addLines(lines);
				ws.send(JSON.stringify({"id": ID, "addline": lines}));
			}
		}
	};
	ws.addEventListener("message", function(e){
		var msg = JSON.parse(e.data);
		handleMsg(msg);
	});
	// this.game = game;
	// this.start = start;
}