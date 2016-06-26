$(document).ready(function(){       
   var scroll_start = 0;
   var startchange = $('#startchange');
   var offset = startchange.offset();
    if (startchange.length){
   $(document).scroll(function() { 
      scroll_start = $(this).scrollTop();
       if(scroll_start > offset.top) {
          $(".navbar-default").css('background-color', '#f8f9f9');
          $(".navbar-fixed-top").css('border-bottom', '10px solid #ccc;');
          $(".navbar-default").css('color', 'black');
          $(".navbar-brand").html("<img src='../img/b.logo.svg'>");
          $(".twitter-logo").html("<img src='../img/b.twitter.svg'>");
          $(".fb-logo").html("<img src='../img/b.facebook.svg'>");
          $(".nav-headline").css('color', 'black');
          $(".nav-headline").html('Responsive Template');





       } else {
          $('.navbar-default').css('background-color', 'transparent');
          $(".navbar-brand").html("<img src='../img/w.logo.svg'>");
          $(".twitter-logo").html("<img src='../img/w.twitter.svg'>");
          $(".fb-logo").html("<img src='../img/w.facebook.svg'>");
          $(".nav-headline").css('color', '#f0f0f0');
          $(".nav-headline").html(' ');

       }
   });
    }
});