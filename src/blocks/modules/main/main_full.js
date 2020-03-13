import "jquery-mousewheel";
$(document).ready(function() {
    window.counter1 = 0;
    var counter2 = 0;
    var counter3 = 0;
    var counter4 = 0;
    var counter5 = 0;
    var counter6 = 0;
    var counter7 = 0;
    var counter8 = 0;
    var counter9 = 0;
    var counter10 = 0;
    window.scrollOn = true;
    $(window).on("mousewheel", function(event) {
        console.log(
            event.deltaY,
            scroll,
            $("#contacts").offset().top,
            $("#form").offset().top,
            counter10,
            counter3
        );
        var scroll = $(this).scrollTop();
        if (
            event.deltaY == -1 &&
            window.counter1 == 0 &&
            scroll == $("#main").offset().top
            // scrollOn
        ) {
            $("html, body").animate(
                { scrollTop: $("#advantages").offset().top },
                1000
            );
            window.counter1 = 1;
            counter2 = 0;
            return false;
        }
        if (
            event.deltaY == 1 &&
            counter2 == 0 &&
            scroll < $("#advantages").offset().top
            // scrollOn
        ) {
            $("html, body").animate(
                { scrollTop: $("#main").offset().top },
                1000
            );
            counter2 = 1;
            window.counter1 = 0;
            return false;
        }
        if (
            event.deltaY == -1 &&
            counter3 == 0 &&
            scrollOn &&
            scroll >
                $("#molds").offset().top - $("#advantages").height() / 2
        ) {
            $("html, body").animate(
                { scrollTop: $("#molds").offset().top },
                1000
            );
            counter3 = 1;
            return false;
        }
        //  else if(scroll < $("#molds").offset().top - $("#advantages").height() / 2){
        //     counter3 = 0;
        // }
        if (
            event.deltaY == -1 &&
            counter4 == 0 &&
            scrollOn &&

            scroll > $("#examples").offset().top
        ) {
            $("html, body").animate(
                { scrollTop: $("#numbers").offset().top },
                1000
            );
            counter4 = 1;
            return false;
        }
        // else if(scroll < $("#examples").offset().top){
        //     counter4 = 0;
        // }
        if (
            event.deltaY == -1 &&
            counter5 == 0 &&
            scrollOn &&

            scroll >
                $("#request").offset().top - $("#stages").height() / 4
        ) {
            $("html, body").animate(
                { scrollTop: $("#make").offset().top },
                1000
            );
            counter5 = 1;
            return false;
        }
        // else if(scroll < $("#request").offset().top - $("#stages").height() / 4){
        //     counter5 = 0;
        // }
        if (
            event.deltaY == -1 &&
            counter6 == 0 &&
            scrollOn &&

            scroll >
                $("#make-scroll").offset().top - $("#make-scroll").height() / 2
        ) {
            $("html, body").animate(
                { scrollTop: $("#about").offset().top },
                1000
            );
            counter6 = 1;
            return false;
        }
        // else if(scroll < $("#make-scroll").offset().top - $("#make-scroll").height() / 2){
        //     counter6 = 0;
        // }
        if (
            event.deltaY == -1 &&
            counter7 == 0 &&
            scrollOn &&

            scroll > $("#about").offset().top
        ) {
            $("html, body").animate(
                { scrollTop: $("#team").offset().top },
                1000
            );
            counter7 = 1;
            return false;
        }
        // else if(scroll < $("#about").offset().top){
        //     counter7 = 0;
        // }
        if (
            event.deltaY == -1 &&
            counter8 == 0 &&
            scrollOn &&

            scroll > $("#team").offset().top
        ) {
            $("html, body").animate(
                { scrollTop: $("#review").offset().top },
                1000
            );
            counter8 = 1;
            return false;
        }
        // else if(scroll < $("#team").offset().top){
        //     counter8 = 0;
        // }
        if (
            event.deltaY == -1 &&
            counter9 == 0 &&
            scrollOn &&

            scroll > $("#review").offset().top
        ) {
            $("html, body").animate(
                { scrollTop: $("#form").offset().top },
                1000
            );
            counter9 = 1;
            return false;
        }
        // else if(scroll < $("#review").offset().top){
        //     counter9 = 0;
        // }
        if (
            event.deltaY == -1 &&
            counter10 == 0 &&
            scrollOn &&

            scroll > $("#form").offset().top
        ) {
            $("html, body").animate(
                { scrollTop: $("#contacts").offset().top },
                1000
            );
            counter10 = 1;
            return false;
        }
        else if(scroll < $("#form").offset().top){
            counter10 = 0;
        }
    });
});
