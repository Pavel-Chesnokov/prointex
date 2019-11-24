$("select").each(function() {
    var $this = $(this),
        numberOfOptions = $(this).children("option").length;

    $this.addClass("select-hidden");
    $this.wrap('<div class="select text_title text_bold text_fs-m"></div>');
    $this.after('<div class="select-styled"></div>');

    var $styledSelect = $this.next("div.select-styled");
    $styledSelect.text(
        $this
            .children("option")
            .eq(0)
            .text()
    );

    var $list = $("<ul />", {
        class: "select-options"
    }).insertAfter($styledSelect);

    for (var i = 0; i < numberOfOptions; i++) {
        $("<li />", {
            text: $this
                .children("option")
                .eq(i)
                .text(),
            rel: $this
                .children("option")
                .eq(i)
                .val()
        }).appendTo($list);
    }

    var $listItems = $list.children("li");

    $styledSelect.click(function(e) {
        e.stopPropagation();
        $("div.select-styled.active")
            .not(this)
            .each(function() {
                $(this)
                    .removeClass("active")
                    .next("ul.select-options")
                    .hide();
            });
        $(this)
            .toggleClass("active")
            .next("ul.select-options")
            .toggle();
    });

    $listItems.click(function(e) {
        e.stopPropagation();
        $styledSelect.text($(this).text()).removeClass("active");
        $this.val($(this).attr("rel"));
        $list.hide();
        // $("#sync2").find(".owl-item").eq(0).addClass("current");
        $(".groups-data > div").removeClass("active1");
        $("#sync1 .item .item-img").removeClass("img-active");
        $("#sync2 .slider-mini__img").removeClass("img-active");
        $(".data-" + $(this).attr("rel")).addClass("active1");
        $(".img-" + $(this).attr("rel")).addClass("img-active");
        $("#sync1 .owl-stage").attr(
            "style",
            "transform: translate3d(-1140px, 0px, 0px); transition: all 0s ease 0s; width: 4560px;"
        );
        $("#sync2 .owl-stage").attr(
            "style",
            "transform: translate3d(0px, 0px, 0px); transition: all 0s ease 0s; width: 760px;"
        );
        $("#sync2 .owl-stage .owl-item").removeClass("current");
        $("#sync2 .owl-stage > :first-child").addClass("current");
    });

    $(document).click(function() {
        $styledSelect.removeClass("active");
        $list.hide();
    });
    //работа полноэкранного режима слайдера
    $(".foto-1 > .mold-1").on("click", function(event) {
        event.preventDefault();
        Fresco.show(
            [
                "./img/slider-img/IMG_2865.webp",
                "./img/slider-img/IMG_2756.webp",
                "./img/slider-img/IMG_2777.webp"
            ],
            { ui: "inside", loop: true }
        );
    });
    $(".foto-2 > .mold-1").on("click", function(event) {
        event.preventDefault();
        Fresco.show(
            [
                "./img/slider-img/IMG_2756.webp",
                "./img/slider-img/IMG_2865.webp",
                "./img/slider-img/IMG_2777.webp"
            ],
            { ui: "inside", loop: true }
        );
    });
    $(".foto-3 > .mold-1").on("click", function(event) {
        event.preventDefault();
        Fresco.show(
            [
                "./img/slider-img/IMG_2777.webp",
                "./img/slider-img/IMG_2756.webp",
                "./img/slider-img/IMG_2865.webp",
            ],
            { ui: "inside", loop: true }
        );
    });

    $(".foto-1 > .mold-2").on("click", function(event) {
        event.preventDefault();
        Fresco.show(
            [
                "./img/slider-img/IMG_2816.webp",
                "./img/slider-img/IMG_2889.webp",
                "./img/slider-img/IMG_2840.webp"
            ],
            { ui: "inside", loop: true }
        );
    });
    $(".foto-2 > .mold-2").on("click", function(event) {
        event.preventDefault();
        Fresco.show(
            [
                "./img/slider-img/IMG_2889.webp",
                "./img/slider-img/IMG_2816.webp",
                "./img/slider-img/IMG_2840.webp"
            ],
            { ui: "inside", loop: true }
        );
    });
    $(".foto-3 > .mold-2").on("click", function(event) {
        event.preventDefault();
        Fresco.show(
            [
                "./img/slider-img/IMG_2840.webp",
                "./img/slider-img/IMG_2816.webp",
                "./img/slider-img/IMG_2889.webp"
            ],
            { ui: "inside", loop: true }
        );
    });
});
