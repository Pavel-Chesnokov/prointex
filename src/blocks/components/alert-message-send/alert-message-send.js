$(document).ready(function($) {
    $(".close").click(function() {
        $(this).parents(".popup-fade");
        $(".popup-fade-secces").removeClass("popup-fade-show");
    });
    // Закрытие по клавише Esc.
    $(document).keydown(function(e) {
        if (e.keyCode === 27) {
            e.stopPropagation();
            $(".popup-fade-secces").removeClass("popup-fade-show");
        }
    });
    // Клик по фону, но не по окну.
    $(".popup-fade-secces").click(function(e) {
        if ($(e.target).closest(".modalDialog").length == 0) {
            $(".popup-fade-secces").removeClass("popup-fade-show");
        }
    });
});
