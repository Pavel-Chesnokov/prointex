$('#form').submit(function(event) {
    event.preventDefault(); // Prevent direct form submission
    $('#alert').text('Processing...').fadeIn(0); // Display "Processing" to let the user know that the form is being submitted
    grecaptcha.ready(function () {
        grecaptcha.execute('6Leoa68ZAAAAAFhrhHXVIqwkRq9HMQ_acuTY9ZbG', { action: 'contact' }).then(function (token) {
            let recaptchaResponse = document.getElementById('recaptchaResponse');
            recaptchaResponse.value = token;
            let form =  document.getElementById("form");
            let formData = new FormData(form);
            $.ajax({
                url: 'https://prointechnology.ru/wp-content/themes/prointex/mailsend.php',
                type: 'post',
                data: formData,
                dataType: 'json',
                processData: false,
                contentType: false,
                success: function( _response ){
                    // The Ajax request is a success. _response is a JSON object
                    let error = _response.error;
                    let success = _response.success;
                    if(error != "") {
                        // In case of error, display it to user
                        $('#alert').html(error);
                    }
                    else {
                        $(".form").trigger("reset"); // очистка формы
                        $(".close").parents(".popup-fade");
                        $(".popup-fade").removeClass("popup-fade-show");
                        $(".popup-fade-secces").addClass("popup-fade-show");
                        // In case of success, display it to user and remove the submit button
                        $('#alert').html(success);
                        // $('#submit-button').remove();
                    }
                },
                error: function(jqXhr, json, errorThrown){
                    // In case of Ajax error too, display the result
                    let error = jqXhr.responseText;
                    $('#alert').html(error);
                }
            });
            });
        });
});


