$(document).ready(function () {

    $("#toggle-theme").click(function(){
        $("body").toggleClass('dark-mode');

        const icon = $("#theme-toggle");

        if ($('body').hasClass('dark-mode')) {
            icon.removeClass('fa-sun').addClass('fa-moon');
          } else {
            icon.removeClass('fa-moon').addClass('fa-sun');
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

});