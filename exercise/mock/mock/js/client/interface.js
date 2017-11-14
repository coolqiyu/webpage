var editBtn = document.getElementById("js-edit");
var submitBtn = document.getElementById("js-submit");
var interface = document.getElementById("js-interface");
editBtn.onclick = function () {
	// if(editBtn.innerText === "编辑"){
	// 	interface.setAttribute("view-style", "edit");
	// 	editBtn.innerText = "取消";
	// }
	// else{
	// 	interface.setAttribute("view-style", "browser");
	// editBtn.innerText = "编辑";
	// }
	window.location.href = "/main/interface/modify?interfaceid=" + window.location.search.match(/interfaceid=(\d*)(&|$)/)[1];
}
submitBtn.onclick = function(){
	window.location.href = "/main";
}