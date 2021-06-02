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
  
  $("nav ul li a[href^='#']").on('click', function(e) {

    // prevent default anchor click behavior
    e.preventDefault();
 
    // store hash
    var hash = this.hash;
 
    // animate
    $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 700, function(){
 
        // when done, add hash to url
        // (default click behaviour)
        window.location.hash = hash;
      });
 
 });
  
