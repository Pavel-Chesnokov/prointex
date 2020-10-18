$( document ).ready(function() {
    $(window).scroll(function() {
        if ($(this).scrollTop() > 0){
        $('.header__sub-menu').addClass("header_move");
        // $("html, body").animate(
        //     { scrollTop: $("#advantages").offset().top },
        //     1000
        // );
        }
        else{
        $('.header__sub-menu').removeClass("header_move");
        }
        });
});