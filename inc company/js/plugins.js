/*global $, jquery, alert*/
$(document).ready(function () {
    
    "use strict";
    //nice scroll
    $("html").niceScroll();
    
    $('.carousel').carousel({
        
        interval: 4000
   
    });
    
    //show color option when click on the gear
    
    $(".gear-check").click(function () {
        
    $(".color-option").toggle();
        
    });
    
    // change heme color on click
    
    var colorLi = $(".color-option ul li");
    
    
colorLi 
         .eq(0).css("backgroundColor", "red").end()
         .eq(1).css("backgroundColor", "#f2a521").end()
         .eq(2).css("backgroundColor", "#E426D5").end()
         .eq(3).css("backgroundColor", "#57ede0").end()
         .eq(4).css("backgroundColor", "#C7A317");
     
    
    colorLi.click(function () {
        
        $("link[href*='theme']").attr("href", $(this).attr("data-value"));
        
    });
    
    //caching the scroll top element
    
    var scrollButton = $("#scroll-top");
    $(window).scroll(function () {
        
        
        if ($(this).scrollTop() >= 700) {
             scrollButton.show();
           
           }
           else {
            scrollButton.hide();
           }
        
        });
        //click on button to scroll top
        
        scrollButton.click(function () {
            
            $("html,body").animate({scrollTop : 0}, 600);
            
        });
        
    });



$(window).on('load', function () {
     "use strict";
    //loading elements
    $(".loading-overlay .sk-folding-cube").fadeOut(3000,
    function () {
        $("body").css("overflow", "auto")
        
      $(this).parent().fadeOut(3000,
        function () {
          
          $(this).remove();
      });   
    });
});
 








