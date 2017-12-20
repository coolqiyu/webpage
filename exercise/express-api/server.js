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
 */
//路由级，需要再使用app.use(router)
//这个和app.route()是不是一样的？
var router = express.Router();
router.use('/router', function(req, res, next){
	console.log('router.use');
	res.end();
})
app.use(router);

//错误处理
app.use(function(err, req, res, next){
	console.error(err.stack);
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




