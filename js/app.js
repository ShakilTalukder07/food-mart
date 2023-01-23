$(document).ready(function(){
  $('.food-slider').slick({
    arrows:true,
    dots:false,
    autoplay:true,
    infinite:true,
    speed:300,
    centerPadding: '40px',
    slidesToShow: 3,
    // centerMode:true,
    // variableWidth: true,

    nextArrow:'.next-btn',
    prevArrow:'.prev-btn',

    responsive:[
    {
      breakpoint:992,
      settings:{
        arrows: true,
        // centerMode: true,
        centerPadding: '40px',
        slidesToShow: 2
      }
    }]
    
  });

  $('.nav-trigger').click(function(){
    $('.site-content-wrapper').toggleClass('scaled')
  })

});


// $('.slider').slick({
//   centerMode: true,
//   centerPadding: '60px',
//   slidesToShow: 3,
//   responsive: [
//     {
//       breakpoint: 768,
//       settings: {
//         arrows: false,
//         centerMode: true,
//         centerPadding: '40px',
//         slidesToShow: 3
//       }
//     },
//     {
//       breakpoint: 480,
//       settings: {
//         arrows: false,
//         centerMode: true,
//         centerPadding: '40px',
//         slidesToShow: 1
//       }
//     }
//   ]
// });


  //   arrows:true,
  //   slidesToShow: 3,
  //   responsive: [
  //   {
  //     breakpoint: 768,
  //     settings: {
  //       arrows: true,
  //       // centerMode: true,
  //       centerPadding: '20px',
  //       slidesToShow: 2
  //     }
  //   },
  //   {
  //     breakpoint: 480,
  //     settings: {
  //       arrows: true,
  //       centerMode: true,
  //       centerPadding: '40px',
  //       slidesToShow: 1
  //     }
  //   }
  // ]
    // dots:true,
    // appendDots:'.slider-dots',
    // dotsClass:'dots'