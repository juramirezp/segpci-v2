/* ----------------------------------
jQuery SimpleAccordion v0.8
basic plugin for HTML's semantic accordion
tested with jQuery v1.0+ but I strongly recommend v1.2.3+
©2008 CSSLab.cl
free for any use, of course... :D
instructions: -
---------------------------------- */

jQuery.fn.simpleAccordion = function(settings){
	
	settings = jQuery.extend({
		header: "dt",
		collapsable: "dd",
		speed: "fast"
	  }, settings);
	
	return this.each(function(){
		$(settings.collapsable).hide();
		$(settings.header).click(function(){
			var checkElement = $(this).next();
			if((checkElement.is(settings.collapsable)) && (checkElement.is(':visible'))) {
				$(settings.collapsable+':visible').slideToggle(settings.speed).prev().toggleClass('selected');
				return false;
			}
	    	if((checkElement.is(settings.collapsable)) && (!checkElement.is(':visible'))) {
	    		$(settings.collapsable+':visible').slideToggle(settings.speed).prev().toggleClass('selected');
	        	checkElement.slideToggle(settings.speed);
				$(this).toggleClass('selected');
	        	return false;
	    		}
			}
		);
	});
};