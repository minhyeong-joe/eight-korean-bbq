$(function() {

  $('form').on('submit', function(e) {
    e.preventDefault();
    var name = $('#name').val();
    var email = $('#email').val();
    var message = $('#message').val();
    var formComplete = false;
    $('#message').removeClass("notValid");
    $('#email').removeClass("notValid");
    $('#name').removeClass("notValid");
    $('#required').hide();
    $('#result').html("").removeClass("error");

    if ($('#message').val() === '') {
       $('#message').addClass("notValid");
       $('.notValid:first').focus();
       $('#required').show();
    }
    if ($('#email').val() === '') {
      $('#email').addClass("notValid");
      $('.notValid:first').focus();
      $('#required').show();
    }
    if ($('#name').val() === '') {
      $('#name').addClass("notValid");
      $('.notValid:first').focus();
      $('#required').show();
    }
    if ($('#name').val() !== '' && $('#email').val() !== '' && $('#message').val() !== '') {
      formComplete = true;
    }
    if (formComplete) {
      if (email_valid(email)) {
        $('#submit').hide();
        $.ajax({
          url: "contact.php",
          method: "POST",
          data: {
           name: name,
           email: email,
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
