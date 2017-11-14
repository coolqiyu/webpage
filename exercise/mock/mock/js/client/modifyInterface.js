//接口id
var interfaceid = window.location.search.match(/interfaceid=(\d*)(&|$)/)[1];
//添加一个接口
var submit = document.getElementById("js-submit");
var addInterfaceBtn = document.getElementById("js-add-interface");
var cancelBtn = document.getElementById("js-cancel");
//接口列表信息
var interfaceList = document.getElementById("js-interfaces");

//一个接口的基本数据
var interfaceDiv = document.getElementById("js-interface");
var basic = document.getElementById("js-basic");//基本信息
var method = document.getElementById("js-method");//请求方法
var description = document.getElementById("js-description");//接口描述
var selectProject = document.getElementById("js-select-project");//接口属于哪个接口
var selectStatus = document.getElementById("js-select-status");//接口属于哪个接口
var selectKeepStep = document.getElementById("js-keep-step");
//每一步的信息
var stepDivs = document.getElementsByClassName("js-step");//接口中的步骤
// var request_body = document.getElementById("js-req-body");//请求体
// var response_body = document.getElementById("js-res-body");//返回体
// var response_code = document.getElementById("js-res-code");//返回码
var addStep = document.getElementById("js-add-step");//添加接口步骤

cancelBtn.addEventListener("click", function(){
  window.history.back();
})
interfaceDiv.addEventListener("click", function(e){
     var target = e.target;
     /**
      删除接口中的某一步
      */
    if(/^js-delete-step$/.test(target.className)){
        console.log("steps: ", stepDivs.length);
        target.parentNode.parentNode.removeChild(target.parentNode);

        console.log("after delete steps: ", stepDivs.length);
    }
    //添加接口请求头
    else if(/js-add-reqheader/.test(target.className)){
        var div = document.createElement("div");
        div.innerHTML = 'key: <input type="text" name="req-header">value: <input type="text" name="req-header"><button class="js-remove-header">删除</button>';
        var toAddHeader = target;
        while(!(/js-req-headers/i.test(toAddHeader.className)))
          toAddHeader = toAddHeader.nextElementSibling;
        toAddHeader.appendChild(div);
    }
    //添加接口返回头
    else if(/js-add-resheader/.test(target.className)){
        var div = document.createElement("div");
        div.innerHTML = 'key: <input type="text" name="res-header">value: <input type="text" name="req-header"><button class="js-remove-header">删除</button>';
        var toAddHeader = target;
        while(!(/js-res-headers/i.test(toAddHeader.className)))
          toAddHeader = toAddHeader.nextElementSibling;
        toAddHeader.appendChild(div);
    }
    else if(/js-remove-header/i.test(target.className)){
      target.parentNode.parentNode.removeChild(target.parentNode);
    }
})

//获取一个步骤的信息
function getStepInfo(stepDiv){
    var reqHeaders = stepDiv.getElementsByClassName("js-req-headers")[0];
    var resHeaders = stepDiv.getElementsByClassName("js-res-headers")[0];
    var reqHeader = {}, resHeader = {};
    var headers = reqHeaders.children;
    for(var i = 0, len = headers.length; i < len; i++){
      reqHeader[headers[i].children[0].value] = headers[i].children[1].value;
    }
    headers = resHeaders.children;
    for(var i = 0, len = headers.length; i < len; i++){
      resHeader[headers[i].children[0].value] = headers[i].children[1].value;
    }
    var reqBody = stepDiv.getElementsByClassName("js-req-body")[0].value;
    var resCode = stepDiv.getElementsByClassName("js-res-code")[0].value;
    var resBody = stepDiv.getElementsByClassName("js-res-body")[0].value;
    return{
       request_header: reqHeader, 
       request_body: reqBody,
       response_code: resCode,
       response_header: resHeader,
       response_body: resBody
    }
}
/**
添加步骤
*/
addStep.addEventListener("click", function(e){

    var len = stepDivs.length;
    console.log("before add: ", len);
    var newStep;
    if(len > 0){
      newStep = stepDivs[0].cloneNode(true);
      newStep.style.display = "block";
      stepDivs[0].parentNode.insertBefore(newStep, stepDivs[len - 1].nextElementSibling);
    } 
    console.log("after add: ", stepDivs.length);
})

/*
* 提交，通过ajax来新增一个接口信息
*/
submit.addEventListener("click", function(){
    //基本信息
    var basicInputs = basic.getElementsByTagName("input");
    //每一步的信息
    var steps = [];
    for(var i = 1, len = stepDivs.length; i < len; i++){
        var stepInfo = getStepInfo(stepDivs[i]);
        steps.push(stepInfo);
    }

    ajax({
      method: "post",
      url: "/main/interface/modify?interfaceid=" + interfaceid,
      data: {
          func_name: basicInputs[0].value,
          method: method.value,
          path: basicInputs[1].value,
          description: basicInputs[2].value,
          status: Number(selectStatus.value),
          project: Number(selectProject.value),
          keep_step: Number(selectKeepStep.value),
          steps: JSON.stringify(steps)
      },
      success: function(insertid){
          window.location.href = "/interface/get?interfaceid=" + interfaceid;
      }
    });
})


// var project = document.getElementById("js-project");
// project.onclick = function(){
//   window.location.href = "/project";
// }