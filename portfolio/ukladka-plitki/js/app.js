$(function () {
  let menu_btn = document.querySelector(".btn-nav");
  console.log(menu_btn);
  let navigation = document.querySelector("#nav");
  console.log(navigation);
  let logo = document.querySelector("#logo");
  console.log(logo);

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
        $(navigation).removeClass("active");
        $(logo).removeClass("active")

        $this.addClass("active");

        $("html, body").animate({
            scrollTop: blockOffset
        }, 700);
    });

  // Mobile menu


  $(menu_btn).on("click", function (event) {
    event.preventDefault();
    $(navigation).toggleClass("active");
    $(logo).toggleClass("active");
  });

  // Reviews Slider
  // https://kenwheeler.github.io/slick/
  let slider = $("#slider");

  slider.slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    arrows: true,
    dots: true
  });


});