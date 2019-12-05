$(document).ready(function() {
    var controller = new ScrollMagic.Controller();
    $("#advantages").each(function() {
  
        var stagger = TweenMax.staggerFrom($(this).find(".advantages__item"), 1, {
          y: 200,
          autoAlpha: 0,
          delay: 0,
          ease: Power2.easeOut
        },
        0.3);
      
          var scene2 = new ScrollMagic.Scene({
                  triggerElement: this,
                  offset: 200,
                  reverse: true,
                  duration: 1200,
                  triggerHook: 0.7
              })
              .setTween(stagger)
              .addTo(controller)
          // .addIndicators()
              ;
      });
    })
    // $("#advantages").each(function() {
      //     var contentTweenTL = new TimelineMax({
    //       repeat:0,
    //     });
    //     var contentTween = contentTweenTL.from($(this).find(".advantages__item").eq(0), .6, {
    //       y: 100,
    //       autoAlpha: 0,
    //       delay: 0,
    //       ease: Power2.easeOut
    //     }, .1)
    //     .from($(this).find(".advantages__item").eq(1), .6, {
    //       y: 200,
    //       autoAlpha: 0,
    //       delay: 0,
    //       ease: Power2.easeOut
    //     }, .1)
    //     .from($(this).find(".advantages__item").eq(2), .6, {
    //         y: 100,
    //         autoAlpha: 0,
    //         delay: 0,
    //         ease: Power2.easeOut
    //       }, .1)
    //       .from($(this).find(".advantages__item").eq(3), .6, {
    //         y: 200,
    //         autoAlpha: 0,
    //         delay: 0,
    //         ease: Power2.easeOut
    //       }, .1)
    //       .from($(this).find(".advantages__item").eq(4), .6, {
    //         y: 100,
    //         autoAlpha: 0,
    //         delay: 0,
    //         ease: Power2.easeOut
    //       }, .1)
    //       .from($(this).find(".advantages__item").eq(5), .6, {
    //         y: 200,
    //         autoAlpha: 0,
    //         delay: 0,
    //         ease: Power2.easeOut
    //       }, .1);
    //       var scene3 = new ScrollMagic.Scene({
    //             triggerElement: '#advantages',
    //             offset: 100,
    //             reverse: true,
    //             duration: 1000,
    //             triggerHook: 0.9

    //           })
    //           .setTween(contentTween)
    //           .addTo(controller)
    //       .addIndicators()
    //           ;
    //   });
