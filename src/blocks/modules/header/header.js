$( document ).ready(function() {
    $(window).scroll(function() {
        if ($(this).scrollTop() > 1){
        $('.header').addClass("header_move");
        }
        else{
        $('.header').removeClass("header_move");
        }
        });
});