import "jquery-mousewheel";
$(document).ready(function() {
    window.counter1 = 0;
    var counter2 = 0;
    var counter3 = 0;
    var counter10 = 0;
    window.scrollOn = true;
    $(window).on("mousewheel", function(event) {
        var scroll = $(this).scrollTop();
        if (
            event.deltaY == -1 &&
            window.counter1 == 0 &&
            scroll == $("#main").offset().top
            // scrollOn
        ) {
            $("html, body").animate(
                { scrollTop: ($("#service").offset().top - 130) },
                1000
            );
            window.counter1 = 1;
            counter2 = 0;
            return false;
        }
        if (
            event.deltaY == 1 &&
            counter2 == 0 &&
            scroll < $("#service").offset().top
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
    });
});
