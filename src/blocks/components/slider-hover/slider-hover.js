import "owl.carousel";
$(document).ready(function() {
    $(".slider-hover").owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        dots: true,
        navText: [
            "<img src='../../../img/slider-hover/left.svg'>",
            "<img src='../../../img/slider-hover/right.svg'>"
        ],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });

    var postion = $(".make").offset().top,
        height = $(".make").height(),
        heigtWindow = $(window).height() / 2;
    $(document).on("scroll", function() {
        var scroll = $(document).scrollTop();
        if (scroll > postion - heigtWindow && scroll < postion + height) {
            $(".slider-hover")
                .find(".owl-prev")
                .addClass("owl-prev_show");
            $(".slider-hover")
                .find(".owl-next")
                .addClass("owl-next_show");
        }else {
            $(".slider-hover")
                .find(".owl-prev")
                .removeClass("owl-prev_show");
            $(".slider-hover")
                .find(".owl-next")
                .removeClass("owl-next_show");
         }
    });
});
