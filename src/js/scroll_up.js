$(document).ready(function () {
  var scrollup = $('#scroll-up');
  $(window).scroll(function () {
   if ($(this).scrollTop() > 10) {
    scrollup.addClass('scroll-up_active')
   } else {
    scrollup.removeClass('scroll-up_active')
  }
  });
  scrollup.click(function () {
   $("html, body").animate({
    scrollTop: 0
   }, 1500);
  });
});