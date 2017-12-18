var express = require('express');
var app = express();
var PORT = 8880;
//把静态文件，如img、js等放在public下
//express.static中间件，它的第一个参数为资源的根目录
//localhost:PORT/index.html访问
app.use(express.static('public'));
//把public的资源挂载到/static下
//localhost:PORT/static/index.html访问
app.use('/static', express.static('public'));

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
app.use(['/subApp', '/subApp1'], subApp);
//all不对应任何http方法，它会处理路径上所有方法
app.all('*', function(next){
	console.log('get all *');
	//next();
})
/**
 * 设置app.name name属性，boole类型
 * disable(name)：设为false
 * enable(name)：设为true
 * disabled(name)：返回true/false
 * name=>http://www.expressjs.com.cn/4x/api.html#app.settings.table
 */
app.disable('trust proxy');
console.log('trust proxy: ', app.disabled('trust proxy'));

//app.engine(extension, callback)
app.engine('html', require('ejs').renderFile);

app.listen(PORT);










