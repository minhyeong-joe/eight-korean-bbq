<?php

if (count($_POST)>0) {
  $name = ucfirst($_POST['name']);
  $email = $_POST['email'];
  $message = nl2br(htmlspecialchars($_POST['message']));


  $ToEmail = "minhyeong.billy.joe@gmail.com";
  $EmailSubject = "Eight Korean BBQ Contact Form Submission";
  $mailheader = "From: $name <no-reply@8colorsfnb.com> \r\n";
  $mailheader .= "Reply-To: $email \r\n";
  $mailheader .= "Content-type: text/html; charset=iso-8859-1\r\n";
  $maiheader .="MIME-Version: 1.0\r\n";
  $MESSAGE_BODY = "<html><head><link href='https://fonts.googleapis.com/css?family=Lato|Montserrat' rel='stylesheet'></head><body><br><br><br><h2 style='font-family: Lato, sans-serif;'>You have a new submission from <a href='#'>Eight Korean BBQ</a></h2><hr style='width:700px; margin: 20px 0;'><br>";
  $MESSAGE_BODY .= "<table rules='all' style='border-color: #666; width: 650px; font-family: Montserrat, sans-serif;' cellpadding='10'>";
  $MESSAGE_BODY .= "<tr style='background: #eee;'><td style='width:120px; text-align:center;'><strong>Name:</strong></td><td>$name</td></tr>";
  $MESSAGE_BODY .= "<tr><td style='text-align:center;'><strong>Email:</strong></td><td><a href='mailto:$email'>$email</a></td></tr>";
  $MESSAGE_BODY .= "<tr><td style='text-align:center;'><strong>Message:</strong></td><td>$message</td></tr></table><br><br>";
  $MESSAGE_BODY .= "<img src='../img/full-logo.png' alt='plumeria.png' height='120px' style='margin-left: 200px;'><br></body></html>";

  mail($ToEmail,  $EmailSubject, $MESSAGE_BODY, $mailheader, "-f$email");
}


?>
