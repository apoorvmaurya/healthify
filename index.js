// Animation function
function animateOpening() {
    // Animate the carousel
    $('#myCarousel').addClass('animated fadeIn');

    // Animate the jumbotron
    $('.jumbotron').addClass('animated slideInUp');

    // Animate the "Assess with ease" section
    $('.welcome').addClass('animated zoomIn');
    $('.welcome hr').addClass('animated fadeIn');

    // Animate the "Fast", "Secure", and "Reliable" sections
    $('.padding i').addClass('animated bounceIn');
    $('.padding h3').addClass('animated fadeInUp');
    $('.padding p').addClass('animated fadeIn');

    // Animate the "Connect" section
    $('.social').addClass('animated fadeIn');

    // Animate the footer
    $('footer').addClass('animated fadeIn');
}
