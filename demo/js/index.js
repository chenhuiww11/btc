$(function(){
var isAni = navigator.userAgent.toLowerCase().indexOf("android") > -1 ? true : false;
	function prelaod(){
		var manifest;
		var preload;
		function startPreload() {
//		    preload = new createjs.LoadQueue(true);
		    //注意加载音频文件需要调用如下代码行
//		    preload.installPlugin(createjs.Sound);   
//		    preload.on("progress", handleFileProgress);
//		    preload.loadFile({id:"audiofile", src:"//file.40017.cn/scyx/activity/2018/2018qp/img/vedio3.mp4"});
//		    preload.on("complete", loadComplete);
//		    preload.on("error", loadError);
		}
		//处理加载错误：大家可以修改成错误的文件地址，可在控制台看到此方法调用
		function loadError(evt) {
	    	console.log("加载出错！",evt.text);
		}
		function handleFileProgress(event) {
		   $('.progress').html((preload.progress*100|0) + "%");
		
		}
		//全度资源加载完毕
		function loadComplete(event) {
			var audio = document.querySelector("#bgmusic");
//			audio.src='//file.40017.cn/scyx/activity/2018/2018qp/img/music2.mp3';
//			audio.play();
//			$('.loadPic img').attr('src','//file.40017.cn/scyx/activity/2018/2018qp/img/finish.gif')
//			$('.progress').html("<img src='//file.40017.cn/scyx/activity/2018/2018qp/img/start_btn.png' />").addClass('act')		
		}
		startPreload();
	}

	function playVideo(){
		
		var videoALL = document.getElementById('videoALL');
//  	var clientHeight = document.documentElement.clientHeight;
//    	  	var clientWidth = document.documentElement.clientWidth;
//  	if(isAni){
//			clientHeight = document.documentElement.clientHeight+5
//		}
//		
//		function stylediv(divId){
//		    divId.style.width = clientWidth + 'px';
//		    divId.style.height = clientHeight + 'px'; 
//		}
//		stylediv(videoALL);
		
		document.addEventListener('touchmove', function(e){e.preventDefault()}, false);
		videoALL.addEventListener("ended",function(){
		  //  videoALL.pause();
		    //$('.showM').hide()
		    $('.finishPage').show()	
		    $('#videoALL').addClass('ophide').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
			    $('#videoALL').hide().removeClass('ophide');
//			    var audio = document.querySelector("#bgmusic");
//				audio.src='//file.40017.cn/scyx/activity/2018/2018qp/img/last_music.mp3';
//				audio.play();
//				audio.loop = false;
		   		setTimeout(function(){
		   			$('.finishPage .btn').show().addClass('opshow')
		   		},500)
	    	}); 
		});
	}
	
	function bindEvent(){
		//视频播放
		
		$('#videoALL')[0].pause();
		$('.begin').on('click',function(){
				$('#videoALL').css('z-index','1')
				$('#videoALL')[0].play();
				$('.loadPage').hide().css('z-index','-1')
		})
		//分享按钮
		$('.shareBtn').on('click',function(){
//			$('#shareBox').show();
		});
		$('#shareBox').on('touchstart',function(event){
			event.stopPropagation()
			$(this).hide();
		})
		//视频重播
		$('.linkBtn').on('click',function(){
			$('#videoALL').css('z-index','1')
			$('#videoALL').show();
				$('#videoALL')[0].play();
				$('.loadPage').hide().css('z-index','-1')
				$('.finishPage').hide()
		})
		$('#videoALL').on('pause',function(){
			if(isAni){
				$('.finishPage').show()	
			}
		})
	}
	var isFlag = false;
	function init(){
		prelaod()
		playVideo()
		bindEvent()
	}
	window.wx && wx.ready && wx.ready(function () {
		var isWxApp = '';
        isWxApp = window.__wxjs_environment === 'miniprogram';
        isFlag = isWxApp
        if(isWxApp){
        	$('.shareBtn').hide();
        	$('.finishPage').css({'background':'url(//file.40017.cn/scyx/activity/2018/2018qp/img/last_bg1.png) no-repeat center center','background-size':'100% 100%'})
        	document.addEventListener("visibilitychange", function(){
		    if(document.hidden){
		    	$('#videoALL')[0].pause();
		    	 var audio = document.querySelector("#bgmusic");
//		    	 audio.pause();
		    }
		});
        	
        }
   });
	init()
})