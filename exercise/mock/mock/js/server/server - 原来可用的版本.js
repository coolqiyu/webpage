var querystring = require('querystring');
var db = require("./db");
var help = require("../common/help")
var express = require("express");
var app = express();
var http = require("http");
var server = http.createServer(app);
//将socket.io配置到http server上
var io = require("socket.io")(server);
//配置中间件来解析请求中的数据
var bodyParser = require("body-parser");
var multer = require('multer');// v1.0.5
var upload = multer(); // for parsing multipart/form-data
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({extended:true})); // for parsing application/x-www-form-urlencoded

//在这里面设置session，这样下面就可以用req.session来获取信息
var session = require('express-session');
app.use(session({
    secret: '12345',
    name: 'testapp',   //这里的name值得是cookie的name，默认cookie的name是：connect.sid
    cookie: {maxAge: 80000000000 },  //设置maxAge是80000ms，即80s后session和相应的cookie失效过期
    resave: false,
    saveUninitialized: true,
}));

//配置用done-ssr-middleware来渲染应用
// var ssr = require('done-ssr-middleware');
// app.use("/", ssr({
// 	config: __dirname + '/public/package.json!npm'
// }));

//配置使用ejs模板
// var ejs = require("ejs");
// var fs = require("fs");
app.set("view engine","ejs");

//常用变量
var PORT = 8880;
var htmlDir;

function getHtmlDir(__dirname){
	htmlDir = __dirname.substring(0, __dirname.lastIndexOf("\\") - 2) + "html";
	help.log("htmlDir  ", htmlDir);
};

io.on("connection", function(){

});
server.listen(PORT, function(){
	help.log("server is starting, listen at " + PORT);
});

app.get("/", function(req, res){
	help.log("get", req.url);
	getHtmlDir(__dirname);
	res.sendFile(htmlDir + "/login.html");
})
//这个页面需要一些其它的数据，所以需要html模板，然后里面填充数据
app.get("/main", function(req, res){
	getHtmlDir(__dirname);
	var path = "D:\\document\\gitReposity\\js\\mock\\views\\main.ejs";

	var interfaces;
	db.select("interface", "", `create_user='${req.session.userid}' or modify_user='${req.session.userid}'`, (interfaces)=>{
		db.select("project", "", "", (projects)=>{
			res.render(path, {
				interfaces: interfaces, 
				projects: projects
			});
		})		
	})	
	// console.log(ret);
	// res.sendFile(htmlDir + "/main.ejs");
});
app.post("/register", upload.array(), function(req, res){
	help.log("post", req.url);
	var result = db.insert("user", `${req.body.username}, ${req.body.password}, ${req.body.username + req.body.password}`, 1,
		(result)=>{
		getHtmlDir(__dirname);
		help.log("insert: ", result);
		if(result){//如果插入成功
			//生成一个token，并把它写入头部
			//res.append('token', req.body.username + req.body.password);
			//请求中写的是post /register，登录后通过redirect直接改到/main
			// req.session.name = req.body.username;
			// req.session.secret = req.body.password;
			// res.redirect("/main");
			
			req.session.regenerate(function(){
				req.session.userid = result;
	            req.session.username = req.body.username;
	            req.session.password = req.body.password;
	            res.redirect('/main');
	        });
		}
	});	
});
app.post("/login", upload.array(), function(req, res){
	help.log("post", req.url);
	db.select("user", null, `username=${req.body.username} and password=${req.body.password}`, (user)=>{
		if(user){
			req.session.userid = user[0].id;
			req.session.username = req.body.username;
	        req.session.password = req.body.password;
			//这里想把查询的数据传到main中，应该怎么做？			
			// req.session.interfaces = interfaces;
			// help.log("login interfaces length: ", interfaces.length);
			res.redirect('/main');
		}
		else{
			res.redirect('/');
		}
	});
});

