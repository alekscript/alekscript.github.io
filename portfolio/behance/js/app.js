$(function () {
    /* Filter
    ================= */
    let filter = $("[data-filter]");

    filter.on("click", function (event) {
        event.preventDefault();

        let cat = $(this).data("filter");
        if (cat == 'all') {
            $('[data-cat]').removeClass("hide");
        } else {
            $("[data-cat]").each(function () {

                let itemCat = $(this).data("cat");

                if (itemCat != cat) {
                    $(this).addClass('hide');
                } else {
                    $(this).removeClass('hide');
                }


            });
        }
    });

    /* Modal
    ================= */
    let modalWindow = $("[data-modal]");
    let modalClose = $("[data-close]");

    modalWindow.on("click", function (event) {
        event.preventDefault();

        let $this = $(this);
        let modalId = $this.data('modal');

        $(modalId).addClass('show');
        $("body").addClass('no-scroll');

        setTimeout(function () {
            $(modalId).find(".modal__dialog").css({
                transform: "rotateX(0)"
            });
        }, 200);
       
    });

    modalClose.on("click", function (event) {
        event.preventDefault();

        let $this = $(this);
        let modalParent = $this.parents('.modal');

        modalParent.find(".modal__dialog").css({
            transform: "rotateX(90deg)"
        });
        setTimeout(function () {
            modalParent.removeClass('show');
            $("body").removeClass('no-scroll');
        }, 200);
    });

    $(".modal").on("click", function (event) {
        let $this = $(this);
        $this.find(".modal__dialog").css({
            transform: "rotateX(90deg)"
        });

        setTimeout(function () {
            $this.removeClass('show');
            $("body").removeClass('no-scroll');
        }, 200);
    });

    $('.modal__dialog').on("click", function (event) {
        event.stopPropagation();
    });

    /* Modal https://kenwheeler.github.io/slick/
    ================= */
    $('#work-slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll:1,
        fade: true,
        arrows: false,
        dots: true
    });

    $(".slickPrev").on("click",function(event){
        event.preventDefault();
        let currentSlider = $(this).parents(".modal").find(
            '[data-slider]'
        );
        currentSlider.slick("slickPrev")
    });
    $(".slickNext").on("click",function(event){
        event.preventDefault();
        let currentSlider = $(this).parents(".modal").find(
            '[data-slider]'
        );
        $('#work-slider').slick("slickNext")
    });


    /* Nav
    ================= */
    const navToggle = $( "#nav-toggle" );
    const nav = $("#main-nav");

    $(navToggle).on("click", function(event){
        event.preventDefault();

        nav.toggleClass("show");
    });
});