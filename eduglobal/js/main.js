

// Alert close start
$(document).ready(function () {
  $(".alert-close i").click(function () {
    $(".alert").hide();
  });
});

// Alert close end



// Modal open start
$('#myModal').on('shown.bs.modal', function () {
  $('#myInput').trigger('focus')
})
// Modal open end



// Slider carusel start
$('.carousel').carousel({
  interval: 20000
})
// Slider carusel end



// Owl carusel start
$('.owl-carousel').owlCarousel({
  rtl: false,
  loop: true,
  margin: 10,
  nav: false,
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


// our teacher start

var cardImg = $("#our-teachers .card-img-top")
var logos = $("#our-teachers .card-img-top .social-media")
for (let i = 0; i < cardImg.length; i++) {
  $(cardImg[i]).mouseover(function () {
    $(logos[i]).stop();
    $(logos[i]).animate({ top: "120px" });
  })

  $(cardImg[i]).mouseout(function () {
    $(logos[i]).stop();
    $(logos[i]).animate({ top: "255px" });
  })

}

// Our teacher stop



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