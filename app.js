$(document).foundation();

$('.picture-grid').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: false,
    dots: false,
    arrows: false,
    mobileFirst: true,
      responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 4,
        infinite: true,
        dots: false
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        dots: false
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});

$('.main-caro').slick({
    dots: false,
  autoplay: true,
  autoplaySpeed: 3000,
});

var lightbox = $('.gallery a').simpleLightbox();

var lightbox2 =$('.gallery2 a').simpleLightbox();

var lightbox3 =$('.gallery3 a').simpleLightbox();
  