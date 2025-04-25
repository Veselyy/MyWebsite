$(document).ready(function () {

    $("#toggle-theme").click(function(){
        $("body").toggleClass('dark-mode');

        const icon = $("#theme-toggle");

        if ($('body').hasClass('dark-mode')) {
            icon.removeClass('fa-moon').addClass('fa-sun');
          } else {
            icon.removeClass('fa-sun').addClass('fa-moon');
          }
    });

$("#hs").click(function(){
    $("#hs-modal-box").css("display", "flex").animate({ opacity: 1 }, 300).addClass('modal-active');
    $("body").css("overflow", "hidden");
});

$("#hs-modal-box").click(function(){
    $("#hs-modal-box").animate({ opacity: 0 }, 300, function() {
        $(this).css("display", "none").removeClass('modal-active');
    });
    $("body").css("overflow", "auto");
});


$("#college").click(function(){
    $("#college-modal-box").css("display", "flex").animate({ opacity: 1 }, 300).addClass('modal-active');
    $("body").css("overflow", "hidden");
});

$("#college-modal-box").click(function(){
    $("#college-modal-box").animate({ opacity: 0 }, 300, function() {
        $(this).css("display", "none").removeClass('modal-active');
    });
    $("body").css("overflow", "auto");
});


$("#brigade").click(function(){
    $("#commity-modal-box").css("display", "flex").animate({ opacity: 1 }, 300).addClass('modal-active');
    $("body").css("overflow", "hidden");
});

$("#commity-modal-box").click(function(){
    $("#commity-modal-box").animate({ opacity: 0 }, 300, function() {
        $(this).css("display", "none").removeClass('modal-active');
    });
    $("body").css("overflow", "auto");
});



$(".modal-block").click(function (event) {
    event.stopPropagation();
});

$('#contact-form').on('submit', function (e) {
    e.preventDefault();

    const form = $(this);
    const data = form.serialize(); // převede na URL encoded string

    $.ajax({
      type: 'POST',
      url: '/',
      data: data,
      success: function () {
        Swal.fire({
            title: 'Díky!',
            text: 'Zpráva byla odeslána.',
            icon: 'success',
            confirmButtonText: 'OK',
            confirmButtonColor: '#7b2d3a'
          });
        form[0].reset(); // vyčistí formulář
      },
      error: function (error) {
        Swal.fire({
            title: 'Chyba',
            text: 'Nepodařilo se odeslat zprávu: ' + error,
            icon: 'error',
            confirmButtonText: 'OK',
            confirmButtonColor: '#7b2d3a'
          });
      }
    });
  });

  $('.nav-link').on('click', function (e) {
    e.preventDefault();
    const target = $(this.getAttribute('href'));

    if (target.length) {
      $('html, body').animate(
        {
          scrollTop: target.offset().top, // offset kvůli menu
        },
        1000);
    }
  });

});