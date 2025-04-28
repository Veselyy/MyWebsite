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
    $(this).animate({ opacity: 0 }, 300, function() {
        $(this).css("display", "none").removeClass('modal-active');
    });
    $("body").css("overflow", "auto");
});


$("#college").click(function(){
    $("#college-modal-box").css("display", "flex").animate({ opacity: 1 }, 300).addClass('modal-active');
    $("body").css("overflow", "hidden");
});

$("#college-modal-box").click(function(){
    $(this).animate({ opacity: 0 }, 300, function() {
        $(this).css("display", "none").removeClass('modal-active');
    });
    $("body").css("overflow", "auto");
});


$("#brigade").click(function(){
    $("#commity-modal-box").css("display", "flex").animate({ opacity: 1 }, 300).addClass('modal-active');
    $("body").css("overflow", "hidden");
});

$("#commity-modal-box").click(function(){
    $(this).animate({ opacity: 0 }, 300, function() {
        $(this).css("display", "none").removeClass('modal-active');
    });
    $("body").css("overflow", "auto");
});

$("#pi1-link").click(function(e){
  e.preventDefault();
  $("#pi1-modal-box").css("display", "flex").animate({ opacity: 1 }, 300).addClass('modal-active');
  $("body").css("overflow", "hidden");
});

$("#pi1-modal-box").click(function(){
  $(this).animate({ opacity: 0 }, 300, function() {
      $(this).css("display", "none").removeClass('modal-active');
  });
  $("body").css("overflow", "auto");
});

$("#pi2-link").click(function(e){
  e.preventDefault();
  $("#pi2-modal-box").css("display", "flex").animate({ opacity: 1 }, 300).addClass('modal-active');
  $("body").css("overflow", "hidden");
});

$("#pi2-modal-box").click(function(){
  $(this).animate({ opacity: 0 }, 300, function() {
      $(this).css("display", "none").removeClass('modal-active');
  });
  $("body").css("overflow", "auto");
});

$("#pi3-link").click(function(e){
  e.preventDefault();
  $("#pi3-modal-box").css("display", "flex").animate({ opacity: 1 }, 300).addClass('modal-active');
  $("body").css("overflow", "hidden");
});

$("#pi3-modal-box").click(function(){
  $(this).animate({ opacity: 0 }, 300, function() {
      $(this).css("display", "none").removeClass('modal-active');
  });
  $("body").css("overflow", "auto");
});

$("#pi4-link").click(function(e){
  e.preventDefault();
  $("#pi4-modal-box").css("display", "flex").animate({ opacity: 1 }, 300).addClass('modal-active');
  $("body").css("overflow", "hidden");
});

$("#pi4-modal-box").click(function(){
  $(this).animate({ opacity: 0 }, 300, function() {
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

  $('.navbar-block__menu li').on('click', function(e) {
    const $target = $(e.target);
    let href = '';
  
    if ($target.hasClass('nav-link')) {
      // Klikl přímo na a.nav-link
      e.preventDefault(); // zastavit normální chování linku
      href = $target.attr('href');
    } else {
      // Klikl na li (nebo na before ikonku)
      href = $(this).find('a').attr('href');
    }
  
    const targetElement = $(href);
  
    if (targetElement.length) {
      $('html, body').animate(
        {
          scrollTop: targetElement.offset().top, // offset kvůli menu
        },
        1000
      );
    }
  });

  function resetStyles() {
    $navbarUl.removeAttr('style');
    $navbarUl.children('li').removeAttr('style');
    $navbarUl.children('li').children('a').removeAttr('style');
    $('style[data-reset]').remove();
    $navBars.insertAfter('.navbar ul li:last-child');
    $('#toggle-theme').css({
      display: 'block',
    });
}

  const $navBars = $('#nav-bars');
  const $navbarUl = $('.navbar-block__menu');
  let isToggled = false;

  if ($(window).width() <= 600) {
    $navBars.on('click', function(){

      if (!isToggled) {
        $navBars.insertBefore('.navbar-block__menu li:first-child');

        $navbarUl.children('li:first-child').css({
          justifyContent: 'end',
      });

        $navbarUl.css({
          width: '100vw',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
      });

      $navbarUl.children('li').css({
        display: 'flex',
        alignItems: 'center',
      });

      $navbarUl.children('li').children('a').css({
        display: 'block',
      });

      const style = document.createElement('style');
      style.setAttribute('data-reset', 'true');
      style.innerHTML = `
          .navbar-block__menu li:nth-child(1)::before {
              content: "\\f0c9";
          }
          .navbar-block__menu li:nth-child(2)::before {
              content: "\\f007";
          }
          .navbar-block__menu li:nth-child(3)::before {
              content: "\\f19d";
          }
          .navbar-block__menu li:nth-child(4)::before {
              content: "\\f07c";
          }
          .navbar-block__menu li:nth-child(5)::before {
              content: "\\f1d8";
          }
      `;
      document.head.appendChild(style);
      
      $('#toggle-theme').css({
        display: 'none',
      });
    }
      else {
        resetStyles();
      }
      isToggled = !isToggled;
    });

    $('.nav-link-li').click(function() {
      resetStyles();
      isToggled = !isToggled;
    });

  };
});