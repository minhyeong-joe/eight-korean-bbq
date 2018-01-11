
<?php
  $title = "FRANCHISE | EIGHT KOREAN BBQ";
  $description = "Looking for franchise opportunity with Eight Colors F&B Inc.? We’re seeking savvy, passionate franchise owners to join the excitement as we expand. Ideal candidates will possess the following: Passion for the Eight Korean BBQ Product, Ability to lead, but follow a system, Food industry and management experience, Financial capability";
  $keywords = "franchise, Eight, Korean, BBQ, pork, LA, Los Angeles, KTown, Koreatown, Buena Park, palsaik, eight colors, best, ever, beef";
  $permalink = "https://eightkoreanbbq.com/franchise";
  $page = "franchise";
?>


<?php include('php/header.php'); ?>

    <!-- <div id="whitespace-header"></div> -->
    <!-- <div id="small-banner">
      <div id="small-banner-overlay"></div>
    </div> -->

    <section>
      <div id="franchise">
        <img src="../img/logo-8colorfnb.jpg" alt="">
        <h2>Apply for Franchise Ownership</h2>
        <div id="franchise-list">
          <p>We’re seeking savvy, passionate franchise owners to join the excitement as we expand. Ideal candidates will possess the following:</p>
          <ul>
            <li>Passion for the Eight Korean BBQ Product</li>
            <li>Ability to lead, but follow a system</li>
            <li>Food industry and management experience</li>
            <li>Financial capability</li>
          </ul>
        </div>
        <div id="form-wrapper">
          <h3>Get a Free Franchise Consultation</h3>
          <p>Complete the form below and we will contact you to learn more about this amazing opportunity</p>
          <form action="#" method="POST">
            <label for="first">Full Name <font color="red">*</font></label>
            <input type="text" id="first" name="first" placeholder="First">
            <input type="text" id="last" name="last" placeholder="Last">
            <label for="email">Email Address <font color="red">*</font></label>
            <div id="invalidEmailWrapper">
              <p>* Invalid Email Address</p>
            </div>
            <input type="text" id="email" name="email">
            <label>Are you seeking a location in the USA? <font color="red">*</font></label>
            <select name="location-usa" id="location-usa">
              <option value="" selected style="display:none;"></option>
              <option value="YES">Yes</option>
              <option value="NO">No</option>
            </select>
            <label>Do you have any food service experience? <font color="red">*</font></label>
            <select name="food-experience" id="food-experience">
              <option value="" selected style="display:none;"></option>
              <option value="YES">Yes</option>
              <option value="NO">No</option>
            </select>
            <label>Will you run day to day operations yourself? <font color="red">*</font></label>
            <select name="run-operations" id="run-operations">
              <option value="" selected style="display:none;"></option>
              <option value="YES">Yes</option>
              <option value="NO">No</option>
            </select>
            <label>Cash available to invest <font color="red">*</font></label>
            <select name="cash-invest" id="cash-invest">
              <option value="" selected style="display:none;"></option>
              <option value="$0-$600,000">$0-$600,000</option>
              <option value="$600,000-$700,000">$600,000-$700,000</option>
              <option value="$700,000-$800,000">$700,000-$800,000</option>
              <option value="$800,000-$900,000">$800,000-$900,000</option>
              <option value="$900,000-$1,000,000">$900,000-$1,000,000</option>
              <option value="More than $1,000,000">More than $1,000,000</option>
            </select>
            <label for="message">Message <font color="red">*</font></label>
            <textarea name="message" id="message"></textarea>
            <input type="text" name="honeypot" id="honeypot" hidden>
            <p id="required" style="font-size: 14px; color: red; display: none;">* Please complete the required field.</p>
            <input type="submit" id="submit" name="submit" value="SUBMIT">
            <p id="result"></p>
          </form>
        </div>

      </div>
    </section>

<?php include('php/footer.php'); ?>
