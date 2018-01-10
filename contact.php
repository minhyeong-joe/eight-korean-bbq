<!-- ##################################### -->
<!-- ########### Page Info ############### -->
<?php
  $title = "CONTACT | EIGHT KOREAN BBQ";
  $description = "Contact us for general questions using our contact form. Once submitted, you will hear from us shortly.";
  $keywords = "contact, contact us, Eight, Korean, BBQ, pork, LA, Los Angeles, KTown, Koreatown, Buena Park, palsaik, eight colors, best, ever, beef";
  $permalink = "https://eightkoreanbbq.com/contact";
  $page = "contact";
?>
<!-- ##################################### -->

<?php include('php/header.php'); ?>

    <div id="whitespace-header"></div>
    <div id="small-banner">
      <div id="small-banner-overlay"></div>
    </div>

    <section>
      <div id="contact">
        <h1>CONTACT US</h1>
        <hr>
        <div id="main-office">
          <h2>Main Office</h2>
          <h4>Koreatown, LA</h4>
          <p><i class="fa fa-map-marker" style="font-size:16px"></i> <a href="https://www.google.com/maps/place/3700+Wilshire+Blvd+%23625,+Los+Angeles,+CA+90010/@34.0605503,-118.3094158,17z/data=!3m1!4b1!4m5!3m4!1s0x80c2b884ee5b0241:0xfbf3090b9e277c3f!8m2!3d34.0605459!4d-118.3072271" target="_blank">3700 Wilshire Blvd. #625 Los Angeles, CA 90010</a></p>
          <p><i class="fa fa-phone" style="font-size:16px;"></i> <a href="tel:2133680010">213)368-0010</a></p>
          <p><i class="fa fa-envelope-o" style="font-size:16px;"></i> info@8colorsfnb.com</p>
        </div>
        <div id="store-location">
          <div id="los-angeles">
            <div class="info">
              <h2>LOS ANGELES</h2>
              <h4>Koreatown, LA</h4>
              <p><i class="fa fa-map-marker" style="font-size:16px"></i> <a href="https://www.google.com/maps/place/Eight+Korean+BBQ/@34.0560348,-118.3121162,17z/data=!3m1!4b1!4m5!3m4!1s0x80c2b8860c42e68d:0xc6853fa6793251b4!8m2!3d34.0560304!4d-118.3099275" target="_blank">863 S Western Ave, Los Angeles, CA 90005, USA</a></p>
              <p><i class="fa fa-phone" style="font-size:16px"></i> <a href="tel:2133651750">213)365-1750</a></p>
            </div>
            <div class="gmap-wrapper">
              <iframe width="100%" height="280" frameborder="0" style="border:0" src="https://www.google.com/maps/embed/v1/search?key=AIzaSyBGjPyQszrrnt4PV7qMGB0RQ6NcEP6L7Qs&q=Eight+Korean+BBQ+LA" allowfullscreen></iframe>
            </div>
          </div>
          <div id="buena-park">
            <div class="info">
              <h2>BUENA PARK</h2>
              <h4>Orange County, CA</h4>
              <p><i class="fa fa-map-marker" style="font-size:16px"></i> <a href="https://www.google.com/maps/place/%EC%97%90%EC%9D%B4%ED%8A%B8+%EC%BD%94%EB%A6%AC%EC%95%88+BBQ/@33.8630617,-118.0008308,17z/data=!3m1!4b1!4m5!3m4!1s0x80dd2b94e7abdd73:0xee671ea2c0d2d8ae!8m2!3d33.8630573!4d-117.9986421" target="_blank">6681 Beach Blvd, Buena Park, CA 90621, USA</a></p>
              <p><i class="fa fa-phone" style="font-size:16px"></i> <a href="tel:7145220888">714)522-0888</a></p>
            </div>
            <div class="gmap-wrapper">
              <iframe width="100%" height="280" frameborder="0" style="border:0" src="https://www.google.com/maps/embed/v1/search?key=AIzaSyBGjPyQszrrnt4PV7qMGB0RQ6NcEP6L7Qs&q=Eight+Korean+BBQ+Buena+Park" allowfullscreen></iframe>
            </div>
          </div>
        </div>
        <div id="line">
          <span>Get in touch</span>
        </div>
        <div id="contact-form-wrapper">
          <form action="#" method="POST">
            <div class="fieldset">
              <label for="name">Name <font color="red">*</font></label>
              <input type="text" id="name" name="name">
            </div>
            <div class="fieldset">
              <label for="email">Email Address <font color="red">*</font></label>
              <div id="invalidEmailWrapper">
                <p>* Invalid Email Address</p>
              </div>
              <input type="text" id="email" name="email">
            </div>
            <div class="fieldset">
              <label for="message">Message <font color="red">*</font></label>
              <textarea name="message" id="message"></textarea>
            </div>
            <input type="text" name="honeypot" id="honeypot" hidden>
            <p id="required" style="font-size: 14px; color: red; display: none;">* Please complete the required field.</p>
            <input type="submit" id="submit" value="SUBMIT">
            <p id="result"></p>
          </form>
          <div id="right-column">
            <img src="../img/eight-contact.jpg" alt="">
            <div>
              <p>Feel free to contact us for any general inquiries.</p>
              <br>
              <p>For franchise opportunities, click <a href="/franchise">HERE</a> to learn more.</p>
              <br>
              <p><font color="red">** For reservations, please call the store directly.</font></p>
            </div>
          </div>
        </div>
      </div>
    </section>


<?php include('php/footer.php'); ?>
