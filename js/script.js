$(document).ready(function() {
  $('.questions__slider').slick({
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    variableWidth: true,
    waitForAnimate: false,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3
        }
      }, {
        breakpoint: 955,
        settings: {
          slidesToShow: 2
        }
      }, {
        breakpoint: 628,
        settings: {
          slidesToShow: 1,
          arrows: false,
          dots: true
        }
      }
    ]
  });
});