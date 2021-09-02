
$(document).ready(function () {
	$('.menu__btn, .btn__hide').on('click', function () {
		$('.menu').toggleClass("menu--active")
		$('.menu__list-logo').toggleClass("menu--logo")
		$('.menu__btn').toggleClass("btn__hiden")
		$('.btn__hide').toggleClass("btn__visible")
	});
});






// $('.menu__btn').removeClass("menu__btn").addClass("btn--hide")




// $(.)
// let isOpen = false; // Задаем переменную в которой будем хранить состояние
// $('.item-contacts__title').on('click',function(){
//   $(this).next().toggle('slow');
//   $(this).parent().parent().css('top', (isOpen ? '70%' : 0)); // В зависимости от состояния задаем позицию
//   isOpen = !isOpen; // Меняем состояние на противоположное
// })
