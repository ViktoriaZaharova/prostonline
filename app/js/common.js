$('.main-slider').slick({
    slidesToShow: 1,
    arrows: true,
    fade: true,
    infinite: false,
    appendArrows: '.main-slider__nav',
    prevArrow: '<button type="button" class="slick-prev"><svg width="6" height="11" viewBox="0 0 6 11" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
        '        <path d="M5.25 1L0.75 5.5L5.25 10" stroke="#464646" stroke-linecap="round" stroke-linejoin="round"/>\n' +
        '    </svg></button>',
    nextArrow: '<button type="button" class="slick-next"><svg width="6" height="11" viewBox="0 0 6 11" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
        '<path d="M0.75 10L5.25 5.5L0.75 1" stroke="#464646" stroke-linecap="round" stroke-linejoin="round"/>\n' +
        '</svg>\n</button>',
});

$(".main-slider").on('afterChange', function(event, slick, currentSlide){
    $(this).siblings('.slider-nav').find(".cp").text(currentSlide<10?`${currentSlide+1}`:currentSlide+1);
});

$('.publications-slider').slick({
    slidesToShow: 3,
    infinite: false,
    arrows: true,
    appendArrows: '.publications-slider__nav',
    prevArrow: '<button type="button" class="slick-prev"><svg width="6" height="11" viewBox="0 0 6 11" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
        '        <path d="M5.25 1L0.75 5.5L5.25 10" stroke="#464646" stroke-linecap="round" stroke-linejoin="round"/>\n' +
        '    </svg></button>',
    nextArrow: '<button type="button" class="slick-next"><svg width="6" height="11" viewBox="0 0 6 11" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
        '<path d="M0.75 10L5.25 5.5L0.75 1" stroke="#464646" stroke-linecap="round" stroke-linejoin="round"/>\n' +
        '</svg>\n</button>',
    responsive: [
        {
            breakpoint: 830,
            settings: {
                slidesToShow: 2,
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
});

$(".publications-slider").on('afterChange', function(event, slick, currentSlide){
    $(this).siblings('.slider-nav').find(".cp").text(currentSlide<10?`${currentSlide+1}`:currentSlide+1);
});

$('ul.tabs__caption').on('click', 'li:not(.active)', function () {
    $(this)
        .addClass('active').siblings().removeClass('active')
        .closest('div.tabs').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
});

$('.btn-burger').click(function () {
    $('.overlay').fadeIn();
    $('.mobile-menu').fadeIn();
});

$('.btn-close, .overlay').click(function () {
    $('.mobile-menu').fadeOut();
    $('.overlay').fadeOut();
});

// модальные окна (несколько)
$(document).ready(function () {
    var overlay = $('.overlay');
    var open_modal = $('.open_modal');
    var close = $('.modal__close, .overlay, .btn-close-modal');
    var modal = $('.modal__div');

    open_modal.click(function (event) {
        event.preventDefault();
        var div = $(this).attr('href');
        overlay.fadeIn(400,
            function () {
                $(div)
                    .css('display', 'flex')
                    .animate({
                        opacity: 1,
                        top: '50%'
                    }, 200);
            });
    });

    close.click(function () {
        modal
            .animate({
                    opacity: 0,
                    top: '45%'
                }, 200,
                function () {
                    $(this).css('display', 'none');
                    overlay.fadeOut(400);
                }
            );
    });
});
//end

$('body').on('click', '.password-control', function(){
    if ($('.input-password').attr('type') == 'password'){
        $(this).addClass('view');
        $('.input-password').attr('type', 'text');
    } else {
        $(this).removeClass('view');
        $('.input-password').attr('type', 'password');
    }
    return false;
});