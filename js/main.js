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
                touchThreshold: 10,
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
});