// Отправка данных на сервер
$(".form").trigger("reset");
$(function() {
    "use strict";
    $(".form").on("submit", function(e) {
        e.preventDefault();
        $.ajax({
            url: "php/send2.php",
            type: "POST",
            contentType: false,
            processData: false,
            data: new FormData(this),
            success: function(msg) {
                if (msg == "ok") {
                    $(".form").trigger("reset"); // очистка формы
                    $('.close').parents(".popup-fade");
                    $(".popup-fade").removeClass("popup-fade-show");
                    $(".popup-fade-secces").addClass("popup-fade-show");
                    // alert("Сообщение отправлено");
                } else {
                    alert("Ошибка");
                }
            }
        });
    });
});
