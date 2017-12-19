// script controlling events in main homepage.
$(function() {

  $('a[href="/"]').on('click', function(e){
    e.preventDefault();
    $('html,body').animate({
      scrollTop: 0
    }, 500);
  });

});

$(window).on('load', function() {
  // display banner, section, footer, and logo image after all images are loaded
  $('#banner').animate({
    opacity: 1
  }, 800, function() {
    $('#banner-text').css({"opacity":1});
  });
  $('section').animate({
    opacity: 1
  }, 700, function() {
    if ($(window).scrollTop() >= 20) {
      $('#header-logo').css({"opacity": 1, "height": "60px"});
    } else {
      $('#header-logo').css({"opacity": 1, "height": "100px"});
    }
  })
  $('footer').css({"opacity": 1});
})
