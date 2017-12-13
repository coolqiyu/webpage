//显示增加对lodash的依赖
import _ from 'lodash';
import './style.css';
import Panda from './panda.jpg';
import Data from './data.xml'
import printMe from './print.js'

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
	
	return element;
}
document.body.appendChild(component());