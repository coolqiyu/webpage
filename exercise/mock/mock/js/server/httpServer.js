var http = require("http");
var httpPort = 8880;
var server = http.createServer(function(req, res){
	console.log(req);
}).listen(PORT);