$(function() {

  $('a[href="los-angeles-menu"]').addClass("active");
  $('#los-angeles-menu').fadeIn(300);
  $('#menu-location>a').on('click', function(e){
    e.preventDefault();
    var menuLoc = $(this).attr("href");
    $('#menu-location>a').toggleClass("active");
    $('.menu-wrapper').fadeOut(300, function() {
      $('#'+menuLoc).fadeIn(750);
    })

  });

});
