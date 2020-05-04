$(document).ready(function() {

$("#portfolio_grid").mixItUp();  

$(".s_portfolio li").click(function() {
  $(".s_portfolio li").removeClass("active");
  $(this).addClass("active");
});  

  
 $('.popup-content').magnificPopup({
        type: 'inline'
    });  
$(".popup").magnificPopup({type:"image"});  
$(".popup_content").magnificPopup({type: "inline", midClick: true, showCloseBtn: true});  


  
  
$(".top_wrapper h1").animated("fadeInDown");  
$(".top_wrapper p").animated("fadeInUp");  
$(".order").animated("fadeInUp");  
$(".s_header").animated("fadeInUp");  
$(".ani2").animated("flipInY");
$(".ani1").animated("fadeInRight");  
$(".ani3").animated("fadeInLeft");
  
$(".s_item").animated("fadeIn");
  
  

$(".left .r_item").animated("fadeInLeft");  
$(".right .r_item").animated("fadeInRight");  
   
$(".top_mnu ul a").mPageScroll2id();
$(".order").mPageScroll2id();
  
  
  function heightDetect() {
  $(".main_head").css(("height"), $(window).height());
  };
  heightDetect();
    $(window).resize(function(){
        heightDetect();
    });

  $(".toggle_mnu").click(function() {
    $(".sandwich").toggleClass("active");
  });
  
  $(".top_mnu ul a").click(function() {
    $(".top_mnu").fadeOut(600);
    $(".sandwich").toggleClass("active");
  });
  
  $(".toggle_mnu").click(function() {
   if ($(".top_mnu").is(":visible")){
      $(".top_mnu").fadeOut(600);
     $(".top_mnu li a").removeClass("fadeInUp animated");
   } else {
     $(".top_mnu").fadeIn(600);
     $(".top_mnu li a").addClass("fadeInUp animated");
   };
  });


});

$(window).on('load', function () {
    var $preloader = $('#page-preloader'),
        $spinner   = $preloader.find('.spinner');
    $spinner.fadeOut();
    $preloader.delay(350).fadeOut('slow');
});
