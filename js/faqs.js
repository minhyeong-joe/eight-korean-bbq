$(function(){function a(){$(".accordion-title").removeClass("active");$(".accordion-content").slideUp(300).removeClass("open")}$(".accordion-title").on("click",function(c){c.preventDefault();var b=$(this).attr("href");if($(this).is(".active")){a()}else{a();$(this).addClass("active");$(".accordion-content"+b).slideDown(300).addClass("open")}})});