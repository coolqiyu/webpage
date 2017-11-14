/**
客户端创建一个websocket接口，连接服务器
*/
var HOST = "127.0.0.1";//服务器地址
var PORT = 8880;//服务器端口
var websocket;
var WEBSOCKET = {
	createSocket: function(host, port){
		var self = this;
		host = host || HOST;
		port = port || PORT;
		websocket = new WebSocket(`ws://${host}:${port}`);
		websocket.addEventListener("message", function(e){
			self.handleData(e.data);
		});
		websocket.addEventListener("open", function(){
			console.log("open");
		});
		websocket.addEventListener("error", function(){
			console.log("error");
		});
	},
	sendMsg: function(msg, type){
		switch(type){
			case 'json':
				websocket.send(JSON.stringify(msg));
				break;
		}
		//return true;//如果发送成功，则执行
	}, 
	handleData: function(data){
		var dataObj = JSON.parse(data);
		switch(data.type){
			case 'register':
				break;
		}
	}
// websocket.onopen = function(){
// 	websocket.send("我想连接");
// }

// websocket.onclose = function(){
// 	//关闭连接时，没有什么提示吧
// }

// //收到服务端主动发来的消息
// websocket.onmessage = function(e){

// }

// function register(data){
// 	websocket.send(data);//发送注册的信息
// }


}

WEBSOCKET.createSocket();//创建一个websocket