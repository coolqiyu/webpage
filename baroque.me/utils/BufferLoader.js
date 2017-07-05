// class:	BufferLoader
// ------------------------------------------------	
var BufferLoader = function(contextPm, arrUrlPm, functionFinishedPm) {
  //��Ƶ������
  this.context = contextPm;
  //�ļ�url·������
  this.arrUrl = arrUrlPm;
  //����
  this.functionFinished = functionFinishedPm;
  //�Ҵ����Ļ�������
  this.arrBuffer = new Array();
  //�������ĸ��ļ�
  this.ind = 0;
}

// function:	init
// desc:
// ------------------------------------------------	
BufferLoader.prototype.load = function() {
  //��ʼ���ص�һ��
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
	//�첽����
	request.onload = function() {
		//�������ʱ
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
  //�Ƿ������һ��
  if (this.ind >= this.arrUrl.length - 1) {
    //��ɣ����ý��������������ػ�������
    this.functionFinished(this.arrBuffer); 
  } else {
    this.ind++;
    //������һ��
    this.loadFile(this.ind);
  }
}