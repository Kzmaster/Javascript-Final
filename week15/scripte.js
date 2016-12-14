$(document).ready( function () {
	$('h1').hide().fadeIn('slow');
	// This will fadeIn the title.
	$('.menu').click( function () {
		$('.menu-open').css({
			"visibility": "visible"}).hide().fadeIn('slow');
		});
		
	$('.menu-open').live("click", function () {
		$('.menu-open').fadeOut('slow');
	});
	// This will activate the menu. When you click off, the menu will go away.
});