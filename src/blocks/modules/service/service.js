$(document).ready(function() {
 
        $(".service__form-wrapper").hover(
            function() {
                $(".service__form-text").show(
                    "blind",
                    { direction: "down" },
                    300
                );
            },
            function() {
                $(".service__form-text").hide("fade", 300);
            }
        );
     /*   $(".slider-hover__elec").hover(
            function() {
                $(".slider-hover__elec-text").show(
                    "blind",
                    { direction: "down" },
                    300
                );
            },
            function() {
                $(".slider-hover__elec-text").hide("fade", 300);
            }
        );
        $(".slider-hover__manual").hover(
            function() {
                $(".slider-hover__manual-text").show(
                    "blind",
                    { direction: "down" },
                    300
                );
            },
            function() {
                $(".slider-hover__manual-text").hide("fade", 300);
            }
        ); */
    

});
