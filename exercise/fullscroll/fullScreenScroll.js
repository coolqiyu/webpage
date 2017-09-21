var container = document.getElementById('container');
var pages = container.children;
var outer = container.offsetParent;
var lis = document.getElementById('nav').getElementsByTagName('li');
var liCnt = lis.length;
var index = 0;//当前显示的是第几页
document.onwheel = function(e){	
	console.log(e.deltaY);
	if(e.deltaY > 0){//向下滚动
		if(index >= liCnt - 1)
			return;		
		container.style.transform = 'translateY(-' + (index + 1) * 100 + '%)';
		lis[index++].className = '';
		lis[index].className = 'select';
	}
	else if(e.deltaY < 0){//向上滚动
		if(index == 0)
			return;
		lis[index].className = '';
		index--;
		container.style.transform = 'translateY(-' + index * 100 + '%)';
		lis[index].className = 'select';
	}
	animate();
}
function animate(){
	var imgs = pages[index].children;
	switch(index){
		case 0:			
			for(var i = 1; i < 5; i++){
				imgs[i].style.animation = "wheel 2s linear infinite 2s";
			}
			imgs[5].style.transform = 'translateY(180%)';
			imgs[5].style.transition = 'transform 2s';
			break;
		case 1:
			imgs[0].style.transform = 'translateX(-50%)';
			imgs[2].style.transform = 'translateY(150%)';
			break;
		case 2:
			imgs[0].style.transform = 'translateY(-120%)';
			imgs[1].style.transform = 'translateY(100%)';
			break;
		case 3:
			imgs[0].style.transform = 'rotateZ(20deg)';
			imgs[2].style.transform = 'translateX(-300%)';
			imgs[4].style.transform = 'translateY(-80%)';
			break;
	}
}
animate();