$(function(){
  $(document).mouseup(function (e){ // событие клика по веб-документу
		var div = $(".menu"); // тут указываем ID элемента
		if (!div.is(e.target) // если клик был не по нашему блоку
		    && div.has(e.target).length === 0) { // и не по его дочерним элементам
      $('.menu__nav').removeClass('nav_is_visible');
      $('#menu__button').removeClass('menu__close');
		}
	});
  /*--------- show and hide the menu  ---*/
  $('#menu__button').on("click", function(){
    if($('.menu__nav').hasClass('nav_is_visible') == true){
     $('.menu__nav').removeClass('nav_is_visible');
     $('#menu__button').removeClass('menu__close');
        }
    else{
     $('.menu__nav').addClass('nav_is_visible');
     $('#menu__button').addClass('menu__close');
       }
   });

});