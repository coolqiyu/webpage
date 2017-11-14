var loginDiv = document.getElementById("js-login");//登录
var login = document.getElementById("js-loginBtn");//登录按钮
var registerDiv = document.getElementById("js-register");//注册
var register = document.getElementById("js-registerBtn");//注册
var errorMsg = document.getElementById("js-errorMsg");
var errorMsgMap = {//错误提示信息
	"empty": "请补全信息",
	"diffrent": "两次密码不相同",
	"error":"用户名密码不正确"
};
register.onclick = function(){
	var conditions = registerDiv.children;
	if(!conditions[0].value || !conditions[1].value || !conditions[2].value){
		errorMsg.innerHTML = errorMsgMap.empty;
	}
	else if(conditions[1].value !== conditions[2].value){
		errorMsg.innerHTML = errorMsgMap.diffrent;
	}
	else{//进行注册验证		
		var result = WEBSOCKET.sendMsg({
			name: conditions[0].value,
			password: conditions[1].value,
			type: "register"
		}, 'json');
		if(!!result)//这里把token返回，然后怎么放到头里面呢？
			errorMsg.innerHTML = errorMsgMap.error;
		else{
			errorMsg.innerHTML = "";
			window.location.href = "../html/main.html";//跳转到主页面
		}
	}
}