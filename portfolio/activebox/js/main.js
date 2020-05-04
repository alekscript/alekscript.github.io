$(function(){
// Fixed header scroll
    let header = $("#header");
    let intro = $("#intro");
    let introHeight=intro.innerHeight();;
    let scrollPos = $(window).scrollTop();
    let nav = $("#nav");
    
    checkScroll(scrollPos, introHeight);

    $(window).on("scroll resize", function(){
        introHeight = intro.innerHeight();
        scrollPos = $(this).scrollTop();

        checkScroll(scrollPos, introHeight); 
    });
    function checkScroll(scrollPos, innerHeight) {
        if( scrollPos > introHeight ) {
            header.addClass("fixed");
        } else {
            header.removeClass("fixed");
        }
    }

//  Smooth scroll

    $("[data-scroll]").on("click", function(event){
        event.preventDefault();
        let elementId = $(this).data('scroll');
        let elementPos = $(elementId).offset().top;
        nav.removeClass("show");
        $("html, body").animate({
            scrollTop: elementPos - 70
        }, 500);
        console.log(elementPos);
    });
    

    // NAV TOGGLE
    $("#nav-toggle").on("click", function(event){
        event.preventDefault();

        nav.toggleClass("show");
    });

    // Reviews Slider
    // https://kenwheeler.github.io/slick/
    let slider = $("#reviews-slider");

    slider.slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        arrows: false,
        dots:true
      });

});