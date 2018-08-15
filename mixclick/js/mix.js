/* window on resize for layout */

$(window).resize( function () {
 layOutFix();
 gAd();
 responsiveVideo();
 displayWidth();
});

/* bootstrap tool tip */
$(function () {
  $('[data-toggle="tooltip"]').tooltip()
});

// center the svg margin top

var svgHeight = $("#svg").height();
var windowHeight = $(window).height();

var svgTop = (windowHeight / 2) - ( svgHeight / 2 ) - 35;



$("#svg").css({
 top : svgTop
});

function displayAll(){
 
 TweenMax.to( $("#body"), 1, {opacity:1});
 TweenMax.to( $("#svg"), 1, {opacity :0, onComplete : removeSvg} );
 
 
 
}

function removeSvg(){
 
 $("#svg").css({
  display : "none"
 });
 
}


function load(){
 
 setTimeout(function(){
  TweenMax.to($("#svg"), 1, {opacity :0, onComplete : displayAll});
 }, 3000);
 
}























// home page video responsive dimention
var VidWidth  = 1100;
var vidHeight = 527;

var orAspect = VidWidth / vidHeight;

function responsiveVideo(){
 
 var videoAspectW = $("#howFrame").width();

 var videoAspect  = videoAspectW / orAspect;
 
 //alert(videoAspect);
 
 $("#howFrame").css({
  height : videoAspect
 });
 
}

responsiveVideo();








/* fix the layout for small devices */

function layOutFix(){
 
 // reset
 
 $("#usersNum").css({
  paddingTop : "" 
 });
 
 $(".staticBox").css({
  width : "",
  float : "",
  margin : ""
 });
 
 $(".footerBox:nth-of-type(1)").css({
  width : "",
  float : ""
 });

 $(".footerBox:nth-of-type(2), .footerBox:nth-of-type(3)").css({
  width : "",
  borderTop : ""
 });

 $("footerFrame").css({
  height : ""
 });

 $("#footerFrame").css({
  height : ""
 });
 
 $("#wtsup").css({
  fontSize : ""
 });
 
 
 
 if( $(window).width() < 940 ){
  
  
  $("#menuUserTab, #mainTitleContainer").css({
   width : "200px"
  });
  
  $("#secondBar").css({
   width : "calc( 100% - 500px )"
  })
  
  
 }
 
 
 // operations
 if( $(window).width() < 900 ){
  
  $("#usersNum").css({
   paddingTop : "28px" 
  });
  
 }
 
 
 if( $(window).width() < 870 ){
  
  $(".oneOffer:nth-of-type(2)").css({
   borderRight : "none"
  });
  
 }
 
 if( $(window).width() < 840 ){
  
  $("#menuUserTab").css({
   width : "100px",
   fontSize : "150%"
  });
  
  $("#menuUserTab").html('<i class="fa fa-user-circle-o" aria-hidden="true"></i>');
  
  $("#secondBar").css({
   width : "calc( 100% - 350px )"
  });
  
 }
 
 
 
 if( $(window).width() < 750 ){
  // footer style
  
  $("#footer").css({
   overflow : "auto"
  })
  
  $(".footerBox:nth-of-type(1)").css({
   width : "100%",
   float : "none"
  });
  
  $(".footerBox:nth-of-type(2), .footerBox:nth-of-type(3)").css({
   width : "50%",
   borderTop : "1px dashed rgba(255, 255, 255, 0.15)"
  });
  
  $("footerFrame").css({
   height : "310px"
  });
  
  $("#footerFrame").css({
   height : "310px"
  });
  
  
  
  $(".footerBox").css({
   width : "100%",
   paddingTop : "5px",
   minHeight : "50px",
   margin : "0px",
   overflow : "hidden"
  });
  
  $("#footerFrame").css({
   minHeight : "50px",
   height : "250px"
  });
  
  
  
 }
 
 
 
 if( $(window).width() < 690 ){
  
  
  $("#mainTitleContainer, #mainTitle, #mainTitle img").css({
   width : "150px"
  });
  
  $("#menuUserTab").css({
   width : "50px",

  });
  
  $("#mainTitle p").css({
   fontSize : "11px"
  });
  
  
  $("#secondBar").css({
   width : "calc( 100% - 250px )"
  })
  
  $("#language").css({
   textAlign : "right"
  });
  
  $(".lang").css({
   textAlign : "center"
  });
  
 }
 
 
 if( $(window).width() < 650 ){
  
  $(".staticBox").css({
   width : "calc( 100% - 40px )",
   float : "none",
   margin : "10px auto"
  });
  
 }
 
 
 
 
 
 if( $(window).width() < 580 ){
  
  $("#secondBar").css({
   width : "calc( 100% - 250px )"
  });
  
  
  $("#menuUserTab").css({
   width : "50px",
   textAlign : "right"
  })
  
  
  $(".oneLink").css({
   padding : "5px",
   fontSize : "14px"
  })
  
  
  
  
 }
 
 
 if( $(window).width() < 540 ){
  
  $("#menuUserTab").css({
   position : "absolute",
   top : "5px",
   left : "5px"
  });
  
  $("#language").css({
   position : "absolute",
   top : "14px",
   left : "55px",
   marginTop : "0px"
  });
  
  $("#mainTitleContainer").css({
   width : "100%",
   float : "none"
  });
  
  
  $("#topBar #mainTitleContainer, #secondBar, #menuUserTab , #menu").css({
   height : "50px",
   lineHeight : "50px",
  })
  
  $("#mainTitle p").css({
   display : "none" 
  });
  
  $("#secondBar").css({
   width : '100%'
  });
  
 }
 
 if( $(window).width() < 415 ){
  
  $("#menuUserTab, #language").css({
   textAlign : "left"
  });
  
  $("#menuUserTab").css({
   paddingLeft : "5px"
  })
  
 }
 
 if( $(window).width() < 400 ){
  
  $("#wtsup").css({
   fontSize : "100%"
  });
  
 }
 
 
}
layOutFix();


//aa_container

// center the advertise
function gAd(){
 
 // reset
 $("#gAd1 iframe").css({
  position : "",
  left : ""
 });
 
 
 // operations
 if( $(window).width() < 990 ){
  
  var adWidth = parseInt( $("#gAd1 iframe").width() , 10 );
 
  var adWindowWidth = parseInt( $(window).width() , 10);

  var adMargin = ( adWindowWidth - adWidth ) / 2 ;



  $("#gAd1 iframe").css({
   position : "relative",
   left : adMargin
  });
  
 }
 
}
gAd();

