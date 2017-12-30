把访问记录写在服务端的文件中，以当天的日期来存储
当客户端访问时，可以把当天的记录写出来

/**
websocket服务端接收信息
*/
// var db = require("./db");
var PORT = 8880;
// var ws = require('nodejs-websocket');
// console.log(db);
// var server = ws.createServer(function(conn){
// 	//客户端发来消息
// 	conn.on('text', function(str){
// 		var obj = JSON.parse(str);
// 		console.log(obj);
// 		if(obj.type === 'register'){
// 			db.insert('user', `${obj.name}, ${obj.password}`)
// 			conn.sendText(JSON.stringify({
// 				"token": "12345678", 
// 				"type": "register"
// 			}));
// 			console.log("12123123");
// 		}
// 	})
// }).listen(PORT);

var http = require("http");
var ws = require('nodejs-websocket');


var httpServer = http.createServer(function(req, res){
	console.log("httpServer");
}).listen(PORT);
//基于httpServer，创建wsServer
var wsServer = ws.createServer(function(connection){

});