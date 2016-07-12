$(document).ready(function(){       
   var scroll_start = 0;
   var startchange = $('#startchange');
   var offset = startchange.offset();
    

  if (startchange.length){
   $(document).scroll(function() { 
      scroll_start = $(this).scrollTop();
       
      if(scroll_start > offset.top) {
          // background and drop shadow
          $(".navbar-default").css('background-color', '#f8f9f9');
          $(".navbar-fixed-top").css('border-bottom', '1px solid #ccc');
          $(".navbar-fixed-top").css('-webkit-box-shadow', '0px 4px 4px rgba(204,204,204, 0.4)');
          $(".navbar-fixed-top").css('-moz-box-shadow', '0px 4px 4px rgba(204,204,204, 0.4)');
          $(".navbar-fixed-top").css('box-shadow', '0px 4px 4px rgba(204,204,204, 0.4)');
          // logo and headline
          $(".navbar-default").css('color', 'black');
          $(".navbar-brand").html("<img src='../img/b.logo.svg'>");
          $(".twitter-logo").html("<img src='../img/b.twitter.svg'>");
          $(".fb-logo").html("<img src='../img/b.facebook.svg'>");
          $(".nav-headline").css('color', 'black');
          $(".nav-headline").html('Responsive Template Guide');

       } else {
          // color and drop shadow
          $('.navbar-default').css('background-color', 'transparent');
          $(".navbar-fixed-top").css('border-color', 'transparent');
          $(".navbar-fixed-top").css('-webkit-box-shadow', '0px 4px 4px rgba(0,0,0,0)');
          $(".navbar-fixed-top").css('-moz-box-shadow', '0px 4px 4px rgba(0,0,0,0)');
          $(".navbar-fixed-top").css('box-shadow', '0px 4px 4px rgba(0,0,0,0)');
          // logos and headline
          $(".navbar-brand").html("<img src='../img/w.logo.svg'>");
          $(".twitter-logo").html("<img src='../img/w.twitter.svg'>");
          $(".fb-logo").html("<img src='../img/w.facebook.svg'>");
          $(".nav-headline").css('color', '#f0f0f0');
          $(".nav-headline").html('');

       }
   });
    }
});


