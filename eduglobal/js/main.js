


$(document).ready(function () {

  // Alert close start
  $(".alert-close i").click(function () {
    $(".alert").hide();
  });


  // Alert close end


  //////////////////////////////////////////////////////////////////////////////////////////////////////

  // Modal open start
  $('#myModal').on('shown.bs.modal', function () {
    $('#myInput').trigger('focus')
  })
  // Modal open end

  //////////////////////////////////////////////////////////////////////////////////////////////////////

  // Slider carusel start
  $('.carousel').carousel({
    interval: 3000,
  })
  // Slider carusel end

  //////////////////////////////////////////////////////////////////////////////////////////////////////

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





  //////////////////////////////////////////////////////////////////////////////////////////////////////



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





  //////////////////////////////////////////////////////////////////////////////////////////////////////


  // Aos animation start
  AOS.init();

  // Aos animation end

  //////////////////////////////////////////////////////////////////////////////////////////////////////


  


  //////////////////////////////////////////////////////////////////////////////////////////////////////

  // Time countdown start 
  // Set the date we're counting down to
  var countDownDate = new Date("Jan 5, 2021 15:37:25").getTime();

  // Update the count down every 1 second
  var timerx = setInterval(function () {

    // Get todays date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Output the result in an element with id="demotime"
    document.querySelector("#demotime").innerHTML = " " + days + " : " + hours + " : "
      + minutes + " : " + seconds + " ";

    // If the count down is over, write some text 
    if (distance < 0) {
      clearInterval(timerx);
      document.getElementById("demotime").innerHTML = "EXPIRED";
    }
  }, 1000);


  // Time countdown end
  //////////////////////////////////////////////////////////////////////////////////////////////////////


 // navbar scroll on top start //
  window.onscroll = function () { myFunction() };

  var header = document.getElementById("header-navbar");
  var sticky = header.offsetTop;

  function myFunction() {
    if (window.pageYOffset > sticky) {
      header.classList.add("fixed-top");
    } else {
      header.classList.remove("fixed-top");
    }
  }


  // navbar scroll on top end //

  ////////////////////////////////////////////////////////////////////////////////////////////////////////
});






