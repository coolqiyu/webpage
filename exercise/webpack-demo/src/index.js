//显示增加对lodash的依赖
import _ from 'lodash';
import './style.css'
function component(){
	var element = document.createElement('div');
	// 假定有一个全局变量_，index.js隐性依赖于Lodash
	element.innerHTML = _.join(['Hello', 'World'], ' ');
	//直接添加class
	element.classList.add('hello');
	return element;
}
document.body.appendChild(component());