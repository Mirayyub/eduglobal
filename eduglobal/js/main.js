

// Alert close
$(document).ready(function(){
    $(".alert-close i").click(function(){
      $(".alert").hide();
    });
  });


  $('#myModal').on('shown.bs.modal', function () {
    $('#myInput').trigger('focus')
  })

  $('.carousel').carousel({
    interval: 2000
  })