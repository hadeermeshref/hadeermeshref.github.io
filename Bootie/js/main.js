//click on links to its section
$(".link").click(function(){
    let currentLink = $(this).attr("href");
    let secOffset = $(currentLink).offset().top;
    $("body").animate({scrollTop:secOffset},1500)
 })


