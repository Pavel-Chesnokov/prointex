import "owl.carousel";
$(document).ready(function(){
    $('.slider-img').owlCarousel({
        loop: true,
        animateOut: 'fadeOut',
        navContainer: '.nav-container',
        margin:0,
        nav: true,
        navText: [ , $('.slider__icon')],
        dots:false,
        // autoplay:true,
        // autoplayTimeout:5000,
        // autoplayHoverPause: true,
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
    })
  });
