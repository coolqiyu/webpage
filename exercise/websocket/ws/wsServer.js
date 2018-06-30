/*
安装webSocket
1. npm install nodejs-websocket
2. 安装在当前目录的node_module文件夹下
运行该server
node weServer.js
*/

/*
基本使用
1. var ws = require('nodejs-websocket');引入websocket模块
2. ws.createServer(function(){})//创建一个server
3. createServer的参数function(conn)是一个回调函数，当有联接时会自动调用
4. 对连接的处理，包括发送消息，关闭连接等，可添加下列回调函数进行处理
conn.on('text', function(){})  conn.on('close',function(){})
*/
/*
聊天室功能
1. 广播消息：每来一个连接/离开就告诉其它人
server.connections.forEach(function(conn){})
2. 区分消息：进入、离开、系统等
对消息添加一个状态，用一个对象来保存数据
var msg = {"type":0, "content": 0}
msgStr = JSON.stringify(msg)   msg = JSON.parse(msgStr)
3. 上面我们进行区分消息的操作与业务不是紧密关联的
因为其它业务也同样需要该操作，这种应该交给框架来做
*/
var PORT = 3000;
var ws = require('nodejs-websocket');
var clientCount = 0;
var msg = {"type":0, "content": 0};//要发送的消息
//在这个回调函数里面写，如何处理这个连接conn
//conn: 当客户端连接时会回调该函数，conn就表示该连接
var server = ws.createServer(function (conn) {
	clientCount++;//记录连接的数量
	conn.nickName = "user" + clientCount;//根据数量给每个conn起一个名字

	 console.log(conn);

	 //在新的连接到来时，广播通知其它人
	 msg.type = "enter";
	 msg.content = conn.nickName + " comes in";
	 broadcast(msg);

	 //conn在发消息过来时
	 conn.on('text', function(str){
	 	console.log('received' + str);
	 	//把收到的消息再发回去
	 	msg.type = "message";
	 	msg.content = conn.nickName + " says: " + str;
	 	broadcast(msg);
	 })
	 //连接关闭时
	 conn.on('close', function(code, reason){	 	
	 	msg.type = "leave";
		msg.content = conn.nickName + " leaves";
	 	broadcast(msg);
	 	console.log('connection close');
	 })
	 //发生错误时
	 conn.on("error", function(err){
	 	console.log("handle err");
	 })
}).listen(PORT);
console.log("listen on" + PORT)

//广播方法，对所有连接发送消息
function broadcast(str){
	//server.connections可以取到所有server下的连接
	server.connections.forEach(function(connection){
		connection.sendText(JSON.stringify(msg));
	})
}