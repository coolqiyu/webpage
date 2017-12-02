// 打开websocket
var ws = new WebSocket("ws://localhost:3000");
var ID;
//当前用户
var localGameDiv = document.getElementById("js-local-game");
var localNextDiv = document.getElementById("js-local-next");
var localScore = document.getElementById("js-local-score");
var localStartBtn = document.getElementById("js-local-start-btn");
var localMsg = document.getElementById("js-local-msg");
var local = new Local(localGameDiv, localNextDiv, localScore, localStartBtn, ws, localMsg);
// localStartBtn.addEventListener("click", function(){
// 	local.start();
// })

//对手
var remoteGameDiv = document.getElementById("js-remote-game");
var remoteNextDiv = document.getElementById("js-remote-next");
var remoteScore = document.getElementById("js-remote-score");
var remoteStartBtn = document.getElementById("js-remote-start-btn");
var remoteMsg = document.getElementById("js-remote-msg");
var remote = new Remote(remoteGameDiv, remoteNextDiv, remoteScore, remoteStartBtn, ws, remoteMsg);

//时间
var oTime = document.getElementById("js-time");
ws.addEventListener("message", function(e){
	var msg = JSON.parse(e.data);
	if("time" in msg)
		oTime.innerHTML = msg["time"];
	if("error" in msg)
		alert(msg["error"]);
})
//断开了连接
ws.onclose = function(){
	localStartBtn.style.direction = "block";
	localStartBtn.innerHTML = "未连接";
	//close后不可以发这个消息
	//ws.send(JSON.stringify({"id": ID}));
}

// ws.onmessage = function(e){
// 	var msg = JSON.parse(e.data);
// 	console.log("收到服务信息：", msg);
// 	if(ID === undefined){//未设置过id
// 		if("op" in msg && msg["op"] === "setid")
// 			ID = msg["id"];
// 	}
// 	else if("id" in msg && ID !== msg["id"]){//别人发过来的消息，需要由remote处理	
// 		remote.recieveMsg(msg);
// 	}
// 	else{
// 		local.recieveMsg(msg);
// 	}
// }