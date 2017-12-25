$(function() {

  $('a[href="los-angeles-menu"]').addClass("active");
  $('#los-angeles-menu').fadeIn(300);
  $('#menu-location>a').on('click', function(e){
    e.preventDefault();
    var menuLoc = $(this).attr("href");
    $('#menu-location>a').toggleClass("active");
    $('.menu-wrapper').fadeOut(250, function() {
      $('#'+menuLoc).delay(300);
      $('#'+menuLoc).fadeIn(500);
    })

  });

});
