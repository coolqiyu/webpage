var submit = document.getElementById("js-submit");
var addProject = document.getElementById("js-add-project"); 
var projectInputs = addProject.getElementsByTagName("input");
var projectList = document.getElementById("js-project-list");

submit.addEventListener("click", function() {
	var project = {
			name: projectInputs[0].value,
			real_host: projectInputs[1].value,
			description: projectInputs[2].value
		};
	ajax({
		method: "post", 
		url: "/project/add",
		data: project, 
		success: function(insertId){
			var li = document.createElement("li");
			li.innerHTML = "<span>" + insertId + "</span><span>" + project.name + "</span><span>" + project.real_host + "</span><span>" + project.description + "</span>";
			projectList.appendChild(li);
		}
	});
})

projectList.addEventListener("click", function(e){
	var target = e.target;
	if(/button/i.test(target.tagName)){
		var parent = target;//找到这一行li
		while(!/li/i.test(parent.tagName))
			parent = parent.parentNode;
		if(target.classList.contains("js-delete")){//“删除”按钮
			ajax({
				method: "post", 
				url: "/project/modify",
				data: {
					id: projectInputs[0].value,
					op: "delete"
				}, 
				success: function(result){
					parent.parentNode.removeChild(parent);
				}
			});
		}
		else if(target.classList.contains("js-op")){
			if(/show/i.test(parent.getAttribute("view"))){//当前是展示状态
				target.innerHTML = "保存";
				parent.setAttribute("view", "edit");
			}
			else{//现在按钮为保存
				target.innerHTML = "编辑";
				parent.setAttribute("view", "show");

				//异步传数据==========
				var projectInputs = parent.getElementsByTagName("input");
				ajax({
					method: "post", 
					url: "/project/modify",
					data: {
						id: projectInputs[0].value,
						name: projectInputs[1].value,
						real_host: projectInputs[2].value,
						description: projectInputs[3].value,
						op: "update"
					}, 
					success: function(result){
						var projectSpans = parent.getElementsByTagName("span");
						for(var i = 0; i < 4; i++)
							projectSpans[i].innerHTML = projectInputs[i].value;
					}
				});
			}
		}		
	}
})