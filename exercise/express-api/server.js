var express = require('express');
var PORT = 8880;
/**
 * app实际是一个js函数，作为回调传递给node http server以处理请求
 * 由此可以基于同一套代码提供http和https两个版本
 * http和https分别监听一个端口，请求响应在app下执行
 */
var app = express();
var http = require('http');
var https = require('https');
http.createServer(app).listen(PORT);
https.createServer({}, app).listen(443);
/**只用于http
 * app.listen = function(){
 * 	  var server = http.createServer(this);
 * 	  return server.listen.applY(server, arguments);
 * }
 */

/**
 * app = express()，它的功能如下：
 * * http请求: get, post, delete, put等http请求方法以及all
 * * 配置中间件
 * * 渲染html
 * * 注册模板引擎
 */
/**
 * app.locals是js对象，它的属性是application中的本地变量
 * 一旦设置，在整个应用生命周期都是确定的
 * 设置后，直接输出app.locals并没有title
 * You can access local variables in templates rendered within the application. This is useful for providing helper functions to templates, as well as app-level data. Note, however, that you cannot access local variables in middleware.
 */
app.locals.title = "title";
console.log(app.locals.title);

/**
 * app.moutpath：子应用挂载的路径模式
 * 子应用：express实例，可以用来处理一个路径下的请求
 * subApp处理的路径是挂载后的路径
 * app的请求可以转给subApp
 */
var subApp = express();
subApp.get('/', function(req, res){
	console.log('subApp: ', subApp.mountpath);
	res.end();
})
//访问/subApp或subApp1时，它下面的请求就由subApp来处理
//app.path()可以获得处理的要路径
app.use(['/subApp', '/subApp1'], subApp);
console.log("subApp.path(): ", subApp.path());

//all不对应任何http方法，它会处理路径上所有方法
app.all('*', function(req, res, next){
	console.log('get all *');
	//利用next，会根据新的路径执行
	next();
})
/* 设置app.name name属性，boole类型
 * disable(name)：设为false
 * enable(name)：设为true
 * disabled(name)：返回true/false
 *
 * 获取和设置属性值
 * app.get(name)
 * app.set(name, value)
 * 
 * name=>http://www.expressjs.com.cn/4x/api.html#app.settings.table
 */
app.disable('trust proxy');
console.log('trust proxy: ', app.disabled('trust proxy'));

/**
 * app.METHOD(path, callback [,callback ...])
 * * 对一个http请求给多个callback
 * * 通过next的方式来处理子请求
 * METHOD对应http的请求方法，all可接受所有请求方法
 * 可以用另一种方法来写：
 * app['METHOD'](path, callback)
 */
//app.listen(PORT);

/**
 * app.param([name], callback)
 * 为路径参数增加回调触发器，name是参数的名称
 * name可以是数组，对应路径中多个变量，按声明的先后顺序
 * name是数组，但路径中可以只声明少于它的变量个数
 * 如果一个路径定义了多个回调，但param也只会执行一次
 */
app.get('/user/:id', function(req, res, next){
	console.log("get /user/:id，在param中利用next执行这个");
	res.end();
})
app.get('/user/:id/:page', function(req, res, next){
	console.log("get /user/:id/:page，在param中利用next执行这个");
	next();//会先执行next的东西（同步执行），然后再执行下面的
	console.log("next后面执行");
	res.end();
})
app.get('/user/:id/:page', function(req, res){
	console.log("get /user/:id/:page，在上一次匹配成功中利用next执行这个");
	res.end();
})
// app.param(['id', 'page'], function(req, res, next, value){
// 	console.log("param: id，先执行这个, value = ", value);
// 	next();
// })
//定制app.param方法，返回一个函数（如何判断匹配参数）
app.param(function(param, validator){
	return function(req, res, next, value){
		if(validator(value)){
			console.log('定制的param方法');
			next();
		}
		else
			res.end();
	}
})
//调用上面定制的方法
app.param('id', function(candidate){
	return !isNaN(parseFloat(candidate)) && isFinite(candidate);
});

/**
 * app.render(view, [locals], callback)
 * 利用callback返回一个view的html文档
 * res.render()内部是用app.render()来实现
 * 但是app.render()不能把view传送给客户端
 */
/**
 * app.engine设置，有什么用处？
 * 是不是render时有用??
 */
//app.engine(extension, callback)
//app.engine('html', require('ejs').renderFile);

/**
 * app.route用来避免重复的route名称，导致类型错误
 * 在我理解，就是换一种写法
 * 对于一个路径有多种http请求方式，以前需要写好几个
 * app.get(path, fn)  app.post(path, fn)等
 * 现在利用app.route(path).get().post() 就可像链式的方法在一个位置处理不同请求
 */
