// class:	BufferLoader
// ------------------------------------------------	
var BufferLoader = function(contextPm, arrUrlPm, functionFinishedPm) {
  //音频上下文
  this.context = contextPm;
  //文件url路径数组
  this.arrUrl = arrUrlPm;
  //函数
  this.functionFinished = functionFinishedPm;
  //我创建的缓存数组
  this.arrBuffer = new Array();
  //我们在哪个文件
  this.ind = 0;
}

// function:	init
// desc:
// ------------------------------------------------	
BufferLoader.prototype.load = function() {
  //开始加载第一个
  this.loadFile(0);
  
}

// function:	loadFile
// ------------------------------------------------	
BufferLoader.prototype.loadFile = function(indPm) {
	var request = new XMLHttpRequest();
	var url = this.arrUrl[indPm];
	request.open('GET', url, true);
	request.responseType = 'arraybuffer';
	var context = this.context;
	
	var onError = function() {
		// handle error
	};
	//异步解码
	request.onload = function() {
		//当它完成时
		context.decodeAudioData(request.response, function(theBuffer) {
		  finishedFile(theBuffer);
		}, onError);
	};
	request.send();	
	
}

// function:	finishedFile
// ------------------------------------------------	
BufferLoader.prototype.finishedFile = function(bufferPm) {
  this.arrBuffer.push(bufferPm);
  //是否是最后一个
  if (this.ind >= this.arrUrl.length - 1) {
    //完成，调用结束函数，并返回缓存数组
    this.functionFinished(this.arrBuffer); 
  } else {
    this.ind++;
    //加载下一个
    this.loadFile(this.ind);
  }
}