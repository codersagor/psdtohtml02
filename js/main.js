$(document).ready(function () {
  // counter up js 
  $('.counter').counterUp({
    delay: 100,
    time: 2000
  });

  // TESTMONIAL CAROUSEL JS 

  $(".carosel-wraper").owlCarousel({
    loop: true,
    items: 1
  })
  $(".brand-crousel").owlCarousel({
    loop: true,
    margin: 50,
    nav: true,
    autoplay: true,
    responsive: {
      300: {
        items: 1
      },
      600: {
        items: 3
      },
      1000: {
        items: 6
      }
    }
  });

  $(window).scroll(function() {
    var $height = $(window).scrollTop();
    console.log($height);
    if($height > 50) {
      $('nav').addClass('sticky');
    } else {
      $('nav').removeClass('sticky');
    }
  })
   

});


