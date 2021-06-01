$(document).ready(function(){
    $(".backToTop").click(function(){
      $("html, body").animate({
        scrollTop: 0
      }, 1000);
      return false;
    });
  })
  
  $(window).scroll(function() {
    if($(this).scrollTop() > 900){
      $(".backToTop").show();
    }
    else{
      $(".backToTop").hide();
    }
  });
