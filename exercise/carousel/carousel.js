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
	// var width = imgs[0].clientWidth;
	// var height = imgs[0].clientHeight;
	var imgSize = {
		"width": imgs[0].clientWidth, 
		"height": imgs[0].clientHeight
	};
	/*切换小按钮*/
	// 不要直接用children，如果修改html，就会找不到想要的
	var buttons = document.getElementById('index').getElementsByTagName('span');
	var thumbnails = document.getElementById('index').getElementsByTagName('img');
	var count = buttons.length;
	/*左右两个按钮*/
	var prev = document.getElementById('prev');
	var next = document.getElementById('next');
	var index = 1;//当前显示的是第几张图，从1开始计
	var timer, timer2;//定时器
	//记录切换动画是否在进行中
	//如果在进行中，则新的点击切换事件不能被触发，避免一直切换导致内存占用过多，动画卡顿
	var animated = false;
	var types = document.getElementById('leaveType').children;
	// 动画，图片离开的方向
	var leaveTypes = {
		"up": ['top', 'height', 1000],
		"right": ['left', 'width', 2000]
	}
	// 切换类型默认为向上
	var leaveType = leaveTypes['up'];
	
	/*向上移出*/
	// function animate(offset){
	// 	/*添加移出的动画*/
	// 	var duration = 1000;//动画时长
	// 	var interval = 100;//每次的时间间隔
	// 	var step = offset / (duration / interval);//每次的步长
	// 	var newTop = parseInt(list.style.top) + offset;
	// 	//递归调用go来完成动画过程
	// 	function go(){
	// 		if((step < 0 && parseInt(list.style.top) > newTop)//top变小
	// 			|| (step > 0 && parseInt(list.style.top) < newTop)){//top变大
	// 			list.style.top = parseInt(list.style.top) + step + 'px';
	// 			animated = true;
	// 			setTimeout(go, interval);
	// 		}
	// 	//移动到目标位置，对top值再修改，以实现无限轮播
	// 	//动画移到到辅助图上，然后修改top值，无动画，这样不会有切换的感觉
	// 		else{
	// 			animated = false;
	// 			if(newTop <= -(count + 1) * height)
	// 				newTop = -height;
	// 			else if(newTop > -height)
	// 				newTop = -count * height;
	// 			list.style.top = newTop + 'px';
	// 		}
	// 	}
	// 	go();
	// }
	

	//支持多种切换模式
	function animate(offset){
		console.log('animate');
		/*添加移出的动画*/
		var duration = leaveType[2];//动画时长
		var interval = 100;//每次的时间间隔
		var step = offset / (duration / interval);//每次的步长
		var newPos = parseInt(list.style[leaveType[0]]) + offset;
		//递归调用go来完成动画过程
		function go(){			
			//parseFloat 不能用parseInt，会损失精度，导致最后移动的距离不正确
			if((step < 0 && parseFloat(list.style[leaveType[0]]) > newPos)//变小
				|| (step > 0 && parseFloat(list.style[leaveType[0]]) < newPos)){//变大
				list.style[leaveType[0]] = parseFloat(list.style[leaveType[0]]) + step + 'px';
				animated = true;
				timer2 = setTimeout(go, interval);
			}
			//移动到目标位置，对top值再修改，以实现无限轮播
			//动画移到到辅助图上，然后修改top值，无动画，这样不会有切换的感觉
			else{
				animated = false;
				if(newPos <= -(count + 1) * imgSize[leaveType[1]])
					newPos = -imgSize[leaveType[1]];
				else if(newPos > -imgSize[leaveType[1]])
					newPos = -count * imgSize[leaveType[1]];
				list.style[leaveType[0]] = newPos + 'px';
				//clearTimeout(timer2);//不用移除timeout计时器
			}
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
			if(animated)
				return;
			//this 是当前被点击的对象
			var myIndex = parseInt(this.getAttribute('index'));
			if(myIndex == index)//当前的index和目标index一致，则不再执行，优化性能
				return;
			animate(-(myIndex - index) * imgSize[leaveType[1]]);
			index = myIndex;
			showButton();
		};
		buttons[i].onmouseenter = function(){
			//this 是当前被点击的对象
			var myIndex = parseInt(this.getAttribute('index'));
			thumbnails[myIndex - 1].style.display = 'block';

			this.onmouseleave = function(){
				thumbnails[myIndex - 1].style.display = 'none';
			}
		}
	}

	//点击prev，显示上一图
	prev.onclick = function(){
		if(animated)
			return;				
		animate(imgSize[leaveType[1]]);
		index--;
		if(index == 0)
			index = count;
		showButton();
	};
	//点击next，显示下一图
	next.onclick = function(){
		if(animated)
			return;		
		animate(-imgSize[leaveType[1]]);
		index++;		
		if(index > count)
			index = 1;
		showButton();
	};

	//鼠标移入时，暂停动画
	container.onmouseover = function(){
		clearInterval(timer);
	}
	//当鼠标移出时才执行，开始就在外面，并不触发
	container.onmouseout = function(){
		//利用next点击事件和定时器实现自动轮播
		//时间不能过短，会出现丢帧现象
		timer = setInterval(next.onclick, leaveType[2] + 200);
	}

	// 设置切换的类型
	for(var i = 0; i < types.length; i++){
		types[i].onclick = function(){
			//停止原来的动画
			clearTimeout(timer2);
			clearInterval(timer);			
			animated = false;
			//改变button样式
			for(var j = 0; j < types.length; j++){
				if(types[j].className){
					types[j].className = '';
					break;
				}
			}
			this.className = "selected";

			//为处理不同的移出方式，重置图像位置
			var type = this.getAttribute('type');
			leaveType = leaveTypes[type];
			if(type == "right"){//向右移出
				for(var j = 0; j < count + 2; j++){
					imgs[j].style.float = "left";
				}
				//重置位置
				list.style.top = '';
				list.style.left = -imgSize['width'] + 'px';
				list.style.width = imgSize['width'] * (count + 2) + 'px';
				list.style.height = imgSize['height'] + 'px';				
			}
			else if(type == "up"){//向上移出
				for(var j = 0; j < count + 2; j++){
					imgs[j].style.float = "";
				}
				//重置位置
				list.style.top = -imgSize['height'] + 'px';
				list.style.left = '';
				list.style.height = imgSize['height'] * (count + 2) + 'px';
				list.style.width = imgSize['width'] + 'px';					
			}			
			index = 1;
			showButton();
			container.onmouseout();
		}
	}
	container.onmouseout();
}