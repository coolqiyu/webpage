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
    logPos: 0//日志的位置，用来记录用户的请求日志的起始位置，这样就不用每次把这个数据发送给客户端，再由客户端进行返回
    //如果改成服务端自动发送？但是这样就会比较麻烦
}));
// app.all("/channel_sys_user/getToken", function(req, res){
// 	console.log("/////");
// 	res.status(200)
// 		.set({"Content-Type":"application/json", 
// 		"Set-Cookie":"token=a73f3e93-3c52-4d0b-9763-a5ee4b28bde8; wjfUserId=0ef742ff090940bbae2255f740e1cd19",
// 		"Cache-Control":"no-store"
// 	})
// 		.json({"sid":"A88FED4D676148BA8F97AAAD2031E210"});
	
// })
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

//静态映射关系
var keepStepMap = ['不保留','保留'];
var iStatusMap = ['不启用', '只mock所有参数一致的', 'mock所有'];

//静态资源，这些如果放在最后面，那会先执行拦截/\*的方法
app.get("/main.js", function(req, res){
	help.log("get", req.url);
	res.sendFile("D:\\document\\gitReposity\\js\\mock\\js\\client\\main.js");
})
app.get("/myAjax.js", function(req, res){
	help.log("get", req.url);
	res.sendFile("D:\\document\\gitReposity\\js\\mock\\js\\client\\myAjax.js");
})
app.get("/interface.js", function(req, res){
	help.log("get", req.url);
	res.sendFile("D:\\document\\gitReposity\\js\\mock\\js\\client\\interface.js");
})
app.get("/modifyInterface.js", function(req, res){
	help.log("get", req.url);
	res.sendFile("D:\\document\\gitReposity\\js\\mock\\js\\client\\modifyInterface.js");
})
app.get("\*/project.js", function(req, res){
	help.log("get", req.url);
	res.sendFile("D:\\document\\gitReposity\\js\\mock\\js\\client\\project.js");
})
app.get("\*/record.js", function(req, res){
	help.log("get", req.url);
	res.sendFile("D:\\document\\gitReposity\\js\\mock\\js\\client\\record.js");
})
app.get("\*/usecases.js", function(req, res){
	help.log("get", req.url);
	res.sendFile("D:\\document\\gitReposity\\js\\mock\\js\\client\\usecases.js");
})
app.get("\*/modifyUsecase.js", function(req, res){
	help.log("get", req.url);
	res.sendFile("D:\\document\\gitReposity\\js\\mock\\js\\client\\modifyUsecase.js");
})
app.get("\*/project.css", function(req, res){
	help.log("get", req.url);
	res.sendFile("D:\\document\\gitReposity\\js\\mock\\css\\project.css");
})
app.get("\*/reset.css", function(req, res){
	help.log("get", req.url);
	res.sendFile("D:\\document\\gitReposity\\js\\mock\\css\\reset.css");
})
app.get("\*/common.css", function(req, res){
	help.log("get", req.url);
	res.sendFile("D:\\document\\gitReposity\\js\\mock\\css\\common.css");
})
app.get("\*/login.css", function(req, res){
	help.log("get", req.url);
	res.sendFile("D:\\document\\gitReposity\\js\\mock\\css\\login.css");
})
app.get("\*/main.css", function(req, res){
	help.log("get", req.url);
	res.sendFile("D:\\document\\gitReposity\\js\\mock\\css\\main.css");
})
app.get("\*/interface.css", function(req, res){
	help.log("get", req.url);
	res.sendFile("D:\\document\\gitReposity\\js\\mock\\css\\interface.css");
})
app.get("\*/modifyInterface.css", function(req, res){
	help.log("get", req.url);
	res.sendFile("D:\\document\\gitReposity\\js\\mock\\css\\modifyInterface.css");
})
app.get("\*/visitRecord.css", function(req, res){
	help.log("get", req.url);
	res.sendFile("D:\\document\\gitReposity\\js\\mock\\css\\visitRecord.css");
})
app.get("\*/usecases.css", function(req, res){
	help.log("get", req.url);
	res.sendFile("D:\\document\\gitReposity\\js\\mock\\css\\usecases.css");
})
app.get("\*/modifyUsecase.css", function(req, res){
	help.log("get", req.url);
	res.sendFile("D:\\document\\gitReposity\\js\\mock\\css\\modifyUsecase.css");
})
app.get("/main/visitRecord", function(req, res){
	var path = "D:\\document\\gitReposity\\js\\mock\\views\\visitRecord.ejs";
	session.logPos = 0;
	res.render(path,{});
})
app.get("/main/visitRecord/get", function(req, res){
	help.readFile("", session.logPos, (cnt, data)=>{
		console.log(data);
		session.logPos += cnt;
		res.send(data);
		res.end();
	});
});
//用这个变量来存储project，这个经常会用到
var PROJECTS = {};
//这个页面需要一些其它的数据，所以需要html模板，然后里面填充数据
app.get("/main", function(req, res){
	getHtmlDir(__dirname);
	var path = "D:\\document\\gitReposity\\js\\mock\\views\\main.ejs";
    
    //设置查询条件
    var condition;
    if(req.query.project){
    	condition = `(project=${req.query.project})`;
    }
    else if(req.query.search){
    	condition = `(path like '%${req.query.search}%' or func_name like '%${req.query.search}%')`;
    }
    if(condition){
    	condition = condition + ` and (create_user='${req.session.userid}' or modify_user='${req.session.userid}')`;
    }
    else
    	condition = `create_user='${req.session.userid}' or modify_user='${req.session.userid}'`;
	
	var interfaces;
	db.select("interface", "", condition, (interfaces)=>{
		db.select("project", "", "is_delete = 0", (projects)=>{
			console.log("proects: ", projects);
			projects.forEach(function(item, index){
				PROJECTS[item.id] = item.name;
			})
			res.render(path, {
				interfaces: interfaces, 
				projects: PROJECTS,
				pageCnt: 1
			});
		})		
	})	
	// console.log(ret);
	// res.sendFile(htmlDir + "/main.ejs");
});
app.post("/register", upload.array(), function(req, res){
	help.log("post", req.url);
	var result = db.insert("user", `'${req.body.username}', '${req.body.password}', '${req.body.username + req.body.password}'`, 1,
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
						keepStepMap: keepStepMap,
						iStatusMap: iStatusMap
					});
				})
			})
		
		})
	})
