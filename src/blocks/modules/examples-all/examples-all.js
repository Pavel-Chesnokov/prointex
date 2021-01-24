$(document).ready(function (){
    $('#examples-1').hover(
        function (){
            $('.examples__info-1').show("blind", {"direction": "down"}, 300);
        },
        function() {
            $('.examples__info-1').hide("fade", 300);
        }
    );
    $('#examples-2').hover(
        function (){
            $('.examples__info-2').show("blind", {"direction": "down"}, 300);
        },
        function() {
            $('.examples__info-2').hide("fade", 300);
        }
    );
    $('#examples-3').hover(
        function (){
            $('.examples__info-3').show("blind", {"direction": "down"}, 300);
        },
        function() {
            $('.examples__info-3').hide("fade", 300);
        }
    );
    $('#examples-4').hover(
        function (){
            $('.examples__info-4').show("blind", {"direction": "down"}, 300);
        },
        function() {
            $('.examples__info-4').hide("fade", 300);
        }
    );
    $('.container-1200px').hover(
        function(){
            $('.examples__info-1').hide("fade", 300);
            $('.examples__info-2').hide("fade", 300);
            $('.examples__info-3').hide("fade", 300);
            $('.examples__info-4').hide("fade", 300);
        }
    )
});