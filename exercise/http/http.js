var HTTP = require('http');
var PORT = 8880;
var connections = [];
HTTP.createServer(function(request, response){
	// if(!!~request.url.search('/log')){
	// 	//服务器是localhost，访问服务器的是file://，跨域了
	// 	//h5方法
	// 	//服务端的返回头通过设置Access-Control-Allow-Origin，表示允许哪些域名请求
	// 	response.writeHead(200, {'Content-Type':'text/plain', 'Access-Control-Allow-Origin':'*'});
	// 	response.write(new Date().toLocaleString());
	// 	response.end();
	// }
	console.log("original request");
	HTTP.request(request, function(res){
		console.log("redirect!");
	})
}).listen(PORT);

