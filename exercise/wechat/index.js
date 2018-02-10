//页面全局变量
var categoryPage = document.getElementById('js-category-page');
var firstPage = document.getElementById('js-continue-btn');
var greet = document.getElementById('js-greet');
var secondPage = document.getElementById('js-second-page');
var main = document.getElementsByTagName('main')[0];
var footer = document.getElementsByTagName('footer')[0];
var answerDiv = document.getElementById('js-answer');
var resultDiv = document.getElementById('js-result');
var host = document.getElementById('js-host');
var continueBtn = document.getElementById('js-continue-btn');
var modal = document.getElementById('js-modal');
var replay = document.getElementById('js-replay');
var close = document.getElementById('js-close');
var back = document.getElementById('js-back');
var tip = document.getElementById('js-tip');

//游戏变量
var CATEGORY = '';//全局变量，保存当前选择的问题类目
var DATA = '';//全局变量，保存当前类目对应的问题
var questionLen = 0;//总的问题数量
var currentIndex = 0;//当前是第几个问题
var score = 0;//得分
var timeSpan = 1000;//问题出现的间隔时间

//第一页获取所有问题类型
!function setCategory(){
	var categories = Config.getCategory();
	for(category in categories){
		categoryPage.appendChild(str2DOM(`<div class='js-category'>${categories[category]}</div>`));
	}
}()
//绑定监听事件
!function bindEvent(){
	//监听选择问题类目
	categoryPage.addEventListener('click', function(e){
		let target = e.target;
		let currentTarget = e.currentTarget;
		while(target != currentTarget){
			if(target.classList.contains('js-category')){
				document.body.setAttribute('page-type', 'introduction');
				CATEGORY = target.innerText;
				greet.innerText = Config.getDescription(CATEGORY).greet;
				return;
			}
			target = target.parentNode;
		}
	})
	//点击继续按钮开始游戏。关闭第一个页面，显示聊天页面
	continueBtn.addEventListener('click', function(){
		document.body.setAttribute('page-type', 'chat');
		DATA = Config.getQuestionare(CATEGORY);	
		questionLen = DATA.questions.length;//总的问题数量
		host.innerText = DATA.host;
		startGame();
	})
	//监听答案选择事件
	answerDiv.addEventListener('click', function(e){
		let target = e.target;
		let currentTarget = e.currentTarget;
		while(target !== currentTarget){
			if(target.hasAttribute('data-score')){
				score += Number(e.target.getAttribute('data-score'));
				answerDiv.innerHTML = '';
				main.appendChild(str2DOM(`<div class="msg-right msg"><i></i><p>${e.target.innerText}</p></div>`));	
				toggleClass(secondPage, 'show-selector');
				main.scrollTo(0, 20000);
				nextQuestion();
				return;
			}
			else
				target = target.parentNode;
		}
	})
	//关闭最后的结果窗口
	close.addEventListener('click', function(){
		resultDiv.style.display = 'none';
		toggleClass(modal, 'hide');
	})
	//监听重新开始游戏按钮
	replay.addEventListener('click', function(){
		restartGame();
	})
	back.addEventListener('click', function(){
		restartGame();
	})
}()
//帮助函数
function str2DOM(template){
	var div = document.createElement('div');
	div.innerHTML = template;
	return div.children[0];
}
function toggleClass(obj, className){
	//设置样式
	obj.classList.toggle(className);	
}
function addClass(obj, className){
	//设置样式
	obj.classList.add(className);	
}
function removeClass(obj, className){
	//设置样式
	obj.classList.remove(className);	
}
//游戏逻辑部分
function startGame(){
	nextQuestion(300);
}
function nextQuestion(timer = timeSpan){
	if(currentIndex === questionLen){//已经完成所有答题
		endGame();
		return;
	}
	setTimeout(function(){
		setQuestion();
	}, timer);
}
//设置一条问题，左边及下方的备选答案
function setQuestion(){
	//左边的数据
	main.appendChild(str2DOM(`<div class="msg-left msg"><i></i><p>${DATA.questions[currentIndex].left}</p></div>`));

	//下方的备选答案
	var answerLen = DATA.questions[currentIndex].right.length;
	for(let i = 0; i < answerLen; i++){
		answerDiv.appendChild(str2DOM(`<div class="msg-right msg"><p data-score=${DATA.questions[currentIndex].right[i].score}>${DATA.questions[currentIndex].right[i].msg}</p></div>`));
	}
	currentIndex++;	
	toggleClass(secondPage, 'show-selector');
	main.scrollTo(0, 20000);
}
function endGame(){
	//判断最后的得分是哪个区间
	//计算落在数组的哪个区间？我只想到遍历
	//1. for(let i = ...)
	//2. forEach 这个不能在中间停止
	//3. every可以根据返回true/false来决定是否结束
	DATA.result.every(item=>{
		if(score > item.score){
			main.appendChild(str2DOM(`<div class="msg-left msg"><i></i><p>${item.msg}</p></div>`));
			resultDiv.style.display = 'flex';
			tip.innerHTML = `${item.suggestion}`;
			toggleClass(modal, 'hide');
			main.scrollTo(0, 20000);
			return false;
		}
		return true;
	})
}
function restartGame(){
	document.body.setAttribute('page-type', 'category');	
	addClass(modal, 'hide');
	resultDiv.style.display = 'none';
	addClass(answerDiv, 'hide');
	removeClass(secondPage, 'show-selector');
	answerDiv.innerHTML = '';
	main.innerHTML = '';
	score = 0;
	currentIndex = 0;
}