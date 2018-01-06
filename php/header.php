<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="icon" href="../favicon.ico">
    <title><?php echo $title; ?></title>
    <meta name="description" content="<?php echo $description; ?>">
    <meta name="keywords" content="<?php echo $keywords ?>">
    <meta name="author" content="Minhyeong Joe, MJ-WebDev">
    <link rel="canonical" href="<?php echo $permalink ?>">
    <meta property="og:url" content="<?php echo $permalink ?>">
    <meta property="og:image" content="../img/full-logo.png">
    <meta property="og:description" content="<?php echo $description; ?>">
    <meta property="og:title" content="<?php echo $title; ?>">

    <link href="https://fonts.googleapis.com/css?family=Great+Vibes|Open+Sans" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
    <link rel="stylesheet" href="/css/common.css">
    <link rel="stylesheet" href="<?php if(file_exists("css/$page.css")) { echo "/css/$page.css"; } ?>">
  </head>
  <body>
    <header>
      <div id="header-logo">
        <a href="/"><img src="../img/full-logo.png" alt="eight-korean-bbq-logo"></a>
      </div>
      <navbar>
        <ul>
          <li><a href="/" class="<?php if ($page == "home") { echo "current"; } ?>">HOME</a></li>
          <li><a href="/about" class="<?php if ($page == "about") { echo "current"; } ?>">ABOUT</a></li>
          <li><a href="/menu" class="<?php if ($page == "menu") { echo "current"; } ?>">MENU</a></li>
          <li class="location-tab"><a href="#" class="<?php if ($page == "location") { echo "current"; } ?>">LOCATION <i class="fa fa-sort-desc" aria-hidden="true"></i></a>
            <ul class="location-list">
              <li><a href="/los-angeles" class="<?php if ($location == "los-angeles") { echo "current"; } ?>">LOS ANGELES</a></li>
              <li><a href="/buena-park" class="<?php if ($location == "buena-park") { echo "current"; } ?>">BUENA PARK</a></li>
              <li><a href="/singapore" class="<?php if ($location == "singapore") { echo "current"; } ?>">SINGAPORE</a></li>
            </ul>
          </li>
          <li><a href="/press" class="<?php if ($page == "press") { echo "current"; } ?>">PRESS</a></li>
          <li><a href="/contact" class="<?php if ($page == "contact") { echo "current"; } ?>">CONTACT</a></li>
          <li><a href="/franchise" class="<?php if ($page == "franchise") { echo "current"; } ?>">FRANCHISE</a></li>
          <li><a href="/faqs" class="<?php if ($page == "faqs") { echo "current"; } ?>">FAQs</a></li>
        </ul>
      </navbar>
      <!-- mobile -->
      <menubar>
        <div class="menubarIcon"></div>
        <div class="menubarIcon"></div>
        <div class="menubarIcon"></div>
      </menubar>
      <ul id="menuList">
        <li><a href="/" class="<?php if ($page == "home") { echo "current"; } ?>">HOME</a></li>
        <li><a href="/about" class="<?php if ($page == "about") { echo "current"; } ?>">ABOUT</a></li>
        <li><a href="/menu" class="<?php if ($page == "menu") { echo "current"; } ?>">MENU</a></li>
        <li class="location-expand"><a href="#" style="<?php if ($page == "location") { echo "color:black;"; } ?>">LOCATION <i class="fa fa-sort-desc" aria-hidden="true"></i></a>
          <ul class="location-menu">
            <li><a href="/los-angeles" style="<?php if ($location == "los-angeles") { echo "color:black;"; } ?>">LOS ANGELES</a></li>
            <li><a href="/buena-park" style="<?php if ($location == "buena-park") { echo "color:black;"; } ?>">BUENA PARK</a></li>
            <li><a href="/singapore" style="<?php if ($location == "singapore") { echo "color:black;"; } ?>">SINGAPORE</a></li>
          </ul>
        </li>
        <li><a href="/press" class="<?php if ($page == "press") { echo "current"; } ?>">PRESS</a></li>
        <li><a href="/contact" class="<?php if ($page == "contact") { echo "current"; } ?>">CONTACT</a></li>
        <li><a href="/franchise" class="<?php if ($page == "franchise") { echo "current"; } ?>">FRANCHISE</a></li>
        <li><a href="/faqs" class="<?php if ($page == "faqs") { echo "current"; } ?>">FAQs</a></li>
      </ul>
    </header>
