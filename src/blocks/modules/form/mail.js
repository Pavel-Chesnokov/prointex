// Отправка данных на сервер
"use strict";
$(".form").trigger("reset");
$(function() {
    $(".form").on("submit", function(e) {
        e.preventDefault();
        $.ajax({
            url: "http://prointex/wp-content/themes/prointex/send.php",
            type: "POST",
            contentType: false,
            processData: false,
            data: new FormData(this),
            success: function(msg) {
                if (msg == "ok") {
                    $(".form").trigger("reset"); // очистка формы
                    $(".close").parents(".popup-fade");
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
