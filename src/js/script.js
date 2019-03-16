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

//Переменная для включения/отключения индикатора загрузки
var spinner = $('.ymap-container').children('.loader');
//Переменная для определения была ли хоть раз загружена Яндекс.Карта (чтобы избежать повторной загрузки при наведении)
var check_if_load = false;
//Необходимые переменные для того, чтобы задать координаты на Яндекс.Карте
var myMapTemp, myPlacemarkTemp;

//Функция создания карты сайта и затем вставки ее в блок с идентификатором &#34;map-yandex&#34;
function init() {
    var myMapTemp = new ymaps.Map("map-yandex", {
        center: [55.730138, 37.594238], // координаты центра на карте
        zoom: 7, // коэффициент приближения карты
        controls: ['zoomControl', 'fullscreenControl'] // выбираем только те функции, которые необходимы при использовании
    });
    var myPlacemarkTemp = new ymaps.GeoObject({
        geometry: {
            type: "Point",
            coordinates: [55.730138, 37.594238] // координаты, где будет размещаться флажок на карте
        }
    });
    myMapTemp.geoObjects.add(myPlacemarkTemp); // помещаем флажок на карту

    // Получаем первый экземпляр коллекции слоев, потом первый слой коллекции
    var layer = myMapTemp.layers.get(0).get(0);

    // Решение по callback-у для определения полной загрузки карты
    waitForTilesLoad(layer).then(function () {
        // Скрываем индикатор загрузки после полной загрузки карты
        spinner.removeClass('is-active');
    });
}

// Функция для определения полной загрузки карты (на самом деле проверяется загрузка тайлов) 
function waitForTilesLoad(layer) {
    return new ymaps.vow.Promise(function (resolve, reject) {
        var tc = getTileContainer(layer),
            readyAll = true;
        tc.tiles.each(function (tile, number) {
            if (!tile.isReady()) {
                readyAll = false;
            }
        });
        if (readyAll) {
            resolve();
        } else {
            tc.events.once("ready", function () {
                resolve();
            });
        }
    });
}

function getTileContainer(layer) {
    for (var k in layer) {
        if (layer.hasOwnProperty(k)) {
            if (
                layer[k] instanceof ymaps.layer.tileContainer.CanvasContainer ||
                layer[k] instanceof ymaps.layer.tileContainer.DomContainer
            ) {
                return layer[k];
            }
        }
    }
    return null;
}

// Функция загрузки API Яндекс.Карт по требованию (в нашем случае при наведении)
function loadScript(url, callback) {
    var script = document.createElement("script");

    if (script.readyState) { // IE
        script.onreadystatechange = function () {
            if (script.readyState == "loaded" ||
                script.readyState == "complete") {
                script.onreadystatechange = null;
                callback();
            }
        };
    } else { // Другие браузеры
        script.onload = function () {
            callback();
        };
    }

    script.src = url;
    document.getElementsByTagName("head")[0].appendChild(script);
}

// Основная функция, которая проверяет когда мы навели на блок с классом &#34;ymap-container&#34;
var ymap = function () {
    $('.ymap-container').mouseenter(function () {
        if (!check_if_load) { // проверяем первый ли раз загружается Яндекс.Карта, если да, то загружаем

            // Чтобы не было повторной загрузки карты, мы изменяем значение переменной
            check_if_load = true;

            // Показываем индикатор загрузки до тех пор, пока карта не загрузится
            spinner.addClass('is-active');

            // Загружаем API Яндекс.Карт
            loadScript("https://api-maps.yandex.ru/2.1/?lang=ru_RU&amp;loadByRequire=1", function () {
                // Как только API Яндекс.Карт загрузились, сразу формируем карту и помещаем в блок с идентификатором &#34;map-yandex&#34;
                ymaps.load(init);
            });
        }
    });
}

$(function () {

    //Запускаем основную функцию
    ymap();

});