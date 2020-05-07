$(function () {

    // Mobile menu
    $("#menu_btn").on("click", function (event) {
        event.preventDefault();
        $("#nav").toggleClass("open");
    });

});