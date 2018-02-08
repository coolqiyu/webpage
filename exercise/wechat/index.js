var data = {
	'questions': [{
		'left': '13213',
		'right': [{
			'msg': '1231',
			'score': 1
		},{
			'msg': '1231',
			'score': 2
		},{
			'msg': '1231',
			'score': 3
		}]},{
		'left': '11111',
		'right': [{
			'msg': '324654',
			'score': 3
		}]},{'left': '54455',
		'right': [{
			'msg': '4545',
			'score': 3
		}]}],
	'result': [{
		'score': 10,
		'msg': '呵呵'
	},{
		'score': 4,
		'msg': '不错继续努力'
	}]		
};

//点击继续按钮，关闭第一个页面，显示聊天页面
var continueBtn = document.getElementById('js-continue-btn');
var firstPage = document.getElementById('js-continue-btn');
continueBtn.addEventListener('click', function(){
	firstPage.classList.add('hide');
})

//第二页的逻辑
//全局dom节点
var secondPage = document.getElementById('js-second-page');
var main = document.getElementsByTagName('main')[0];
var footer = document.getElementsByTagName('footer')[0];
var answerDiv = document.getElementById('js-answer');
var resultDiv = document.getElementById('js-result');
//问题相关全局变量
var questionLen = data.questions.length;//总的问题数量
var currentIndex = 0;//当前是第几个问题
var score = 0;//得分
//设置一条问题，左边及下方的备选答案
function setQuestion(){
	//左边的数据
	main.appendChild(str2DOM(`<div class="msg-left msg"><i></i><p>${data.questions[currentIndex].left}</p></div>`));

	//下方的备选答案
	var answerLen = data.questions[currentIndex].right.length;
	for(let i = 0; i < answerLen; i++){
		answerDiv.appendChild(str2DOM(`<div class="msg-right msg"><p data-score=${data.questions[currentIndex].right[i].score}>${data.questions[currentIndex].right[i].msg}</p></div>`));
	}
	currentIndex++;
	toggleClass();
}

answerDiv.addEventListener('click', function(e){
	let target = e.target;
	let currentTarget = e.currentTarget;
	while(target !== currentTarget){
		if(target.hasAttribute('data-score')){
			score += Number(e.target.getAttribute('data-score'));
			answerDiv.innerHTML = '';
			main.appendChild(str2DOM(`<div class="msg-right msg"><i></i><p>${e.target.innerText}</p></div>`));
			toggleClass();
			nextQuestion(1000);
			return;
		}
		else
			target = target.parentNode;
	}
})

function str2DOM(template){
	var div = document.createElement('div');
	div.innerHTML = template;
	return div.children[0];
}
function toggleClass(){
	//设置样式
	secondPage.classList.toggle('show-selector');
	// main.classList.toggle('show-selector');
	// answerDiv.classList.toggle('show-selector');
}
function nextQuestion(timer){
	if(currentIndex === questionLen){//已经完成所有答题
		endGame();
		return;
	}
	setTimeout(function(){
		setQuestion();
	}, timer);
}
function endGame(){
	//判断最后的得分是哪个区间
	//计算落在数组的哪个区间？我只想到遍历
	//1. for(let i = ...)
	//2. forEach 这个不能在中间停止
	//3. every可以根据返回true/false来决定是否结束
	data.result.every(item=>{
		if(score > item.score){
			main.appendChild(str2DOM(`<div class="msg-left msg"><i></i><p>${item.msg}</p></div>`));
			resultDiv.style.display = 'flex';
			document.getElementById('js-tip').innerHTML = `<p>${item.msg}</p>`;
			document.body.appendChild(str2DOM(`<div class=modal></div>`));
			return false;
		}
		return true;
	})
}
function startGame(){
	nextQuestion(300);
}
startGame();