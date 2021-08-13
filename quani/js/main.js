//fixed icons(whatsapp & call)
$(document).ready(function () 
{


let aboutOffsetTop  = $("#about").offset().top;


$(window).scroll(function () {

  let wScroll =  $(window).scrollTop();

  if(wScroll > aboutOffsetTop - 50)
  {
   
    $("#btnUp").fadeIn(500);
    $("#btnCall").fadeIn(500);
  }
  else
  {
   
    $("#btnUp").fadeOut(500);
    $("#btnCall").fadeOut(500);
  }
 


})
 // loading screen
$("#loading").fadeOut(1000,function(){
       $("body").css("overflow","auto")

})
})



 
 
