



//smooth scroll to div
var flag = 0;
	$('.navbar-default .navbar-nav  li  a').click(function () {
		
		$('html, body').animate({
			
			scrollTop: $('#' + $(this).data('value')).offset().top
			
		}, 4000);
		
		console.log();
		
		
	});

  //nice scroll
    $("html").niceScroll();
    
    $('.carousel').carousel({
        
        interval: 1000
   
    });

   $("body").niceScroll({
       cursorcolor:'#b28643'
       
   });
    
   /*change input text feild color and size*/
   function changeMe() {
        document.getElementById("my-input").style.color = "#fff";
        }
    






/*slider*/
function moveToSelected(element) {

  if (element == "next") {
    var selected = $(".selected").next();
  } else if (element == "prev") {
    var selected = $(".selected").prev();
  } else {
    var selected = element;
  }

  var next = $(selected).next();
  var prev = $(selected).prev();
  var prevSecond = $(prev).prev();
  var nextSecond = $(next).next();

  $(selected).removeClass().addClass("selected");

  $(prev).removeClass().addClass("prev");
  $(next).removeClass().addClass("next");

  $(nextSecond).removeClass().addClass("nextRightSecond");
  $(prevSecond).removeClass().addClass("prevLeftSecond");

  $(nextSecond).nextAll().removeClass().addClass('hideRight');
  $(prevSecond).prevAll().removeClass().addClass('hideLeft');

}
$(document).ready(function () {
    
    zoo();
    $(".hi").click(function () {
        $(".hi").removeClass("active");
        $(".hi:nth-child(" + flag + 1 + ")").addClass("active");
        flag = $('.hi').index(this);
        if (flag == 0) {
            //$("#first").css("z-index", "999");
            $("#second").css("z-index", "9");
            $("#third").css("z-index", "9");
            $("#first").css("transform", "translateX(0px) scale(1.5)");
            $("#second").css("transform", "translateX(-150%) scale(1)");
            $("#third").css("transform", "translateX(150%)");
            flag = 1;
        }
        else if (flag == 1) {
            //$("#third").css("z-index", "999");
            $("#second").css("z-index", "9");
            $("#first").css("z-index", "9");
            $("#third").css("transform", "translateX(0px) scale(1.5)");
            $("#first").css("transform", "translateX(-150%) scale(1)");
            $("#second").css("transform", "translateX(150%)");
            flag = 2;
            console.log(flag);
        }
        else if (flag == 2) {
            //$("#second").css("z-index", "999");
            $("#third").css("z-index", "9");
            $("#side1").css("z-index", "9");
            $("#second").css("transform", "translateX(0px) scale(1.5)");
            $("#third").css("transform", "translateX(-150%) scale(1)");
            $("#first").css("transform", "translateX(150%)");
            flag = 0;
        }
    });


});
// Eventos teclado
function zoo() {
    setInterval(foo, 5000);

}
function foo() {
    $(".hi").removeClass("active");
    console.log(flag + 1);
    var k = flag + 1;
    $(".hi:nth-child("+k+")").addClass("active");
    if(flag == 0) {
        //$("#first").css("z-index", "999");
        $("#second").css("z-index", "9");
        $("#third").css("z-index", "9");
        $("#first").css("transform", "translateX(0px) scale(1.5)");
        $("#second").css("transform", "translateX(-150%) scale(1)");
        $("#third").css("transform", "translateX(150%)");
        flag = 1;


    }
        else if (flag == 1) {
        //$("#third").css("z-index", "999");
        $("#second").css("z-index", "9");
        $("#first").css("z-index", "9");
        $("#third").css("transform", "translateX(0px) scale(1.5)");
        $("#first").css("transform", "translateX(-150%) scale(1)");
        $("#second").css("transform", "translateX(150%)");
        flag = 2;

    }
    else if (flag == 2) {
        //$("#second").css("z-index", "999");
        $("#third").css("z-index", "9");
        $("#side1").css("z-index", "9");
        $("#second").css("transform", "translateX(0px) scale(1.5)");
        $("#third").css("transform", "translateX(-150%) scale(1)");
        $("#first").css("transform", "translateX(150%)");
        flag = 0;

    }
   // console.log(flag + 1 );
    
}



$(document).keydown(function(e) {
    switch(e.which) {
        case 37: // left
        moveToSelected('prev');
        break;

        case 39: // right
        moveToSelected('next');
        break;

        default: return;
    }
    e.preventDefault();
});

$('#carousel div').click(function() {
  moveToSelected($(this));
});

$('#prev').click(function() {
  moveToSelected('prev');
});

$('#next').click(function() {
  moveToSelected('next');
});
