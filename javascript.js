$(document).ready(function () {
  // Sticky Navbar on Scroll
  $(window).scroll(function () {
    if ($(this).scrollTop() > $('#about').offset().top - 20) {
      $(".navbar").addClass("sticky");
      $(".logo").show(); // Show logo when navbar is sticky
    } else {
      $(".navbar").removeClass("sticky");
      $(".logo").hide(); // Hide logo when not sticky
    }

    // Scroll-up Button Show/Hide
    if ($(this).scrollTop() > 500) {
      $(".scroll-up-btn").addClass("show");
    } else {
      $(".scroll-up-btn").removeClass("show");
    }
  });

  // Slide-up Script
  $(".scroll-up-btn").click(function () {
    $("html").animate({ scrollTop: 0 });
    $("html").css("scrollBehavior", "auto");
  });

  // Smooth Scroll on Menu Items Click
  $(".navbar .menu li a").click(function () {
    var target = $(this).attr("href");
    $("html, body").animate({
      scrollTop: $(target).offset().top
    }, 1000);
    $(".navbar .menu").removeClass('active');
    $(".menu-btn i").removeClass('active');
  });

  // Toggle Menu on Menu Button Click
  $(".menu-btn").click(function () {
    $(".navbar .menu").toggleClass("active");
    $(".menu-btn i").toggleClass("active");
  });

  // Typing Text Animation
  new Typed(".typing", {
    strings: ["Frontend Developer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
  });

  new Typed(".typing-2", {
    strings: ["Frontend Developer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
  });

  // Submit Form
  $("#emailForm").on("submit", function (event) {
    event.preventDefault();

    const name = $("#name").val();
    const email = $("#email").val();
    const subject = $("#subject").val();
    const message = $("#message").val();

    const emailBody = encodeURIComponent(`Hi Nivedita,\n\n${message}\n\nRegards,\n${name}`);
    const emailSubject = encodeURIComponent(subject);

    window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=niveditakamtar@gmail.com&su=${emailSubject}&body=${emailBody}`, "_blank");
  });

  // Owl Carousel Initialization
  $(".owl-carousel").owlCarousel({
    loop: true,
    margin: 20,
    nav: true,
    dots: true,
    autoplay: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 3,
      },
    },
  });
});

window.addEventListener('DOMContentLoaded', (event) => {
  const navbar = document.querySelector('.navbar'); // Get the navbar element
  window.onscroll = () => {
    if (window.scrollY > 50) { // If the user scrolls more than 50 pixels
      navbar.classList.add('scrolled'); // Add 'scrolled' class to navbar
    } else {
      navbar.classList.remove('scrolled'); // Remove 'scrolled' class from navbar
    }
  };
});
