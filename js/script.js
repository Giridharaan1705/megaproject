$(function () {
    new WOW().init();
});

// home animation on page load
$(window).on('load', function () {

    $("#home-heading h").addClass("animated fadeInDown");
    $("#home-heading-2").addClass("animated fadeInLeft");
    $("#home-text").addClass("animated zoomIn");
    $("#home-btn").addClass("animated zoomIn");
    $("#arrow-down i").addClass("animated fadeInDown infinite");

});
function showHideNav() {

    if ($(window).scrollTop() > 50) {

        // Show back to top button
        $("#back-to-top").fadeIn();

    } else {


        // Hide back to top button
        $("#back-to-top").fadeOut();
    }
}

$(window).on('load', function () { // makes sure that whole site is loaded
    $('#status').fadeOut();
    $('#preloader').delay(350).fadeOut('slow');
});
