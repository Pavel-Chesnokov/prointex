$(document).ready(function() {
    $("#examples-1").on("click", function(event) {
        event.preventDefault();
        Fresco.show(
            [
                "./wp-content/themes/prointex/img/examples/form1/IMG_7965.webp",
                "./wp-content/themes/prointex/img/examples/form1/IMG_7966.webp",
                "./wp-content/themes/prointex/img/examples/form1/IMG_8478.webp",
                "./wp-content/themes/prointex/img/examples/form1/IMG_8479.webp",
                "./wp-content/themes/prointex/img/examples/form1/IMG_8487.webp",
            ],
            { ui: "inside", loop: true }
        );
    });
    $("#examples-2").on("click", function(event) {
        event.preventDefault();
        Fresco.show(
            [
                "./wp-content/themes/prointex/img/examples/form2/IMG_8068.webp",
                "./wp-content/themes/prointex/img/examples/form2/IMG_8065.webp",
                "./wp-content/themes/prointex/img/examples/form2/IMG_8066.webp"
            ],
            { ui: "inside", loop: true }
        );
    });
    $("#examples-3").on("click", function(event) {
        event.preventDefault();
        Fresco.show(
            [
                "./wp-content/themes/prointex/img/examples/form3/IMG_6902.webp",
                "./wp-content/themes/prointex/img/examples/form3/IMG_6854.webp",
                "./wp-content/themes/prointex/img/examples/form3/IMG_6849.webp",
                "./wp-content/themes/prointex/img/examples/form3/IMG_6894.webp",
            ],
            { ui: "inside", loop: true }
        );
    });
    $("#examples-4").on("click", function(event) {
        event.preventDefault();
        Fresco.show(
            [
                "./wp-content/themes/prointex/img/examples/form4/IMG_3822.webp",
                "./wp-content/themes/prointex/img/examples/form4/IMG_3807.webp",
                "./wp-content/themes/prointex/img/examples/form4/IMG_3826.webp",
                "./wp-content/themes/prointex/img/examples/form4/IMG_3827.webp",
                "./wp-content/themes/prointex/img/examples/form4/IMG_3829.webp",
            ],
            { ui: "inside", loop: true }
        );
    });
});
