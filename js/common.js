$(function(){var b;$(".location-tab").mouseenter(function(){clearTimeout(b);$(".location-list").stop(true,true).fadeIn(300)});$(".location-tab").mouseleave(function(){$(".location-list").stop(true,true).fadeOut(200)});$(".location-tab>a").on("click",function(a){a.preventDefault()});$(".location-expand>a").on("click",function(a){a.preventDefault();if($(this).hasClass("expanded")){$(this).removeClass("expanded")}else{$(this).addClass("expanded")}$(".location-menu").slideToggle(300)});$("menubar").on("click",function(){if($("body").hasClass("scrollDisabled")){$("html, body").removeClass("scrollDisabled");if($(window).scrollTop()>=20){$("header").css({"background-color":"rgba(255,255,255,1)"})}else{$("header").css({"background-color":"rgba(255,255,255,0.8)"})}}else{$("html, body").addClass("scrollDisabled");$("header").css({"background-color":"rgba(255,255,255,1)"})}$(".location-menu").slideUp(100);$("#menuList").slideToggle();$(".menubarIcon").toggleClass("change");$(".menu-overlay").toggle()});$(".location-expand").on("click",function(){});$(window).on("scroll",function(){if($(window).scrollTop()>=20){$("header").css({"background-color":"white","box-shadow":" 0px 1px 2px #999"});$("#header-logo").css({height:"40px"});$("#menuList").css({top:"44px"});$("#whitespace-header").css({height:"44px"});$(".location-list").css({top:"4px"});$(".location-list a").addClass("white-background")}else{$("header").css({"background-color":"rgba(255,255,255,0.8)","box-shadow":"none"});$("#header-logo").css({height:"80px"});$("#menuList").css({top:"84px"});$("#whitespace-header").css({height:"84px"});$(".location-list").css({top:"44px"});$(".location-list a").removeClass("white-background")}});if(navigator.userAgent.match(/MSIE 10/i)||navigator.userAgent.match(/Trident\/7\./)||navigator.userAgent.match(/Edge\/12\./)){$("body").on("mousewheel",function(){event.preventDefault();var a=event.wheelDelta;var d=window.pageYOffset;window.scrollTo(0,d-a)})}});$(window).on("load",function(){$("section").animate({opacity:1},700,function(){if($(window).scrollTop()>=20){$("header").css({"background-color":"white","box-shadow":" 0px 1px 2px #999"});$("#header-logo").css({opacity:1,height:"40px"});$("#whitespace-header").css({height:"44px"});$(".location-list a").addClass("white-background")}else{$("header").css({"background-color":"rgba(255,255,255,0.8)","box-shadow":"none"});$("#header-logo").css({opacity:1,height:"80px"});$("#menuList").css({top:"84px"});$("#whitespace-header").css({height:"84px"});$(".location-list").css({top:"44px"});$(".location-list a").removeClass("white-background")}});$("footer").css({opacity:1});$("#banner").animate({opacity:1},800,function(){$("#banner-text").css({opacity:1});$("#scroll-down-animation").delay(500);$("#scroll-down-animation").css({opacity:1})});$("#small-banner").animate({opacity:1},700);$("#follow-us").animate({opacity:1},700)});