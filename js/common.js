$(function() {

	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

	//Chrome Smooth Scroll
	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {

	};

	$("img, a").on("dragstart", function(event) { event.preventDefault(); });
	
});

$(window).load(function() {

	$(".loader_inner").fadeOut();
	$(".loader").delay(400).fadeOut("slow");

});
$("document").ready(function($){
 
	var nav = $('.head_site');
 
	$(window).scroll(function () {
		if ($(this).scrollTop() > -1000) {
			nav.addClass("f-nav");
		} else {
			nav.removeClass("f-nav");
		}
	});

});
$(document).ready(function(){
	$("a[href*=#]").on("click", function(e){
	var anchor = $(this);
	$('html, body').stop().animate({
	scrollTop: $(anchor.attr('href')).offset().top
	}, 777);
	e.preventDefault();
	return false;
	});
	});

(function ($){
	$(function(){
		$('.icon').on('click', function(){
			$(this).closest('.navbar_list').toggleClass('navbar-open');
		});
	});
})(jQuery);

$(document).ready(function() {

	//E-mail Ajax Send
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Thank you!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

});