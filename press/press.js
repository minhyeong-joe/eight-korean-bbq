$(function() {

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
