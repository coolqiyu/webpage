// var bgs, indexs, cnt;
// var width, height;
// var current = 0, before = -1;//图的序号：现在、上一个
// var defaultClass, hoverClass;

// function init(dc, hc){
// 	setClass(dc, hc);
// 	bgs = document.getElementsByClassName('bg');
// 	indexs = document.getElementsByTagName('li');
// 	width = bgs[0].clientWidth, height = bgs[0].clientHeight;
// 	cnt = indexs.length;//总的轮播图长度
// 	current = 0, before = -1;//图的序号：现在、上一个
// 	for(var i = 0; i < cnt; i++){
// 		bgs[i].style.zIndex = -i;
// 	}
// }
// //设置序号的类型
// function setClass(dc, hc){
// 	defaultClass = dc;
// 	hoverClass = hc;
// }
// //修改要显示的图
// function change(){
// 	changeBg();	

// 	before = current;
// 	if(current == cnt - 1){//轮播到最后一张图
// 		moveBack();
// 		// for(var i = 0; i < cnt; i++)
// 		// 	if( i != curreny)
// 		// 	bgs[i].style.transform = "";
// 		current = 0;
// 	}
// 	else{
// 		current += 1;
// 	}
// 	changeIndex();	
// }

// function changeBg(){
// 	//退出效果
// 	// bgs[current].style.transform = "translateY(-" + height + "px)";
// 	bgs[current].style.transition = "transform 1s";
// 	bgs[current].style.transform = "translateY(-" + height + "px)";
// }

// function changeIndex(){
// 	//把上一个的class修改成默认值
// 	if(before >= 0){
// 		var str = indexs[before].getAttribute('class');
// 		str = str.replace(hoverClass, defaultClass);
// 		indexs[before].setAttribute('class', str);
// 	}
// 	//把现在的class修改成hover值
// 	var str = indexs[current].getAttribute('class');
// 	str = str.replace(defaultClass, hoverClass);
// 	indexs[current].setAttribute('class', str);
// }	

// function moveBack(){
// 	for(var i = 0; i < cnt; i++){
// 		if(i != current){
// 			bgs[i].style.transition = "";
// 			bgs[i].style.transform = "";
// 		}
// 	}
// 	// for(var i = 0; i < cnt; i++){
// 	// 	bgs[i].style.zIndex = -i;
// 	// }
// 	// for(var i = 0; i < cnt; i++){
// 	// 	bgs[i].style.transform = "";
// 	// }
// 	//把图移到最后
// 	// for(var i = 0; i < cnt; i++){
// 	// 	if(i == before){
// 	// 		bgs[i].style.zIndex = -cnt;
// 	// 		bgs[i].style.transform = "";
// 	// 	}
// 	// 	else if(i != current)
// 	// 		bgs[i].style.zIndex ++;
// 	// }
// //	bgs[current].style.zIndex = -6;
// //	bgs[current].style.transform = "";
// }
// setInterval(change, 3000);

//等window加载完成
window.onload = function(){
	var container = document.getElementById('container');
	/*轮播的图片*/
	var list = container.children[0];
	var imgs = list.children;
	var width = imgs[0].clientWidth;
	var height = imgs[0].clientHeight;
	/*切换小按钮*/
	var buttons = document.getElementById('index').children;
	var count = buttons.length;
	/*左右两个按钮*/
	var prev = document.getElementById('prev');
	var next = document.getElementById('next');
	var index = 1;//当前显示的是第几张图，从1开始计
	
	/*向上移出*/
	function animate(offset){
		/*添加移出的动画*/
		var duration = 1000;//动画时长
		var interval = 200;//每次的时间间隔
		var step = offset / (duration / interval);//每次的步长
		var newTop = parseInt(list.style.top) + offset;
		//递归调用go来完成动画过程
		function go(){
			if((step < 0 && list.style.top > newTop)//top变小
				|| (step > 0 && list.style.top < newTop)){//top变大
				list.style.top = list.style.top + step + 'px';
			setTimeout(go, interval);
		}
		//移动到目标位置，对top值再修改，以实现无限轮播
		else{
			if(newTop <= -(count + 1) * height)
				newTop = -height;
			else if(newTop > -height)
				newTop = -count * height;
			list.style.top = newTop + 'px';
		}
		go();
	}
	

	//在图切换完成，且index修改完成后
	//把要展示的图序号显示出来，原来的要设置为空
	function showButton(){
		//1. 遍历每一个，把不是index的清空
		// for(var i = 0; i < count; i++){
		// 	if(i == index)
		// 		buttons.className = "on";
		// 	else
		// 		buttons.className = "";
		// }
		
		//2. 遍历找到原来的on，清空并退出循环
		for(var i = 0; i < count; i++){
			if(buttons[i].className == "on"){
				buttons[i].className = '';
				break;
			}
		}
		buttons[index - 1].className = 'on';
	}

	//为每个button添加点击事件
	//1. 下面这种写法不对
	//执行点击事件时，i已经等于6
	// for(var i = 0; i < count; i++){
	// 	buttons[i].onclick = function(){
	// 		alert(this);
	// 		animate(-(i - index) * height);
	// 		index = i;
	// 		showButton();
	// 	}
	// }
	// 2. 利用this.getAttribute('index')来获取当前被点击的对象是第几个
	for(var i = 0; i < count; i++){
		buttons[i].onclick = function(){
			//this 是当前被点击的对象
			var myIndex = parseInt(this.getAttribute('index'));
			animate(-(myIndex - index) * height);
			index = myIndex;
			showButton();
		}
	}

	prev.onclick = function(){
		animate(height);
		index--;
		if(index == 0)
			index = count;
		showButton();
	};
	next.onclick = function(){
		animate(-height);
		index++;
		if(index > count)
			index = 1;
		showButton();
	};
}