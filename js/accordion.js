;(function ( $, window, document, undefined ) {
$.fn.accordion = function(options) {
    if(options === undefined){
		var options = {
			height: "auto"
		};
	}
	var acc_container = $(this);
	var acc_headers = acc_container.find("h3.acc_heading");
	var acc_containers = acc_container.find("div.acc_content");
	
	$("div.acc_content").css("height", options.height);
	acc_containers.hide();
	acc_container.find(".edit_icon").hide();
	acc_container.find(".close_icon").hide();
	
	acc_headers.on("click", this , function(ev){
		var currentHeading = $(this);
		
		if(  $(this).next("div.acc_content").hasClass("opened") ){  
			$(this).find(".arrow_up_icon").addClass("arrow_down_icon");
			$(this).find(".arrow_up_icon").removeClass("arrow_up_icon");
			$(this).next("div.acc_content").slideUp("fast", function(){
				currentHeading.find(".edit_icon").hide();
				currentHeading.find(".close_icon").hide();
				$(this).removeClass("opened");
			});
		}
		else{
			$(this).find(".arrow_down_icon").addClass("arrow_up_icon");
			$(this).find(".arrow_down_icon").removeClass("arrow_down_icon");
			acc_container.find("div.opened").prev("h3").click();
			$(this).next("div.acc_content").slideDown("fast", function(){
				currentHeading.find(".edit_icon").show();
				currentHeading.find(".close_icon").show();
				$(this).removeClass("current");
				$(this).addClass("opened");
			});
		}
	});
	
	acc_container.find("h3:first").click();
	
	
};
})( jQuery, window, document );