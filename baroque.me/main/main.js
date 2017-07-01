//2017.07.02第一次写这个文件，并不能了解这些变量的作用，只是作了翻译
var suit = {};

//多少毫秒执行一次更新函数。大概1秒执行30次（30*33约为1000）
var UPDATE_INTERVAL = 33;
//多少毫秒执行一次加载更新，作为一个计时器
var LOAD_UPDATE_INTERVAL = 80;
//notes/pitches总共有多少，要保证和编译后的声明swf文件匹配
var TOTAL_NOTES = 38;
//初始的拍子（速度，每分钟）
var BPM_NORM = 145;
//每毫秒最小的鼠标在像素间速度
var MOUSE_SPEED_MIN = 70;
//每毫秒最大的鼠标在像素间速度
var MOUSE_SPEED_MAX = 1500;
//如果平均速度比率小于限值则鼠标将抢占线条
var MOUSE_SPEED_RATIO_GRAB = 0.4;
//计算平均鼠标速度时需要考虑的评价量数目
var MOUSE_AVERAGE_COUNT = 5;
//线条数量，这里设置为8以匹配Bach音乐分组
var TOTAL_THREADS = 8;
//在歌里面总共有多少notes
var TOTAL_NOTES_IN_SONG = SONG_DATA_ARRAY.length;
//每个线程细分成多少notes。1=1/4，2=1/8等
var NOTE_UNIT = 2;
//根据Pythagorean scale(毕达哥拉斯音阶)，设置与字符串长度相乘的值来提升半个音阶
var HALF_STEP_MULTIPLIER = 0.943874312681769;
//一条线的最大长度，分配给最低的note
var MAX_LENGTH = 590;
//为最高的note设置最短的长度，由算式算出来的
var MIN_LENGTH = MAX_LENGTH * Math.pow(HALF_STEP_MULTIPLIER, TOTAL_NOTES - 1);
//把pi存储为全局常量
var MATH_PI = Math.PI
//是否为了测试显示帧率
var SHOW_FRAMERATE = false;
//初始化鼠标在页面上的位置
var mouseX = 0, mouseY = 0;

var aboutURL = "http://www.chenalexander.com/Bach";

//速度(px/frame)小于什么值时，一个节点可以抢占一条线而不是弹动它
//把这个速度设置在正常速度以下，在一首歌中节点正在旅游来帮助表演
var SPD_GRAB = 4;
//在什么速度时应该忽略弹动
//当歌曲循环时起到帮助，使得点略过不可能的距离
//同时也帮助当在所有线中拉动过快时，忽略一些
var SPD_IGNORE_MAX = 80;

//MIDI notes从SONG_DATA_ARRAY映射进我们的音乐note scale
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

//网页音频"context"对象
var context = null;
//保存音频缓存和文章名的数组
var arrBuffers, arrUrl;

/**
 * 一旦所有被加载完则开始进程
 */
suite.everythingIsReady = function(){
    if(suite.ready) {return;}
    suite.ready = true;
    //告诉机器它准备好了
    suite.matchine.doneLoading();
};

/**
 * 开始加载过程
 */
suite.init = function(){
    suite.ready = false;
    suite.initMidiMap();
    //创建网页音频上下文
    contextClass = (window.AudioContext || window.webkitAudioContext || window.mozAudioContext || window.oAudioContext || window.msAudioContext);
    if(contextClass){
        context = new contextClass();
    }else{
        //网页音频api不可用，需要用户使用一个被支持的浏览器
    }
    
    //添加重置大小的监听器
    window.addEventListener('resize', rsize, false);
    //鼠标移动
    document.addEventListener('mousemove', function(e){
        mouseX = e.pageX;
        mouseY = e.pageY;
    }, false);
    //鼠标按下
    document.addEventListener('mousedown', function(e){
        mousePressed = true;
        if(suite.machine.mouseDown != undefined)
            suite.machine.mouseDown(e);
            e.preventDefault();
    },false);
    //鼠标弹起
    document.addEventListener('mouseup', function(e){
        mousePressed = false;
        if(suite.machine.mouseUp != undefined)
            suite.machine.mouseUp(e);
    },false);
    
    //初始化画布
    suite.canvasEl = document.getElementById('main-canvas');
    suite.canvasObj = suite.canvaseEl.getContext('2d');
    //创建一个吉它类
    suite.machine = new Machine(suite.canvasObj);
    suite.indNoteLd = 0;
    //调用一次重置大小的监听器
    rsize();
    //建造我们的机器
    suite.machine.build();
    suite.machine.beginLoading();
    //开始更新循环
    setInterval(updateLoop, UPDATE_INTERVAL);
    
    //在音频文件中加载 
    //创建音频缓存数组
    arrBuffers = new Array(TOTAL_NOTES);
    //创建URL数组
    arrUrl = new Array(TOTAL_NOTES);
	var midiValue, pre;
	for (var i = 0; i < TOTAL_NOTES; i++) {
			if (i < 10) pre = '0'; else pre = '';
		arrUrl[i] = ('audio/harp_' + pre + i + ".mp3");
	}
	bufferLoader = new BufferLoader(context, arrUrl, finishedLoading);
	bufferLoader.load();
};

    