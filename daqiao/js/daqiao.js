(function() {
  FastClick.attach(document.body);
  var supportOrientation = typeof window.orientation === "number" && typeof window.onorientationchange === "object";
  var init = function() {
    var orientation;
    var updateOrientation = function() {
      if (supportOrientation) {
        orientation = window.orientation;
        console.log(orientation);
        switch (orientation) {
          case 90:
          case -90:
            orientation = true;
            break;
          default:
            orientation = false;
            break;
        }
      } else {
        orientation = window.innerWidth > window.innerHeight ? true : false;
      }
      if (orientation) {
        $(".daqiao .bgTip").removeClass("hide");
      } else {
        $(".daqiao .bgTip").addClass("hide");
      }
    };
    if (supportOrientation) {
      window.addEventListener("orientationchange", updateOrientation, false);
    } else {
      //监听resize事件
      window.addEventListener("resize", updateOrientation, false);
    }
    updateOrientation();
  };
  window.addEventListener("DOMContentLoaded", init, false);

  /********************** 分割线 ***********************/
  $(".daqiao")
    .off("click", ".img10")
    .on("click", ".img10", function() {
      $(".daqiao .loading").addClass("hide");
      $("#video")[0].play();
    });

  var loadTime
})();
