/**
 * express框架
 * socket.io + http
 */
var bodyParser = require('body-parser');
var app = require("express")();
var server = require("http").Server(app);
var io = require("socket.io")(server);
var PORT = 8880;
var multer = require('multer');// v1.0.5
var upload = multer(); // for parsing multipart/form-data
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({extended:true})); // for parsing application/x-www-form-urlencoded

// app.use(express.static('public'));
server.listen(PORT, function(){
	console.log("server is starting");
});
app.get("/", function(req, res){
	res.sendFile(__dirname + '/client.html');
});
app.post("/login", upload.array(), function(req, res){
	console.log(req.body);
	if(req.body.username === "1" && req.body.password === "1"){
		res.set({"token":"111"});
		res.location("/main.html");
		res.sendFile(__dirname + '/main.html');
		console.log("=====================\n");
	}
});
io.on('connection', function(socket){
	console.log("connection");
});
