//左侧的项目导航进入查看所有属于该项目的用例
var projectList = document.getElementById("js-project-nav");
var addCaseBtn = document.getElementById("js-addcase-btn");
var usecaseList = document.getElementById("js-usecase-list");
var currProject = projectList.children[0];
//设置初始的项目active
var projects = projectList.children;
var pid = location.search.toString().match(/pid=\d*/i);
if(pid){
	for(let i = 0, len = projects.length; i < len; i++){
		if(projects[i].getAttribute("pid") == pid[0].slice(4)){
			currProject = projects[i];
			break;
		}
	}
}
currProject.classList.add("active");
//左边导航栏设置active
// if(!/pid/i.test(window.location.href)){
// 	projectList.children[0].classList.add("active");
// }
// else{
// 	var projects = projectList.children;
// 	for(let i = 0, len = projects.length; i < len; i++){
// 		if(projects[i].classList.contain("active") && projects[i].getAttribute("pid") == location.search.find(/pid=*&/i))
// 	}
// }

addCaseBtn.addEventListener('click', function(){
	window.location.href="/modifyUsecase";	
})


usecaseList.addEventListener("click", function(e){
	var target = e.target;
	var parent = target;
	while(!/li/i.test(parent.tagName)){
		parent = target.parentNode;
	}
	// ajax({
	// 	method: 'get',
	// 	url: '/main/usecase/get',
	// 	data: {
	// 		uid: parent.getAttribute('uid')
	// 	},
	// 	success: function(result){
	// 		console.log("get usecase success");
	// 	}
	// })
	window.location.href="/main/usecase/get?uid=" + parent.getAttribute('uid') + "&type=1&_=" + Date.now();
})

//type表示请求的方式：0为ajax，1为同步
projectList.addEventListener("click", function(e){
	var target = e.target;
	var parent = target;
	while(!/li/i.test(parent.tagName)){
		parent = target.parentNode;
	}
	//修改currProject，改变active样式
	currProject.classList.remove("active");
	currProject = parent;
	currProject.classList.add("active");
	ajax({
		method: 'get',
		url: '/main/usecase/get',
		data: {
			pid: parent.getAttribute('pid'),
			type: 0
		},
		success: function(result){
			var usecases = usecaseList.children;
			for(var i = 0, len = usecases.length; i < len; i++){
				usecaseList.removeChild(usecases[0]);
			}
			var usecase = JSON.parse(result).usecase;
			for(var i = 0, len = usecase.length; i < len; i++){
				usecaseList.innerHTML  = usecaseList.innerHTML + `
				<li uid=${usecase[i].id}><span class='list-4col-index'>${i+1}</span><a class='list-4col'>${usecase[i].name}</a>
				<span class='list-4col'>${usecase[i].description}</span><button>删除</buttoon></li>
				`
			}
			// <%var len = usecase?usecase.length:0%>
			// <%for(var i = 0; i < len; i++){%>
			// <li uid=<%=usecase[i].id%>>
			// <span><%=i+1%></span>
			// <span><a><%=usecase[i].name%></a></span>
			// <span><%=usecase[i].description%></span>
			// <button>删除</button>
			// </li>
			// <%}%>
		}
	})
})