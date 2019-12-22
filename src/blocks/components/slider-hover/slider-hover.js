import "owl.carousel";
$(document).ready(function() {
    $(".slider-hover").owlCarousel({
        loop: false,
        margin: 10,
        center: true,
        nav: true,
        dots: false,
        navText: [
            '<svg width="15" height="24" viewBox="0 0 15 24" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M14.9102 2.91797L5.82812 12L14.9102 21.082L12.0859 23.918L0.167969 12L12.0859 0.0820312L14.9102 2.91797Z" fill="black"/></svg>',
            '<svg width="15" height="24" viewBox="0 0 15 24" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M2.91406 0.0820312L14.832 12L2.91406 23.918L0.0898438 21.082L9.17188 12L0.0898438 2.91797L2.91406 0.0820312Z" fill="black"/></svg>'
        ],
        responsive: {
            0: {
                items: 1,
                nav: true
            },
            640: {
                items: 1,
                nav: true
            },
            990: {
                items: 2,
                center: true,
                loop: false
            },
            1200: {
                items: 1,
                center: false,
                loop: true
            }
        }
    });
    if ($(window).width() > "1200") {
        $(".slider-hover").hover(
            function() {
                $(".slider-hover__text").show(
                    "blind",
                    { direction: "down" },
                    300
                );
            },
            function() {
                $(".slider-hover__text").hide("fade", 300);
            }
        );
    }
});
