$(document).ready(function($) {
    redrawDotNav();
    $(window).bind("scroll", function() {
        var $element = $("#main");
        redrawDotNav();
        if ($(window).scrollTop() > $element.offset().top + $element.height()) {
            $("#nav-dot").show();
        } else {
            $("#nav-dot").hide();
        }
    });
    $(".n_1").click(function() {
        $("html, body").animate({ scrollTop: 0 }, 1000);
        return false;
    });
    $(".n_2").click(function() {
        $("html, body").animate(
            { scrollTop: $("#advantages").offset().top },
            1000
        );
        return false;
    });
    $(".n_3").click(function() {
        $("html, body").animate(
            { scrollTop: $("#examples").offset().top },
            1000
        );
        return false;
    });
    $(".n_4").click(function() {
        $("html, body").animate({ scrollTop: $("#stages").offset().top }, 1000);
        return false;
    });
    $(".n_5").click(function() {
        $("html, body").animate({ scrollTop: $("#about").offset().top }, 1000);
        return false;
    });
    $(".n_6").click(function() {
        $("html, body").animate({ scrollTop: $("#review").offset().top }, 1000);
        return false;
    });
    $(".n_7").click(function() {
        $("html, body").animate({ scrollTop: $("#form").offset().top }, 1000);
        return false;
    });
    $(".n_8").click(function() {
        $("html, body").animate(
            { scrollTop: $("#contacts").offset().top },
            1000
        );
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
    $("#nav-dot").hover(
        function() {
            $(".js-sl_lt").show();
        },
        function() {
            $(".js-sl_lt").hide();
        }
    );
});
function redrawDotNav() {
    var section1Top = 0;
    var section2Top =
        $("#advantages").offset().top -
        ($("#examples").offset().top - $("#advantages").offset().top) / 2;
    var section3Top =
        $("#examples").offset().top -
        ($("#stages").offset().top - $("#examples").offset().top) / 2;
    var section4Top =
        $("#stages").offset().top -
        ($("#about").offset().top - $("#stages").offset().top) / 2;
    var section5Top =
        $("#about").offset().top -
        ($("#review").offset().top - $("#about").offset().top) / 2;
    var section6Top =
        $("#review").offset().top -
        ($("#form").offset().top - $("#review").offset().top) / 2;
    var section7Top =
        $("#form").offset().top -
        ($("#contacts").offset().top - $("#form").offset().top) / 2;
    var section8Top =
        $("#contacts").offset().top -
        ($(document).height() - $("#contacts").offset().top) / 2;
    $("#nav-dot a").removeClass("actv_b");
    $(".js-sl_lt").removeClass("nav-dot__title_activ");
    if (
        $(document).scrollTop() >= section1Top &&
        $(document).scrollTop() < section2Top
    ) {
        $("#nav-dot a.n_1").addClass("actv_b");
        $(".nav_dot__title-1").addClass("nav-dot__title_activ");
    } else if (
        $(document).scrollTop() >= section2Top &&
        $(document).scrollTop() < section3Top
    ) {
        $("#nav-dot .n_2").addClass("actv_b");
        $(".nav_dot__title-2").addClass("nav-dot__title_activ");
    } else if (
        $(document).scrollTop() >= section3Top &&
        $(document).scrollTop() < section4Top
    ) {
        $("#nav-dot .n_3").addClass("actv_b");
        $(".nav_dot__title-3").addClass("nav-dot__title_activ");
    } else if (
        $(document).scrollTop() >= section4Top &&
        $(document).scrollTop() < section5Top
    ) {
        $("#nav-dot .n_4").addClass("actv_b");
        $(".nav_dot__title-4").addClass("nav-dot__title_activ");
    } else if (
        $(document).scrollTop() >= section5Top &&
        $(document).scrollTop() < section6Top
    ) {
        $("#nav-dot .n_5").addClass("actv_b");
        $(".nav_dot__title-5").addClass("nav-dot__title_activ");
    } else if (
        $(document).scrollTop() >= section6Top &&
        $(document).scrollTop() < section7Top
    ) {
        $("#nav-dot .n_6").addClass("actv_b");
        $(".nav_dot__title-6").addClass("nav-dot__title_activ");
    } else if (
        $(document).scrollTop() >= section7Top &&
        $(document).scrollTop() < section8Top
    ) {
        $("#nav-dot .n_7").addClass("actv_b");
        $(".nav_dot__title-7").addClass("nav-dot__title_activ");
    } else if ($(document).scrollTop() >= section8Top) {
        $("#nav-dot .n_8").addClass("actv_b");
        $(".nav_dot__title-8").addClass(".nav-dot__title_activ");
    }
}
