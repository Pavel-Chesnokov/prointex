$(document).ready(function(){
    $(window).on("scroll", function(){
        var w_top = $(window).scrollTop();
        var e_top = $(".numbers").offset().top;
        if (w_top >= 2200){
            $(".js-count-1").spincrement({
                thousandSeparation: '.',
                from: 0,
                to: 10,
                duration: 1200,
            });
            $(".js-count-2").spincrement({
                thousandSeparation: '.',
                from: 0,
                to: 100,
                duration: 1200,
            });
            $(".js-count-3").spincrement({
                thousandSeparation: '.',
                from: 0,
                to: 50,
                duration: 1200,
            });
            $(".js-count-4").spincrement({
                thousandSeparation: '.',
                from: 0,
                to: 7,
                duration: 1200,
            });
        }
    });
});
