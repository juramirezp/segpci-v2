$(document).ready(function($) {
	$('#toogle-menu').click(function(){
		$('.menu-nav').slideToggle('slow');
	});

	var ventana_ancho = $(window).width();
	if(ventana_ancho<640){
		$('#accordion').simpleAccordion({
			header: ".box-title",
			collapsable: ".box-container",
			speed: 'fast'
		});
	}

	$('.section-header-title').addClass('animated fadeInRight');

	$('.inicio-contenido').addClass('animated fadeInDown');
	$('.inicio-campo').addClass('animated fadeInDown');

});
