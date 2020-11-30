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
});