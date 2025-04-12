jQuery(document).ready(function($) {

    $('.reviews-slider').slick({
        slidesToShow: 1,
        arrows: true,
        infinite: true,
        prevArrow: $('#reviews-prevarrow'),
        nextArrow: $('#reviews-nextarrow'),
        responsive: [{
            breakpoint: 1000,
            settings: {
                slidesToShow: 1,         
            }
        }]            
    });

    const slickArray = [];

    slickArray.push($('.studentsworks-slider').slick({
        slidesToShow: 3,
        prevArrow: $('.studentsworks-slider-arrow.left.unic'),
        nextArrow: $('.studentsworks-slider-arrow.right.unic'),
        responsive: [{
            breakpoint: 1000,
            settings: {
                slidesToShow: 2,         
            }},
            {breakpoint: 650,
            settings: {
                slidesToShow: 1,         
            }
        }]            
    }));

    $('.studentsworks-slider-arrow.left.unic').click(() => {
        slickArray.forEach(slider => {
            slider.slick('slickPrev');
        });
    });

    $('.studentsworks-slider-arrow.right.unic').click(() => {
        slickArray.forEach(slider => {
            slider.slick('slickNext');
        });
    });

    // let scrolled = false;
    // $(window).scroll(() => {
    //     const scroll = $(window).scrollTop();
    //     if (scroll > 10) {
    //         $('nav').addClass('scrolled');
    //     } else {
    //         $('nav').removeClass('scrolled');
    //     }
    // });

    $('#header_btn_scroll').on('click', function(e) {
        e.preventDefault(); // На случай если кнопка внутри формы
        $('html, body').animate({
          scrollTop: $('#studentsworks').offset().top
        }, 800); // 800 — длительность анимации в миллисекундах
    });

    $('#nav_home').on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({ scrollTop: 0 }, 800); // 800 = длительность прокрутки
      });

    $(window).on('scroll', function() {
        const triggerOffset = $('#header_btn_write').offset().top + $('#header_btn_write').outerHeight();
        const scrollTop = $(window).scrollTop();
    
        if (scrollTop > triggerOffset) {
          $('#writeus_btn').addClass('active');
        } else {
          $('#writeus_btn').removeClass('active');
        }
      });

});
