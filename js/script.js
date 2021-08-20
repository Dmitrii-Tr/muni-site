$(document).ready(function () {
	$('.menu__btn').on('click', function () {
		$('.menu').toggleClass("menu--active")
		$('.menu__list-logo').toggleClass("menu--logo")
		$('.menu__btn').toggleClass("btn--hiden")
		$('.menu__btn--close').toggleClass("menu__btn--active")	
	});
	 $('.menu__btn--close').on('click', function () {
		 $('.menu,.menu__btn-close').hide()
	 });


});

