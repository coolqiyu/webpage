/**
 * 逻辑：
 * - A连接server为conn1, B连接server为conn2
 * - A的操作通过ws传输给server，server广播给所有其它连接
 * - B收到server的信息，把信息展示在对应的块上q
 */

var PORT = 3000;
var ws = require("nodejs-websocket");
var currentConn;
var connCnt = 2;//定义有几个参与者
var server = ws.createServer(function(conn){
	currentConn = conn;
	console.log("get connect");
	//客户端传输数据, json格式，把这些数据转发给其它的连接
	//game: 0/1/2 状态
	//move: 方向操作
	//rotate: 旋转
	conn.on("text", function(msg){
		currentConn = conn;
		console.log("msg: ", msg);
		if(connCnt > 0){
			checkStart(msg);		
			//给当前连接的玩家发一个id标识，不是广播
			msg = JSON.stringify({"id":connCnt});	
			conn.sendText(msg);	
			if(connCnt === 0)//所有玩家都准备好了，发送游戏开始的信息
				msg = JSON.stringify({"status": 1})		
		}
		if(connCnt === 0)
			broadcast(msg);
	})
}).listen(PORT);

var checkStart = function(msg){
	msg = JSON.parse(msg);	
	if("status" in msg && msg["status"] === 0){
		connCnt--;
		console.log("connCnt = ", connCnt);
	}
}
var broadcast = function(msg){
	console.log("向所有连接发送信息: ", msg);
	var conns = server.connections.forEach(function(conn){
		conn.sendText(msg);
	})
}
var broadcastExt = function(msg){
	console.log("向所有连接发送信息: ", msg);
	var conns = server.connections.forEach(function(conn){
		if(conn !=== currentConn)
			conn.sendText(msg);
	})
}
/**
 * 问题：A发过来的数据，A的remote也会处理（这个是不对的），它应该只处理其它对手的数据
 * 解决：给每个连接一个标识，当用户准备的时候给它发一个id
 *       或者说广播消息的时候不给当前的用户发，再写一个函数：可以排除一些用户
 */