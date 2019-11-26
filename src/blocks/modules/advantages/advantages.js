$(document).ready(function() {
    $(document).on("scroll", function() {
        var w_top = $(window).scrollTop();
        var w_height = $(window).height();
        var scroll = w_top + w_height;
        var e1_top = $(".advantages__item:eq(0)").offset().top;
        var e2_top = $(".advantages__item:eq(2)").offset().top;
        var e3_top = $(".advantages__item:eq(4)").offset().top;
        if (scroll > e1_top) {
            $(".advantages__number:eq(0)").show("fade", 3000);
            $(".advantages__item:eq(0)").show("fade", 3000);
            $(".advantages__number:eq(1)").show("fade", 3000);
            $(".advantages__item:eq(1)").show("fade", 3000);
        }
        if (scroll > e2_top) {
            $(".advantages__number:eq(2)").show("fade", 3000);
            $(".advantages__item:eq(2)").show("fade", 3000);
            $(".advantages__number:eq(3)").show("fade", 3000);
            $(".advantages__item:eq(3)").show("fade", 3000);
        }
        if (scroll > e3_top) {
            $(".advantages__number:eq(4)").show("fade", 3000);
            $(".advantages__item:eq(4)").show("fade", 3000);
            $(".advantages__number:eq(5)").show("fade", 3000);
            $(".advantages__item:eq(5)").show("fade", 3000);
        }
    });
});