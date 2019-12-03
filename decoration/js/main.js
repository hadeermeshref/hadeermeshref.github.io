//smooth scroll to div
	
	$('.navbar-nav  li  a').click(function () {
		
		$('html, body').animate({
			
			scrollTop: $('#' + $(this).data('value')).offset().top
			
		}, 1200);
		
		console.log();
		
		
	});