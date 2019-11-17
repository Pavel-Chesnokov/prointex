import "owl.carousel";
$(document).ready(function() {
    $(".slider-hover").owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        dots: false,
        navText: [
            "<img src='./img/slider-hover/left.svg'>",
            "<img src='./img/slider-hover/right.svg'>"
        ],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });


    $(document).on("scroll", function() {
        var w_top = $(window).scrollTop();
        var w_height = $(window).height();
        var e_top = $(".make__slider").offset().top;
        if (w_top >= e_top - w_height ) {
            $(".slider-hover")
                .find(".owl-prev")
                .addClass("owl-prev_show");
            $(".slider-hover")
                .find(".owl-next")
                .addClass("owl-next_show");
        } else {
            $(".slider-hover")
                .find(".owl-prev")
                .removeClass("owl-prev_show");
            $(".slider-hover")
                .find(".owl-next")
                .removeClass("owl-next_show");
        }
    });
    // $(".slider-hover__zoom").click(function() {
    //     // Событие клика на маленькое изображение
    //     $("html,body").css("overflow","hidden");
    //     var img = $(".slider-hover").find(".active").find(".slider-hover__img"); // Получаем изображение, на которое кликнули
    //     var src = img.attr("src"); // Достаем из этого изображения путь до картинки
    //     $("body").append(
    //         "<div class='popup'>" + //Добавляем в тело документа разметку всплывающего окна
    //         "<div class='popup_bg'></div>" + // Блок, который будет служить фоном затемненным
    //         "<img src='" +
    //         src +
    //         "' class='popup_img' />" + // Само увеличенное фото
    //         '<div class="menu__button menu__close button-send_shadow slider-hover__close">' +
    //             '<div class="hamburger hamburger1">' +
    //             ' <span class="bar bar1"></span><span class="bar bar2"></span><span class="bar bar3"></span><span class="bar bar4"></span></div>'+
    //         '</div>' +
    //         "</div>"
    //     );
    //     $(".popup").fadeIn(400); // Медленно выводим изображение
    //     $(".slider-hover__close").click (function() {
    //         // Событие клика на затемненный фон
    //         $(".popup").fadeOut(200); // Медленно убираем всплывающее окно
    //         setTimeout(function() {
    //             // Выставляем таймер
    //             $(".popup").remove(); // Удаляем разметку всплывающего окна
    //             $("html,body").css("overflow","auto");
    //         }, 200);
    //     });
    // });
});
