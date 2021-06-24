// skitter slider plugin
$(function() {
    $('.skitter-large').skitter({
       
    });
  });


   // loading screen
   $(document).ready(function () {
    $("#loading").fadeOut(1000,function(){
      $("body").css("overflow","auto")

    })
  })

   //animate each nav link to its sec

$(".nav-link").click(function () {
  let selectorSection = $(this).attr("href"); //get #home #about
  console.log(selectorSection);
  let offsetSection = $(selectorSection).offset().top;

  $("body,html").animate(
    {
      scrollTop: offsetSection,
    },
    1000
  );
});
