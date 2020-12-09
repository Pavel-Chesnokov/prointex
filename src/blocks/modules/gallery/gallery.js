import "owl.carousel";
$(document).ready(function() {
    $(".slider-gallery").owlCarousel({
        loop: true,
        items: 2,
        autoWidth:true,
        // center: true,
        nav: true,
        dots: false,
        autoplay : false,
        lazyLoad: true,
        autoplayTimeout : 7000,
        navText: [
            '<svg width="15" height="24" viewBox="0 0 15 24" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M14.9102 2.91797L5.82812 12L14.9102 21.082L12.0859 23.918L0.167969 12L12.0859 0.0820312L14.9102 2.91797Z" fill="black"/></svg>',
            '<svg width="15" height="24" viewBox="0 0 15 24" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M2.91406 0.0820312L14.832 12L2.91406 23.918L0.0898438 21.082L9.17188 12L0.0898438 2.91797L2.91406 0.0820312Z" fill="black"/></svg>'
        ],
        responsive: {
            0: {
                items: 1,
                nav: true,
                margin: 0,
                center: true,


            },
            400: {
                items: 1,
                nav: true,
                center: true,

                // center: false
            },
            991: {
                items: 1,
                center: true,
                loop: false
            },
            1200: {
                items: 2,
                // center: true,
                loop: true,
                margin: 15
            }
        }
    });
});
