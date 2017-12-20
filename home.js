// script controlling events in main homepage.
$(function() {

  // home link-> instead of reloading, simply slide to top
  $('a[href="/"]').on('click', function(e){
    e.preventDefault();
    $('html,body').animate({
      scrollTop: 0
    }, 500);
  });

  // 8 flavors details
  var sliding = false;

  $('.flavorBtn').on('click', function() {
    var details = this.id + "-details";
    if ($(this).hasClass("active")) {
      $(this).removeClass("active");
      sliding = true;
      $('#'+details).slideUp(150, function() {
        sliding = false;
      });
    } else if (!$('.flavorBtn').hasClass("active") && !sliding) {
      $(this).addClass("active");
      sliding = true;
      $('#'+details).css({"display":"flex"}).hide().slideDown(300, function() {
          sliding = false;
        });
    } else if (!sliding) {
      $('.flavorBtn.active').removeClass("active");
      $(this).addClass("active");
      sliding = true;
      $('#eightflavors-description>div:not(#'+details+')').slideUp(150, function() {
        $('#'+details).css({"display":"flex"}).hide().slideDown(300, function() {
          sliding = false;
        })
      });
    }
  });

  // press videos (food-network, cooking channel)
  $('.video-press').on('click', function(e) {
    e.preventDefault();
    var vid = this.id;
    var video = document.getElementById("press-video");
    $('#video-overlay source').attr("src", "vid/"+vid+'.mp4');
    $('#press-video')[0].load();
    $('#video-overlay').fadeIn(500);
    $('body').addClass("scrollDisabled");
    video.play();
  });

  $('#video-overlay').on('click', function(e) {
    var video = document.getElementById("press-video");
    if (e.target.id === 'close') {
      video.pause();
      $('#video-overlay source').removeAttr("src");
      $('#video-overlay').fadeOut(300);
      $('body').removeClass("scrollDisabled");
    } else if (e.target.id === 'press-video') {
      video.paused ? video.play() : video.pause();
    }
  })

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
