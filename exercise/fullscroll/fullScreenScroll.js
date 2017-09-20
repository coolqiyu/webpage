var container = document.getElementById('container');
var lis = document.getElementById('nav').getElementsByTagName('li');
var index = 0;//当前显示的是第几页
document.onwheel = function(){
	container.style.transition = 'transform 2s';
	container.style.transform = 'translateY(-' + (index + 1) * 100 + '%)';
	lis[index++].className = '';
	lis[index].className = 'select';
}