function myAjax(opt){
	opt = opt || {};
	opt.url = opt.url || 'localhost:8880';
	opt.data = opt.data || "";
	opt.dataType = opt.dataType || 'JSON';
	opt.success = opt.success || function(){};
	//[Deprecation] Synchronous XMLHttpRequest on the main thread is deprecated because of its detrimental effects to the end user's experience.
	//不设置为false(就是让它同步)，浏览器会自动拒绝这种做法，因为用户体验不好
    opt.async = opt.async || true;
    var params = [];
    for(var key in opt.data){
    	params.push(key + '=' + opt.data[key]);
    }
	var xmlHttp = null;//ajax对象
	if(XMLHttpRequest){
		xmlHttp = new XMLHttpRequest();
	}
	else{
		xmlHttp = new ActiveXObject('Microsoft.XMLHTTP');
	}
	if(opt.method.toUpperCase() == 'POST'){

	}
	else if(opt.method.toUpperCase() == 'GET'){
		//初始化 HTTP 请求参数，例如 URL 和 HTTP 方法，但是并不发送请求。
		//open(method, url, async, username, password)
		xmlHttp.open(opt.method, opt.url + params.join('&'), opt.async);
		//发送 HTTP 请求，使用传递给 open() 方法的参数，以及传递给该方法的可选请求体。
		xmlHttp.send(null);
	}
	//4 Loaded	HTTP 响应已经完全接收
	//调用success函数将结果输出
	xmlHttp.onreadystatechange = function(){
		if(xmlHttp.readyState == 4 && xmlHttp.status == 200){
			if(opt.dataType == 'JSON'){
				opt.success(xmlHttp.response);
			}
		}
	}
}