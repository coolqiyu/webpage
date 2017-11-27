/**
 * 逻辑：
 * - A连接server为conn1, B连接server为conn2
 * - A的操作通过ws传输给server，server广播给所有其它连接
 * - B收到server的信息，把信息展示在对应的块上q
 */

var PORT = 3000;
var ws = require("nodejs-websocket");
var connCnt = 2;//定义有几个参与者
var server = ws.createServer(function(conn){
	console.log("get connect");
	//客户端传输数据, json格式，把这些数据转发给其它的连接
	//game: 0/1/2 状态
	//move: 方向操作
	//rotate: 旋转
	conn.on("text", function(msg){
		console.log("msg: ", msg);
		if(connCnt > 0){
			checkStart(msg);			
			if(connCnt === 0)//所有玩家都准备好了
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