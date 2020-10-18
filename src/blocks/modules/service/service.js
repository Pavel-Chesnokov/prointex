$(document).ready(function () {
    $('#service__front-button1').on("click", function () {
        // $(this).text('Назад');
        if ($("#service__form-text1").hasClass('service__form-text-visible') == true) {
            $(this).removeClass('button_active');
            $("#service__form-text1").removeClass("service__form-text-visible"); 
            $(this).text('Подробнее');       
        } else { 
            $(this).addClass('button_active');
            $(this).text('Назад');
            $('#service__form-text1').addClass('service__form-text-visible')
            $('#service__form-wrapper1').addClass('service__form-wrapper-back')
    }});
    $('#service__front-button2').on("click", function () {
        // $(this).text('Назад');
        if ($("#service__form-text2").hasClass('service__form-text-visible') == true) {
            $(this).removeClass('button_active');
            $("#service__form-text2").removeClass("service__form-text-visible"); 
            $(this).text('Подробнее');       
        } else { 
            $(this).addClass('button_active');
            $(this).text('Назад');
            $('#service__form-text2').addClass('service__form-text-visible')
            $('#service__form-wrapper2').addClass('service__form-wrapper-back')
    }});
    $('#service__front-button3').on("click", function () {
        // $(this).text('Назад');
        if ($("#service__form-text3").hasClass('service__form-text-visible') == true) {
            $(this).removeClass('button_active');
            $("#service__form-text3").removeClass("service__form-text-visible"); 
            $(this).text('Подробнее');       
        } else { 
            $(this).addClass('button_active');
            $(this).text('Назад');
            $('#service__form-text3').addClass('service__form-text-visible')
            $('#service__form-wrapper3').addClass('service__form-wrapper-back')
    }});
    $('#service__front-button4').on("click", function () {
        // $(this).text('Назад');
        if ($("#service__form-text4").hasClass('service__form-text-visible') == true) {
            $(this).removeClass('button_active');
            $("#service__form-text4").removeClass("service__form-text-visible"); 
            $(this).text('Подробнее');       
        } else { 
            $(this).addClass('button_active');
            $(this).text('Назад');
            $('#service__form-text4').addClass('service__form-text-visible')
            $('#service__form-wrapper4').addClass('service__form-wrapper-back')
    }});
    $('#service__front-button5').on("click", function () {
        // $(this).text('Назад');
        if ($("#service__form-text5").hasClass('service__form-text-visible') == true) {
            $(this).removeClass('button_active');
            $("#service__form-text5").removeClass("service__form-text-visible"); 
            $(this).text('Подробнее');       
        } else { 
            $(this).addClass('button_active');
            $(this).text('Назад');
            $('#service__form-text5').addClass('service__form-text-visible')
            $('#service__form-wrapper5').addClass('service__form-wrapper-back')
    }});
    $('#service__front-button6').on("click", function () {
        // $(this).text('Назад');
        if ($("#service__form-text6").hasClass('service__form-text-visible') == true) {
            $(this).removeClass('button_active');
            $("#service__form-text6").removeClass("service__form-text-visible"); 
            $(this).text('Подробнее');       
        } else { 
            $(this).addClass('button_active');
            $(this).text('Назад');
            $('#service__form-text6').addClass('service__form-text-visible')
            $('#service__form-wrapper6').addClass('service__form-wrapper-back')
    }});
});
