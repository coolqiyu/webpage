exports.log = function(){
	var date = new Date().toLocaleString();
	var msg = "";
	for(var i = 0, len = arguments.length; i < len; i++){
		console.log(date, " | ", arguments[i]);
	}	
}

exports.printRequest = function(req){
	var date = new Date().toLocaleString();
	console.log(date, " | 请求来自 ", req.method, req.originalUrl);
	console.log("请求头：\n", req.headers);
	console.log("请求体：", req.body);
}

exports.printResponse = function(res){
	var date = new Date().toLocaleString();
	console.log(date, " |  返回信息如下：");
	console.log("返回头：", res.headers);
	console.log("返回体：", res.body);
}