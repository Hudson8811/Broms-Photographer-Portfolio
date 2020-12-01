$(document).ready(function () {
	/*$("input[name='phone']").mask("+7-000-000-00-00", {
		placeholder: "+7- _ _ _ - _ _ _ - _ _ - _ _"
	});*/
	$('.first-screen__title').lettering();

	$('.services__slider').slick({
		slidesToShow: 4,
		slidesToScroll: 1,
		arrows: false,
		autoplay: true,
		autoplaySpeed: 3000
	});

	$('.cases__slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		prevArrow: '<button class="slider-arrow slider-arrow--prev" aria-hidden="true"><svg width="100" height="13" viewBox="0 0 100 13" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
		'<path fill-rule="evenodd" clip-rule="evenodd" d="M99.344 13C100.607 13 99.7254 11.5832 99.344 11.163L89.1279 0.315165C88.7464 -0.105054 88.128 -0.105054 87.7465 0.315165C87.3651 0.735383 87.3651 1.41669 87.7465 1.83691L96.2952 10.8479H0.976766C0.437313 10.8479 0 11.3296 0 11.9239C0 12.5182 0.437313 12.9999 0.976766 12.9999H96.2952C96.2952 12.9999 99.1417 13 99.344 13Z" fill="white"/>\n' +
		'</svg></button>',
		nextArrow: '<button class="slider-arrow slider-arrow--next" aria-hidden="true"><svg width="100" height="13" viewBox="0 0 100 13" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
		'<path fill-rule="evenodd" clip-rule="evenodd" d="M99.344 13C100.607 13 99.7254 11.5832 99.344 11.163L89.1279 0.315165C88.7464 -0.105054 88.128 -0.105054 87.7465 0.315165C87.3651 0.735383 87.3651 1.41669 87.7465 1.83691L96.2952 10.8479H0.976766C0.437313 10.8479 0 11.3296 0 11.9239C0 12.5182 0.437313 12.9999 0.976766 12.9999H96.2952C96.2952 12.9999 99.1417 13 99.344 13Z" fill="white"/>\n' +
		'</svg></button>',
	}).on('afterChange', function () {
		var prev = $('.slick-current').prev(),
				next = $('.slick-current').next(),
				current = $('.slick-current');

		$('.slick-slide').removeClass('previous_caption next_caption').find('.cases__content').hide();
		current.find('.cases__content').fadeIn(300);
		prev.addClass('previous_caption');
		next.addClass('next_caption');

		$('.cases__bg img').attr('src', current.find('.cases__pic img').attr('src'));
	});

	$('.reviews__slider').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
	});

	// Video preview
	$('.video__preview').click(function () {
		$(this).next().show();
	});
});