app.get("/main/usecases", function(req, res){
	db.select("project", "", "", 
		(projects)=>{
			var path = "D:\\document\\gitReposity\\js\\mock\\views\\usecases.ejs";
			if(projects.length > 0){
				var project = projects[0];
				db.select("usecase", "", `project=${project.id}`,
				(usecase)=>{
					
					//渲染页面且发送
					res.render(path, { 
						projects: projects,
						usecase: usecase
					});
				})
			}	
			else{
				//渲染页面且发送
			    var usecase = [];
				res.render(path, { 
					projects: projects,
					usecase: usecase
				});
			}				
		})
	})
app.get("/modifyUsecase", function(req, res){
	db.select("project", "", "", 
		(projects)=>{
			var path = "D:\\document\\gitReposity\\js\\mock\\views\\modifyUsecase.ejs";
			if(projects.length > 0){				
				db.select("interface", "", `project=${projects[0].id}`, (interfaces)=>{
					//渲染页面且发送
					res.render(path, { 
						projects: projects,
						usecase: undefined,
						interfaces: interfaces
					});
				})
			}
			else{
				//渲染页面且发送
				res.render(path, { 
					projects: [],
					interfaces: []
				});
			}
			
		})				
	})
app.post("/main/usecase/interface", upload.array(), function(req, res){
	var projectId = req.body.project;
	db.select("interface", "", `project=${projectId}`, (interfaces)=>{
		res.send(interfaces);
		res.end();
	})
})
app.post("/main/usecase/add", upload.array(), function(req, res){
	help.record(req, 0);
	//把用例的信息添加到数据库中
	//=============================
	var body = req.body;
	db.insert("usecase", `'${body.name}', '${body.description}', '${body.object}', ${req.session.userid}, ${req.session.userid}, ${body.project}`, 1, (insertid)=>{
		var interfaceIds = JSON.parse(body.interfaces);
		console.log("================", interfaceIds);
		var i = 0, len = interfaceIds.length;
		//循环遍历为每个接口添加用例
		!function(){
			db.update("interface", `usecase=concat_ws(',', usecase, ${insertid})`, `id=${interfaceIds[i]}`, (result)=>{
				i++;
				if(i < len)
					arguments.callee();
				else
					return;
			})
		}();
	})
})
app.get("/main/usecase/get", function(req, res){
	var projectId = req.query.pid;
	var usecaseId = req.query.uid;
	var type = req.query.type;//type表示请求的方式：0为ajax，1为同步
	console.log("++++++++++++++++type: ", type, typeof(type), type === 0);
	//根据project id来获取它的所有用例
	if(projectId){
		db.select("project", "", "", 
		(projects)=>{
			var path = "D:\\document\\gitReposity\\js\\mock\\views\\usecases.ejs";
			if(projects.length > 0){
				db.select("usecase", "", `project=${projectId}`,
				(usecase)=>{					
					//渲染页面且发送
					if(type === '1'){
						res.render(path, { 
							projects: projects,
							usecase: usecase
						});
					}
					else{
					res.send({ 
						projects: projects,
						usecase: usecase
					});
					res.end();
				}
				})
			}	
			else{
				//渲染页面且发送
			    var usecase = [];
				//渲染页面且发送
					if(type === '1'){
						res.render(path, { 
							projects: projects,
							usecase: usecase
						});
					}
					else{
						res.send({ 
							projects: projects,
							usecase: usecase
						});
						res.end();
					}
				}							
		})
	}
	else if(usecaseId !== undefined){//根据用例id来获取用例信息
		db.select("project", "", "", 
		(projects)=>{
			var path = "D:\\document\\gitReposity\\js\\mock\\views\\modifyUsecase.ejs";
			if(projects.length > 0){
				var project = projects[0];
				db.select("usecase", "", `id=${usecaseId}`,
				(usecase)=>{
					db.select("interface", "", `project=${usecase[0].project}`, (interfaces)=>{
						//渲染页面且发送
						if(type === '1'){
							res.render(path, { 
									projects: projects,
									usecase: usecase[0],
									interfaces: interfaces
								});
							}
						else{
							res.send({ 
								projects: projects,
									usecase: usecase[0],
									interfaces: interfaces
							});
							res.end();
						}
					});
				})
			};								
		})
	}
})
/**修改接口**/
app.post("/main/interface/modify", upload.array(), function(req, res){
	help.log("post", req.url);
	var body = req.body;
	var steps = JSON.parse(body.steps);
	var interfaceid = req.query.interfaceid;
	help.log("modify interface");
	//更新接口基本信息
	db.update("interface", 
		`func_name = '${body.func_name}', method = '${body.method}', path = '${body.path}', project = ${body.project}, status = ${body.status}, keep_step = ${body.keep_step}, step_count = ${steps.length}, description = '${body.description}', modify_user = ${req.session.userid}`, `id=${interfaceid}`, 
		(result)=>{
			help.log("start to update");
			var str = [];
			var len = steps.length;
			//没有填写步骤信息
			if(len === 0){
				res.send(String(interfaceid));
				res.end();
				return;
			}
			//对于步骤的话，就把原来的先删除，然后插入新的
			db.delete("step", `interface=${interfaceid}`, function(result){
				help.log("delete data", result);
					var str = [];
					for(var i = 0, len = steps.length; i < len; i++){
						str.push(`${interfaceid}, '${JSON.stringify(steps[i].request_header)}', '${steps[i].request_body}', ${steps[i].response_code}, '${JSON.stringify(steps[i].response_header)}', '${steps[i].response_body}', ${req.session.userid}, ${req.session.userid}`);
					}
					db.insert("step", str, len, (result)=>{
						res.send(String(interfaceid));
						res.end();
					});
				})						
		})
	})

