
//首页切换
$(function() {
	$('.index_two_lf_tl a').click(function(){
		var index = $(this).index();
		 $(this).addClass('ahover').siblings().removeClass('ahover');
		 $(".index_two_lf_con").eq(index).show().addClass('active').siblings().removeClass('active').hide();
	});
	 $('.tixian_a a').click(function(){
		var index = $(this).index();
		 $(this).addClass('ahover').siblings().removeClass('ahover');
		 $(".tixian_con").eq(index).show().addClass('active').siblings().removeClass('active').hide();
	});
	 $('.add_ka').click(function(){
		 $(".bg").show();
		  $(".add_place_alert").show();
	});
	 $('.bg').click(function(){
		 $(".bg").hide();
		  $(".add_place_alert").hide();
	});
	$('.zc_b_main_tl a').click(function(){
		var index = $(this).index();
		 $(this).addClass('ahover').siblings().removeClass('ahover');
		 $(this).parents(".zc_b_main_tl").next(".zc_b_main_main").find(".zc_b_main_con").eq(index).show().addClass('active').siblings().removeClass('active').hide();
	});
	$('.zc_t a').click(function(){
		var index = $(this).index();
		 $(this).addClass('ahover').siblings().removeClass('ahover');
		 $(".zc_b_main").eq(index).show().addClass('active').siblings().removeClass('active').hide();
	});
	$('.zc_con_two_tl a').click(function(){
		var index = $(this).index();
		 $(this).addClass('ahover').siblings().removeClass('ahover');
		 $(".zc_con_two_b_main").eq(index).show().addClass('active').siblings().removeClass('active').hide();
	});
	$('.jy_lf_two_tl a').click(function(){
		var index = $(this).index();
		 $(this).addClass('ahover').siblings().removeClass('ahover');
		 $(".jy_lf_two_b_con").eq(index).show().addClass('active').siblings().removeClass('active').hide();
	});
	$('.jycha').click(function(){
		 $(".jiaoyi_one").hide();
	});
	});
//加减
$(function(){ 
$(".add").click(function(){ 
var t=$(this).parent().find('input[class*=text_box]'); 
t.val(parseInt(t.val())+1) 
setTotal(); 
}) 
$(".min").click(function(){ 
var t=$(this).parent().find('input[class*=text_box]'); 
t.val(parseInt(t.val())-1) 
if(parseInt(t.val())<0){ 
t.val(0); 
} 
setTotal(); 
}) 
function setTotal(){ 
var s=0; 
$("#tab td").each(function(){ 
s+=parseInt($(this).find('input[class*=text_box]').val())*parseFloat($(this).find('span[class*=price]').text()); 
}); 
$("#total").html(s.toFixed(2)); 
} 
setTotal(); 

}) 