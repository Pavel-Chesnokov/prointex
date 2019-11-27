import { TweenMax } from "gsap";

$(document).ready(function() {
    var controller = new ScrollMagic.Controller();
    // var scen1 = new ScrollMagic.Scene({
    //     triggerElement: "#trigger1",
    //     triggerHook: 0.9, // положение тригера относительно окна проссмотра 0.5 в середине 1 в конце
    //     // duration: "100%", // расстояние от start до end
    //     offset: 0, //положение тригера относительно тригер элемента
    //     reverse: true
    //         })

    // .setClassToggle(".reveal1", "visible") // add class to reveal
    // .addIndicators() // add indicators (requires plugin)
    // .addTo(controller);
 
        var stagger = TweenMax.staggerFrom(
            $(".reveal1"),
            1,
            {
                y: 40,
                autoAlpha: 0,
                delay: 0,
                ease: Power2.easeOut
            },
            0.3
        );
        var scene2 = new ScrollMagic.Scene({
            triggerElement: '#advantages',
            offset: -100,
            reverse: true
        })
            .setTween(stagger)
            .addTo(controller)
            .addIndicators();

});
