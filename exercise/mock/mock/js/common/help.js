/**
* 1. 写文件换行需要\r\n才可以，回车/换行
* 2. data.toString() 把文件读出的字节转换成字符串
*/

var fs = require("fs");
exports.log = function(){
	var date = new Date().toLocaleString();
	var msg = "";
	for(var i = 0, len = arguments.length; i < len; i++){
		console.log(date, " | ", arguments[i]);
	}	
}

/**
* 将json的请求和返回转换为包含日期的字符串，并返回
*/
function transformJSON(json, type){
	var date = new Date();
	var data;
	if(!type)
		data = `${date.toLocaleString()} | 请求来自 ${json.method} ${json.originalUrl}\r\n请求头：${JSON.stringify(json.headers)}\r\n请求体：${JSON.stringify(json.body)}`;
	else
		data = `${date.toLocaleString()} | 返回信息如下\r\n返回头：${JSON.stringify(json.headers)}\r\n返回体：${JSON.stringify(json.body)}`;
	return data;
}
//这两个是服务端的日志，是用户访问记录
//type=0: 请求  type=1：返回
exports.serverLog = function(json, type){
	console.log(json);
	var data = transformJSON(json, type);
	console.log(data);
}

// exports.printResponse = function(res){
// 	var date = new Date();
// 	var data = `${date.toLocaleString()} | 返回信息如下\n返回头：${JSON.stringify(res.headers)}\n返回体：${JSON.stringify(res.body)}`;
// 	console.log(data);
// 	var filePath = date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate() + ".txt";
// 	writeToFile(filePath, data);
// }

//将mock访问日志写到文件中
exports.record = function(json, type){
	var date = new Date();
	var data = transformJSON(json, type);
	var filePath = date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate() + ".txt";
	writeToFile(filePath, data);
}
//下面mock的记录
//把数据写到服务端的文件中
function writeToFile(filePath, data){
	// fs.open(`../log/${filePath}`, 'a', function(err, fd){
		fs.writeFile(`../log/${filePath}`, data+ '\r\n', {flag:'a'}, function(err){
	    	if(err){
	    		console.log("写文件失败: ", err);
	    	}
	    })
	//})    
}

//根据不同的要求来找到filepath，并且把它们读出来
//暂时只选择当天日期的文件
// exports.readFile = function(filepath, callback){
// 	var date = new Date();
// 	var filePath = date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate() + ".txt";
// 	fs.readFile(`../log/${filePath}`, function(err, data){
// 		if(err){
// 			console.log(err);
// 		}
// 		else
// 			callback(data.toString());
// 		//console.log("data is ", data.toString());
// 	});
// 	//console.log("dddd");
// }
exports.readFile = function(filePath, startPos, callback){
	var date = new Date();
	var filePath = date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate() + '.txt';
	var buffer = new Buffer(1024);
	fs.open(`../log/${filePath}`, 'r', function(err, fd){
		if(err){
			console.error("error: ", err);
			callback(0, '');
			return;
		}
		fs.read(fd, buffer, 0, buffer.length, startPos, function(err, byteCnt){
			console.log(byteCnt);
			callback(byteCnt, buffer.slice(0, byteCnt).toString());
		})
	})
}
//readFile();