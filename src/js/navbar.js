$(document).ready(function() {
  // build cache for transparency active/passive
  var transparency = 0;

  // track scroll position
  var scroll_start = 0;

  // track trigger positions
  var initiate = $('.nav_dark');
  var navDark = $('.nav_dark').offset();
  var navLight = $('.nav_light').offset();

  // change transparency state
  if(initiate.length){ 
    $(document).scroll(function () {
      scroll_start = $(this).scrollTop();

      if (scroll_start > navDark.top){
        $(".navbar-default").css('background-color', 'black');
      }

      if (scroll_start> navLight.top){
        $(".navbar-default").css('background-color', 'yellow');
      }


    });
  }
});
