$(function() {

  $('.video-press').on('click', function(e) {
    e.preventDefault();
    var self = this;
    $('#video-confirm-modal-overlay').css({"display":"flex"}).hide().fadeIn(300);
    $('body').addClass('scrollDisabled');
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
      $('body').removeClass('scrollDisabled');
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
      $('body').removeClass("scrollDisabled");
    } else if (e.target.id === 'press-video') {
      video.paused ? video.play() : video.pause();
    }
  })

});
