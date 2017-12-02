/**
 * 逻辑：
 * - A连接server为conn1, B连接server为conn2
 * - A的操作通过ws传输给server，server广播给所有其它连接
 * - B收到server的信息，把信息展示在对应的块上q
 */

var PORT = 3000;
var ws = require("nodejs-websocket");
var MAXCONN = 2;//定义有几个参与者
var id = 1;//给连接作标记
var hasDoneCnt = 0;//记录目前有几个是准备好的
var startTime;
var timeInterval;

var tryStart = function(conn, msg){
	if(msg["try"] === 0){//准备
		hasDoneCnt++;
		conn.sendText(JSON.stringify({"id": msg["id"], "op": "prepare"}));
	}	
	else if(msg["try"] === -1){//取消准备
		hasDoneCnt--;
		conn.sendText(JSON.stringify({"id": msg["id"], "op": "unprepare"}));
	}
}

/**
 * 广播消息
 * @param  conn currentConn 
 * @param  json msg         
 * @param   flag        是否给当前连接发消息, true是
 */
var broadcast = function(currentConn, msg, flag){
	// console.log("向所有连接发送信息: ", msg);
	msg = JSON.stringify(msg);
	var conns = server.connections.forEach(function(conn){
		if(flag || currentConn.id !== conn.id){
			console.log("sendText", conn.id, msg);
			conn.sendText(msg);
		}
	})
}

var handleMsg = function(currentConn, msg){
	msg = JSON.parse(msg);
	console.log("收到客户端信息：", msg);
	if("try" in msg){//客户端要连接或断开的消息
		tryStart(currentConn, msg);
		if(MAXCONN === hasDoneCnt){//所有玩家都准备好了
			//3秒后发送游戏开始的信息
			setTimeout(function(){
				msg = {"op": "start"};
				broadcast(currentConn, msg, true);
				startTime = Date.now();	
				//定时发送时间
				timeInterval = setInterval(function(){
					msg = {"time": (Date.now() - startTime)/1000};			
					broadcast(currentConn, msg, true);
				}, 1000);
			}, 3000);			
		}
	}
	else if("status" in msg){//发来状态的信息
		switch(msg["status"]){
			case -1://未准备
				broadcast(currentConn, msg, false);
				break;
			case 0://已准备
				broadcast(currentConn, msg, false);
				break;
			case 1://游戏开始
				broadcast(currentConn, msg, false);
				break;
			case 3:{//结束的信息
				if(server.connections.length > 1){
					broadcast(currentConn, msg, true);//当前连接的remote也需要处理结束的信息
				}
				clearInterval(timeInterval);//停止发送时间
				break;
			}
		}
	}
	else if("target" in msg){//想对某个用户进行作用
		if(msg["target"] === 0){//对所有，不包括自己
			broadcast(currentConn, msg, false);
		}
	}
	else
		broadcast(currentConn, msg, false);
}

var server = ws.createServer(function(conn){
	//给当前连接的玩家发一个id标识，不是广播
	//给连接增加id这个属性
	if(MAXCONN >= server.connections.length){//连接数达到最大
		//要直接用这个长度值做id，重新连接时会有问题
		conn.id = id;
		id++;
		var msg = JSON.stringify({"id": conn.id, "op":"setid"});	
		conn.sendText(msg);
		console.log(conn.id, "已连接");
	}
	else{//多余的连接暂时不允许进入
		console.log("暂时不连接");
		console.log(server.connections.length);
		conn.sendText(JSON.stringify({"error": "对不起，暂时不能进入"}));
		server.connections.pop();
		return;
	}
	//客户端传输数据, json格式，把这些数据转发给其它的连接
	conn.on("text", function(msg){
		handleMsg(conn, msg);
	})
	//客户端断开了连接
	conn.on("close", function(msg){
		msg = {"id": conn.id, "status": 5};
		console.log(msg);
		broadcast(conn, msg, false);
	})
	//增加异常关闭监听
	conn.on("error", function (code, reason) {
        console.log("异常关闭", code, reason);
    });

}).listen(PORT);








/**
 * 问题：A发过来的数据，A的remote也会处理（这个是不对的），它应该只处理其它对手的数据
 * 解决：给每个连接一个标识，当用户准备的时候给它发一个id
 *       或者说广播消息的时候不给当前的用户发，再写一个函数：可以排除一些用户
 *       他：每次都是对一发送，不是广播消息
 * 问题：传输矩阵数据的方法
 * 解决：通过type和direction值，没有传全部数据
 * 问题：自动下落的消息怎么处理？需要传输吗？
 * 解决：不传，直接自己调用方法
 * 问题：设计差别
 * 解决：我的是把所有相关的都放在game中，他则把自由下落的放在local中
 * 问题：local和remote对消息的处理有点复杂，总要判断是不是该接收该消息，感觉逻辑有点重
 * 解决：服务端不直接转发消息，而是对它先进行处理
 * 问题：有一个断开
 * 解决：剩下的自动获得胜利
 * 问题：断开重新连接时，应该怎么做？
 * 解决：两个中一个再刷新，然后点击准备，结果游戏就开始了
 */