$(document).ready(function($) {
	$('#toogle-menu').click(function(){
		$('.menu-nav').slideToggle('slow');
	});


	$('.section-header-title').css('display', 'inline');
	$('.section-header-title').addClass('animated fadeInRight');

	$('.inicio-contenido img').css('display','inline');
	$('.inicio-contenido img').addClass('animated zoomIn');
	$('.inicio-campo').css('display','inline');
	$('.inicio-campo').addClass('animated fadeInDown');


});
