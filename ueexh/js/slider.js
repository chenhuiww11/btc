!function(){function e(e,i,t){function l(e){return"a"===e.tagName.toLowerCase()?(l=function(e){return e},e):(l=function(e){return $("a",e).eq(0)},$("a",e).eq(0))}function a(){for(var e="",n=0;j>n;)e+="<li><img src="+$("a",P[n++]).attr("small")+" /></li>";return e}function r(e){if(!z){for(var n=this,i=0,t=g.removeClass("current"),l=0;l<t.length;l++)n===t[l]&&(i=l);$(n).addClass("current"),c(i,!0)}}function o(){y&&y[0]&&"string"==typeof b.prevBtnDisabled&&(b.circle||"begin"!==R.boundary?y.removeClass(b.prevBtnDisabled):y.addClass(b.prevBtnDisabled)),b.circle||N&&N[0]&&"string"==typeof b.nextBtnDisabled&&("end"===R.boundary?N.addClass(b.nextBtnDisabled):N.removeClass(b.nextBtnDisabled))}function s(){var n=j===A?0:A;if(b.showSlideIntro){var i=l(P[n]);$(".slide_intro em",e).html(i[0]?i.attr("title"):"")}}function c(e,n){if("fade"==b.aniType&&0>e&&b.circle&&(e=j-1),q=A,A=e,b.circle){if(R.boundary=!1,0>A)W.css(w,-(j+q)*T+"px"),A=j+A;else if(A===j&&q===j-b.scrollNum);else if(A>=j){var i=A-(I-1);i>0&&(W.css(w,-i*T+"px"),A=i+b.scrollNum)}}else!n&&A+b.visibleNum>=j&&A>q||A>=j&&!b.autoScroll?(A=j-b.visibleNum,R.boundary="end"):0>=A||!n&&A+b.visibleNum>=j&&b.autoScroll?(A=0,R.boundary="begin"):A>=j?(A=j-b.scrollNum,R.boundary="end"):R.boundary=!1;if(R.index=A>j-1?A-j:A,A>q)b.beforeNextFn&&"function"==typeof b.beforeNextFn&&b.beforeNextFn(R),m(b.nextFn);else{if(!(q>A))return;b.beforePrevFn&&"function"==typeof b.beforePrevFn&&b.beforePrevFn(R),m(b.prevFn)}}function d(){z||b.circle&&_||c(A+b.scrollNum)}function u(){b.circle&&_||c(A-b.scrollNum)}function v(){k&&clearTimeout(k),k=setTimeout(p,b.moveTime)}function f(){clearTimeout(k)}function m(e){switch(b.aniType){case"slide":A>j-1+b.scrollNum&&(A=0),b.circle&&0===A&&q===j-1?(L=-j*T,z=!0):L=!b.circle&&j-b.visibleNum<=A?-(j-b.visibleNum)*T:-A*T,s(),E={},E[w]=L+"px",_&&_.stop(),_=W.animate(E,300,function(){b.circle&&-j*T>=L&&(z=!1,W.css(w,-R.index*T+"px"),A=R.index),o(),e&&"function"==typeof e&&e(R),_=null});break;case"fade":if((A>j||A===j)&&1==b.circle&&(A=0),-1>=A)return void(A=-1);S&&B?(S&&(S.stop(),S.css($.extend({display:"none"},h)),S=null),B&&(B.stop(),D=$(B),B=null,F=P.eq(A),S=D.animate(h,b.fadeTime,function(){D.css({display:"none"}),S=null,D=F}),s(),B=F.css({display:"block"}).animate(x,b.fadeTime,function(){o(),e&&"function"==typeof e&&e(R),B=null}))):(F=P.eq(A),S=D.animate(h,b.fadeTime,function(){D.css({display:"none"}),S=null,D=F}),s(),B=F.css({display:"block"}).animate(x,b.fadeTime,function(){o(),e&&"function"==typeof e&&e(R),B=null}))}g&&(g.removeClass("current"),g.eq(R.index).addClass("current"))}function p(){"scrollLeft"==b.direction||"scrollTop"==b.direction?d():u(),k=setTimeout(p,b.moveTime)}var b={scrollNum:1,autoScroll:!0,moveTime:3500,direction:"scrollLeft",circle:!1,canvas:"ul",content:"li",nav:".mSlider_nav li",showNav:"orange",aniType:"slide",fadeTime:240,prevFn:!1,nextFn:!1,prevBtn:!1,nextBtn:!1,prevBtnDisabled:!1,nextBtnDisabled:!1,visibleNum:1,index:0};$.extend(b,i);var x,h,y,N,g,_,S,B,T,w,C,k,D,F,q,L=0,A=b.index,P=$(b.content,e),j=P.length,I=j,W=$(b.canvas,e),z=!1,H=j,R={index:b.index},E={},G=!1;switch(b.prevBtn&&b.nextBtn&&(y=$(b.prevBtn,e),y=y[0]?y:$(b.prevBtn),N=$(b.nextBtn,e),N=N[0]?N:$(b.nextBtn),b.circle||("string"==typeof b.prevBtnDisabled&&0===R.index&&y.addClass(b.prevBtnDisabled),"string"==typeof b.nextBtnDisabled&&R.index===j-1&&N.addClass(b.nextBtnDisabled))),b.direction){case"scrollLeft":case"scrollRight":w="left",C="width",T=P.outerWidth();break;case"scrollTop":case"scrollBottom":w="top",C="height",T=P.outerHeight();break;default:w="left",C="width",T=P.outerWidth()}if("custom"!==b.showNav&&e.css({position:"relative",overflow:"hidden"}),E={position:"relative"},b.circle){var J=j%b.visibleNum;J=(J>b.scrollNum?J:b.scrollNum)+b.visibleNum;var I=j+J}if(E[C]=I*T+"px",W.css(E),"fade"===b.aniType)n?(x={filter:"alpha(opacity=100)"},h={filter:"alpha(opacity=1)"}):(x={opacity:"1"},h={opacity:"0.01"}),W.css(C,T+"px"),P.css($.extend({display:"none"},h)),D=P.eq(R.index).css($.extend({display:"block"},x)),P.each(function(e){$(e).css({position:"absolute","z-index":H--,top:"0",left:"0"})});else if(W.css(w,-R.index*T+"px"),b.circle){for(var K=$(),M=0;J>M;M++)K=K.add(P.eq(M).clone());K.appendTo(W),I=j+J}if(b.autoScroll&&(k=setTimeout(p,b.moveTime),"custom"===b.showNav?($(b.canvas,e).hover(f,function(){!G&&v()}),$(b.userNav,e).hover(f,function(){!G&&v()})):e.hover(f,function(){!G&&v()})),b.showNav){var O,Q,U,V="";switch(b.showNav){case"orange":V+="<ul class='mSlider_nav_orange mSlider_nav'>";for(var M=0,X=j;X>M;M++)V+="<li><a href='javascript:void(0)'>"+(M+1)+"</a></li>";V+="</ul>",e.append(V);break;case"circle":if(b.showSlideIntro===!0&&b.navAlign){var Y=l(P[0]);V+='<span class="slide_intro slide_intro_'+("left"===b.navAlign?"right":"left")+'"><em>'+(Y[0]?Y.attr("title"):"")+"</em><div></div></span>"}V+="<ul class='mSlider_nav_circle mSlider_nav"+(b.navAlign?" mSlider_nav_"+b.navAlign:"")+"'>";for(var M=0,X=j;X>M;M++)V+="<li></li>";V+="</ul>",e.append(V),b.navAlign||($(".mSlider_nav_circle")[0].style.marginLeft=-(9*j+9)+"px");break;case"bottom":V='<div class="mSlider_nav_bg"></div><div class="mSlider_nav_bottom mSlider_nav clearfix"><div class="holder clearfix">',O=$("a",W),U=T*b.scrollNum/j-1;for(var M=0,X=j;X>M;M++)Q=O.eq(M).attr("title"),V+='<a style="'+(M===X-1?"width:"+(U+1)+"px;border-right:none;":"width:"+U+"px")+'" href="javascript:void(0);" title="'+Q+'"><span>'+Q+'</span><i class="outter">◆</i></a>';V+="</div></div>",e.append(V),b.nav=".mSlider_nav a";break;case"thumbnail":V+="<ul class='mSlider_nav_thumbnail mSlider_nav clearfix'>",V+=a(),V+="</ul>",b.nav=".mSlider_nav li",e.append(V);break;case"custom":b.nav=b.userNav}g=b.userNav?$(b.nav):$(b.nav,e),"thumbnail"===b.showNav?g.hover(r,function(){}):g.on("mouseover",r),g.eq(R.index).addClass("current")}return R.startScroll=function(){v(),G=!1},R.stopScroll=function(){f(),G=!0},R.scrollTo=c,R.scrollNext=d,R.scrollPrev=u,R.boundary="begin",b.prevBtn&&y.on("click",function(){(b.circle||"begin"!==R.boundary)&&(f(),R.scrollPrev(),b.autoScroll&&v())}),b.nextBtn&&N.on("click",function(){(b.circle||"end"!==R.boundary)&&(f(),R.scrollNext(),b.autoScroll&&v())}),t&&t(R),R}var n=/(msie) ([\w.]+)/.exec(navigator.userAgent.toLocaleLowerCase())||[];n=n[2]&&parseFloat(n[2],10)<=8,$.fn.slider=function(n,i){return this[0]?new e(this,n,i):void 0}}();