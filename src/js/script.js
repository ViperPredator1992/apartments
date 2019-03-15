$(document).ready(function(){var button=$('#button');var modal=$('#modal');var close=$('#close');button.on('click',function(){modal.addClass('modal_active')});close.on('click',function(){modal.removeClass('modal_active')})});$(document).ready(function(){var modal=$('#modal');$('.card__link').click(function(e){e.preventDefault();modal.addClass('modal_active')})});var top_show=150;var delay=1000;$(document).ready(function(){$(window).scroll(function(){if($(this).scrollTop()>top_show)$('#top').fadeIn();else $('#top').fadeOut()});$('#top').click(function(e){e.preventDefault();$('body, html').animate({scrollTop:0},delay)})});$(document).ready(function(){$('.slider').slick({slidesToShow:3,slidesToScroll:1,prevArrow:$('.arrows__left'),nextArrow:$('.arrows__right'),responsive:[{breakpoint:1200,settings:{slidesToShow:2,slidesToScroll:1}},{breakpoint:830,settings:{slidesToShow:1,slidesToScroll:1}}]})});new WOW().init();$(document).ready(function(){$(window).scroll(function(){if($(this).scrollTop()>2600){$('.step').addClass('step__arrow');effectFirst()}if($(this).scrollTop()>2600){effectSecond()}})});function effectFirst(){$('.step__arrow').css("animation-play-state","running");$(".step__arrow").css("opacity","1")}function effectSecond(){$(".step__image").css("animation-play-state","running");$(".step__image").css("opacity","1")}
$(document).ready(function () {
    $('#brif-form').validate({
        rules: {
            user_name: {
                required: true,
                minlength: 2,
                maxlength: 15
            },
            user_phone: {
                required: true
            },
            user_email: {
                required: true,
                email: true
            }
        },
        messages: {
            user_name: {
                required: "Заполните поле",
                minlength: jQuery.validator.format("Не менее {0} символов!"),
                maxlength: jQuery.validator.format("Не больше {0} символов!")
            },
            user_phone: {
                required: "Заполните поле"
            },
            user_email: {
                required: "Заполните поле",
                email: "Введите корректный email"
            }
        }
    });
    $('#offer-form').validate({
        rules: {
            user_name: {
                required: true,
                minlength: 2,
                maxlength: 15
            },
            user_phone: {
                required: true
            }
        },
        messages: {
            user_name: {
                required: "Заполните поле",
                minlength: jQuery.validator.format("Не менее {0} символов!"),
                maxlength: jQuery.validator.format("Не больше {0} символов!")
            },
            user_phone: {
                required: "Заполните поле"
            }
        }
    });
    $('.phone').mask('8 (999) 999-99-99');
});