/*得到更新接口的页面*/
app.get("/main/interface/modify", upload.array(), function(req, res){
	var interfaceid = req.query.interfaceid;
	db.select("interface", "", `id=${interfaceid}`, 
		(interface)=>{
			interface = interface[0];
			
			db.select("project", "", "", 
			(projects)=>{
				db.select("step", "", `interface=${interface.id}`, 
				(steps)=>{
					var path = "D:\\document\\gitReposity\\js\\mock\\views\\modifyInterface.ejs";
					console.log("interface:  ", interface);
					console.log(steps);
					//渲染页面且发送
					res.render(path, {
						interface: interface,//这里要取第一个，因为返回的是数组, 
						projects: projects,
						steps: steps,
						keepStepMap: keepStepMap,
						iStatusMap: iStatusMap
					});
				})
			})
		
		})
})

app.get("/project", function(req, res){
	db.select("project", "", "is_delete=0", (projects)=>{
		var path = "D:\\document\\gitReposity\\js\\mock\\views\\project.ejs";
		// res.location("/interface/get");
		//渲染页面且发送
		res.render(path, {
			projects: projects//这里要取第一个，因为返回的是数组
		});
	})
})

app.post("/project/modify", upload.array(), function(req, res){
	var body = req.body;
	if(body.op === "delete")
		db.update("project", `is_delete = 1`, `id=${body.id}`,
			function(result){	
			res.send(String(result));
			res.end();
		});
	else if(body.op === "update")
		db.update("project", `name = '${body.name}', real_host = '${body.real_host}', description = '${body.description}', modify_user=${req.session.userid}`, `id=${body.id}`,
			function(result){	
			res.send(String(result));
			res.end();
		});
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
// app.all("/\*", function(req, res){
// 	res.clearCookie('testapp');
// 	console.log("****");
// 	help.record(req, 0);
// 	//return;
// 	//从流中找是否已经有记录
// 	db.select("flow", "", `host='${req.hostname}' and step <> -1 and interface in (select id from interface where path like '${req.path}%')`, function(flow){
// 		console.log("flow: ", flow);
// 		if(flow.length > 0){//flow表中找到相应记录
// 			//取出记录中当前步进行比较
// 			flow = flow[0];//应该只有一条满足条件的流水记录
// 			var stepIds = flow.step.split(",");//记录中保存的步骤
// 			//取出第一步的信息
// 			db.select("step", "", `id=${stepIds[0]}`, function(firstStep){
// 				firstStep = firstStep[0];
// 				console.log(firstStep);
// 				var expectedHeader = JSON.parse(firstStep.request_header);
				
// 				var success = true;//是否匹配一致成功
// 				for(var key in expectedHeader){
// 					if(expectedHeader[key] !== req.get(key)){
// 						console.log("expectedHeader: ", expectedHeader[key]);
// 						success = false;
// 						break;
// 					}
// 				}
// 				if(success && firstStep.request_body){
// 					var expectedBody = JSON.parse(firstStep.request_body);
// 					for(var key in expectedBody){
// 						if(expectedBody[key] !== req.body[key]){
// 							success = false;
// 							break;
// 						}
// 					}
// 				}
					
// 				if(success){//和当前接口参数匹配一致，则把成功的step信息返回出去
// 					// res.set(JSON.parse(firstStep.response_header));
// 					// res.set({"Cache-Control":"no-store"});
// 					// console.log("header的结果是什么东西？？", step.response_header);
// 					// //res.status(firstStep.response_code);
// 					// res.status(200);
// 					// res.send(JSON.parse(firstStep.response_body));
// 					// console.log("匹配成功啦啦")
// 					// res.end();
// 					res.status(firstStep.response_code);
// 					res.set({"Cache-Control":"no-store",
// 							"Content-Type":"application/json"
// 					});	
// 					res.set(JSON.parse(firstStep.response_header));				
// 					res.json(JSON.parse(firstStep.response_body));
// 					res.end();
				

// 					//更新当前flow记录的数据
// 					stepIds.shift();
// 					if(stepIds.length === 0)//没有下一步了
// 						stepIds.push(-1);
// 					db.update("flow", `step='${stepIds.toString()}'`, `id=${flow.id}`, (result)=>{
// 						console.log("update finish");
// 					});///////////////////
// 					return;
// 				}
// 			});
// 			//如果匹配不成功，则什么也不做
// 			console.log("没有匹配成功");
// 		}
// 		else{//没有在flow表中找到相应的步骤，则去interface表中查找
// 			db.select("interface", "", `path like '${req.path}%' and method='${req.method}' and status <> 0`, function(interfaces){
// 				var len = interfaces.length;

// 				if(len === 0){//没有这个接口mock信息
// 					//可以直接报错
// 					return;
// 				}

// 				//找到接口的mock信息，把找到的每一个与当前的请求进行比较
// 				//是否要进行下一个循环，是取决于上一个数据库查询的结果
// 				var interface = interfaces[0];
// 				!function recursive(){
// 					if(interface.status === 2){//这个接口是mock所有的
// 						db.select("step", "", `interface=${interface.id}`, (steps)=>{
// 							var firstStep = steps[0];
// 							//为当前的host和path在flow表中插入一条新的数据
// 							var stepIds = [];
// 							for(var i = 1, len = steps.length; i < len; i++){
// 								stepIds.push(steps[i].id);
// 							}
// 							stepIds = stepIds.toString();
// 							//如果只有一步的话，stepIds就会为空，不插入
// 							if(!!stepIds){
// 								db.insert("flow", `'${req.hostname}', ${interface.id}, '${stepIds}'`, 1, function(){});
// 							}							
							
// 							//取出接口执行的第一步，把相应数据返回
// 							//res.status(firstStep.response_code);
// 							// res.status(200);
// 							// res.set(JSON.parse(firstStep.response_header));
// 							// res.set({"Cache-Control":"no-store"});
// 							// res.send(JSON.parse(firstStep.response_body));
// 							// res.end();
// 							res.status(firstStep.response_code);
// 							res.set(JSON.parse(firstStep.response_header));
// 							res.set({"Cache-Control":"no-store",
// 							"Content-Type":"application/json"
// 							});					
// 							res.json(JSON.parse(firstStep.response_body));
// 							res.end();
// 						})						
// 						return;
// 					}
// 					else{//只mock所有参数一致的						
// 						db.select("step", "", `interface=${interface.id}`, (steps)=>{
// 							var firstStep = steps[0];
// 							var expectedHeader = JSON.parse(firstStep.request_header);
							
// 							var success = true;//是否匹配一致成功
// 							for(var key in expectedHeader){
// 								if(expectedHeader[key] !== req.get(key)){
// 									console.log("头部比较： ", key, expectedHeader[key], req.get(key));
// 									success = false;
// 									break;
// 								}
// 							}
// 							if(success && firstStep.request_body){
// 								var expectedBody = JSON.parse(firstStep.request_body);
// 								for(var key in expectedBody){
// 									if(expectedBody[key] !== req.body[key]){
// 										success = false;
// 										break;
// 									}
// 								}
// 							}
								
// 							if(success){//和当前接口参数匹配一致，则发送数据
// 								//为当前的host和path在flow表中插入一条新的数据
// 								var stepIds = [];
// 								for(var i = 1, len = steps.length; i < len; i++){
// 									stepIds.push(steps[i].id);
// 								}
// 								stepIds = stepIds.toString();
// 								if(stepIds)
// 									db.insert("flow", `'${req.hostname}', ${interface.id}, '${stepIds}'`, 1, function(){});
								
// 								//取出接口执行的第一步，把相应数据返回
// 								//res.status(firstStep.response_code);
// 								// res.status(200);
// 								// res.set(JSON.parse(firstStep.response_header));
// 								// res.set({"Cache-Control":"no-store"});
// 								// res.send(JSON.parse(firstStep.response_body));
// 								// res.end();
// 								res.status(firstStep.response_code);
// 								res.set(JSON.parse(firstStep.response_header));
// 								res.set({"Cache-Control":"no-store",
// 									"Content-Type":"application/json"
// 								});					
// 								res.json(JSON.parse(firstStep.response_body));
// 								res.end();
// 							}
// 							else{//没有和当前接口参数匹配，再次调用该函数，执行下一次循环
// 								if(i < len){
// 									i++;
// 									interface = interfaces[i];
// 									recursive();
// 								}
// 								else{//没有找到相应的mock数据，但是有对应的接口，需要转发给真实的请求
// 									db.select("project", "", `id=${interface.project}`, function(project){
// 										//向某个host转发请求	
// 										var hosts = project[0].real_host.split(":");			
// 										var options = {
// 											hostname: hosts[0],
// 											port: (hosts.length > 1 ? hosts[1] : 80),
// 											method: "get",
// 											path: req.path,
// 											headers: req.headers,
// 										}										
// 										var newReq = http.request(options, function(real_res){
// 											real_res.on("data", function(chunk){
// 												res.send(chunk);
// 												res.end();
// 											})
// 											real_res.on("end", function(){
// 												console.log("end");
// 											})
// 										});
// 										newReq.write(querystring.stringify(req.body));
// 										newReq.end();										
// 									})
// 									return;
// 								}
// 							}
// 						})							
// 					}
// 				}();	
// 			})
// 		}
// 	})
// })
 
//添加用例的使用， ${}作为占位
app.all("/\*", function(req, res){
	var dbSelectPromise = function(table, condition){
		return new Promise((resolve, reject)=>{
			db.select(table, "", condition, (result)=>{
				if(result.length > 0){
					resolve(result[0], '找到相应的result');
				}
				else{
					reject('没有找到相应的结果');
				}
			})				
		})
	}
	// var flowPromise = function(){
	// 	console.log('flowPromise');
	// 	return new Promise((resolve, reject)=>{
	// 		db.select('flow', "", `clientip='${req.ip}' and step <> -1 and interface in (select id from interface where path like '${req.path}%')`, (flows)=>{
	// 			if(flows.length > 0){
	// 				resolve(flows[0], '找到相应的flow');
	// 			}
	// 			else{
	// 				reject('没有找到相应的flow');
	// 			}
	// 		})				
	// 	})
	// };
	/*
	condition：查询条件字符串
	 */
	// var stepPromise = function(condition){
	// 	return new Promise((resolve, reject)=>{
	// 		db.select('step', "", condition, (steps)=>{
	// 			//这里就不判断了
	// 			if(steps.length > 0)
	// 				resolve(steps[0], '匹配成功，发送数据');
	// 			else{
	// 				reject('找到flow但没有step，报404了');
	// 			}
	// 		})
	// 	})
	// };
	// var usecasePromise = function(condition){
	// 	return new Promise((resolve, reject)=>{
	// 		if(!condition){
	// 			resolve(undefined);
	// 			return;
	// 		}
	// 		db.select('usecase', "", condition, (usecases)=>{
	// 			if(usecases.length > 0)
	// 				resolve(usecases);
	// 			else
	// 				reject('查询用例表出错了');
	// 		})
	// 	});
	// };
	//根据usecase把http请求/返回中动态变化的数据进行转化
	//header, body, usecase都是字符串
	var parseHttp = function(header, body, usecase){
		//遍历usecase中的每一个k-v，并替换step中的值
		if(usecase){
			usecase = JSON.parse(usecase);
			for(let key in usecase){
				let re = new RegExp(`\\$${key}`, 'i');
				header = header.replace(re, usecase[key]);
				body = body.replace(re, usecase[key]);
			}
		}
		return [header, body];
	};
	var httpRes = function(res, code, header, body){
		res.status(code);
		res.set(JSON.parse(header));
		res.set({"Cache-Control":"no-store",
			"Content-Type":"application/json"
		});					
		res.json(JSON.parse(body));
		res.end();
	}
	/*
	 source: 来源: flow或interface，对应操作不同
	 condition: 查询条件，json对象
	 usecases: step中非静态的数据需要从usecases中找出来并替换
	 needCheck: 是否需要检查输入的参数
	*/
	var checkStep = function(source, condition, usecases, needCheck){
		return dbSelectPromise('step', condition.step)
		.then(//已经查出了step，也找出了usecase
			function(data){//data是一个数组，包含两个promise的resolve参数
				var step = data[0];
				var usecaseLen = usecases.length;
				for(let i = 0; i < usecaseLen; i++){
					let usecase = usecases[i];
					if(step.status === 2){//不用比较直接返回即可
						resolve(['step', step, usecase]);
						return;
					}
					else{//需要比较请求参数
						step = JSON.parse(step);
						[req.request_header, req.request_body] = parseHttp(req.request_header, req.request_body, usecase);
						
						//比较头部请求的参数
						for(let key in step.request_header){
							if(step.request_header[key] !== req.get(key)){
								reject('头部信息没有匹配成功')
								return;
							}
						}
						//比较body请求的参数
						for(let key in step.request_body){
							if(step.request_body[key] !== req.body[key]){
								reject('头部信息没有匹配成功')
								return;
							}
						}
						resolve(['step', JSON.stringify(step), JSON.stringify(usecase)]);
						return;
					}
				}
			}
		)
	}
	// var findInterfacePromise = function(){
	// 	return new Promise((resolve, reject)=>{
	// 		db.select("interface", "", `path like '${req.path}%' and method='${req.method}' and status <> 0`, (interfaces)=>{
	// 			if(interfaces.length)
	// 				resolve(['interface', interfaces, '找到了一系列接口']);
	// 			else{
	// 				reject('没有找到接口，直接404吧');
	// 			}
	// 		})
	// 	})
	// };
	//转发请求
	var redirectReq = function(){	
		dbSelectPromise('project', `id=${interface.project}`)
		.then(function(projects){
			//向某个host转发请求	
			var hosts = projects[0].real_host.split(":");			
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
				})
			});
			newReq.write(querystring.stringify(req.body));
			newReq.end();										
		})
	}
	var checkInterface = function(index, interfaces){
		if(index === interfaces.length){//已经匹配到最后一个了，也没有找到
			//去找project，进行转发请求
			redirectReq();
			return;
		}
		//根据接口寻找step，并判断是否匹配
		var usecases = interfaces[index].usecase.split(",");
		dbSelectPromise('usecase', `id in ${usecases}`)//找到所有用例
		.then(
			function(usecases){//这个step去和所有用例对象进行比较
				return checkStep('interface', {step: `interface=${interfaces[index].id}`}, usecases);					
			},
			function(){
				console.log('没有找到用例呀，继续下一个吧');
				return new Promise(function(resolve, reject){reject()});
			}
		)
		.then(
			function(data){//说明都匹配成功了，可以结束了
				//发送step的数据，成功了
				var step = data[1];
				var usecase = data[2];
				[step.reponse_header, step.response_body] = parseHttp(step.response_header, step.response_body, usecase);
				httpRes(res, step.response_code, header, body);
			},
			function(){//没有匹配成功，要再次执行
				return checkInterface(index + 1, interfaces);
			}
		)
		
	}
	
	dbSelectPromise('flow', "", `clientip='${req.ip}' and step <> -1 and interface in (select id from interface where path like '${req.path}%')`)
	.then(//找flow
		function(flow){//成功则判断step
			var stepId = flow.step.split(',')[0];
			return checkStep('flow', {step: `id=${stepId}`, usecase: `id=${flow.usecase}`}, true);
		},
		function(){//不成功，则判断有没有接口
			return dbSelectPromise("interface", "", `path like '${req.path}%' and method='${req.method}' and status <> 0`);
		}
	)
	.then(//resovle的第一个值用来区分，是哪里来的resolve
		function(data){
			if(data[0] === 'step'){
				//发送step的数据，成功了
				var step = data[1];
				var usecase = data[2];
				[step.reponse_header, step.response_body] = parseHttp(step.response_header, step.response_body, usecase);
				httpRes(res, step.response_code, header, body);
			}
			else{//是找到了一系列的接口了
				//对这些接口进行遍历了
				//data[1]: 找到的接口interfaces
				checkInterface(0, data[1]);
			}
		},
		function(data){//flow中找step和直接找接口都失败的话，都可以直接结束
			res.status(404).end();
		}
	)	
})
/**
* 调整：
* - 需要把sql语句放到单独的文件中
* 匹配方式：
* - 先找接口，如果接口中有$，则去找用例，然后找对象（对象是否可以重用？）
* - 如果没有$，则直接使用该接口 
*/


