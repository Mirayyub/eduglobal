


$(document).ready(function () {

  // Alert close start
  $(".alert-close i").click(function () {
    $(".alert").hide();
  });


  // Alert close end




  // Modal open start
  $('#myModal').on('shown.bs.modal', function () {
    $('#myInput').trigger('focus')
  })
  // Modal open end



  // Slider carusel start
  $('.carousel').carousel({
    interval: 3000,
  })
  // Slider carusel end



  // Owl carusel start
  $('.owl-carousel').owlCarousel({
    rtl: false,
    loop: true,
    margin: 10,
    nav: false,
    autoplay: true,
    autoplayTimeout: 3000,
    dots: false,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 3
      },
      1000: {
        items: 5
      }
    }
  })
  // Owl carusel end









  //  Isotop gallery start 
  $('.gallery-item').isotope({
    itemSelector: '.item'
  });
  $('ul li').click(function () {
    $('ul li').removeClass('active');
    $(this).addClass('active');

    var sel = $(this).attr('data-filter');
    $('.gallery-item').isotope({
      filter: sel
    });
  });
  //  Isotop gallery end








  // Aos animation start
  AOS.init();

  // Aos animation end


  // Counter up start
  // jQuery(document).ready(function( $ ) {
  //   $('.counter').counterUp({
  //       delay: 10,
  //       time: 1000
  //   });
  // });
  // Counter up end


  $('#show-hidden-menu').click(function () {
    $('.hidden-menu').slideToggle("slow");
    // Alternative animation for example
    // slideToggle("fast");
  });


  jQuery(window).load(function () { // makes sure the whole site is loaded
    jQuery("#status").fadeOut(); // will first fade out the loading animation
    jQuery("#preloader").delay(1000).fadeOut("slow"); // will fade out the white DIV that covers the website.
  })


});






