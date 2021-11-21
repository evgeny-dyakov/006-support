$(document).ready(function() {
  $('.questions__slider').slick({
    arrows: true,
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    variableWidth: true,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 955,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 628,
        settings: {
          slidesToShow: 1
        }
      },
      {
        breakpoint: 440,
        settings: {
          slidesToShow: 1,
          dots: true,
          arrows: false
        }
      }
    ]
  });
});