// app.post("/\*", upload.array(), function(req, res){
// 	help.printRequest(req);
// 	//return;
// 	//从流中找是否已经有记录
// 	db.select("flow", "", `host='${req.hostname}' and step <> -1 and interface in (select id from interface where path like '${req.path}%')`, function(flow){
// 		console.log("flow: ", flow);
// 		if(flow.length > 0){//flow表中找到相应记录
// 			//取出记录中当前步进行比较
// 			flow = flow[0];
// 			var steps = flow.step.split(",");//记录中保存的步骤
// 			db.select("step", "", `id=${steps[0]}`, function(step){
// 				console.log("step: ", step);
// 				!!step && (step = step[0]);
// 				var expectedHeader = step.request_header;
				
// 				var success = true;//是否匹配一致成功
// 				for(var key in expectedHeader){
// 					if(expectedHeader[key] !== req.get(key)){
// 						success = false;
// 						break;
// 					}
// 				}
// 				if(success && step[0].request_body){
// 					var expectedBody = JSON.parse(step[0].request_body);
// 					for(var key in expectedBody){
// 						if(expectedBody[key] !== req.body[key]){
// 							success = false;
// 							break;
// 						}
// 					}
// 				}
					
// 				if(success){//和当前接口参数匹配一致，则把成功的step信息返回出去
// 					res.set(step.response_header);	
// 					console.log("header的结果是什么东西？？", step.response_header);				
// 					res.status(step.response_code);
// 					res.send(step.response_body);

