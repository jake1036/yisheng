function pageInit(){
$('#btn_submit').bind('click', function(){
		 var channel = $('#channel').val();
	     var couponname = $('#couponname').val();
	     var couponid = $('#couponid').val();

	     
		 var postdata='channel='+channel+'&couponname='+couponname+'&couponid='+couponid;
        $.ajax({
            type:'post',
            url:'../yisheng/addChannel.php',
            data:postdata,
            dataType:'text',
            cache: false,
            error: function() {
           	 alert('error'); 
            },
            success: function(json) {
   	            if(json=='1'){
   	            	$('#tip').html('<label><font color="#0000FF">渠道'+channel+'添加成功</font></label>');
   	            }else{
   	            	$('#tip').html('<label><font color="#FF0000">渠道'+channel+'添加失败</font></label>');
   	            	
   	            }
   	            

            }
        });
      }); 
}