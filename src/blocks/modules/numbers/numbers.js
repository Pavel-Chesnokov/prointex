$(document).ready(function(){
    $(window).on("scroll", function(){
        var w_top = $(window).scrollTop();
        var w_height = $(window).height();
        var e_top = $(".numbers").offset().top;
        if (w_top >= e_top - w_height ){
            $(".js-count-1").spincrement({
                thousandSeparation: '.',
                from: 0,
                to: 25,
                easing: 'linear',
                duration: 4000,
            });
            $(".js-count-2").spincrement({
                thousandSeparation: '.',
                from: 0,
                to: 60,
                easing: 'linear',
                duration: 4000,
            });
            $(".js-count-3").spincrement({
                thousandSeparation: '.',
                from: 0,
                to: 300,
                easing: 'linear',
                duration: 4000,
            });
            $(".js-count-4").spincrement({
                thousandSeparation: '.',
                from: 0,
                to: 30,
                easing: 'linear',
                duration: 4000,
            });
        }
    });
});
