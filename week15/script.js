$(window).load(function() {
    $('.flexslider').flexslider();
    /* This will activate the Flexslider Plug-In for the slideshow */
  });
  
$(document).ready(function () {
	$('.webbanner h1').hide();
	$('.webbanner h1').fadeIn('slow').animate({
            'bottom': '+=320px',
            }, {duration: 2000, queue: false}, function() {
            // This will fade the title of the site in.
        });
  
  $('.logo img').mouseover(function () {
  	$(this).stop().animate(
  {rotation: 360},
  {
    duration: 1500,
    step: function(now, fx) {
      $(this).css({"transform": "rotate("+now+"deg)"});
    }
  }
);
// This will rotate the KZ logo when hovered over. 
});



 $('.titlea').hover(
	function () {
		$('.titlea h2').animate({bottom: '+=55px'}, 300);
	},
	function () {
		$('.titlea h2').animate({bottom: '-=55px'}, 100);
	});
	// This will raise the title of the icons when the mouse hovers over it. 
	 $('.titleb').hover(
	function () {
		$('.titleb h2').animate({bottom: '+=55px'}, 300);
	},
	function () {
		$('.titleb h2').animate({bottom: '-=55px'}, 100);
	});
	// This will raise the title of the icons when the mouse hovers over it. 
	 $('.titlec').hover(
	function () {
		$('.titlec h2').animate({bottom: '+=55px'}, 300);
	},
	function () {
		$('.titlec h2').animate({bottom: '-=55px'}, 100);
	});
  // This will raise the title of the icons when the mouse hovers over it. 
    	
    
    
		$('#a').hide().delay(2000).fadeIn("slow");
		$('#b').hide().delay(3000).fadeIn("slow");
		$('#c').hide().delay(4000).fadeIn("slow");
		$('#d').hide().delay(5000).fadeIn("slow");
		$('#e').hide().delay(6000).fadeIn("slow");
		$('#f').hide().delay(7000).fadeIn("slow");
		$('#g').hide().delay(8000).fadeIn("slow");  
		// These will bring in the <p> one second apart from each other.
	$('.menu').click( function () {
		$('.menu-open').css({
			"visibility": "visible"}).hide().fadeIn('slow');
		});
		
	$('.menu-open').live("click", function () {
		$('.menu-open').fadeOut('slow');
	});
	// This will activate the menu. When you click off, the menu will go away. 	
		  

});

$(window).onresize = function () {
	if (window.innerwidth >=1050) {
		$('.webbanner h1').css([
		"text-align", "center",
		"font-size", "250%",
		"font-family", "'Bungee', sans-serif",
		"background", "-webkit-linear-gradient(#eee, #57d5ff)",
   	"-webkit-background-clip", "text",
   	"-webkit-text-fill-color", "transparent",
		"-webkit-text-stroke", "1px black",
		]);
	}
};