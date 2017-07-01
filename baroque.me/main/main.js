//2017.07.02��һ��д����ļ����������˽���Щ���������ã�ֻ�����˷���
var suit = {};

//���ٺ���ִ��һ�θ��º��������1��ִ��30�Σ�30*33ԼΪ1000��
var UPDATE_INTERVAL = 33;
//���ٺ���ִ��һ�μ��ظ��£���Ϊһ����ʱ��
var LOAD_UPDATE_INTERVAL = 80;
//notes/pitches�ܹ��ж��٣�Ҫ��֤�ͱ���������swf�ļ�ƥ��
var TOTAL_NOTES = 38;
//��ʼ�����ӣ��ٶȣ�ÿ���ӣ�
var BPM_NORM = 145;
//ÿ������С����������ؼ��ٶ�
var MOUSE_SPEED_MIN = 70;
//ÿ����������������ؼ��ٶ�
var MOUSE_SPEED_MAX = 1500;
//���ƽ���ٶȱ���С����ֵ����꽫��ռ����
var MOUSE_SPEED_RATIO_GRAB = 0.4;
//����ƽ������ٶ�ʱ��Ҫ���ǵ���������Ŀ
var MOUSE_AVERAGE_COUNT = 5;
//������������������Ϊ8��ƥ��Bach���ַ���
var TOTAL_THREADS = 8;
//�ڸ������ܹ��ж���notes
var TOTAL_NOTES_IN_SONG = SONG_DATA_ARRAY.length;
//ÿ���߳�ϸ�ֳɶ���notes��1=1/4��2=1/8��
var NOTE_UNIT = 2;
//����Pythagorean scale(�ϴ����˹����)���������ַ���������˵�ֵ�������������
var HALF_STEP_MULTIPLIER = 0.943874312681769;
//һ���ߵ���󳤶ȣ��������͵�note
var MAX_LENGTH = 590;
//Ϊ��ߵ�note������̵ĳ��ȣ�����ʽ�������
var MIN_LENGTH = MAX_LENGTH * Math.pow(HALF_STEP_MULTIPLIER, TOTAL_NOTES - 1);
//��pi�洢Ϊȫ�ֳ���
var MATH_PI = Math.PI
//�Ƿ�Ϊ�˲�����ʾ֡��
var SHOW_FRAMERATE = false;
//��ʼ�������ҳ���ϵ�λ��
var mouseX = 0, mouseY = 0;

var aboutURL = "http://www.chenalexander.com/Bach";

//�ٶ�(px/frame)С��ʲôֵʱ��һ���ڵ������ռһ���߶����ǵ�����
//������ٶ������������ٶ����£���һ�׸��нڵ�������������������
var SPD_GRAB = 4;
//��ʲô�ٶ�ʱӦ�ú��Ե���
//������ѭ��ʱ�𵽰�����ʹ�õ��Թ������ܵľ���
//ͬʱҲ������������������������ʱ������һЩ
var SPD_IGNORE_MAX = 80;

//MIDI notes��SONG_DATA_ARRAYӳ������ǵ�����note scale
var MIDI_MAP = {
  // Numerical keys.
  '36': 0,
  '37': 1,
  '38': 2,
  '39': 3,
  '40': 4,
  '41': 5,
  '42': 6,
  '43': 7,
  '44': 8,
  '45': 9,
  '46': 10,
  '47': 11,
  '48': 12,
  '49': 13,
  '50': 14,
  '51': 15,
  '52': 16,
  '53': 17,
  '54': 18,
  '55': 19,
  '56': 20,
  '57': 21,
  '58': 22,
  '59': 23,
  '60': 24,
  '61': 25,
  '62': 26,
  '63': 27,
  '64': 28,
  '65': 29,
  '66': 30,
  '67': 31,
  '68': 32,
  '69': 33,
  '70': 34,
  '71': 35,
  '72': 36
};

//��ҳ��Ƶ"context"����
var context = null;
//������Ƶ�����������������
var arrBuffers, arrUrl;

/**
 * һ�����б���������ʼ����
 */
suite.everythingIsReady = function(){
    if(suite.ready) {return;}
    suite.ready = true;
    //���߻�����׼������
    suite.matchine.doneLoading();
};

/**
 * ��ʼ���ع���
 */
suite.init = function(){
    suite.ready = false;
    suite.initMidiMap();
    //������ҳ��Ƶ������
    contextClass = (window.AudioContext || window.webkitAudioContext || window.mozAudioContext || window.oAudioContext || window.msAudioContext);
    if(contextClass){
        context = new contextClass();
    }else{
        //��ҳ��Ƶapi�����ã���Ҫ�û�ʹ��һ����֧�ֵ������
    }
    
    //������ô�С�ļ�����
    window.addEventListener('resize', rsize, false);
    //����ƶ�
    document.addEventListener('mousemove', function(e){
        mouseX = e.pageX;
        mouseY = e.pageY;
    }, false);
    //��갴��
    document.addEventListener('mousedown', function(e){
        mousePressed = true;
        if(suite.machine.mouseDown != undefined)
            suite.machine.mouseDown(e);
            e.preventDefault();
    },false);
    //��굯��
    document.addEventListener('mouseup', function(e){
        mousePressed = false;
        if(suite.machine.mouseUp != undefined)
            suite.machine.mouseUp(e);
    },false);
    
    //��ʼ������
    suite.canvasEl = document.getElementById('main-canvas');
    suite.canvasObj = suite.canvaseEl.getContext('2d');
    //����һ��������
    suite.machine = new Machine(suite.canvasObj);
    suite.indNoteLd = 0;
    //����һ�����ô�С�ļ�����
    rsize();
    //�������ǵĻ���
    suite.machine.build();
    suite.machine.beginLoading();
    //��ʼ����ѭ��
    setInterval(updateLoop, UPDATE_INTERVAL);
    
    //����Ƶ�ļ��м��� 
    //������Ƶ��������
    arrBuffers = new Array(TOTAL_NOTES);
    //����URL����
    arrUrl = new Array(TOTAL_NOTES);
	var midiValue, pre;
	for (var i = 0; i < TOTAL_NOTES; i++) {
			if (i < 10) pre = '0'; else pre = '';
		arrUrl[i] = ('audio/harp_' + pre + i + ".mp3");
	}
	bufferLoader = new BufferLoader(context, arrUrl, finishedLoading);
	bufferLoader.load();
};

    