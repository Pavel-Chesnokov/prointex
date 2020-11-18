$(document).ready(function(){

var bingo = 0;

function isVisible(elem) {
  var coords = elem.getBoundingClientRect();
  var windowHeight = document.documentElement.clientHeight;
  var topVisible = coords.top > 0 && coords.top < windowHeight;
  var bottomVisible = coords.bottom < windowHeight && coords.bottom > 0;
  return topVisible || bottomVisible;
}

function showVisible() {
  var block = document.getElementById("contacts");
    if (isVisible(block)) {
        if(bingo == 0){
            //yaCounter64562452.reachGoal('scroll_to_form');
            ym(64562452,'reachGoal','scroll_to_form');
            bingo = 1;
        }
    }
  }

if(bingo == 0){
    window.onscroll = showVisible;
    showVisible();
}
})