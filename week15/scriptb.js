$(document).ready( function () {
	$('.webopener h1').hide().delay(500).fadeIn("slow");
	// This will fade the title of the page in.
	$('.menu').click( function () {
		$('.menu-open').css({
			"visibility": "visible"}).hide().fadeIn('slow');
		});
		
	$('.menu-open').live("click", function () {
		$('.menu-open').fadeOut('slow');
	});
	// This will activate the menu. When you click off, the menu will go away.
});