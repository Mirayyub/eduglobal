

// Alert close
$(document).ready(function(){
    $(".alert-close i").click(function(){
      $(".alert").hide();
    });
  });

// Modal open
  $('#myModal').on('shown.bs.modal', function () {
    $('#myInput').trigger('focus')
  })


  // Slider carusel
  $('.carousel').carousel({
    interval: 20000
  })

  $('.owl-carousel').owlCarousel({
    rtl:false,
    loop:true,
    margin:10,
    nav:true,
    dots:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})