// script handling events that are common on multiple pages
// such as header, footer behaviors.
$(function(){

  var timeout;
  $('.location-tab').mouseenter( function() {
    clearTimeout(timeout);
    $('.location-list').fadeIn(300);
  });
  $('.location-tab').mouseleave(function() {
      $('.location-list').fadeOut(200);
    });

  $('.location-tab>a').on('click', function(e){
    e.preventDefault();
  });

  $('.location-expand>a').on('click', function(e) {
    e.preventDefault();
    if ($(this).hasClass("expanded")) {
      $(this).removeClass("expanded");
    } else {
      $(this).addClass("expanded");
    }
    $('.location-menu').slideToggle(300);
  })

  $('menubar').on('click', function() {
    if ($('body').hasClass("scrollDisabled")) {
      $('body').removeClass("scrollDisabled");
      $('header').css({"background-color": "rgba(255,255,255,0.6)"});
    } else {
      $('body').addClass("scrollDisabled");
      $('header').css({"background-color": "rgba(255,255,255,1)"});
    }
    $('.location-menu').slideUp(100);
    $('#menuList').slideToggle();
    $('.menubarIcon').toggleClass("change");
    $('.menu-overlay').toggle();
  });

  $('.location-expand').on('click', function() {

  });

  $(window).on('scroll', function() {
    if ($(window).scrollTop() >= 20) {
      $('header').css({"background-color": "white"});
      $('#header-logo').css({"height": "40px"});
      $('#menuList').css({"top": "44px"});
      $('#whitespace-header').css({"height": "50px"});
      $('.location-list').css({"top": "4px"});
      $('.location-list a').addClass("white-background");
    } else {
      $('header').css({"background-color": "rgba(255,255,255,0.6)"});
      $('#header-logo').css({"height": "80px"});
      $('#menuList').css({"top": "84px"});
      $('#whitespace-header').css({"height":"90px"});
      $('.location-list').css({"top": "44px"});
      $('.location-list a').removeClass("white-background");
    }
  });

});
// $('body').addClass("scrollDisabled");
$(window).on('load', function() {
  // display banner, section, footer, and logo image after all images are loaded

  $('section').animate({
    opacity: 1
  }, 700, function() {
    if ($(window).scrollTop() >= 20) {
      $('header').css({"background-color": "white"});
      $('#header-logo').css({"opacity": 1, "height": "40px"});
      $('#whitespace-header').css({"height": "50px"});
      $('.location-list a').addClass("white-background");
    } else {
      $('header').css({"background-color": "rgba(255,255,255,0.6)"});
      $('#header-logo').css({"opacity": 1, "height": "80px"});
      $('#menuList').css({"top": "84px"});
      $('#whitespace-header').css({"height": "90px"});
      $('.location-list').css({"top": "44px"});
      $('.location-list a').removeClass("white-background");
    }
  })
  $('footer').css({"opacity": 1});
  // for home page banner
  $('#banner').animate({
    opacity: 1
  }, 800, function() {
    $('#banner-text').css({"opacity":1});
    $('#scroll-down-animation').delay(500);
    $('#scroll-down-animation').css({"opacity":1});
  });
  // for all other banners
  $('#small-banner').animate({
    opacity: 1
  }, 1000);
})
