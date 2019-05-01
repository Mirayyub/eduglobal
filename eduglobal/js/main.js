

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

