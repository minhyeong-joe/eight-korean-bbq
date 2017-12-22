$(function() {

  $('form').on('submit', function(e) {
    e.preventDefault();
    var first = $('#first').val();
    var last = $('#last').val();
    var email = $('#email').val();
    var locationUSA = $('#location-usa').val();
    var foodExperience = $('#food-experience').val();
    var runOperations = $('#run-operations').val();
    var cashInvest = $('#cash-invest').val();
    var message = $('#message').val();
    var formComplete = false;
    $('*').removeClass("notValid");
    $('#required').hide();
    $('#result').html("").removeClass("error");

    if ($('#message').val() === '') {
       $('#message').addClass("notValid");
       $('.notValid:first').focus();
       $('#required').show();
    }
    if ($('#cash-invest').val() === '') {
      $('#cash-invest').addClass("notValid");
      $('.notValid:first').focus();
      $('#required').show();
    }
    if ($('#run-operations').val() === '') {
      $('#run-operations').addClass("notValid");
      $('.notValid:first').focus();
      $('#required').show();
    }
    if ($('#food-experience').val() === '') {
      $('#food-experience').addClass("notValid");
      $('.notValid:first').focus();
      $('#required').show();
    }
    if ($('#location-usa').val() === '') {
      $('#location-usa').addClass("notValid");
      $('.notValid:first').focus();
      $('#required').show();
    }
    if ($('#email').val() === '') {
      $('#email').addClass("notValid");
      $('.notValid:first').focus();
      $('#required').show();
    }
    if ($('#last').val() === '') {
      $('#last').addClass("notValid");
      $('.notValid:first').focus();
      $('#required').show();
    }
    if ($('#first').val() === '') {
      $('#first').addClass("notValid");
      $('.notValid:first').focus();
      $('#required').show();
    }
    if ($('#first').val() !== '' && $('#last').val() !== '' && $('#email').val() !== '' && $('#message').val() !== '' && $('#location-usa').val() !== '' && $('#food-experience').val() !== '' && $('#run-operations').val() !== '' && $('#cash-invest').val() !== '') {
      formComplete = true;
    }
    if (formComplete) {
      if (email_valid(email)) {
        $('#submit').hide();
        $.ajax({
          url: "franchise.php",
          method: "POST",
          data: {
           first: first,
           last: last,
           email: email,
           locationUSA: locationUSA,
           foodExperience: foodExperience,
           runOperations: runOperations,
           cashInvest: cashInvest,
           message: message,
         },
       }).done(function(data){
         $('#result').html("<i class='fa fa-check' style='margin-right: 10px;'></i>Thank you! We will be in touch with you shortly.").addClass("success");
       }).fail(function(data){
         $('#submit').show();
         $('#result').html("<i class='fa fa-times-circle' style='margin-right: 10px;'></i>I'm sorry, but an error has occurred. Please try again later.").addClass("error");
       });
      } else{
        $('#email').addClass("notValid");
        if ($('#email').val()) {
          $('#invalidEmailWrapper').show();
        }
        $('.notValid:first').focus();
      }
    }
  });

  function email_valid(email) {
  var pattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return pattern.test(email);
  }

  $('#email').on('click input', function() {
    $('#invalidEmailWrapper').hide();
    $('#email').removeClass("notValid");
  })

});
