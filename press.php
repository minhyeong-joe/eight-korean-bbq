
<?php
  $title = "PRESS | EIGHT KOREAN BBQ";
  $description = "Press and influencers that featured the Eight Korean BBQ restaurants. We are acclaimed as 'the Best BBQ Ever'.";
  $keywords = "press, featured, instagram, Eight, Korean, BBQ, pork, LA, Los Angeles, KTown, Koreatown, Buena Park, palsaik, eight colors, best, ever, beef";
  $permalink = "https://eightkoreanbbq.com/press";
  $page = "press";
?>


<?php include('php/header.php'); ?>

<div id="video-overlay">
  <div>
    <div id="close">&times;</div>
    <div id="video-loading">
      <img src="img/animated_spinner.gif" alt="" height="50px">
    </div>
    <video controls="controls" controlslist="nodownload" id="press-video">
      <source type="video/mp4">
    </video>
  </div>
</div>
<div id="video-confirm-modal-overlay">
  <div id="video-confirm-modal">
    <p>Press Continue to play video.</p>
    <div id="modal-btn-grp">
      <span id="modal-continue">Continue</span>
      <span id="modal-cancel">Cancel</span>
    </div>
  </div>
</div>

    <div id="whitespace-header"></div>
    <div id="small-banner">
      <div id="small-banner-overlay"></div>
    </div>

    <section>
      <div id="press">
        <h1>FEATURED ON</h1>
        <h2>And Acclaimed By</h2>
        <hr>
        <div class="press-container">
          <div class="press-logo">
            <a href="http://www.laweekly.com/restaurants/jonathan-gold-reviews-palsaik-samgyeopsal-2171496" target="_blank"><img src="../img/la-weekly.png" alt="LA-Weekly"></a>
          </div>
          <div class="press-logo">
            <a href="http://www.ocweekly.com/restaurants/eight-korean-bbq-proves-that-korean-meat-innovators-are-still-hard-at-work-7904110" target="_blank"><img src="../img/oc-weekly.png" alt="OC-Weekly"></a>
          </div>
          <div class="press-logo">
            <a href="#" id="food-network" class="video-press"><img src="../img/food-network.png" alt="Food-Network"></a>
          </div>
          <div class="press-logo">
            <a href="https://wacowla.com/blog/2015/03/03/eight-korean-bbq-2/" target="_blank"><img src="../img/wacow.png" alt="WaCow"></a>
          </div>
          <div class="press-logo">
            <a href="#" id="cooking-channel" class="video-press"><img src="../img/cooking-channel.png" alt="Cooking-Channel"></a>
          </div>
          <div class="press-logo">
            <a href="https://theknockturnal.com/eight-korean-bbq-delicious-distinctive-singapore-socal-gem/" target="_blank"><img src="../img/the-knockturnal.png" alt="The-Knockturnal"></a>
          </div>
          <div class="press-logo">
            <a href="https://foursquare.com/top-places/los-angeles/best-korean-restaurants" target="_blank"><img src="../img/foursquare.png" alt="Foursquare"></a>
          </div>
          <div class="press-logo">
            <a href="https://www.instagram.com/p/Bc0OCYPFRL0/" target="_blank"><img src="../img/la-bucketlist.png" alt="LA-Bucketlist"></a>
          </div>
          <div class="press-logo">
            <a href="http://pechluck.com/eight-korean-bbq/" target="_blank"><img src="../img/pechluck.png" alt="Pechluck"></a>
          </div>
          <div class="press-logo">
            <a href="https://www.instagram.com/p/Bc3rnBvFR8k/?taken-by=dinela" target="_blank"><img src="../img/dine-la.jpg" alt="Dine-LA"></a>
          </div>
          <div class="press-logo">
            <a href="http://hedonistshedonist.com/blog/eight-korean-bbq/" target="_blank"><img src="../img/hedonist-shedonist.png" alt="Hedonist-Shedonist"></a>
          </div>
          <div class="press-logo">
            <a href="https://www.thechihuo.com/articles/eight-korean-bbq-los-angeles" target="_blank"><img src="../img/chihuo.png" alt="Chihuo"></a>
          </div>
        </div>
      </div>
    </section>

<?php include('php/footer.php'); ?>
