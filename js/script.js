

$(document).ready(function(e) {
	
    $(".tabs").hide();
	
	
	$(".tab_header").on("click", function(ev){
		ev.preventDefault();
		$(".tab_header").removeClass("active");
		$(this).addClass("active");
		
		var tabId = $(this).attr("href");
		$(".tabs").hide();
		$(tabId).show();
	});
	$(".tab_header:last").click();
	var options = { height: "210px"};
	$("#projects_accordion").accordion(options);
	$("#custom_select").customSelect();
});