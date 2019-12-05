$(document).ready(function() {
    var controller = new ScrollMagic.Controller();

    var start1 = new ScrollMagic.Scene({
        triggerHook: 0,
        offset: 20
    })
        .addIndicators()
        .addTo(controller)
        .on("start", function(event) {
            var x1 = event.scrollDirection;
            if (x1 == "FORWARD")  {
                $("html, body").animate(
                    { scrollTop: $("#advantages").offset().top },
                    1000
                );
            }
        });
        var start2 = new ScrollMagic.Scene({
            triggerHook: 0,
            offset: $("#advantages").offset().top - 10

        })
            .addIndicators()
            .addTo(controller)
            .on("start", function(event) {
                var x1 = event.scrollDirection;
                if (x1 == "REVERSE") {
                    $("html, body").animate(
                        { scrollTop: $("#main").offset().top },
                        1000
                    );
                }
            });
            var start3 = new ScrollMagic.Scene({
                triggerElement: "#molds",
                triggerHook: 1,
                offset: 250
            })
                .addIndicators()
                .addTo(controller)
                .on("start", function(event) {
                    var x1 = event.scrollDirection;
                    if (x1 == "FORWARD") {
                        $("html, body").animate(
                            { scrollTop: $("#molds").offset().top },
                            1000
                        );
                    } 
                });
                var start4 = new ScrollMagic.Scene({
                    triggerElement: ".numbers",
                    triggerHook: 1,
                    offset: 20
                })
                    .addIndicators()
                    .addTo(controller)
                    .on("start", function(event) {
                        var x1 = event.scrollDirection;
                        if (x1 == "FORWARD") {
                            $("html, body").animate(
                                { scrollTop: $("#numbers").offset().top },
                                1000
                            );
                        }
                    });
                    
                var start5 = new ScrollMagic.Scene({
                    triggerElement: "#make",
                    triggerHook: 1,
                    offset: 250
                })
                    .addIndicators()
                    .addTo(controller)
                    .on("start", function(event) {
                        var x1 = event.scrollDirection;
                        if (x1 == "FORWARD") {
                            $("html, body").animate(
                                { scrollTop: $("#make").offset().top },
                                1000
                            );
                        }
                    });
                var start6 = new ScrollMagic.Scene({
                    triggerElement: "#about",
                    triggerHook: 1,
                    offset: 20
                })
                    .addIndicators()
                    .addTo(controller)
                    .on("start", function(event) {
                        var x1 = event.scrollDirection;
                        if (x1 == "FORWARD") {
                            $("html, body").animate(
                                { scrollTop: $("#about").offset().top },
                                1000
                            );
                        }
                    });
                var start7 = new ScrollMagic.Scene({
                    triggerElement: "#team",
                    triggerHook: 1,
                    offset: 20
                })
                    .addIndicators()
                    .addTo(controller)
                    .on("start", function(event) {
                        var x1 = event.scrollDirection;
                        if (x1 == "FORWARD") {
                            $("html, body").animate(
                                { scrollTop: $("#team").offset().top },
                                1000
                            );
                        }
                    });
                var start8 = new ScrollMagic.Scene({
                    triggerElement: "#review",
                    triggerHook: 1,
                    offset: 20
                })
                    .addIndicators()
                    .addTo(controller)
                    .on("start", function(event) {
                        var x1 = event.scrollDirection;
                        if (x1 == "FORWARD") {
                            $("html, body").animate(
                                { scrollTop: $("#review").offset().top },
                                1000
                            );
                        }
                    });
                var start9 = new ScrollMagic.Scene({
                    triggerElement: "#form",
                    triggerHook: 1,
                    offset: 100
                })
                    .addIndicators()
                    .addTo(controller)
                    .on("start", function(event) {
                        var x1 = event.scrollDirection;
                        if (x1 == "FORWARD") {
                            $("html, body").animate(
                                { scrollTop: $("#form ").offset().top },
                                1000
                            );
                        }
                    });
                var start10 = new ScrollMagic.Scene({
                    triggerElement: "#contacts",
                    triggerHook: 1,
                    offset: 200
        
                })
                    .addIndicators()
                    .addTo(controller)
                    .on("start", function(event) {
                        var x1 = event.scrollDirection;
                        if (x1 == "FORWARD") {
                            $("html, body").animate(
                                { scrollTop: $("#contacts").offset().top + 100 },
                                1000
                            );
                        }
                    });
                    $(".li_1").click(function() {
                        $("html, body").animate(
                            { scrollTop: $("#advantages").offset().top },
                            1000
                        );
                        return false;
                    });
                    $(".li_2").click(function() {
                        $("html, body").animate({ scrollTop: $("#molds").offset().top }, 1000);
                        return false;
                    });
                    $(".li_3").click(function() {
                        $("html, body").animate(
                            { scrollTop: $("#numbers").offset().top },
                            1000
                        );
                        return false;
                    });
                    $(".li_4").click(function() {
                        $("html, body").animate({ scrollTop: $("#make").offset().top }, 1000);
                        return false;
                    });
                    $(".li_5").click(function() {
                        $("html, body").animate({ scrollTop: $("#about").offset().top }, 1000);
                        return false;
                    });
                    $(".li_6").click(function() {
                        $("html, body").animate({ scrollTop: $("#form").offset().top }, 1000);
                        return false;
                    });
                    $(".li_7").click(function() {
                        controller.enabled(false);
                        $("html, body").animate({ scrollTop: $("#contacts").offset().top },1000);
                        return false;
                    });
});
