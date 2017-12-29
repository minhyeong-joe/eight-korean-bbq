// script controlling events in main homepage.
$(function() {

  // home link-> instead of reloading, simply slide to top
  $('a[href="/"]').on('click', function(e){
    e.preventDefault();
    $('html,body').animate({
      scrollTop: 0
    }, 500);
  });

  // scroll-down-animation Click
  $('#scroll-down-animation').on('click', function() {
    $('html,body').animate({
      scrollTop: $('#banner').offset().top + $('#banner').height() - 44
    }, 500);
  })

  $(window).on('scroll', function() {
    if ($(window).scrollTop() >= $('#banner-text').offset().top-70) {
      $('#scroll-down-animation').css({"opacity": 0, "pointer-events": "none"});
    } else {
      $('#scroll-down-animation').css({"opacity": 1, "pointer-events": "auto"});
    }
  });

  // press videos (food-network, cooking channel)
  $('.video-press').on('click', function(e) {
    e.preventDefault();
    var self = this;
    $('#video-confirm-modal-overlay').css({"display":"flex"}).hide().fadeIn(300);
    $('html, body').addClass('scrollDisabled');
    $('#modal-continue').on('click', function() {
      $('#video-confirm-modal-overlay').fadeOut(200);
      var vid = self.id;
      var video = document.getElementById("press-video");
      video.src = "https://s3-us-west-1.amazonaws.com/eight-korea-bbq-vid/"+vid+".mp4";
      // $('#video-overlay source').attr("src", "https://s3-us-west-1.amazonaws.com/eight-korea-bbq-vid/"+vid+".mp4");
      video.load();
      $('#video-overlay').fadeIn(500);
      $('#press-video').on('canplay', function(){
        $('#video-loading').fadeOut(100);
        $('#press-video').fadeIn(100);
        video.play();
      })
    });
    $('#modal-cancel').on('click', function() {
      $('#video-confirm-modal-overlay').fadeOut(200);
      $('html, body').removeClass('scrollDisabled');
    })

  });

  $('#video-overlay').on('click', function(e) {
    var video = document.getElementById("press-video");
    if (e.target.id === 'close') {
      video.pause();
      video.src = "";
      video.load();
      $('#press-video').fadeOut(100);
      $('#video-loading').fadeIn(100);
      $('#video-overlay').fadeOut(300);
      $('html, body').removeClass("scrollDisabled");
    } else if (e.target.id === 'press-video') {
      video.paused ? video.play() : video.pause();
    }
  })

});
