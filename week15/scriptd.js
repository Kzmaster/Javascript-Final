$(document).ready(function () {
	$('.webopener').hide().delay(500).fadeIn('slow');
	// This will Fade In the title. 
	$('.menu').click( function () {
		$('.menu-open').css({
			"visibility": "visible"}).hide().fadeIn('slow');
		});
		
	$('.menu-open').live("click", function () {
		$('.menu-open').fadeOut('slow');
	});
	// This will activate the menu, when you click off, the menu fades out.
});