// Animation function
function animateOpening() {
    // Add a delay before animating the carousel
    setTimeout(function() {
        // Animate the carousel
        $('#myCarousel').addClass('animated fadeIn');
    }, 500);

    // Animate the jumbotron
    $('.jumbotron').addClass('animated slideInUp');

    // Animate the "Assess with ease" section
    $('.welcome').addClass('animated zoomIn');
    $('.welcome hr').addClass('animated fadeIn');

    // Animate the "Fast", "Secure", and "Reliable" sections with a delay
    setTimeout(function() {
        $('.padding i').addClass('animated bounceIn');
        $('.padding h3').addClass('animated fadeInUp');
        $('.padding p').addClass('animated fadeIn');
    }, 1000);

    // Animate the "Connect" section with a delay
    setTimeout(function() {
        $('.social').addClass('animated fadeIn');
    }, 1500);

    // Animate the footer with a delay
    setTimeout(function() {
        $('footer').addClass('animated fadeIn');
    }, 2000);
}

$(document).ready(function() {
    // Hide the content initially
    $('#myCarousel').hide();
    $('.jumbotron').hide();
    $('.welcome').hide();
    $('.welcome hr').hide();
    $('.padding i').hide();
    $('.padding h3').hide();
    $('.padding p').hide();
    $('.social').hide();
    $('footer').hide();

    // Show the content and animate it
    $('#myCarousel').fadeIn(1000);

    // Display personalized messages on the splash screen
    var welcomeMessage = "  WELCOME TO healthify";
    var createdByMessage = "MADE with 💖 by 𝒜𝒫𝒪𝒪ℛ𝒱 ℳ𝒜𝒰ℛ𝒴𝒜";
    var welcomeLength = welcomeMessage.length;
    var createdByLength = createdByMessage.length;
    var delay = 60; // Delay between each letter appearance

    // Splash screen animation
    var i = 0;
    var j = 0;
    var splashScreen = $('#splash-screen');
    splashScreen.text(''); // Clear the splash screen

    function typeWelcomeMessage() {
        if (i < welcomeLength) {
            splashScreen.append(welcomeMessage.charAt(i));
            i++;
            setTimeout(typeWelcomeMessage, delay);
        } else {
            splashScreen.append('<br/>'); // Add line break
            setTimeout(typeCreatedByMessage, delay);
        }
    }
    
    function typeCreatedByMessage() {
        if (j < createdByLength) {
            splashScreen.append(createdByMessage.charAt(j));
            j++;
            setTimeout(typeCreatedByMessage, delay);
        } else {
            // Set a timeout to hide the splash screen and animate the content after 1 second (1000 milliseconds)
            setTimeout(function() {
                // Hide the splash screen
                splashScreen.fadeOut('slow', function() {
                    // Remove the splash screen after fading out
                    $(this).remove();
    
                    // Show and animate the content
                    $('.jumbotron').show();
                    $('.welcome').show();
                    $('.welcome hr').show();
                    $('.padding i').show();
                    $('.padding h3').show();
                    $('.padding p').show();
                    $('.social').show();
                    $('footer').show();
                    animateOpening();
                });
            }, 1000);
        }
    }

    // Start typing the welcome message
    typeWelcomeMessage();
});
