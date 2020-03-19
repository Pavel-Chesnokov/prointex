import { blockStatement } from "babel-types";

$(document).ready(function() {
    var controller = new ScrollMagic.Controller();
    $("#stages").each(function() {
        var stagger = TweenMax.staggerFrom(
            $(this).find(".stages__row-1 .stages__item"),
            1,
            {
                x: -400,
                autoAlpha: 0,
                delay: 0,
                ease: Power2.easeOut
            },
            0.3
        );
        var stagger2 = TweenMax.staggerFrom(
            $(this).find(".stages__row-2 .stages__item"),
            1,
            {
                x: 400,
                autoAlpha: 0,
                delay: 0,
                ease: Power2.easeOut
            },
            0.3
        );
        var stagger3 = TweenMax.to(".stages__1", 0.5, {
            background: "#ffc107",
            boxShadow: "0 0 10px rgba(255, 193, 7, 0.5)"
        });
        var stagger4 = TweenMax.to(".stages__2", 0.5, {
            background: "#ffc107",
            boxShadow: "0 0 10px rgba(255, 193, 7, 0.5)"
        });
        var stagger5 = TweenMax.to(".stages__3", 0.5, {
            background: "#ffc107",
            boxShadow: "0 0 10px rgba(255, 193, 7, 0.5)"
        });
        var stagger6 = TweenMax.to(".stages__4", 0.5, {
            background: "#ffc107",
            boxShadow: "0 0 10px rgba(255, 193, 7, 0.5)"
        });
        var stagger7 = TweenMax.to(".stages__5", 0.5, {
            background: "#ffc107",
            boxShadow: "0 0 10px rgba(255, 193, 7, 0.5)"
        });
        var stagger8 = TweenMax.to(".stages__6", 0.5, {
            background: "#ffc107",
            boxShadow: "0 0 10px rgba(255, 193, 7, 0.5)"
        });
        var stagger9 = TweenMax.to(".stages__icon-line-black", 1, {
            height: "190px", opacity:1
        });
        var stagger10 = TweenMax.to(".stages__icon-dot-black", 1, {
            opacity: 1
        });

        var scene1 = new ScrollMagic.Scene({
            triggerElement: this,
            offset: 200,
            reverse: true,
            duration: 1400,
            triggerHook: 0.7
        })
            .setTween(stagger)
            .addTo(controller)
            // .addIndicators();

        var scene2 = new ScrollMagic.Scene({
            triggerElement: this,
            offset: 500,
            reverse: true,
            duration: 1300,
            triggerHook: 0.7
        })
            .setTween(stagger2)
            .addTo(controller)
            // .addIndicators();

        var scene3 = new ScrollMagic.Scene({
            triggerElement: ".stages__1",
            reverse: true,
            offset: 180,
            triggerHook: 0.7
        })
            .setTween(stagger3)
            .addTo(controller)
            // .addIndicators();
        var scene4 = new ScrollMagic.Scene({
            triggerElement: ".stages__2",
            reverse: true,
            offset: 180,
            triggerHook: 0.7
        })
            .setTween(stagger4)
            .addTo(controller)
            // .addIndicators();
        var scene5 = new ScrollMagic.Scene({
            triggerElement: ".stages__3",
            reverse: true,
            offset: 180,
            triggerHook: 0.7
        })
            .setTween(stagger5)
            .addTo(controller)
            // .addIndicators();
        var scene6 = new ScrollMagic.Scene({
            triggerElement: ".stages__4",
            reverse: true,
            offset: 180,
            triggerHook: 0.7
        })
            .setTween(stagger6)
            .addTo(controller)
            // .addIndicators();
        var scene7 = new ScrollMagic.Scene({
            triggerElement: ".stages__5",
            reverse: true,
            offset: 180,
            triggerHook: 0.7
        })
            .setTween(stagger7)
            .addTo(controller)
            // .addIndicators();
        var scene8 = new ScrollMagic.Scene({
            triggerElement: ".stages__6",
            reverse: true,
            offset: 90,
            triggerHook: 0.7
        })
            .setTween(stagger8)
            .addTo(controller)
            // .addIndicators();

        var scene9 = new ScrollMagic.Scene({
                triggerElement: ".stages__1",
                reverse: true,
                offset: 0,
                triggerHook: 0.7
            })
                .setTween(stagger9)
                .addTo(controller)
                // .addIndicators();

        var scene10 = new ScrollMagic.Scene({
                triggerElement: ".stages__1",
                reverse: true,
                offset: 0,
                triggerHook: 0.7,
                // duration: 1300
            })
        .setTween(stagger10)
        .addTo(controller)
        // .addIndicators();
});

checkWidth();
$(window).resize(function() {
    checkWidth();
})
function stagesInit(){
    $(".stages__slider").owlCarousel({
        loop: false,
        center: true,
        margin: 10,
        nav: true,
        dots: false,
        navText: ['<svg width="58" height="24" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M6.75 0.25L0 7L6.75 13.75L8.34082 12.1592L4.30664 8.125H18V5.875H4.30664L8.34082 1.84082L6.75 0.25Z" fill="#212121"/> </svg>',
        '<svg width="58" height="24" viewBox="0 0 18 14" fill="none" ro xmlns="http://www.w3.org/2000/svg"> <path d="M11.25 0.25L18 7L11.25 13.75L9.65918 12.1592L13.6934 8.125H0V5.875H13.6934L9.65918 1.84082L11.25 0.25Z" fill="#212121"/> </svg>'],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 1
            }
        }
    });
}

function checkWidth (){
   if ($(window).width() > "992") {
        $(".stages__slider").trigger('destroy.owl.carousel');
        // $('.stages__slider').removeClass('team__slider owl-carousel owl-theme')
        $('.stages__slider').attr('display: none');
    }
    else {
        stagesInit();
    }
}
});
