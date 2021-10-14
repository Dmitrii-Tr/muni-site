
$(document).ready(function () {
	$('.menu__btn, .btn__hide').on('click', function () {
		$('.menu').toggleClass("menu--active")
		$('.menu__list-logo').toggleClass("menu--logo")
		$('.menu__btn').toggleClass("btn__hiden")
		$('.btn__hide').toggleClass("btn__visible")
	});
});


