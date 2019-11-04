// $(document).ready(function(){
    // var chet = 5;
    // $(".stages__scroll").on('mousewheel DOMMouseScroll', function (e) {
    //     e.preventDefault();
    //     var delta = getDelta(e);
    //     $(".stages__scroll").scrollTop(delta < 0 ? chet += 220 : chet -= 220);
    // });
    // function getDelta(e) {
    //     var evt = window.event || e;
    //     evt = evt.originalEvent ? evt.originalEvent : evt;
    //     return evt.detail ? evt.detail * (-40) : evt.wheelDelta
    // }
    var anchors = [];
    var currentAnchor = -1;
    var isAnimating  = false;
    $(function(){
        function updateAnchors() {
            anchors = [];
            $('.stages__item').each(function(i, element){
                anchors.push( $(element).offset().top );
            });
        }
        $('.stages__scroll').on('mousewheel', function(e){
            e.preventDefault();
            e.stopPropagation();
            if( isAnimating ) {
                return false;
            }
            isAnimating  = true;
            if( e.originalEvent.wheelDelta >= 0 ) {
                currentAnchor--;
                
            }else{
                currentAnchor++;
            }
            if( currentAnchor > (anchors.length - 1) 
               || currentAnchor < 0 ) {
                currentAnchor = 0;
            }
            isAnimating  = true;
            $('.stages__scroll').animate({
                scrollTop: parseInt( anchors[currentAnchor] )
            }, 500, 'swing', function(){
                isAnimating  = false;
            });
        });
        updateAnchors();   
    });
// });