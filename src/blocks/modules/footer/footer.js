$(document).ready(function() {
    $(".main__arrow-up").click(function() {
        $("html, body").animate({ scrollTop: $("#main").offset().top }, 1000);
        return false;
    });
    $(document).on("scroll", function() {
        var w_top = $(window).scrollTop();
        var w_height = ($(window).height());
        var scroll = w_top + w_height;
        var e_top = $(".footer").offset().top;
        if (scroll > e_top) {
            $(".main__arrow-up").show("fade", 500);
        } else {
            $(".main__arrow-up").hide("fade", 500);
        }
    });
    $('.main__arrow-up').hover(function(){
        $(this).addClass('button_hover')
    }, function() {
        $(this).removeClass('button_hover')
    });
});
