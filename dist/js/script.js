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
var myMapTemp,myPlacemarkTemp,spinner=$(".ymap-container").children(".loader"),check_if_load=!1;function init(){var e=new ymaps.Map("map-yandex",{center:[55.6114,37.2011],zoom:17,controls:["zoomControl","fullscreenControl"]},{suppressMapOpenBlock:!0});e.behaviors.disable("scrollZoom");var n=new ymaps.GeoObject({geometry:{type:"Point",coordinates:[55.6114,37.2011]}});e.geoObjects.add(n),waitForTilesLoad(e.layers.get(0).get(0)).then(function(){spinner.removeClass("is-active")})}function waitForTilesLoad(o){return new ymaps.vow.Promise(function(e,n){var a=getTileContainer(o),t=!0;a.tiles.each(function(e,n){e.isReady()||(t=!1)}),t?e():a.events.once("ready",function(){e()})})}function getTileContainer(e){for(var n in e)if(e.hasOwnProperty(n)&&(e[n]instanceof ymaps.layer.tileContainer.CanvasContainer||e[n]instanceof ymaps.layer.tileContainer.DomContainer))return e[n];return null}function loadScript(e,n){var a=document.createElement("script");a.readyState?a.onreadystatechange=function(){"loaded"!=a.readyState&&"complete"!=a.readyState||(a.onreadystatechange=null,n())}:a.onload=function(){n()},a.src=e,document.getElementsByTagName("head")[0].appendChild(a)}var ymap=function(){$(".ymap-container").mouseenter(function(){check_if_load||(check_if_load=!0,spinner.addClass("is-active"),loadScript("https://api-maps.yandex.ru/2.1/?apikey=(f9942301-4501-47e0-b07b-70e902931c78)&lang=ru_RU",function(){ymaps.load(init)}))})};$(function(){ymap()});
$(window).width(function(){$(window).width()<992&&($(".wow").removeClass("wow"),$(".fadeInLeft").removeClass("fadeInLeft"),$(".fadeInRight").removeClass("fadeInRight"))});