app.get("/main.js", function(req, res){
	help.log("get", req.url);
	res.sendFile("D:\\document\\gitReposity\\js\\mock\\js\\client\\main.js");
})
app.get("/myAjax.js", function(req, res){
	help.log("get", req.url);
	res.sendFile("D:\\document\\gitReposity\\js\\mock\\js\\client\\myAjax.js");
})
app.get("/project.js", function(req, res){
	help.log("get", req.url);
	res.sendFile("D:\\document\\gitReposity\\js\\mock\\js\\client\\project.js");
})
/**ajax请求时的数据是怎么样的？*/
app.post("/main/interface/add", upload.array(), function(req, res){
	help.log("post", req.url);
	var body = req.body;
	var steps = JSON.parse(body.steps);
	//需要添加接口，以及它包含的每一个步骤
	db.insert("interface", 
		`'${body.func_name}', '${body.method}', '${body.path}', ${body.project}, ${body.status}, ${body.keep_step}, ${steps.length}, '${body.description}', ${req.session.userid}, ${req.session.userid}`, 1, 
		(interfaceid)=>{
			var str = [];
			var len = steps.length;
			//没有填写步骤信息
			if(len === 0){
				res.send(String(interfaceid));
				res.end();
				return;
			}
			for(var i = 0, len = steps.length; i < len; i++){
				str.push(`${interfaceid}, '${JSON.stringify(steps[i].request_header)}', '${steps[i].request_body}', ${steps[i].response_code}, '${JSON.stringify(steps[i].response_header)}', '${steps[i].response_body}', ${req.session.userid}, ${req.session.userid}`);
			}
			db.insert("step", str, len, (result)=>{
				res.send(String(interfaceid));
				res.end();
			});
		})
	})

// /main/interface/get?interfaceid=1&_=1509959541732
app.get("/interface/get", function(req, res){
	var interfaceid = req.query.interfaceid;
	db.select("interface", "", `id=${interfaceid}`, 
		(interface)=>{
			interface = interface[0];
			
			db.select("project", "", `id=${interface.project}`, 
			(project)=>{
				project = project[0];
				db.select("step", "", `interface=${interface.id}`, 
				(steps)=>{
					var path = "D:\\document\\gitReposity\\js\\mock\\views\\interface.ejs";
					console.log("interface:  ", interface[0]);
					res.location("/interface/get");
					//渲染页面且发送
					res.render(path, {
						interface: interface,//这里要取第一个，因为返回的是数组, 
						project: project,
						steps: steps,
					});
				})
			})
		
		})
	})

app.get("/project", function(req, res){
	db.select("project", "", "", (projects)=>{
		var path = "D:\\document\\gitReposity\\js\\mock\\views\\project.ejs";
		// res.location("/interface/get");
		//渲染页面且发送
		res.render(path, {
			projects: projects//这里要取第一个，因为返回的是数组
		});
	})
})

