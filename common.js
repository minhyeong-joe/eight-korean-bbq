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
    } else {
      $('body').addClass("scrollDisabled");
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
      $('#header-logo').css({"height": "60px"});
      $('#menuList').css({"top": "68px"});
      $('#whitespace-header').css({"height": "70px"});
      $('.location-list').css({"top": "30px"});
    } else {
      $('#header-logo').css({"height": "100px"});
      $('#menuList').css({"top": "108px"});
      $('#whitespace-header').css({"height":"110px"});
      $('.location-list').css({"top": "70px"});
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
      $('#header-logo').css({"opacity": 1, "height": "60px"});
      $('#whitespace-header').css({"height": "70px"});
    } else {
      $('#header-logo').css({"opacity": 1, "height": "100px"});
      $('#menuList').css({"top": "108px"});
      $('#whitespace-header').css({"height": "110px"});
      $('.location-list').css({"top": "70px"});
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
