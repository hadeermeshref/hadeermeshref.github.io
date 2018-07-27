	//smooth scroll to div
	
	$('.navbar-default .navbar-nav  li  a').click(function () {
		
		$('html, body').animate({
			
			scrollTop: $('#' + $(this).data('value')).offset().top
			
		}, 1000);
		
		console.log();
		
		
	});