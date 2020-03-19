$(document).ready(function() {
    $("#examples-1").on("click", function(event) {
        event.preventDefault();
        Fresco.show(
            [
                "./wp-content/themes/prointex/img/examples/form1/IMG_7965.jpg",
                "./wp-content/themes/prointex/img/examples/form1/IMG_7966.jpg",
                "./wp-content/themes/prointex/img/examples/form1/IMG_8478.jpg",
                "./wp-content/themes/prointex/img/examples/form1/IMG_8479.jpg",
                "./wp-content/themes/prointex/img/examples/form1/IMG_8487.jpg", 
            ],
            { ui: "inside", loop: true},
        );
    });
    $("#examples-2").on("click", function(event) {
        event.preventDefault();
        Fresco.show(
            [
                "./wp-content/themes/prointex/img/examples/form2/IMG_8068.jpg",
                "./wp-content/themes/prointex/img/examples/form2/IMG_8065.jpg",
                "./wp-content/themes/prointex/img/examples/form2/IMG_8066.jpg"
            ],
            { ui: "inside", loop: true }
        );
    });
    $("#examples-3").on("click", function(event) {
        event.preventDefault();
        Fresco.show(
            [
                "./wp-content/themes/prointex/img/examples/form3/IMG_6902.jpg",
                "./wp-content/themes/prointex/img/examples/form3/IMG_6854.jpg",
                "./wp-content/themes/prointex/img/examples/form3/IMG_6849.jpg",
                "./wp-content/themes/prointex/img/examples/form3/IMG_6894.jpg",
            ],
            { ui: "inside", loop: true }
        );
    });
    $("#examples-4").on("click", function(event) {
        event.preventDefault();
        Fresco.show(
            [
                "./wp-content/themes/prointex/img/examples/form4/IMG_3822.jpg",
                "./wp-content/themes/prointex/img/examples/form4/IMG_3807.jpg",
                "./wp-content/themes/prointex/img/examples/form4/IMG_3826.jpg",
                "./wp-content/themes/prointex/img/examples/form4/IMG_3827.jpg",
                "./wp-content/themes/prointex/img/examples/form4/IMG_3829.jpg",
            ],
            { ui: "inside", loop: true }
        );
    });
});
