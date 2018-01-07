<?php

if (count($_POST)>0) {
  $name = ucwords($_POST['name']);
  $email = $_POST['email'];
  $message = nl2br(htmlspecialchars($_POST['message']));


  $ToEmail = "billy_cho@hotmail.com, minhyeong.billy.joe@gmail.com";
  $EmailSubject = "Eight Korean BBQ Contact Form Submission from $name";
  $mailheader = "From: $name <no-reply@8colorsfnb.com> \r\n";
  $mailheader .= "Reply-To: $email \r\n";
  $mailheader .= "Content-type: text/html; charset=iso-8859-1\r\n";
  $maiheader .="MIME-Version: 1.0\r\n";
  $MESSAGE_BODY = "<html><head></head><body><br><br><br><h2 style='text-align: center;'>You have a new submission from <a href='https://eightkoreanbbq.com/contact'>Eight Korean BBQ</a></h2><hr style='width:700px; margin: 20px auto;'><br>";
  $MESSAGE_BODY .= "<table rules='all' style='border-color: #666; width: 650px; font-family: Montserrat, sans-serif; margin: auto;' cellpadding='10'>";
  $MESSAGE_BODY .= "<tr style='background: #eee;'><td style='width:120px; text-align:center;'><strong>Name:</strong></td><td>$name</td></tr>";
  $MESSAGE_BODY .= "<tr><td style='text-align:center;'><strong>Email:</strong></td><td><a href='mailto:$email'>$email</a></td></tr>";
  $MESSAGE_BODY .= "<tr><td style='text-align:center;'><strong>Message:</strong></td><td>$message</td></tr></table><br><br>";
  $MESSAGE_BODY .= "<img src='https://eightkoreanbbq.com/img/logo-8colorfnb.jpg' alt='8-logo' height='120px' style='display: block; margin:auto;'><br></body></html>";

  mail($ToEmail,  $EmailSubject, $MESSAGE_BODY, $mailheader, "-f$email");
}


?>
