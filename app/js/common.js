$(function() {

	// parameters-slider

	$("#parameters__slider").slick({
    dots: true,
    customPaging: function(slider, i) { 
        return '<button class="tab">' + $(slider.$slides[i]).find('[data-title]').data('title') + '<i class="fa fa-sort-asc"></i></button>';
		},
		appendDots:'.custom-dots',
		slidesToShow: 1,
		arrows: false,
		slidesToScroll: 1,
		responsive: [
			{
				breakpoint: 1500,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				}
			},
		]
});

	// parameters-slider

	// assortment-slider

	$("#assortment__slider").slick({
    dots: true,
    customPaging: function(slider, i) { 
        return '<button class="tab">' + $(slider.$slides[i]).find('[data-title]').data('title') + '<i class="fa fa-sort-asc"></i></button>';
		},
		appendDots:'.custom-dots2',
		slidesToShow: 1,
		arrows: false,
		slidesToScroll: 1,
		responsive: [
			{
				breakpoint: 1500,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				}
			},
		]
});

	// assortment-slider

	// menu

	$('.page-header__open-menu').click(function() {
		$('.page-header__nav-wrapper').show();
		$('.overlay').show();
	});

	$('.page-header__close-menu').click(function() {
		$('.page-header__nav-wrapper').hide();
		$('.overlay').hide();
	});

	// menu

});

