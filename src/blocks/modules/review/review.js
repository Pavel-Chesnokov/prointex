import "owl.carousel";
$(document).ready(function() {
    $(".slider-review").owlCarousel({
        loop: true,
        margin: 0,
        nav: false,
        dots: true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    });
});
