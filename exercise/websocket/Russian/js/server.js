/**
 * 逻辑：
 * - A连接server为conn1, B连接server为conn2
 * - A的操作通过ws传输给server，server广播给所有其它连接
 * - B收到server的信息，把信息展示在对应的块上q
 */

var PORT = 3000;
var ws = require("nodejs-websocket");

var server = ws.createServer(function(conn){
	console.log(conn);
	//客户端传输数据, json格式，把这些数据转发给其它的连接
	//game: 0/1/2 状态
	//move: 方向操作
	//rotate: 旋转
	conn.on("text", function(data){
		broadcast(data);
	})
}).listen(PORT);

var broadcast = function(msg){
	var conns = server.connections.forEach(function(conn){
		conn.sendText(msg);
	})
}