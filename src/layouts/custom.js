// $(function() {
//     var header = $(".header");

//     $(window).scroll(function() {
//         var scroll = $(window).scrollTop();
//         if (scroll >= 30) {
//             header.addClass("scrolled");
//         } else {
//             header.removeClass("scrolled");
//         }
//     });

// });
jQuery(document).ready(function($) {
    $(document).on("scroll", onScroll);

    //smoothscroll
    $('a[href^="#"]').on('click', function(e) {
        e.preventDefault();
        $(document).off("scroll");

        $('a').each(function() {
            $(this).removeClass('active');
        })
        $(this).addClass('active');

        var target = this.hash,
            menu = target;
        $target = $(target);
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top + 2
        }, 500, 'swing', function() {
            window.location.hash = target;
            //$(document).on("scroll", onScroll);
        });
    });
});

function onScroll(event) {
    var scrollPos = jQuery(document).scrollTop();
    jQuery('.navbar-nav a').each(function() {
        var currLink = jQuery(this);
        var refElement = jQuery(currLink.attr("href"));
        /*if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
            jQuery('.navbar-nav ul li a').removeClass("active");
            currLink.addClass("active");
        } else {
            currLink.removeClass("active");
        }*/
    });
}


// Set the date we're counting down to
var countDownDate = new Date(pre_sale_end).getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get todays date and time
  var now = new Date().getTime();

  // Find the distance between now an the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  //jQuery(".time-block").html(days + "d " + hours + "h " + minutes + "m " + seconds + "s ");
  jQuery(".time-block").html('<div class="days"><span>'+ days +'</span><span>Days</span></div><div class="hours"><span>'+ hours +'</span><span>hours</span></div><div class="minutes"><span>'+ minutes +'</span><span>minutes</span></div><div class="seconds"><span>'+ seconds +'</span><span>seconds</span></div>');

  // If the count down is finished, write some text 
  if (distance < 0) {
    clearInterval(x);
  }
}, 1000);

// Hide Header on on scroll down
var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = $('header').outerHeight();

$(window).scroll(function(event) {
    didScroll = true;
});

setInterval(function() {
    if (didScroll) {
        hasScrolled();
        didScroll = false;
    }
}, 250);

function hasScrolled() {
    var st = $(this).scrollTop();

    // Make sure they scroll more than delta
    if (Math.abs(lastScrollTop - st) <= delta)
        return;

    // If they scrolled down and are past the navbar, add class .nav-up.
    // This is necessary so you never see what is "behind" the navbar.
    if (st > lastScrollTop && st > navbarHeight) {
        // Scroll Down
        $('header').removeClass('nav-down').addClass('nav-up');
    } else {
        // Scroll Up
        if (st + $(window).height() < $(document).height()) {
            $('header').removeClass('nav-up').addClass('nav-down');
        }
    }

    lastScrollTop = st;
}