app.post("/project/add", upload.array(), function(req, res){
	var body = req.body;
	db.insert("project", `'${body.name}', '${body.real_host}', '${body.description}', ${req.session.userid}, ${req.session.userid}`, 1,
		function(insertid){	
		res.send(String(insertid));
		res.end();
	});
})
app.get("/favicon.ico", function(req, res){
	res.send("empty");
})
//拦截所有想要mock的请求
app.get("/\*", function(req, res){
	//从流中找是否已经有记录
	db.select("flow", "", `host='${req.hostname}' and step <> -1 and interface in (select id from interface where path = '${req.path}')`, function(flow){
		console.log("flow: ", flow);
		if(flow.length > 0){//flow表中找到相应记录
			//取出记录中当前步进行比较
			flow = flow[0];
			var steps = flow.step.split(",");//记录中保存的步骤
			//取出第一步的信息
			db.select("step", "", `id=${steps[0]}`, function(step){
				console.log("step: ", step);
				!!step && (step = step[0]);
				var expectedHeader = step.request_header;
				var expectedBody = JSON.parse(step[0].request_body);
				var success = true;//是否匹配一致成功
				for(var key in expectedHeader){
					if(expectedHeader[key] !== req.get(key)){
						success = false;
						break;
					}
				}
				if(success)
					for(var key in expectedBody){
						if(expectedBody[key] !== req.body[key]){
							success = false;
							break;
						}
					}
				if(success){//和当前接口参数匹配一致，则把成功的step信息返回出去
					res.set(step.response_header);
					res.status(step.response_code);
					res.send(step.response_body);

					//更新当前flow记录的数据
					steps.shift();
					db.update("flow", `step='${steps.toString()}'`, `id=${flow.id}`, (result)=>{
						console.log("update finish");
					});///////////////////
					return;
				}
			});
			//如果匹配不成功，则什么也不做
			console.log("没有匹配成功");
		}
		else{//没有在flow表中找到相应的步骤，则去interface表中查找
			db.select("interface", "", `path='${req.path}' and method='get' and status <> 0`, function(interfaces){
				var len = interfaces.length;

				if(len === 0){//没有这个接口mock信息
					//可以直接报错
					return;
				}

				//找到接口的mock信息，把找到的每一个与当前的请求进行比较
				//是否要进行下一个循环，是取决于上一个数据库查询的结果
				var interface = interfaces[0];
				!function recursive(){
					if(interface.status === 2){//这个接口是mock所有的
						db.select("step", "", `interface=${interface.id}`, (step)=>{
							//为当前的host和path在flow表中插入一条新的数据
							var stepStr = [];
							for(var i = 1, len = step.length; i < len; i++){
								stepStr.push(step[i].id);
							}
							stepStr = stepStr.toString();
							if(!!stepStr){
								db.insert("flow", `'${req.hostname}', ${interface.id}, '${stepStr}'`, 1, function(){});
							}							
							
							//取出接口执行的第一步，把相应数据返回
							res.status(step[0].response_code);
							res.set(step[0].response_header);
							res.send(step[0].response_body);
						})						
						return;
					}
					else{//只mock所有参数一致的						
						db.select("step", "", `interface=${interface.id}`, (step)=>{
							console.log("step信息：", step);
							var expectedHeader = JSON.parse(step[0].request_header);
							var expectedBody = JSON.parse(step[0].request_body);
							var success = true;//是否匹配一致成功
							for(var key in expectedHeader){
								if(expectedHeader[key] !== req.get(key)){
									console.log("头部比较： ", key, expectedHeader[key], req.get(key));
									success = false;
									break;
								}
							}
							if(success)
								for(var key in expectedBody){
									if(expectedBody[key] !== req.body[key]){
										success = false;
										break;
									}
								}
							if(success){//和当前接口参数匹配一致，则发送数据
								//为当前的host和path在flow表中插入一条新的数据
								var stepStr = [];
								for(var i = 1, len = step.length; i < len; i++){
									stepStr.push(step[i].id);
								}
								stepStr = stepStr.toString();
								db.insert("flow", `'${req.hostname}', ${interface.id}, '${stepStr}'`, 1, function(){});
								
								//取出接口执行的第一步，把相应数据返回
								res.status(step[0].response_code);
								res.set(step[0].response_header);
								res.send(step[0].response_body);
							}
							else{//没有和当前接口参数匹配，再次调用该函数，执行下一次循环
								if(i < len){
									i++;
									interface = interfaces[i];
									recursive();
								}
								else{//没有找到相应的mock数据，但是有对应的接口，需要转发给真实的请求
									db.select("project", "", `id=${interface.project}`, function(project){
										//向某个host转发请求	
										var hosts = project[0].real_host.split(":");			
										var options = {
											hostname: hosts[0],
											port: (hosts.length > 1 ? hosts[1] : 80),
											method: "get",
											path: req.path,
											headers: req.headers,
										}										
										var newReq = http.request(options, function(real_res){
											real_res.on("data", function(chunk){
												res.send(chunk);
												res.end();
											})
											real_res.on("end", function(){
												console.log("end");
											}
										});
										newReq.write(querystring.stringify(req.body));
										newReq.end();										
									})
									return;
								}
							}
						})							
					}
				}();	
			})
		}
	})
})
app.post("/\*", upload.array(), function(req, res){
	//从流中找是否已经有记录
	db.select("flow", "", `host='${req.hostname}' and step <> -1 and interface in (select id from interface where path = '${req.path}')`, function(flow){
		if(!!flow){//flow表中找到相应记录
			//取出记录中当前步进行比较
			flow = flow[0];
			var steps = flow.step.split(",");
			db.select("step", "", `id=${steps[0]}`, function(step){
				var rsult = false;
				!!step && (step = step[0]);
				var expectedHeader = step.request_header;
				var expectedBody = step.request_body;
				var success = true;//是否匹配一致成功
				for(var key in expectedHeader){
					if(expectedHeader[key] !== req.get(key)){
						success = false;
						break;
					}
				}
				if(success)
					for(var key in expectedBody){
						if(expectedBody[key] !== req.body[key]){
							success = false;
							break;
						}
					}
				if(success){//和当前接口参数匹配一致，则把成功的step信息返回出去
					res.set(step.response_header);
					res.status(step.response_code);
					res.send(step.response_body);

					//更新当前flow记录的数据
					steps.shift();
					db.update("flow", `step='${steps.toString()}'`, `id=${flow.id}`, (result)=>{
						console.log("update finish");
					});///////////////////
					return;
				}
			});
			//如果匹配不成功，则什么也不做
			console.log("没有匹配成功");
		}
		else{//没有在flow表中找到相应的步骤，则去interface表中查找
			db.select("interface", "", `path='${req.path}' and method='get' and status <> 0`, function(interfaces){
				var len = interfaces.length;

				if(len === 0){//没有这个接口mock信息
					//可以直接报错
					return;
				}

				//找到接口的mock信息，把找到的每一个与当前的请求进行比较
				//是否要进行下一个循环，是取决于上一个数据库查询的结果
				var interface = interfaces[0];
				!function recursive(){
					if(interface.status === 2){//这个接口是mock所有的
						db.select("step", "", `interface=${interface.id}`, (step)=>{
							//为当前的host和path在flow表中插入一条新的数据
							var stepStr = [];
							for(var i = 1, len = step.length; i < len; i++){
								stepStr.push(step[i].id);
							}
							stepStr = stepStr.toString();
							if(!!stepStr)
								db.insert("flow", `'${req.hostname}', ${interface.id}, '${stepStr}'`, 1, function(){});
							
							//取出接口执行的第一步，把相应数据返回
							res.status(step[0].response_code);
							res.set(step[0].response_header);
							res.send(step[0].response_body);
						})						
						return;
					}
					else{//只mock所有参数一致的						
						db.select("step", "", `interface=${interface.id}`, (step)=>{
							var expectedHeader = step[0].request_header;
							var expectedBody = step[0].request_body;
							var success = true;//是否匹配一致成功
							for(var key in expectedHeader){
								if(expectedHeader[key] !== req.get(key)){
									success = false;
									break;
								}
							}
							if(success)
								for(var key in expectedBody){
									if(expectedBody[key] !== req.body[key]){
										success = false;
										break;
									}
								}
							if(success){//和当前接口参数匹配一致，则发送数据
								//为当前的host和path在flow表中插入一条新的数据
								var stepStr = [];
								for(var i = 1, len = step.length; i < len; i++){
									stepStr.push(step[i].id);
								}
								stepStr = stepStr.toString();
								db.insert("flow", `'${req.hostname}', ${interface.id}, '${stepStr}'`, 1, function(){});
								
								//取出接口执行的第一步，把相应数据返回
								res.status(step[0].response_code);
								res.set(step[0].response_header);
								res.send(step[0].response_body);
							}
							else{//没有和当前接口参数匹配，再次调用该函数，执行下一次循环
								if(i < len){
									i++;
									interface = interfaces[i];
									recursive();
								}
								else{//没有找到相应的mock数据，但是有对应的接口，需要转发给真实的请求
									db.select("project", "", `id=${interface.project}`, function(project){
										//向某个host转发请求
										http.request(req, function(real_res){
											res.send(real_res);
											res.end();
										})
									})
									return;
								}
							}
						})							
					}
				}();	
			})
		}
	})
})

//把req的参数与某一步的参数进行比较
// function checkStep(req, stepid, result){
// 	result = false;
// 	db.select("step", "", "id=${stepid}", function(step){
// 		!!step && step = step[0];
// 		var expectedHeader = step.request_header;
// 		var expectedBody = step.request_body;
// 		var success = true;//是否匹配一致成功
// 		for(var key in expectedHeader){
// 			if(expectedHeader[key] !== req.get(key)){
// 				success = false;
// 				break;
// 			}
// 		}
// 		success && for(var key in expectedBody){
// 			if(expectedBody[key] !== req.body[key]){
// 				success = false;
// 				break;
// 			}
// 		}
// 		if(success){//和当前接口参数匹配一致，则把成功的step信息返回出去
// 			result = step;//
// 		}
// 	});
// 	return result;
// }

