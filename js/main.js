jQuery(document).ready(function($) {

    $('.ourteam-slider').slick({
        slidesToShow: 4,
        arrows: true,
        infinite: true,
        prevArrow: $('#ourteam-prevarrow'),
        nextArrow: $('#ourteam-nextarrow'),
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
    });

    $('.gallery-slider').slick({
        slidesToShow: 4,
        arrows: true,
        infinite: true,
        prevArrow: $('#gallery-prevarrow'),
        nextArrow: $('#gallery-nextarrow'),
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
    });

    $('.blog-slider').slick({
        slidesToShow: 1,
        arrows: true,
        infinite: true,
        prevArrow: $('#blog-prevarrow'),
        nextArrow: $('#blog-nextarrow'),
        responsive: [{
            breakpoint: 1000,
            settings: {
                slidesToShow: 1,         
            }
        }]            
    });

    $('.ourfriends-slider').slick({
        slidesToShow: 4,
        arrows: true,
        infinite: true,
        prevArrow: $('#ourfriends-prevarrow'),
        nextArrow: $('#ourfriends-nextarrow'),
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
    });

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

    $('.blogpage-similar-slider').slick({
        slidesToShow: 3,
        arrows: true,
        infinite: true,
        prevArrow: $('#blogpage-leftarrow'),
        nextArrow: $('#blogpage-rightarrow'),
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
    });

    $('#asdd1g').slick({
        slidesToShow: 1,
        arrows: true,
        prevArrow: $('.virtualtour-slider-arrow.left'),
        nextArrow: $('.virtualtour-slider-arrow.right'),
        // responsive: [{
        //     breakpoint: 1000,
        //     settings: {
        //         slidesToShow: 1,         
        //     }},
        //     {breakpoint: 650,
        //     settings: {
        //         slidesToShow: 1,         
        //     }
        // }]            
    });

    const slickArray = [];

    slickArray.push($('.exclusivetours-slider').slick({
        slidesToShow: 3,
        prevArrow: $('.exclusivetours-slider-arrow.left.unic'),
        nextArrow: $('.exclusivetours-slider-arrow.right.unic'),
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

    $('.exclusivetours-slider-arrow.left.unic').click(() => {
        slickArray.forEach(slider => {
            slider.slick('slickPrev');
        });
    });

    $('.exclusivetours-slider-arrow.right.unic').click(() => {
        slickArray.forEach(slider => {
            slider.slick('slickNext');
        });
    });

    $('.open-menu').click(function() {
        $('#menu').toggleClass('active');
        $('nav').toggleClass('menuopen');
    });

    let scrolled = false;
    $(window).scroll(() => {
        const scroll = $(window).scrollTop();
        if (scroll > 10) {
            $('nav').addClass('scrolled');
        } else {
            $('nav').removeClass('scrolled');
        }
    });

    $(".exclusivetours-tabtitles").on("click", ".exclusivetours-tabtitle:not(.active)", function() {
        $(this)
            .addClass("active")
            .siblings()
            .removeClass("active")
            .closest("div.tab-relative")
            .find("div.exclusivetours-tabcontent")
            .removeClass("active")
            .eq($(this).index())
            .addClass("active");
            setTimeout(() => {
                $('.exclusivetours-slider').slick("setPosition", 0);
                $('.exclusivetours-slider').slick("slickGoTo", 0);
            }, 1);
    });

    $(".contacts-info-tabtitles").on("click", ".contacts-info-tabtitle:not(.active)", function() {
        $(this)
            .addClass("active")
            .siblings()
            .removeClass("active")
            .closest("div.contacts-info")
            .find("div.contacts-info-tabcontent")
            .removeClass("active")
            .eq($(this).index())
            .addClass("active");
    });

    $(".gallerypage-tabtitles").on("click", ".gallerypage-tabtitle:not(.active)", function() {
        $(this)
            .addClass("active")
            .siblings()
            .removeClass("active")
            .closest("div.gallerypage-relative")
            .find("div.gallerypage-tabcontent")
            .removeClass("active")
            .eq($(this).index())
            .addClass("active");
    });

    $(".virtualtour-tabtitles").on("click", ".virtualtour-tabtitle:not(.active)", function() {
        $(this)
            .addClass("active")
            .siblings()
            .removeClass("active")
            .closest("div.container")
            .find("div.virtualtour-gridcontainer")
            .removeClass("active")
            .eq($(this).index())
            .addClass("active");
    });

    $('.modal-close').click(() => {
        closeModal();
    });

    $('.modal-btn.home').click(() => {
        closeModal();
    });

    $('.reserve-btn').click(() => {
        openModal('reserve');
    });

    $('.certificate-card-btn').click(() => {
        openModal('certificate-reserve');
    });

    $('.modal-btn.send').click(() => {
        openModal('reserve-done');
    });

    $('.footer-blog-form-input-btn').click(() => {
        openModal('subscription-done');
    });

    $('.faq-spoiler-title').click(function() {
        if ($(this).parents('.faq-spoiler').hasClass('active')) {
			$('.faq-spoiler').removeClass('active');
		} else {
			$('.faq-spoiler').removeClass('active');
			$(this).parents('.faq-spoiler').addClass('active');
		}
    })

    $('.aboutchernobyl-facts-spoiler-title').click(function() {
        if ($(this).parents('.aboutchernobyl-facts-spoiler').hasClass('active')) {
			$('.aboutchernobyl-facts-spoiler').removeClass('active');
		} else {
			$('.aboutchernobyl-facts-spoiler').removeClass('active');
			$(this).parents('.aboutchernobyl-facts-spoiler').addClass('active');
		}
    })

    $('.blogpages-filter').click(function() {
        $(this).toggleClass('active');
    });

    $('.onedaytour-reserve-choosedate-calendar-griditem').click(function() {
        $(this).toggleClass('active');
    });

    $('.onedaytour-reserve-choosepeoples-text-showmore').click(function() {
        $('.onedaytour-reserve-choosepeoples-text-content').addClass('active');
        $('.onedaytour-reserve-choosepeoples-text-showmore').addClass('unactive');
    });

    $('.virtualtour-card-showmore').click(function() {
        $(this).parents('.virtualtour-griditem').addClass('extended');
    });

    $('.virtualtour-slider-arrow.right').click(function() {
        $(this).closest('.virtualtour-slider-outer').find('.virtualtour-slider-item.active:not(:last-child)').removeClass('active').next('.virtualtour-slider-item').addClass('active');
    });

    $('.virtualtour-slider-arrow.left').click(function() {
        $(this).closest('.virtualtour-slider-outer').find('.virtualtour-slider-item.active:not(:first-child)').removeClass('active').prev('.virtualtour-slider-item').addClass('active');
    });

    $('.footer-blog-read').click(function() {
        $('.footer-blog-text').addClass('extended');
        $('.footer-blog').addClass('extended');
        $('.footer-blog-read').addClass('unactive');
    });


});

function openModal(id) {
    closeModal();
    $(`#${id}`).addClass('active');
    $('body').css({
        height: '100vh',
        'min-height': '100vh',
        overflow: 'hidden'
    });
}

function closeModal() {
    $('.modal').removeClass('active');

    $('body').css({
        height: 'auto',
        'min-height': 'auto',
        overflow: 'auto'
    });
}