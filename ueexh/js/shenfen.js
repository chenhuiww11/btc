function func(){
 //获取被选中的option标签
 var vs = $('#state option:selected').val();
 if(vs=="护照"){
 	$('#huzhao').show()
 	$('#shenfenzheng').hide()
 }else{
 	$('#shenfenzheng').show()
 	$('#huzhao').hide()
 }
}