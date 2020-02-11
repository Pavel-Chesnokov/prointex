$(document).ready(function($) {
    $(".button-send__modal").click(function() {
        $(".popup-fade-button-send").addClass("popup-fade-show");
    });
    // Клик по ссылке "Закрыть".
    $(".close").click(function() {
        $(this).parents(".popup-fade-button-send");
        $(".popup-fade-button-send").removeClass("popup-fade-show");
    });
    // Закрытие по клавише Esc.
    $(document).keydown(function(e) {
        if (e.keyCode === 27) {
            e.stopPropagation();
            $(".popup-fade-button-send").removeClass("popup-fade-show");
        }
    });
    // Клик по фону, но не по окну.
    $(".popup-fade-button-send").click(function(e) {
        if ($(e.target).closest(".modalDialog").length == 0) {
            $(".popup-fade-button-send").removeClass("popup-fade-show");
        }
    });
});
