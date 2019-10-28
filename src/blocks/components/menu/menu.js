$(function(){
  /*--------- show and hide the menu  ---*/
  $('.menu__button').on("click", function(){
    if($('.menu').hasClass('nav_is_visible') == true){
     $('.menu').removeClass('nav_is_visible');
     $('.menu__button').removeClass('close');
        }
    else{
     $('.menu').addClass('nav_is_visible');
     $('.menu__button').addClass('close');
       }
   });
});