var arr = [//保存所有的图片路径
{src:"images/1.png"},
{src:"images/2.jpg"},
{src:"images/3.jpg"},
{src:"images/4.jpg"},
{src:"images/5.jpg"},
{src:"images/6.jpg"},
{src:"images/7.jpg"},
{src:"images/8.jpg"},
{src:"images/9.jpg"},
{src:"images/10.jpg"},
{src:"images/11.jpg"},
{src:"images/12.jpg"},
];
var imgCnt = arr.length;
var index = 0;
function create() {//封装一个函数动态添加
	var oImg = document.createElement('img');//new Image();
	oImg.src = arr[(index++)%imgCnt].src;
	var li = getList();//获取高度最小的li，为了把图片添加到其上
	li.appendChild(oImg);
	setTimeout(function(){
		oImg.style.transform = "scale(1)";
	})
}
function getList(){
	var oLi = document.querySelectorAll('li');
	var h = Infinity;
	var target = -1;//找到的目标i
	//遍历找到出高度最小的li
	for(var i = 0; i < oLi.length; i++){
		if(oLi[i].clientHeight < h){
			h = oLi[i].clientHeight;
			target = i;
		}
	}
	return oLi[target];
}
/*
何时添加图片？
1. 文档高度 = 滚动条隐藏的高度 + 可视区的高度
2. 当达到
*/
var docH, scrollH = 0, viewH = window.innerHeight;
document.onmousewheel = function(e){
	scrollH = scrollH - e.wheelDelta;
	console.log(scrollH);
	docH = document.body.clientHeight;
	console.log(viewH, scrollH, docH);
	if(viewH + scrollH + 400 > docH){
		create();
	}
}

document.onreadystatechange = function(){
	if(document.readyState == 'complete'){
		for(var i = 0; i < 8; i++)
			create();
	}
}