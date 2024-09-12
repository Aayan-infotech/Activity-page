// script.js

// Wait for the document to be fully loaded
document.addEventListener("DOMContentLoaded", function() {
    // Get the navbar
    var navbar = document.querySelector('.navbar');
    
    // Add scroll event listener
    window.addEventListener('scroll', function() {
        // Check the scroll position
        if (window.scrollY > 50) { // If scrolled more than 50px
            navbar.classList.add('scrolled'); // Add shadow class
        } else {
            navbar.classList.remove('scrolled'); // Remove shadow class
        }
    });
});


// below for the navbar
$(document).ready(function () {
    // Collapse navbar when link is clicked
    $('.navbar-nav a').on('click', function(){
        $('.navbar-collapse').collapse('hide');
    });

    // Collapse navbar when clicking outside of it
    $(document).click(function (event) {
        var clickover = $(event.target);
        var $navbar = $(".navbar-collapse");
        var _opened = $navbar.hasClass("show");
        if (_opened === true && !clickover.hasClass("navbar-toggler")) {
            $navbar.collapse('hide');
        }
    });
});

//for the actn buttons
$(document).ready(function(){
    // Set Button 1 as the default active button
    $("#button1").addClass("active");

    // Click event handler for both buttons
    $(".btn").click(function(){
        // Remove 'active' class from all buttons
        $(".btn").removeClass("active");
        // Add 'active' class to the clicked button
        $(this).addClass("active");
    });
});

// below for floating buttons
$(document).ready(function(){
    $("#scrollTop").click(function(){
        $("html, body").animate({ scrollTop: 0 }, "slow");
    });

    $("#scrollBottom").click(function(){
        $("html, body").animate({ scrollTop: $(document).height() }, "slow");
    });
});
