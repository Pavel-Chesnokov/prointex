$(document).ready(function($) {
    $(".button-send__modal").click(function() {
        $(".popup-fade").addClass("popup-fade-show");
    });
    // Клик по ссылке "Закрыть".
    $(".close").click(function() {
        $(this).parents(".popup-fade");
        $(".popup-fade").removeClass("popup-fade-show");
    });
    // Закрытие по клавише Esc.
    $(document).keydown(function(e) {
        if (e.keyCode === 27) {
            e.stopPropagation();
            $(".popup-fade").removeClass("popup-fade-show");
        }
    });
    // Клик по фону, но не по окну.
    $(".popup-fade").click(function(e) {
        if ($(e.target).closest(".modalDialog").length == 0) {
            $(".popup-fade").removeClass("popup-fade-show");
        }
    });
});