// 					//更新当前flow记录的数据
// 					steps.shift();
// 					if(steps.length === 0)//没有下一步了
// 						steps.push(-1);
// 					db.update("flow", `step='${steps.toString()}'`, `id=${flow.id}`, (result)=>{
// 						console.log("update finish");
// 					});///////////////////
// 					return;
// 				}
// 			});
// 			//如果匹配不成功，则什么也不做
// 			console.log("没有匹配成功");
// 		}
// 		else{//没有在flow表中找到相应的步骤，则去interface表中查找
// 			db.select("interface", "", `path like '${req.path}%' and method='post' and status <> 0`, function(interfaces){
// 				var len = interfaces.length;

// 				if(len === 0){//没有这个接口mock信息
// 					//可以直接报错
// 					return;
// 				}

// 				//找到接口的mock信息，把找到的每一个与当前的请求进行比较
// 				//是否要进行下一个循环，是取决于上一个数据库查询的结果
// 				var interface = interfaces[0];
// 				!function recursive(){
// 					if(interface.status === 2){//这个接口是mock所有的
// 						db.select("step", "", `interface=${interface.id}`, (step)=>{
// 							//为当前的host和path在flow表中插入一条新的数据
// 							var stepStr = [];
// 							for(var i = 1, len = step.length; i < len; i++){
// 								stepStr.push(step[i].id);
// 							}
// 							stepStr = stepStr.toString();
// 							if(!!stepStr){
// 								db.insert("flow", `'${req.hostname}', ${interface.id}, '${stepStr}'`, 1, function(){});
// 							}							
							
