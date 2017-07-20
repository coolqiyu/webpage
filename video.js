function playV(window, document){
	var video = document.getElementsByTagName('video')[0],
	videoControls = document.getElementById('videoControls'),
	play = document.getElementById('playBtn'),
	progressContainer = document.getElementById('progress'),
	progressHolder = document.getElementById('progress_box');
	playProgressBar = document.getElementById('play_progress');

	var videoPlayer={
		init:function(){
			var that = this;
			document.documentElement.className = "js";
			video.removeAttribute('controls');//移除controls属性
			/*EventTarget.addEventListener() 方法将指定的监听器注册到 EventTarget上，当该对象触发指定的事件时，指定的回调函数就会被执行。
			target.addEventListener(type, listener[, options]);
			*/ 
			//video.addEventListener('loadeddata', this.initializeControls, false);//视频加载完成后，显示控制按钮
			this.initializeControls();
			this.handleButtonPresses();//控制按钮事件
			this.videoScrubbing();
		},
		initializeControls:function(){
			videoPlayer.showHideControls();
		},
		//添加按件监听器，显示或隐藏
		showHideControls:function(){
			video.addEventListener('mouseover', function(){
				videoControls.style.opacity=1;
			}, false);
			videoControls.addEventListener('mouseover', function(){
				videoControls.style.opacity=1;
			}, false);
			video.addEventListener('mouseout', function(){
				videoControls.style.opacity=0;
			}, false);
			videoControls.addEventListener('mouseout', function(){
				videoControls.style.opacity=0;
			}, false);
		},
		//控制点击视频和播放按钮事件
		handleButtonPresses:function(){
			video.addEventListener('click', this.playPause, false);//视频位置点击事件
			play.addEventListener('click', this.playPause, false);//播放按钮点击事件
			//播放时
			video.addEventListener('play', function(){
				play.title='Pause'; 
				play.innerHTML="<span id='pauseButton'>&#x2590;&#x2590;</span>";
				videoPlayer.trackPlayProgress();//播放时不停更新进度条
			}, false);
			//暂停时
			video.addEventListener('pause', function(){
				play.title='Play';
				play.innerHTML='&#x25BA';
				videoPlayer.stopTrackingPlayProgress();//暂停了就不再更新进度条了
			},false);
			//结束时
			video.addEventListener('ended', function(){this.currentTime = 0; this.pause();
			}, false);
		},
		//控制视频播放或停止
		playPause:function(){
			if(video.paused || video.ended){
				//currentTime将播放时间重置为0
				if(video.ended){video.currentTime = 0;}
				video.play();
			}
			else{
				video.pause();
			}
		},
		//循环更新进度条，每50ms调用一次update
		//第一种：用setInterval来实现
		// trackPlayProgress:function(){
		// 	playProgressInterval = setInterval(videoPlayer.updatePlayProgress, 50);
		// },
		// 第二种：利用setTimeout，定义具名函数并调用自己
		trackPlayProgress:function progressTrack(){
			//用setTimeout来实现每50ms调用一次update			
				videoPlayer.updatePlayProgress();
				playProgressInterval = setTimeout(progressTrack, 50);			
		},
		//第三种：用setTimeout，在匿名函数中定义一个自执行函数
		// trackPlayProgress:function(){
		// 	(function progressTrack(){
		// 		videoPlayer.updatePlayProgress();
		// 		playProgressInterval = setTimeout(progressTrack, 50);
		// 	})();
		// },
		// 更新进度条的方法：设置一个bar的宽度
		//视频在播放过程中，可以根据currentTime来获得应设的宽度比率
		updatePlayProgress:function(){
			playProgressBar.style.width=((video.currentTime/video.duration) * (progressHolder.offsetWidth)) + "px";
		},
		//手动拉动视频进度条
		videoScrubbing:function(){
			//鼠标在placeHolder里按下时触发
			progressHolder.addEventListener("mousedown", function(){
				videoPlayer.stopTrackingPlayProgress();//停止更新
				videoPlayer.playPause();//停止播放
				//为什么这里不用addEventListener
				document.onmousemove = function(e){//鼠标移动时
					videoPlayer.setPlayProgress(e.pageX);
				}
				//鼠标恢复时，继续视频播放
				progressHolder.onmouseup = function(e){
					document.onmouseup = null;
					document.onmousemove = null;
					video.play();
					videoPlayer.setPlayProgress(e.pageX);
					videoPlayer.trackPlayProgress();
				}
			}, true);
		},
		//不能根据视频的播放时间来设置，需要根据鼠标的x坐标
		setPlayProgress:function(clickX){
			var newPercent = Math.max(0, Math.min(1, (clickX - this.findPosX(progressHolder))/progressHolder.offsetWidth));
			video.currentTime = newPercent * video.duration;//播放的时间
			playProgressBar.style.width = newPercent * (progressHolder.offsetWidth) + "px";//播放的进度条位置
		},
		findPosX:function(progressHolder){
			var curleft = progressHolder.offsetLeft;
			//一直向上找父容器，并减去offsetLeft偏移量
			while(progressHolder = progressHolder.offsetParent){
				curleft += progressHolder.offsetLeft;
			}
			return curleft;
		},
		stopTrackingPlayProgress:function(){
			clearTimeout(playProgressInterval);
		}
	};
	videoPlayer.init();
}


