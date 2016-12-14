$(document).ready(function () {
	$('.gallery h1').hide().delay(500).fadeIn("slow");
	// The title will fadeIn with this code
	$('.gallery a').colorbox({opacity:0.5 , width: "80%", rel:'group1'});
	// This will run the colorbox plug-in so that it becomes a gallery. 
	$('.menu').click( function () {
		$('.menu-open').css({
			"visibility": "visible"}).hide().fadeIn('slow');
		});
		
	$('.menu-open').live("click", function () {
		$('.menu-open').fadeOut('slow');
	});
	// This will run the menu function.
});