// 							//取出接口执行的第一步，把相应数据返回
// 							//res.status(step[0].response_code);
// 							console.log("返回头部分信息+++++++++： ", step[0].response_header);
// 							res.set({"Content-Type":"application/json", "Set-Cookie":"token=a73f3e93-3c52-4d0b-9763-a5ee4b28bde8; wjfUserId=0ef742ff090940bbae2255f740e1cd19"});
// // 							res.set({
// //   'Content-Type': 'text/plain',
// //   'Content-Length': '123',
// //   'ETag': '12345'
// // });
// 							res.status(200).send({"sid":"A88FED4D676148BA8F97AAAD2031E210"});
// 							res.end();
// 						})						
// 						return;
// 					}
// 					else{//只mock所有参数一致的						
// 						db.select("step", "", `interface=${interface.id}`, (step)=>{
// 							console.log("step信息：", step);
// 							var expectedHeader = JSON.parse(step[0].request_header);
							
// 							var success = true;//是否匹配一致成功
// 							for(var key in expectedHeader){
// 								if(expectedHeader[key] !== req.get(key)){
// 									console.log("头部比较： ", key, expectedHeader[key], req.get(key));
// 									success = false;
// 									break;
// 								}
// 							}
// 							if(success && step[0].request_body){
// 								var expectedBody = JSON.parse(step[0].request_body);
// 								for(var key in expectedBody){
// 									if(expectedBody[key] !== req.body[key]){
// 										success = false;
// 										break;
// 									}
// 								}
// 							}
								
