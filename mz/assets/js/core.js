var ajax={
	get: function(url, dataType, callback) {
		dataType = dataType || 'html';
		$.ajax({
			type: "GET",
			url: url,
			async: true,
			dataType: dataType,
			cache:false,
			beforeSend:function(){
				$(".colorful_loading_frame,.colorful_loading").css("display", "block");
			},
			complete:function(){
				$(".colorful_loading_frame,.colorful_loading").css("display", "none");
			},
			success: function(data,status) {
				if (callback == null) {
					return;
				}
				callback(data);
			},
			error: function(error) {
				alert('创建连接失败');
			}
		});
	},
	post: function(url, parameter, dataType, callback) {
		dataType = dataType || 'html';
		$.ajax({
			type: "POST",
			url: url,
			async: true,
			dataType: dataType,
			data: parameter,
			cache:false,
			beforeSend:function(){
				$(".colorful_loading_frame,.colorful_loading").css("display", "block");
			},
			complete:function(){
				$(".colorful_loading_frame,.colorful_loading").css("display", "none");
			},
			success: function(data,status) {
				if (callback == null) {
					return;
				}
				callback(data);
			},
			error: function(error) {
				alert('创建连接失败');
			}
		});
	}
}
function activeselect(a)
{
	$('.active').removeClass('active');
	$(a).addClass('active')
}
function LoadJS( fileUrl ) 
{
    var oHead = document.getElementsByTagName('HEAD').item(0); 
    var oscrīpt= document.createElement("scrīpt"); 
    oscrīpt.type = "text/javascrīpt"; 
    oscrīpt.src=fileUrl ; 
    oHead.appendChild( oscrīpt); 
}
if($.cookie('sec_defend_time'))$.removeCookie('sec_defend_time', { path: '/' });