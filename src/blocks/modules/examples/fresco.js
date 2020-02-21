$(document).ready(function() {
    $("#examples-1").on("click", function(event) {
        event.preventDefault();
        Fresco.show(
            [
                "./img/examples/form1/IMG_7965.webp",
                "./img/examples/form1/IMG_7966.webp",
                "./img/examples/form1/IMG_8478.webp",
                "./img/examples/form1/IMG_8479.webp",
                "./img/examples/form1/IMG_8487.webp",
            ],
            { ui: "inside", loop: true }
        );
    });
    $("#examples-2").on("click", function(event) {
        event.preventDefault();
        Fresco.show(
            [
                "./img/examples/form2/IMG_8068.webp",
                "./img/examples/form2/IMG_8065.webp",
                "./img/examples/form2/IMG_8066.webp"
            ],
            { ui: "inside", loop: true }
        );
    });
    $("#examples-3").on("click", function(event) {
        event.preventDefault();
        Fresco.show(
            [
                "./img/examples/form3/IMG_6902.webp",
                "./img/examples/form3/IMG_6854.webp",
                "./img/examples/form3/IMG_6849.webp",
                "./img/examples/form3/IMG_6894.webp",
            ],
            { ui: "inside", loop: true }
        );
    });
    $("#examples-4").on("click", function(event) {
        event.preventDefault();
        Fresco.show(
            [
                "./img/examples/form4/IMG_3822.webp",
                "./img/examples/form4/IMG_3807.webp",
                "./img/examples/form4/IMG_3826.webp",
                "./img/examples/form4/IMG_3827.webp",
                "./img/examples/form4/IMG_3829.webp",
            ],
            { ui: "inside", loop: true }
        );
    });
});
