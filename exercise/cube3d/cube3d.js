var cube = document.getElementById('cube');
var oxDeg = 0, oyDeg = 0;
document.onmousedown = function(e){
	var oX = e.clientX;
	var oY = e.clientY;
	console.log('down');
	document.onmousemove = function(e){
		var newX = e.clientX;
		var newY = e.clientY;
		console.log('move1');
		var yDeg = (newY - oY) / cube.clientHeight * 360;
		var xDeg = (newX - oX) / cube.clientWidth * 360;
		console.log('move2');
		oX = newX;
		oY = newY;
		oxDeg += xDeg;
		oyDeg += yDeg;
		console.log('move3');
		cube.style.transform = "rotateX(" + oyDeg + "deg) rotateY(" + oxDeg + "deg)";
		console.log('move4');					
	}			
			//这个放置的位置还是有讲究的
	document.onmouseup = function(){
		console.log('up');
		document.onmousemove = null;
		document.onmouseup = null;
	}
}

/*3D爱心*/
//创建一系列边线
var love = document.getElementById('love');
// var loveSide = document.querySelector('#love div');
var interval = 10;
var cnt = 360 / interval;
for(var i = 0; i < cnt; i++){
	/*生成多个div，每个div有不同的transform*/
	/*方法1：添加node，获取transform的值，通过transform，但是transform的值是matrix，设置不方便*/
	// var side = loveSide.cloneNode(true);
	// var str = " rotateY(" + i * interval + "deg)";
	// var s = getComputedStyle(loveSide).transform;
	// side.style.transform = s + str;
	// love.appendChild(side);

	/*方法2： 用innerHTML，把style直接写在<><>里面*/
	/*先绕y轴，再绕z轴*/
	var html = "<div style = \'transform: rotateY(" + i * interval + "deg) rotateZ(52deg) translateX(66px)\'></div>";
	love.innerHTML += html;
}

/*熊猫图片3d旋转*/
var panda = document.getElementById('panda');
var pandas = panda.children;
var pandaCnt = pandas.length;
var eachDeg = 2 * Math.PI / pandaCnt;
var each = -360 / pandaCnt;
var r = 300;
for(var i = 0; i < pandaCnt; i++){
	var x = -r * Math.sin(i * eachDeg);
	var y = r * Math.cos(i * eachDeg);
	// pandas[i].style.transform = 'translateX(' + x + 'px) translateZ(' + y + 'px) rotateY(' + i * each + 'deg)';
}