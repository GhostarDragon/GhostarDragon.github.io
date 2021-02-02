(function ($) {
	"use strict";
	/*==========  Highlights Slider  ==========*/
	$('.highlight-slider').owlCarousel({
		loop: true,
		nav: true,
		dots: false,
		navText: ['<svg class="icon" aria-hidden="true"><use xlink:href="#icon-left"></use></svg>','<svg class="icon" aria-hidden="true"><use xlink:href="#icon-right"></use></svg>'],
		items: 5,
		responsive: {
			0: {
				items: 2
			},
			480: {
				items: 5
			},
			769: {
				items: 5
			}
		}
	});
})(jQuery);