app.route('/events')
.all(function(req, res, next){
	//run for all
	console.log('app route all /events');
	next();
})
.get(function(req, res, next){
	console.log('app route get /events');
	next();
})
.get(function(req, res, next){
	console.log('app route get2 /events');
	res.end();
	// next();
})
.post(function(req, res, next){
	console.log('app route post /events');
})

/**
 * next方法
 * 1. 把当前控制权转移到另一个
 * 2. next('route')会把这个控制直接传到最后一个
 */
app.route('/next_route')
.get(function(req, res, next){
	console.log('1');
	next('route');
})
.get(function(req, res, next){
	console.log('2');
	next();
})
.get(function(req, res, next){
	console.log('3');
	res.end();
})
/**
 * app.use([path], function)
 * 把middleware函数挂载在路径path下，如果没有给path，则默认为/
 * 中间件：是一个函数，可以访问请求对象、访问对象、以及web应用中处于请求-响应循环流程中的中间件（next）
 * 类型：
 * * 应用级: app.use() app.METHOD()
 * * 路由级: express.Router().use() 个人理解：和应用级的类似
 * * 错误处理
 * * 内置
 * * 第三方
 *
 * 使用注意：
 * * 如果当前中间件没有终结请求，则必须用next把摈转给下一个，否则请求会被挂起
 * * 可以使用多个函数，挂载一组中间件
 * http://www.expressjs.com.cn/guide/using-middleware.html
 */
//路由级，需要再使用app.use(router)
//这个和app.route()是不是一样的？
//router对象是独立的中间件，可以看作是一个mini应用
var router = express.Router();
router.use('/router', function(req, res, next){
	console.log('router.use');
	res.end();
})
app.use(router);

//错误处理: http://www.expressjs.com.cn/guide/error-handling.html
//这个错误不能自动获取吗？还是只能用next
app.use(function(err, req, res, next){
	//在all(*)中使用next('ab')会认为是有错误
	//则会执行这里，err信息就是ab
	console.error('error:', err);
	res.end();
})

//内置中间件
//把静态文件，如img、js等放在public下
//express.static中间件，它的第一个参数为资源的根目录
//localhost:PORT/index.html访问
app.use(express.static('public'));
//把public的资源挂载到/static下
//localhost:PORT/static/index.html访问
app.use('/static', express.static('public'));

/**
 * Request: 是http请求，有query string、parameter、body、header等
 * req.ip/req.ips根据trust proxy（设置受信ip）不同有不同取值
 * * true，客户端ip为X-Forwarded-*头最左边的项
 * * 默认为false，则ip为req.connection.remoteAddress中得到
 * * 设置ip值，设置的是被信任的，未被信息的会被当作客户端ip地址
 */
var bodyParser = require('body-parser');
var multer = require('multer');
var cookieParser = require('cookie-parser');
app.use(bodyParser.json());//解析application/json
app.use(bodyParser.urlencoded({extended: true}));//解析application/x-www-form-urlencoded
//app.use(multer);//解析multipart/form-data
//app.use(cookieParser);//把cookie解析成{a:b, c:d}

var reqApp = express();
app.use('/req', reqApp);
app.set('trust proxy', '127.0.0.1');
reqApp.get('/abc/:id/:id2', function(req, res){
	console.log('req.fresh和req.stale相反 ', req.fresh, req.stale);
	console.log('处理当前请求的express实例req.app: ', req.app);	
	console.log('req cookies ', req.cookies);
	console.log('req signedCookies 签名的cookie更安全？', req.signedCookies);
	console.log('req ip ', req.ip);
	console.log('请求的协议req.protocol ', req.protocol);
	console.log('req hostname ', req.hostname);
	console.log('包含所有参数的路径req.originalUrl', req.originalUrl);
	console.log('app处理的基本路径：req.baseUrl ', req.baseUrl);
	console.log('请求的url，不包含baseUrl，不包含路径参数，req.path ', req.path);
	console.log('路径参数params, 自动解析为json对象 ', req.params);
	console.log('参数变量query ', req.query);
	console.log('当前匹配的路径信息，好像没用处req.route ', req.route);
	console.log('req.secure "https"===req.protocol', req.secure);
	console.log('子域名 a.b.com req.subdomains', req.subdomains);
	console.log('是否是xhr请求req.xhr：', req.xhr);
    //根据请求头中accept*，返回最匹配的值
	console.log('req.accepts("html"): ', req.accepts('html'));
	console.log('req.acceptsCharsets("utf-8"): ', req.acceptsCharsets('utf-8'));
	console.log('req.acceptsEncodings("utf-8"): ', req.acceptsCharsets('utf-8'));
	console.log('req.acceptsLanguages("english"): ', req.acceptsLanguages('chinese'));

	console.log('req.get(field)返回头部的信息', req.get('connection'));
	//这个为什么总是返回null？
	console.log('content-type与type比较的结果：req.is(type)', req.is('json'));
	res.end();
})
console.log('reqApp.path ', reqApp.path());