function playVideo(){
	var videoDiv = document.getElementById("videoId");
	var videoBtn = document.getElementById("playVideoBtn");
	if(videoDiv.paused){
		videoDiv.play();
		videoBtn.innerHTML = "暂停";		
	}
	else{
		videoDiv.pause();
		videoBtn.innerHTML="播放";
	}
}
function toFullScreen(){
	var videoDiv = document.getElementById("videoId");
	videoDiv.webkitRequestFullscreen();
	//videoDiv.webkitEnterFullscreen();
}

//播放音频
function playA(document){
	var audio = document.getElementsByTagName("audio")[0];//这个tagname找到的是数组，要用[0]来取出第一个
	var audioBtn = document.getElementById("audioBtn");
	var audioProcess_box = document.getElementById("audioProcess_box");
	var audioProcess = document.getElementById("audioProcess");
	var processBtn = document.getElementById("processBtn");
	var timeText = document.getElementById("timeText");
	var processBtn = document.getElementById("processBtn");
	var audioObj ={
		init: function(){
			audioBtn.addEventListener("click", audioObj.playPauseAudio, false);
			processBtn.addEventListener("mousedown", audioObj.audioScrub, false);
			audio.addEventListener("ended", function(){//播放结束时，重置进度条
				audio.currentTime = 0; 
				audio.pause();
			}, false);
			audio.addEventListener("play", audioObj.playAudio, false);
			audio.addEventListener("pause",audioObj.pauseAudio, false);
		},
		playPauseAudio: function(){		
			if(!audio.paused){//处于播放状态
				audio.pause();							
			}	
			else{//处于暂停状态
				//audioObj.setPlayProgress();				
				audio.play();				
				//不要把进度条更新和play()放在一起
				//问题1. 先执行play()，再更新进度条，会出现更新不即时的情况
				//问题2. 如果音频很短的话，play后很快变成ended
				//问题3. ended时也是pause状态，如果不加以区分的话，ended时就会进入这里，又开始执行play，导致音频一直循环播放	
				//audioObj.setPlayProgress();
			}			
		},
		pauseAudio: function(){
			audioBtn.innerText = "播放";
			audioObj.stopPlayProgress();	
		},
		playAudio: function(){
			audioBtn.innerText = "暂停";
			var w = audioProcess_box.clientWidth;					
			timeStamp = setInterval(
				function(){
					var currentTime = audio.currentTime;	
					processBtn.style.left = (( currentTime / audio.duration ) * w - 3) + "px";
					audioProcess.style.width = ( currentTime / audio.duration ) * w + "px";
					var minute = parseInt(currentTime / 60);
					var seconds = parseInt(currentTime % 60);
					timeText.innerText =  (minute < 10 ? "0" + minute : minute)+":"+(seconds < 10 ? "0" + seconds : seconds);
				}, 1);
		},
		stopPlayProgress: function(){
			clearInterval(timeStamp);
		},
		//调整音频轨道
		audioScrub: function(){
			//1. 鼠标按下时，停止播放
			audio.pause();
			audioBtn.innerText = "播放";
			audioObj.stopPlayProgress();	
			//2. 鼠标移动时，修改进度条长度
			document.onmousemove = function(e){
				var mouseX = e.pageX;//鼠标的x位置
				//获取进度条的起点位置
				var x = 0;
				var parent = audioProcess_box;
				while(parent){
					x = x + parent.offsetLeft;
					parent = parent.offsetParent;
				}
				audioProcess.width = (mouseX - x) + "px";
				audio.currentTime = (mouseX - x) / audioProcess_box.offsetWidth * audio.duration;
			}
			//3. 鼠标释放时，开始播放音频
			document.onmouseup = function(){
				audio.play();
			}
		}
	}
	audioObj.init();
}