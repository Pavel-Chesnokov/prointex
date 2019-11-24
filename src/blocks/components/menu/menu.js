$(function() {
    $(document).mouseup(function(e) {
        // событие клика по веб-документу
        var div = $(".menu"); // тут указываем ID элемента
        if (
            !div.is(e.target) && // если клик был не по нашему блоку
            div.has(e.target).length === 0
        ) {
            // и не по его дочерним элементам
            $(".menu__nav").removeClass("nav_is_visible");
            $("#menu__button").removeClass("menu__close");
        }
    });
    /*--------- show and hide the menu  ---*/
    $("#menu__button").on("click", function() {
        if ($(".menu__nav").hasClass("nav_is_visible") == true) {
            $(".menu__nav").removeClass("nav_is_visible");
            $("#menu__button").removeClass("menu__close");
        } else {
            $(".menu__nav").addClass("nav_is_visible");
            $("#menu__button").addClass("menu__close");
        }
    });
//анимация плавного пролистывания страниц
    $(".menu__main").click(function() {
        $("html, body").animate({ scrollTop: 0 }, 1000);
        return false;
    });
    $(".menu__advantages").click(function() {
        $("html, body").animate(
            { scrollTop: $("#advantages").offset().top },
            1000
        );
        return false;
    });
    $(".menu__examples").click(function() {
        $("html, body").animate(
            { scrollTop: $("#examples").offset().top },
            1000
        );
        return false;
    });
    $(".menu__stages").click(function() {
        $("html, body").animate({ scrollTop: $("#stages").offset().top }, 1000);
        return false;
    });
    $(".menu__about").click(function() {
        $("html, body").animate({ scrollTop: $("#about").offset().top }, 1000);
        return false;
    });
    $(".menu__molds").click(function() {
        $("html, body").animate({ scrollTop: $("#molds").offset().top }, 1000);
        return false;
    });
    $(".menu__form").click(function() {
        $("html, body").animate({ scrollTop: $("#form").offset().top }, 1000);
        return false;
    });
    $(".menu__make").click(function() {
        $("html, body").animate({ scrollTop: $("#make").offset().top }, 1000);
        return false;
    });
    $(".menu__contacts").click(function() {
        $("html, body").animate(
            { scrollTop: $("#contacts").offset().top },
            1000
        );
        return false;
    });
});
