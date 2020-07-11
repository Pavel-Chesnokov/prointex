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


$('#form_modal').submit(function(event) {
    event.preventDefault(); // Prevent direct form submission
    $('#alert_modal').text('Processing...').fadeIn(0); // Display "Processing" to let the user know that the form is being submitted
    grecaptcha.ready(function () {
        grecaptcha.execute('6Leoa68ZAAAAAFhrhHXVIqwkRq9HMQ_acuTY9ZbG', { action: 'contact' }).then(function (token) {
            var recaptchaResponse = document.getElementById('recaptchaResponse_modal');
            recaptchaResponse.value = token;
            $.ajax({
                url: 'https://prointechnology.ru/wp-content/themes/prointex/mailsend.php',
                type: 'post',
                data: $('#form_modal').serialize(),
                dataType: 'json',
                success: function( _response ){
                    // The Ajax request is a success. _response is a JSON object
                    var error = _response.error;
                    var success = _response.success;
                    if(error != "") {
                        // In case of error, display it to user
                        $('#alert_modal').html(error);
                    }
                    else {
                        $(".form").trigger("reset"); // очистка формы
                        $(".close").parents(".popup-fade");
                        $(".popup-fade").removeClass("popup-fade-show");
                        $(".popup-fade-secces").addClass("popup-fade-show");
                        // In case of success, display it to user and remove the submit button
                        $('#alert_modal').html(success);
                        // $('#submit-button').remove();
                    }
                },
                error: function(jqXhr, json, errorThrown){
                    // In case of Ajax error too, display the result
                    var error = jqXhr.responseText;
                    $('#alert_modal').html(error);
                }
            });
        });
    });
});