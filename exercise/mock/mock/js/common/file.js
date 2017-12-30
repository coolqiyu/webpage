var fs = require("fs");
/**
* 读取文件
*/
//读取文件，默认是异步
fs.readFile('index.txt', function(err, data){
	if(err){
		return console.error(err);
	}
	console.log(data.toString());
})
//同步
var data = fs.readFileSync('index.txt');
console.log(data.toString());

//通过fd来读取，可以控制读多少
var offset = 0;//从缓存区的哪个位置开始
var position = 0;//从文件的哪个位置开始
var buffer = new Buffer(1024);
fs.open('index.txt', 'r', function(err, fd){
	fs.read(fd, buffer, offset, buffer.length, position, function(err, byteCnt){
		//byteCnt多少个字节被读取
		console.log('fs.read', buffer.slice(0, byteCnt).toString());
	})
})

//打开文件 
//这个fd只是一个文件描述符，不是对象
fs.open('index.txt', 'a', function(err, fd){
	console.log("fd: ", fd);
})