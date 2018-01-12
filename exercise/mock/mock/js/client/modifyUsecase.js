var projectSelect = document.getElementById('js-select-project');
var interfaceSelect = document.getElementById("js-select-interface");
var INTERFACES = [];
//根据选择的project，ajax来获取它下面的接口
projectSelect.addEventListener('change', function(){
	ajax({
		method: "post", 
		url: "/main/usecase/interface",
		data: {
			project: this.options[this.selectedIndex].value
		},
		success: function(data){
			//删除原来的option
			for(var i = 0, len = interfaceSelect.options.length; i < len; i++)
				interfaceSelect.options.remove(0);
			data = JSON.parse(data);
			for(var i = 0, len = data.length; i < len; i++){
				var option = new Option(data[i].id);
				option.innerHTML = data[i].path;
				interfaceSelect.options.add(option);
			}
			INTERFACES = data;
		}
	})
})

//把选中的接口添加到步骤中
var addInterfaceBtn = document.getElementById("js-add-interface-btn");
var stepList = document.getElementById("js-step-list")
addInterfaceBtn.addEventListener('click', function(){
	var index = interfaceSelect.selectedIndex;
	// ${stepList.children.length + 1}
	stepList.innerHTML += `<li iid=${INTERFACES[index].id}><span class='list-4col-index'>${stepList.children.length + 1}</span>
	<span class='list-4col'>${INTERFACES[index].path}</span><span class='list-4col'>${INTERFACES[index].description}</span><button>删除</button></li>`;
})	

//提交信息
var submitBtn = document.getElementById("js-submit-btn");
submitBtn.addEventListener('click', function(){
	var usecaseName = document.getElementById("js-name").value;
	var description = document.getElementById("js-description").value;
	//对象信息
	var objInputs = document.getElementById("js-object").getElementsByTagName('input');
	var object = [];
	for(var i = 0, len = objInputs.length; i < len / 3; i += 3){
		object[i] = [];
		object[i].push(objInputs[i].value);
		object[i].push(objInputs[i + 1].value);
		object[i].push(objInputs[i + 2].value);
	}
	//接口步骤信息
	var interfaceList = stepList.children;
	var interfaces = [];
	for(var i = 0, len = interfaceList.length; i < len; i++)
		interfaces.push(interfaceList[i].getAttribute('iid'));
	ajax({
		method: 'post',
		url: '/main/usecase/add',
		data: {
			name: usecaseName,
			project: projectSelect.options[projectSelect.selectedIndex].value,
			description: description,
			object: JSON.stringify(object),
			interfaces: JSON.stringify(interfaces) 
		},
		success: function(){
			console.log("success");
		}
	})
})

//左侧的项目导航进入查看所有属于该项目的用例
var projectList = document.getElementById("js-project-nav");
projectList.addEventListener("click", function(e){
	var target = e.target;
	var parent = target;
	while(!/li/i.test(parent.tagName)){
		parent = target.parentNode;
	}
	parent.classList.add("active")
	window.location.href = "/main/usecase/get?pid=" + parent.getAttribute("pid") + "&type=1&_=" + Date.now();
	// ajax({
	// 	method: 'get',
	// 	url: '/main/usecase/get',
	// 	data: {
	// 		pid: parent.getAttribute('pid')
	// 	},
	// 	success: function(result){
	// 		// var usecases = usecaseList.children;
	// 		// for(var i = 0, len = usecases.length; i < len; i++){
	// 		// 	usecaseList.removeChild(usecases[0]);
	// 		// }
	// 		var usecase = JSON.parse(result).usecase;
	// 		for(var i = 0, len = usecase.length; i < len; i++){
	// 			usecaseList.innerHTML  = usecaseList.innerHTML + `
	// 			<li uid=${usecase[i].id}><span>${i+1}</span><span><a>${usecase[i].name}</a></span>
	// 			<span>${usecase[i].description}</span><button>删除</buttoon></li>
	// 			`
	// 		}
	// 		// <%var len = usecase?usecase.length:0%>
	// 		// <%for(var i = 0; i < len; i++){%>
	// 		// <li uid=<%=usecase[i].id%>>
	// 		// <span><%=i+1%></span>
	// 		// <span><a><%=usecase[i].name%></a></span>
	// 		// <span><%=usecase[i].description%></span>
	// 		// <button>删除</button>
	// 		// </li>
	// 		// <%}%>
	// 	}
	//})
})