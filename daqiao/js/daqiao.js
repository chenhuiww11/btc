(function () {
//FastClick.attach(document.body);
//var supportOrientation = typeof window.orientation === "number" && typeof window.onorientationchange === "object";
//var init = function () {
//  var orientation;
//  var updateOrientation = function () {
//    if (supportOrientation) {
//      orientation = window.orientation;
//      console.log(orientation);
//      switch (orientation) {
//        case 90:
//        case -90:
//          orientation = true;
//          break;
//        default:
//          orientation = false;
//          break;
//      }
//    } else {
//      orientation = window.innerWidth > window.innerHeight ? true : false;
//    }
//    if (orientation) {
//      $(".daqiao .bgTip").removeClass("hide");
//    } else {
//      $(".daqiao .bgTip").addClass("hide");
//    }
//  };
//  if (supportOrientation) {
//    window.addEventListener("orientationchange", updateOrientation, false);
//  } else {
//    //监听resize事件
//    window.addEventListener("resize", updateOrientation, false);
//  }
//  updateOrientation();
//};
//window.addEventListener("DOMContentLoaded", init, false);

  /********************** 分割线 ***********************/
  $(".daqiao")
    .off("click", ".bofang")
    .on("click", ".bofang", function () {
      $(".daqiao .loading").addClass("hide");
      $('.skip').fadeIn();
      $(".video").show();
      $('#video').removeClass('hide')
   		$("#video")[0].play();
    });
  $('body')
    .off("click", ".skip")
    .on("click", ".skip", function () {
      $(".video").hide();
       $('.skip').fadeOut();
      $("#video")[0].pause();
      $('.last-page').removeClass('hide');
    });
  $('.skip').click(function(){
  	 $(".video").hide();
       $('.skip').fadeOut();
      $("#video")[0].pause();
      $('.last-page').removeClass('hide');
  })
})();