//Response
var resApp = express();
app.use('/res', resApp);
resApp.get('/', function(req, res){
	console.log('req.app和res.app一样 ', res.app);
	console.log('是否有发送header res.headersSent: ', res.headersSent);
	//res.local只在当前req/res生命周期中有效。有时与app.locals一致
	console.log('与请求对应的响应的本地变量res.locals: ', res.locals);

	//reponse方法
	/**
	 * get: 获取返回头的信息
	 * append: 追加头部信息
	 * set: 设置头部信息，最后set才会设置上，原来的没有
	 * type: 设置返回头content-type
	 */
	//res.append('Warning', '199 Miscellaneous warning');
	res.set({'first-set': 'first'});
	res.set({'second-set': 'second'});
    console.log('返回头的信息：set-cookie ', res.get('Set-Cookie'));
    res.type('json');
	//设置cookie，后面的{}可以用来设置cookie的属性
	res.cookie('a', 'c', {domain: '.', path:'/'});
	//再清空，可以看到Set-Cookie两个：一个是清了的
	res.clearCookie('a', {path: '/'});//清空cookie
	
	//res.format根据req.acceptes来选择一个匹配的类型，并返回相应的值
	//如果没有找到，则使用default
    // res.format({
    // 	'text/plain': function(){
    // 		res.send('hey');
    // 	},
    // 	'text/html': function(){
    // 		res.send('<p>hey</p>');
    // 	},
    // 	'application/json': function(){
    // 		res.send({message: 'hey'});
    // 	},
    // 	'default': function(){
    // 		res.status(406).send('Not Acceptable');
    // 	}
    // })
	
	/**
	 * 设置返回数据
	 * json, jsonp(前两个都能用end), send(不能用end)
	 */
	// res.json({json: 'json'});
	// //支持jsonp，返回json值
	// res.jsonp({jsonp: 'jsonp'});
	// app.set('jsonp callback name', 'cb');//设置回调的名称，默认为callback
	// res.send() 可以是对象,字符串,数组
	// res.send(new Date());//对象返回的也是它的字符串形式
	// res.send("string");
	// res.send(['数组',2,3,4]);
	
	/**
	 * 发送文件的几种方式，后面不要再用res.end()，会导致下载失败
	 * * res.attachment(path) 
	 *    - 设置Content-Disposition，附件，访问时会自动下载该文件
	 *    - 需要res.end()来结束
	 * * res.download(path, rename, callback)
	 *    - 访问时也自动下载，可以用rename来重命名
	 *    - 不能用res.end()结束
	 * * res.sendFile(path,[,options][,fn])               
	 *    - 如果没有设置option，则必须用绝对地址
	 *    - 不能用res.end()结束
	 *    - 会根据文档的后缀来设置content-type的值
	 *    - 发送一个文档，不像上面两个是下载文件，这里发送的文件是直接呈现在页面上
	 */
	//res.attachment('./index1.bat');
	// res.download('./index1.bat', 'rename.bat', function(err){
	// 	if(err){
	// 		console.log(err);
	// 	}
	// 	else{
	// 		console.log('download');
	// 	}
	// });
	// res.sendFile("E:\\webpage\\exercise\\express-api\\index.txt", function(err){
	// 	if(err){
	// 		console.log("sendFile error", err);
	// 	}
	// });
	// var options = {
	// 	root: __dirname + '/public/',
	// 	dotfiles: 'deny',
	// 	headers: {
	// 		'x-timestamp': Date.now(),
	// 		'x-sent': true
	// 	}
	// }
	// res.sendFile('index.txt', options, function(err){
	// 	if(err){
	// 		console.log("sendFile error", err);
	// 	}
	// });

	//设置link，在response header中的link下，用来表示和另一个资源的关系
	// res.links({
	// 	next: 'http://api.example.com/users?page=2',
	// 	last: 'http://api.example.com/users?page=5'
	// });

	//设置location，且添加状态码设置为302，访问时会自动进行重定向，重定向后的页面为200
	//res.status(302).location("http://www.baidu.com");
	//表示referer的地址，如果没有定义，则为/
	//res.status(302).location('back');
	//redirect(status, path)支持相对地址，和上面的location功能类似，但redirect会默认设置状态为302
	//res.redirect("https://www.baidu.com")
	
	//res.render(view[, locals][, callback])
	//用local变量渲染view，并发送

	/**
	 * 发送状态码
	 * res.status(200) 只是设置
	 * res.sendStatus(200) 设置状态码，且发送信息
	 *     - 等于res.status(200).send('OK')
	 */
	//res.sendStatus(200);
	

	res.end();
})
















