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
        $('html,body').animate({
          scrollTop: $('#eightflavors-description').offset().top - 200
        }, 300);
    } else if (!sliding) {
      $('.flavorBtn.active').removeClass("active");
      $(this).addClass("active");
      sliding = true;
      $('#eightflavors-description>div:not(#'+details+')').slideUp(150, function() {
        $('#'+details).css({"display":"flex"}).hide().slideDown(300, function() {
          sliding = false;
        })
      });
      $('html,body').animate({
        scrollTop: $('#eightflavors-description').offset().top - 200
      }, 100);
    }
  });

  // press videos (food-network, cooking channel)
  $('.video-press').on('click', function(e) {
    e.preventDefault();
    var vid = this.id;
    var video = document.getElementById("press-video");
    $('#video-overlay source').attr("src", "https://s3-us-west-1.amazonaws.com/eight-korea-bbq-vid/"+vid+".mp4");
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
