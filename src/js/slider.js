// СЛАЙДЕР OWL-CAROUSEL:
$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
    loop: true,
    margin: 30,
    nav: true,    
    navText: ['<img src="img/portfolio/left-arrow.png" alt="">','<img src="img/portfolio/right-arrow.png" alt="">'],
    autoplay: true,
    autoplayTimeout: 10000,
    autoplayHoverPause: true,
    smartSpeed: 2000,
    responsive: {
      0:{
        items:1
      },
      769:{
        items:2
      },
      1201:{
        items:3
      },
    }
  });
});
// СЛАЙДЕР SLICK:
// $(document).ready(function(){

//   $('.slider').slick({
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     prevArrow: $('.arrow_left'),
//     nextArrow: $('.arrow_right'),
//     responsive: [
//       {
//         breakpoint: 2560,
//         settings: {
//           slidesToShow: 3,
//           slidesToScroll: 1,
//           infinite: true
//         }
//       },
//       {
//         breakpoint: 1200,
//         settings: {
//           slidesToShow: 2,
//           slidesToScroll: 1,
//           infinite: true
//         }
//       },
//       {
//         breakpoint: 769,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1,
//           infinite: true
//         }
//       },
      
//     ]
//   })
// });