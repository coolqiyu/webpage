var bgs, indexs, cnt;
var width, height;
var current = 0, before = -1;//图的序号：现在、上一个
var defaultClass, hoverClass;

function init(dc, hc){
	setClass(dc, hc);
	bgs = document.getElementsByClassName('bg');
	indexs = document.getElementsByTagName('li');
	width = bgs[0].clientWidth, height = bgs[0].clientHeight;
	cnt = indexs.length;//总的轮播图长度
	current = 0, before = -1;//图的序号：现在、上一个
	for(var i = 0; i < cnt; i++){
		bgs[i].style.zIndex = -i;
	}
}
//设置序号的类型
function setClass(dc, hc){
	defaultClass = dc;
	hoverClass = hc;
}
//修改要显示的图
function change(){
	changeBg();	
	
	before = current;
	if(current == cnt - 1){//轮播到最后一张图
		moveBack();
		// for(var i = 0; i < cnt; i++)
		// 	if( i != curreny)
		// 	bgs[i].style.transform = "";
		current = 0;
	}
	else{
		current += 1;
	}
	changeIndex();	
}

function changeBg(){
	//退出效果
	// bgs[current].style.transform = "translateY(-" + height + "px)";
	bgs[current].style.transition = "transform 1s";
	bgs[current].style.transform = "translateY(-" + height + "px)";
}

function changeIndex(){
	//把上一个的class修改成默认值
	if(before >= 0){
		var str = indexs[before].getAttribute('class');
		str = str.replace(hoverClass, defaultClass);
		indexs[before].setAttribute('class', str);
	}
	//把现在的class修改成hover值
	var str = indexs[current].getAttribute('class');
	str = str.replace(defaultClass, hoverClass);
	indexs[current].setAttribute('class', str);
}	

function moveBack(){
	for(var i = 0; i < cnt; i++){
		if(i != current){
			bgs[i].style.transition = "";
			bgs[i].style.transform = "";
		}
	}
	// for(var i = 0; i < cnt; i++){
	// 	bgs[i].style.zIndex = -i;
	// }
	// for(var i = 0; i < cnt; i++){
	// 	bgs[i].style.transform = "";
	// }
	//把图移到最后
	// for(var i = 0; i < cnt; i++){
	// 	if(i == before){
	// 		bgs[i].style.zIndex = -cnt;
	// 		bgs[i].style.transform = "";
	// 	}
	// 	else if(i != current)
	// 		bgs[i].style.zIndex ++;
	// }
//	bgs[current].style.zIndex = -6;
//	bgs[current].style.transform = "";
}
setInterval(change, 3000);