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
$('body').addClass("scrollDisabled");
$(window).on('load', function() {
  // display banner, section, footer, and logo image after all images are loaded

  $('section').animate({
    opacity: 1
  }, 700, function() {
    if ($(window).scrollTop() >= 20) {
      $('#header-logo').css({"opacity": 1, "height": "60px"});
      $('#whitespace-header').css({"height": "70px"});
    } else {
      $('#header-logo').css({"opacity": 1, "height": "100px"});
      $('#whitespace-header').css({"height": "110px"});
    }
    $('body').removeClass("scrollDisabled");
  })
  $('footer').css({"opacity": 1});
  // for home page banner
  $('#banner').animate({
    opacity: 1
  }, 800, function() {
    $('#banner-text').css({"opacity":1});
  });
  // for all other banners
  $('#small-banner').animate({
    opacity: 1
  }, 1000);
})
