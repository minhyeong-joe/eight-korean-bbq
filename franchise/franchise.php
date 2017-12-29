<?php

if (count($_POST)>0) {
  $first_name = ucwords($_POST['first']);
  $last_name = ucwords($_POST['last']);
  $full_name = $first_name." ".$last_name;
  $email = $_POST['email'];
  $locationUSA = $_POST['locationUSA'];
  $foodExperience = $_POST['foodExperience'];
  $runOperations = $_POST['runOperations'];
  $cashInvest = $_POST['cashInvest'];
  $message = nl2br(htmlspecialchars($_POST['message']));


  $ToEmail = "keith@8colorsfnb.com";
  $EmailSubject = "Eight Korean BBQ Franchise Inquiry";
  $mailheader = "From: $full_name <no-reply@8colorsfnb.com> \r\n";
  $mailheader .= "Reply-To: $email \r\n";
  $mailheader .= "Content-type: text/html; charset=iso-8859-1\r\n";
  $maiheader .="MIME-Version: 1.0\r\n";
  $MESSAGE_BODY = "<html><head><link href='https://fonts.googleapis.com/css?family=Lato|Montserrat' rel='stylesheet'></head><body><br><br><br><h2 style='font-family: Lato, sans-serif;'>You have a new franchise inquiry from <a href='#'>Eight Korean BBQ</a></h2><hr style='width:700px; margin: 20px 0;'><br>";
  $MESSAGE_BODY .= "<table rules='all' style='border-color: #666; width: 650px; font-family: Montserrat, sans-serif;' cellpadding='10'>";
  $MESSAGE_BODY .= "<tr style='background: #eee;'><td style='width:120px; text-align:center;'><strong>Name:</strong></td><td>$first_name $last_name</td></tr>";
  $MESSAGE_BODY .= "<tr><td style='text-align:center;'><strong>Email:</strong></td><td><a href='mailto:$email'>$email</a></td></tr>";
  $MESSAGE_BODY .= "<tr><td style='text-align:center;'><strong>Are you seeking a location in the USA?</strong></td><td>$locationUSA</td></tr>";
  $MESSAGE_BODY .= "<tr><td style='text-align:center;'><strong>Do you have any food service experience?</strong></td><td>$foodExperience</td></tr>";
  $MESSAGE_BODY .= "<tr><td style='text-align:center;'><strong>Will you run day to day operations yourself?</strong></td><td>$runOperations</td></tr>";
  $MESSAGE_BODY .= "<tr><td style='text-align:center;'><strong>Cash available to invest: </strong></td><td>$cashInvest</td></tr>";
  $MESSAGE_BODY .= "<tr><td style='text-align:center;'><strong>Message:</strong></td><td>$message</td></tr></table><br><br>";
  $MESSAGE_BODY .= "<img src='../img/logo-8colorfnb.jpg' alt='8colorsfnb-logo' height='120px' style='margin-left: 200px;'><br></body></html>";

  mail($ToEmail,  $EmailSubject, $MESSAGE_BODY, $mailheader, "-f$email");
}


?>
