//===========sec1=================
// click on icon to view sidebar
$("#icon").click(function(){
 let sideWidth = $("#links").outerWidth()
 if($("#sidebar").css("left")=="0px")
 {
    $("#sidebar").animate({"left":-sideWidth},1500)
 }else{
    $("#sidebar").animate({"left":"0px"},1500)
 }
     
})

//close icon
$("#close").click(function(){
    let sideWidth = $("#links").outerWidth()
    $("#sidebar").animate({"left":-sideWidth},1500) 
   
})
//click on links to its section
$(".link").click(function(){
   let currentLink = $(this).attr("href");
   let secOffset = $(currentLink).offset().top;
   $("body").animate({scrollTop:secOffset},1500)
})
//hide open icon when scroll >sec2 .top
let occordOffset = $("#occord").offset().top;
$(window).scroll(function(){
    let topOffset = $(window).scrollTop();
    if(topOffset > occordOffset)
    {
        $("#icon").css("display","none")
    }
    else{
        $("#icon").css("display","block")
    }
})

// ============sec2=================
$("h3").click(function(){
    if(!$(this).next().is(":visible")){
        $(".occP").hide();
        $(this).next().slideDown();
    } else {
        $(this).next().slideUp();
    }
})
// ============sec3=================
window.onload = function() {
    // Month Day, Year Hour:Minute:Second, id-of-element-container
    countUpFromTime("Dec 17, 2033 12:00:00", 'countup1'); // 
  };
  function countUpFromTime(countFrom, id) {
    countFrom = new Date(countFrom).getTime();
    var now = new Date(),
        countFrom = new Date(countFrom),
        timeDifference = (now - countFrom);
      
    var secondsInADay = 60 * 60 * 1000 * 24,
        secondsInAHour = 60 * 60 * 1000;
      
    days = Math.floor(timeDifference / (secondsInADay) * 1);
    hours = Math.floor((timeDifference % (secondsInADay)) / (secondsInAHour) * 1);
    mins = Math.floor(((timeDifference % (secondsInADay)) % (secondsInAHour)) / (60 * 1000) * 1);
    secs = Math.floor((((timeDifference % (secondsInADay)) % (secondsInAHour)) % (60 * 1000)) / 1000 * 1);
  
    var idEl = document.getElementById(id);
    idEl.getElementsByClassName('days')[0].innerHTML = days;
    idEl.getElementsByClassName('hours')[0].innerHTML = hours;
    idEl.getElementsByClassName('minutes')[0].innerHTML = mins;
    idEl.getElementsByClassName('seconds')[0].innerHTML = secs;
  
    clearTimeout(countUpFromTime.interval);
    countUpFromTime.interval = setTimeout(function(){ countUpFromTime(countFrom, id); }, 1000);
  }


// ============sec4=================
//textarea
var maxLength = 100;
$("textarea").keyup(function(){//lma akteb
    var length = $(this).val().length;//3dd  el char elly ktbtha fe el textarea

   var remainLength = maxLength - length;
   $("#chars").text(remainLength)//3mlt set l 3dd el chars
})

  













