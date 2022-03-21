$(function(){
    $(".nav__item a").on("click", function (event) {
		event.preventDefault();
		var id  = $(this).attr('href'),
			top = $(id).offset().top;
		$('body,html').animate({scrollTop: top}, 1500);
	});

    $('.nav__btn').on('click', function(){
        $('.nav__list').toggleClass('nav__list--active');
    });


    var mixer = mixitup('.gallery__content');

    $('.slider__blog').slick({
        dots: true,
        arrows: false
    });
});