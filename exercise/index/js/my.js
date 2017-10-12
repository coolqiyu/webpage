/*****
说明：封装的有用的函数，以及兼容性问题
作者：周琳琳
最后更新：20171012
*****/
/*
事件相关
*/
/*****
功能：添加事件
参数：
	@param obj 添加事件的对象
	@param type 要添加的事件
	@param fn 回调函数
	@param capture bool类型，是否捕获，默认为false
返回：
	无
*****/
function addEvent(obj, type, fn, capture){
/*
chrome/firefox: obj.addEventListener(type, fn, capture)
ie: obj.attachEvent(on + type, fn)
firefox滚轮事件：obj.addEventListener('DOMMouseScroll', fn, capture)
*/
	var fname;
	switch(fn.name){
		case ""://chrome中匿名函数
		break;
		case undefined://ie中没有该属性，不能解决匿名的问题
		fname = fn.toString().match(/\s+\w+[\s\(]/g)[0].slice(1, -1);
		break;
		default:
		fname = fn.name;
	}
	obj.addEventListener?obj.addEventListener(type, fn, capture):obj.attachEvent('on' + type, fn);//兼容ie
	//兼容firefox
	if(type == 'mousewheel'){
		type = 'DOMMouseScroll';
		obj.addEventListener?obj.addEventListener(type, fn, capture):'';
	}
	//兼容event，不直接执行fn，而是执行handle
	function handle(e){
		e = e || window.event;
		e.wheel = e.wheelDelta || e.detail * (-40);
		fn.call(obj, e);
	}
}
/*
自定义动画
 */