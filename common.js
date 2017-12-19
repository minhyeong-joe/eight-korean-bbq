// script handling events that are common on multiple pages
// such as header, footer behaviors.
$(function(){

  $('menubar').on('click', function() {
    $('body').toggleClass("scrollDisabled");
    $('#menuList').slideToggle();
    $('.menubarIcon').toggleClass("change");
    $('.menu-overlay').toggle();
  });

  $(window).on('scroll', function() {
    if ($(window).scrollTop() >= 20) {
      $('#header-logo').css({"height": "60px"});
      $('#menuList').css({"top": "68px"});
      $('#whitespace-header').css({"height": "70px"});
    } else {
      $('#header-logo').css({"height": "100px"});
      $('#menuList').css({"top": "108px"});
      $('#whitespace-header').css({"height":"110px"});
    }
  });

});

$(window).on('load', function() {
  // display banner, section, footer, and logo image after all images are loaded

  $('section').animate({
    opacity: 1
  }, 700, function() {
    $('#header-logo').css({"opacity": 1, "height": "100px"});
    $('#whitespace-header').css({"height": "110px"});
  })
  $('footer').css({"opacity": 1});

  $('#small-banner').animate({
    opacity: 1
  }, 1000);
})
