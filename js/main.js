$(function () {
    var header = $("header");
    var introH = $("#intro").innerHeight();
    var scrollOffset = $(window).scrollTop();

       // Fixed header for mobile menu
       checkScroll(scrollOffset);
       $(window).on("scroll", function () {
           scrollOffset = $(this).scrollTop();
           checkScroll(scrollOffset);
           console.log(introH);
       });
   
       function checkScroll(scrollOffset) {
           if (scrollOffset >= introH) {
               header.addClass("fixed");
           } else {
               header.removeClass("fixed");
           }
       }
       
           // Smooth scroll
    $("[data-scroll]").on("click", function (event) {
        event.preventDefault();

        var $this = $(this);
        var blockId = $this.data("scroll");
        var blockOffset = $(blockId).offset().top;

        $("#nav a").removeClass("active");
        $("#nav").removeClass("open");

        $this.addClass("active");

        $("html, body").animate({
            scrollTop: blockOffset
        }, 500);
    });


    // Mobile menu
    $("#menu_btn").on("click", function (event) {
        event.preventDefault();
        $("#nav").toggleClass("open");
       
    });

    // Проверка на ввод цифр
    $(".phone").keypress(function(event){
        event = event || window.event;
        if (event.charCode && event.charCode!=0 && event.charCode!=46 && (event.charCode < 48 || event.charCode > 57) )
          return false;
      });

});