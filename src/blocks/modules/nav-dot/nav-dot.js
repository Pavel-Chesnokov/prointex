$(document).ready(function($) {
    var $element = $("#main");
    $(window).on('scroll', function(){
        var width = $(window).width();
        redrawDotNav();
        if ($(window).scrollTop() > $element.offset().top + $element.height() &&
        width > 1750
        ){
            $("#nav-dot").show();
        }
        else {
            $("#nav-dot").hide();
        }
    })
    $(window).on('resize', function(){
        var width = $(window).width();
        if ($(window).scrollTop() > $element.offset().top + $element.height() &&
        width > 1750
        ){
            $("#nav-dot").show();
        }
        else {
            $("#nav-dot").hide();
        }
    })
    // redrawDotNav();
    // $(window).on("scroll", function() {
    //     var $element = $("#main");
    //     redrawDotNav();
    //     if (
    //         $(window).scrollTop() > $element.offset().top + $element.height() && 
    //         width > 1750
    //     ) {
    //         $("#nav-dot").show();
    //     } else {
    //         $("#nav-dot").hide();
    //     }

    // });
    $(".li_1").click(function() {
        $("html, body").animate(
            { scrollTop: $("#advantages").offset().top },
            1000
            );
            window.scrollOn = false;

            // window.scroll = $("#advantages").offset().top;
            // console.log(window.scroll);

            return false;
    });
    $(".li_2").click(function() {
        $("html, body").animate(
            { scrollTop: $("#molds").offset().top }, 
            1000
            );
            window.scrollOn = false;

            // window.scroll = $("#molds").offset().top;
            // console.log(window.scroll);

            return false;
    });
    $(".li_3").click(function() {
        $("html, body").animate(
            { scrollTop: $("#numbers").offset().top },
            1000
            );
            window.scrollOn = false;

            // window.scroll = $("#numbers").offset().top;
            // console.log(window.scroll);

            return false;
    });
    $(".li_4").click(function() {
        $("html, body").animate(
            { scrollTop: $("#make").offset().top }, 
            1000
            );
            window.scrollOn = false;

            // window.scroll = $("#make").offset().top;
            // console.log(window.scroll);

            return false;
    });
    $(".li_5").click(function() {
        $("html, body").animate({ scrollTop: $("#about").offset().top }, 1000);
        window.scrollOn = false;

        // window.scroll = $("#about").offset().top;
        // console.log(window.scroll);

        return false;
    });
    $(".li_6").click(function() {
        $("html, body").animate({ scrollTop: $("#form").offset().top }, 1000);
        window.scrollOn = false;

        // window.scroll = $("#form").offset().top;
        // console.log(window.scroll);

        return false;
    });
    $(".li_7").click(function() {
        $("html, body").animate(
            { scrollTop: $("#contacts").offset().top },
            1000
            );
            window.scrollOn = false;
            // window.scroll = $("#contacts").offset().top;
            // console.log(window.scroll);
            return false;
    });
    $(".menu__main").click(function() {
        $("html, body").animate({ scrollTop: 0 }, 1000);
        window.counter1 = 0;
        // window.scrollOn = false;

        // window.scroll = $(window).scrollTop();
        return false;
    });

    // $("#nav-dot a").hover(
    //     function() {
    //         $(this)
    //             .prev("span")
    //             .show();
    //     },
    //     function() {
    //         $(this)
    //             .prev("span")
    //             .hide();
    //     }
    // );
    // скрывать заголовки точек
    // $("#nav-dot").hover(
    //     function() {
    //         $(".js-sl_lt").show();
    //     },
    //     function() {
    //         $(".js-sl_lt").hide();
    //     }
    // );
});
function redrawDotNav() {
    var section1Top = 0;
    var section2Top =
        $("#advantages").offset().top -
        ($("#molds").offset().top - $("#advantages").offset().top) / 2;
    var section3Top =
        $("#molds").offset().top -
        ($("#stages").offset().top - $("#molds").offset().top) / 4;
    var section4Top =
        $("#stages").offset().top -
        ($("#make").offset().top - $("#stages").offset().top) / 4;
    var section5Top =
        $("#make").offset().top -
        ($("#about").offset().top - $("#make").offset().top) / 4;
    var section6Top =
        $("#about").offset().top -
        ($("#form").offset().top - $("#about").offset().top) / 6;
    var section7Top =
        $("#form").offset().top -
        ($("#contacts").offset().top - $("#form").offset().top) / 2;
    var section8Top =
        $("#contacts").offset().top -
        ($(document).height() - $("#contacts").offset().top) / 2;

    $("#nav-dot a").removeClass("actv_b");
    $(".js-sl_lt").removeClass("nav-dot__title_activ");

    if (
        $(document).scrollTop() >= section2Top &&
        $(document).scrollTop() < section3Top
    ) {
        $("#nav-dot .n_1").addClass("actv_b");
        $(".nav_dot__title-1").addClass("nav-dot__title_activ");
    } else if (
        $(document).scrollTop() >= section3Top &&
        $(document).scrollTop() < section4Top
    ) {
        $("#nav-dot .n_2").addClass("actv_b");
        $(".nav_dot__title-2").addClass("nav-dot__title_activ");
    } else if (
        $(document).scrollTop() >= section4Top &&
        $(document).scrollTop() < section5Top
    ) {
        $("#nav-dot .n_3").addClass("actv_b");
        $(".nav_dot__title-3").addClass("nav-dot__title_activ");
    } else if (
        $(document).scrollTop() >= section5Top &&
        $(document).scrollTop() < section6Top
    ) {
        $("#nav-dot .n_4").addClass("actv_b");
        $(".nav_dot__title-4").addClass("nav-dot__title_activ");
    } else if (
        $(document).scrollTop() >= section6Top &&
        $(document).scrollTop() < section7Top
    ) {
        $("#nav-dot .n_5").addClass("actv_b");
        $(".nav_dot__title-5").addClass("nav-dot__title_activ");
    } else if (
        $(document).scrollTop() >= section7Top &&
        $(document).scrollTop() < section8Top
    ) {
        $("#nav-dot .n_6").addClass("actv_b");
        $(".nav_dot__title-6").addClass("nav-dot__title_activ");
    } else if ($(document).scrollTop() >= section8Top) {
        $("#nav-dot .n_7").addClass("actv_b");
        $(".nav_dot__title-8").addClass(".nav-dot__title_activ");
    }

}

