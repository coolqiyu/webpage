//显示增加对lodash的依赖，静态导入
//import _ from 'lodash';
import './style.css';
import Panda from './panda.jpg';
import Data from './data.xml'
import printMe from './print.js'
import {cube} from './math.js'

function component(){
	var element = document.createElement('div');
	var btn = document.createElement('button');

	// 假定有一个全局变量_，index.js隐性依赖于Lodash
	element.innerHTML = _.join(['Hello', 'World'], ' ');
	//直接添加class
	element.classList.add('hello');

	//添加一张图
	var myImg = new Image();
	myImg.src = Panda;
	myImg.style.width = '200px';
	myImg.style.height = '200px';
	element.appendChild(myImg);

	//导入的xml文件会直接转为json
	console.log(Data);

	//调用另一个js中的功能
	btn.innerHTML = 'click me and check the console';
	btn.onclick = printMe;
	element.appendChild(btn);

	//使用math.js中的函数
	var preEle = document.createElement('pre');
	preEle.innerHTML = [
		'Hello webpack!',
		'5 cubed is equal to ' + cube(5)
	].join('\n\n');
	document.body.appendChild(preEle);
	
	//src下的代码会关联到NODE_ENV环境
	if(process.env.NODE_ENV !== 'production'){
		console.log('Looks like we are in development mode!');
	}
	return element;
}

function getComponent(){
	//动态的方法导入lodash
	//在注释中使用了 webpackChunkName。这样做会导致我们的 bundle 被命名为 lodash.bundle.js ，而不是 [id].bundle.js
	return import(/* webpackChunkName: "lodash" */ 'lodash').then(_ =>{
		var element = document.createElement('div');
		element.innerHTML = _.join(['dynamic', 'Hello', 'webpack'], ' ');
		return element;
	}).catch(error=> 'An error occurred while loading the component');
}
getComponent().then(component=>{
	document.body.appendChild(component);
})
//document.body.appendChild(component());

//热更新print.js模块
// if(module.hot){
// 	module.hot.accept('./print.js', function(){
// 		console.log('Accepting the updated printMe module!');
// 		printMe();
// 	})
// }
// 热更新：当print.js改变导致页面重新渲染时，需要重新获取渲染的元素
let element = component();
document.body.appendChild(element);
if(module.hot){
	module.hot.accept('./print.js', function(){
		console.log('Accepting the updated printMe module');
		//重新获取元素
		document.body.removeChild(element);
		element = component();
		document.body.appendChild(element);
	})
}