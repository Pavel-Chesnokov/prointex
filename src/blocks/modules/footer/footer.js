$(document).ready(function() {
    $(document).on("scroll", function() {
        var w_top = $(window).scrollTop();
        var w_height = $(window).height();
        var scroll = w_top + w_height;
        var e_top = $(".footer").offset().top;
        if (scroll > e_top) {
            $(".footer__arrow-up").show("fade", 500);
        } else {
            $(".footer__arrow-up").hide("fade", 500);
        }
    });
    $('.footer__arrow-up').hover(function(){
        $(this).addClass('button_hover')
    }, function() {
        $(this).removeClass('button_hover')
    });
});
