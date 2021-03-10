$(document).ready(function() {
    $('.slider').slick({
        infinite: true,
        variableWidth: true,
        touchThreshold: 10,
        responsive: [{
            breakpoint: 1170,
            settings: {
                centerMode: true,
                arrows: false,
                touchThreshold: 20,
                touchMove: true,
            }
        }, ]
    });

    $('.slider-second').slick({
        dots: true,
        arrows: false,
        slidesToShow: 1,
        touchThreshold: 10,
    });

    $('.nav__burger').click(function(e) {
        $('.nav__burger, .burger__title, .nav__item.burger').toggleClass('active');
    });
    $(".nav").on("click", ".nav__item__link", function(event) {

        //отменяем стандартную обработку нажатия по ссылке

        event.preventDefault();



        //забираем идентификатор бока с атрибута href

        var id = $(this).attr('href'),



            //узнаем высоту от начала страницы до блока на который ссылается якорь

            top = $(id).offset().top;



        //анимируем переход на расстояние - top за 1500 мс

        $('body,html').animate({ scrollTop: top }, 700);

    });
});