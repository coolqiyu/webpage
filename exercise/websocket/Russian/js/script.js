// 打开websocket
var ws = new WebSocket("ws://localhost:3000");
var ID;//玩家的id号
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
	var msg = JSON.parse(e.data);
	console.log("收到服务信息：", msg);
	if(ID === undefined){//未设置过id
		if("op" in msg && msg["op"] === "setid")
			ID = msg["id"];
	}
	else if("id" in msg && ID !== msg["id"]){//别人发过来的消息，需要由remote处理	
		remote.recieveMsg(msg);
	}
	else{
		local.recieveMsg(msg);
	}
}