$(function () {

    // Reviews Slider
    // https://kenwheeler.github.io/slick/
    let slider = $("#slider");

    slider.slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        arrows: true,
        dots:true
      });

});