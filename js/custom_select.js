
;(function ( $, window, document, undefined ) {
$.fn.customSelect = function() {
    
	var real_select = $(this);
	var element_beforre_select = real_select.prev();
	var option_list = "<ul>";
	real_select.hide();
	var opened = false;
	
	element_beforre_select.after("<div class='custom_select_container'><div class='select_input'><span class='select_text'>Select status</span> <span class='arrow_down_icon sprite'>&nbsp;</span></div></div>")
	
	real_select.find("option").each(function(){
		option_list += "<li>"+$(this).text()+"</li>";
	});
	
	option_list += "</ul>";
	
	$('html').click(function() {
		$(".custom_select_container ul").hide();
		$(".custom_select_container .arrow_up_icon").addClass("arrow_down_icon").removeClass("arrow_up_icon");
		opened = false;
	});
	
	$(".select_input").on("click", function(ev){
		ev.stopPropagation();
		opened = !opened;
		if(opened){
			$(this).after(option_list);
			$(this).find(".arrow_down_icon").addClass("arrow_up_icon").removeClass("arrow_down_icon");
		}
		else{
			$(".custom_select_container ul").hide();
			$(this).find(".arrow_up_icon").addClass("arrow_down_icon").removeClass("arrow_up_icon");
		}
	});
	
	$(".custom_select_container").on("click", "ul li", function(ev){ 
		ev.stopPropagation();
		var selected_text = $(this).text();
		$(".select_input .select_text").text(selected_text);
		$(".select_input .select_text").css("color", "#999");
		$(".custom_select_container ul").hide();
		$(".custom_select_container .arrow_up_icon").addClass("arrow_down_icon").removeClass("arrow_up_icon");
		opened = false;
		real_select.find("option").each(function(){
			$(this).removeAttr( "selected" );
			if(selected_text == $(this).text()){
				$(this).attr("selected", "selected");
			}
		});
	});
};
})( jQuery, window, document );