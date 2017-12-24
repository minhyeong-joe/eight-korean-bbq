$(function() {

  function closeAccordion() {
    $('.accordion-title').removeClass('active');
    $('.accordion-content').slideUp(300).removeClass('open');
  };

  $('.accordion-title').on('click', function(e) {
    e.preventDefault();
    var current = $(this).attr('href');

    if ($(this).is('.active')) {
      closeAccordion();
    } else {
      closeAccordion();
      $(this).addClass('active');

      $('.accordion-content' + current).slideDown(300).addClass('open');
    }
  });

  $('#parking-btn').on('click',function(e){
    e.preventDefault();
    $('#parking-overlay').fadeIn(300);
    $('body').addClass("scrollDisabled");
  });

  $('#parking-overlay').on('click', function(){
    $('#parking-overlay').fadeOut(300);
    $('body').removeClass("scrollDisabled");
  })

});
