var logPre = document.getElementById('js-log');
//定时发起ajax请求，请求记录
setInterval(function(){
	ajax({
      method: "get",
      url: "/main/visitRecord/get",
      success: function(data){
      	  logPre.innerHTML = logPre.innerHTML + data;
          //window.location.href = "/interface/get?interfaceid=" + interfaceid;
      }
    });
}, 5000);