// 							if(success){//和当前接口参数匹配一致，则发送数据
// 								//为当前的host和path在flow表中插入一条新的数据
// 								var stepStr = [];
// 								for(var i = 1, len = step.length; i < len; i++){
// 									stepStr.push(step[i].id);
// 								}
// 								stepStr = stepStr.toString();
// 								db.insert("flow", `'${req.hostname}', ${interface.id}, '${stepStr}'`, 1, function(){});
								
// 								//取出接口执行的第一步，把相应数据返回
// 								res.status(step[0].response_code);
// 								console.log("返回头部分信息====： ", step[0].response_header);
// 								res.set(step[0].response_header);
// 								res.send(step[0].response_body);
// 							}
// 							else{//没有和当前接口参数匹配，再次调用该函数，执行下一次循环
// 								if(i < len){
// 									i++;
// 									interface = interfaces[i];
// 									recursive();
// 								}
// 								else{//没有找到相应的mock数据，但是有对应的接口，需要转发给真实的请求
// 									db.select("project", "", `id=${interface.project}`, function(project){
// 										//向某个host转发请求	
// 										var hosts = project[0].real_host.split(":");
// 										var index = 0;
// 										if(hosts.length > 2)
// 											index = 1;			
// 										var options = {
// 											hostname: hosts[index],
// 											port: (hosts.length > 1 ? hosts[index + 1] : 80),
// 											method: "post",
// 											path: req.path,
// 											headers: req.headers,
// 										}										
// 										var newReq = http.request(options, function(real_res){
// 											real_res.on("data", function(chunk){
// 												res.send(chunk);
// 												res.end();
// 											})
// 											real_res.on("end", function(){
// 												console.log("end");
// 											})
// 										});
// 										newReq.write(querystring.stringify(req.body));
// 										newReq.end();										
// 									})
// 									return;
// 								}
// 							}
// 						})							
// 					}
// 				}();	
// 			})
// 		}
// 	})
// })

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