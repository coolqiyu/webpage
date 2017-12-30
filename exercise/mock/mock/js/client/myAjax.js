/*客户端发起ajax请求*/
function ajax(opt){
	var url = opt.url || '/', 
	method = opt.method || 'GET',
	data = opt.data || {},
	async = opt.async !== false,
	success = opt.success,
	fail = opt.fail;

	var xhr = new XMLHttpRequest();
	var dataStr = "";
	for(var key in data){
		dataStr += key + "=" + data[key] + "&";
	}
	dataStr += "_=" + new Date().getTime();

	if(/get/i.test(method)){
		url = url + "?" + dataStr;
		//alert("get url: " + url);
		xhr.open("get", url, async);
		xhr.send(null);
	}
	else if(/post/i.test(method)){
		xhr.open(method, url, async);
		xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
		console.log("send data: ", dataStr);
		xhr.send(dataStr);
		console.log("send complete");
	}
	xhr.onreadystatechange = function(){
		console.log("ready: ", xhr.readyState);
		if(xhr.readyState === 4){
			if(xhr.status >= 200 && xhr.status < 300){
				success && success(this.responseText);
			}
			else{
				fail && fail(this.responseText);
			}
		}
	}
}

//当您使用 async=false 时，请不要编写 onreadystatechange 函数 - 把代码放到 send() 语句后面即可