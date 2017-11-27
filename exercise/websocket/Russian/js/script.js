// 打开websocket
var ws = new WebSocket("ws://localhost:3000");

//当前用户
var localGameDiv = document.getElementById("js-local-game");
var localNextDiv = document.getElementById("js-local-next");
var localScore = document.getElementById("js-local-score");
var localTime = document.getElementById("js-local-time");
var localStartBtn = document.getElementById("js-local-start-btn");
var local = new Local(localGameDiv, localNextDiv, localScore, localTime, localStartBtn);
// localStartBtn.addEventListener("click", function(){
// 	local.start();
// })

//对手
var remoteGameDiv = document.getElementById("js-remote-game");
var remoteNextDiv = document.getElementById("js-remote-next");
var remoteScore = document.getElementById("js-remote-score");
var remoteTime = document.getElementById("js-remote-time");
var remoteStartBtn = document.getElementById("js-remote-start-btn");
var remote = new Remote(remoteGameDiv, remoteNextDiv, remoteScore, remoteTime, remoteStartBtn);
ws.onmessage = function(e){
	var msg = e.data;
	console.log("收到服务信息：", msg);
	//if(local.game.status < 1)//当“我的”还没开始时由local来处理信息
	local.recieveMsg(msg);
	//else
	remote.recieveMsg(msg);
}