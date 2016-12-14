$(document).ready( function() {
	$('.menu').click( function () {
		$('.menu-open').css({
			"visibility": "visible"}).hide().fadeIn('slow');
		});
		
	$('.menu-open').live("click", function () {
		$('.menu-open').fadeOut('slow');
	});
	// This will activate the menu. When you click off, the menu will go away. 
});