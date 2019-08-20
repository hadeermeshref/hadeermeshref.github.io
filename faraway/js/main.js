$(document).ready(function () {
    
    "use strict";
    //nice scroll
    $("html").niceScroll({
        
        cursorcolor:"#5cacc1",
        
    });

   
    });

//smooth scroll to div
	
	$('.navbar-default .navbar-nav  li  a').click(function () {
		
		$('html, body').animate({
			
			scrollTop: $('#' + $(this).data('value')).offset().top
			
		}, 1000);
		
		console.log();
		
		
	});