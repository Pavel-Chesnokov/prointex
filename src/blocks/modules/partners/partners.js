import "owl.carousel";
$(document).ready(function(){
    $('.partners__slider').owlCarousel({
        loop: true,
        items: 1,
        margin: 10,
        center: true,
        nav: true,
        dots: false,
        // autoplay : false,
        // autoplayTimeout : 7000,
        navText: [
            '',
            '<svg width="15" height="24" viewBox="0 0 15 24" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M2.91406 0.0820312L14.832 12L2.91406 23.918L0.0898438 21.082L9.17188 12L0.0898438 2.91797L2.91406 0.0820312Z" fill="black"/></svg>'
        ],
        // responsive:{
        //     0:{
        //         items:1
        //     },
        //     600:{
        //         items:1
        //     },
        //     1000:{
        //         items:1
        //     }
        // }
    })
  });
