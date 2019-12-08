$(document).ready(function () { //بدايه كود الجي كويري وهو الحاوي واي كود يكتب بداخله
    
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
