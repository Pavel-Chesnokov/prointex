$( document ).ready(function() {
    $(window).scroll(function() {
        if ($(this).scrollTop() == 0){
        $('.header').addClass("header_move");
        // $("html, body").animate(
        //     { scrollTop: $("#advantages").offset().top },
        //     1000
        // );
        }
        else{
        $('.header').removeClass("header_move");
        }
        });
});