$(document).ready(function () {


  //打開產品介紹
  $('.dropdown').click(function (event) {
    event.preventDefault();
    $('.dropdown').toggleClass('active');
    $('.dropdown-open').slideToggle();
  });

  $('.dropdown-open a').click(function (event) {
    $('.dropdown-open').hide();
  });

  $("a[href$='top']").addClass('fas fa-arrow-circle-up');
  $('.top a').click(function(e){
    e.preventDefault();
    $('html,body').animate({scrollTop:0},1000)
  })

  lightbox.option({
    'resizeDuration': 100,
    'wrapAround': true,
    'fadeDuration': 1000,
    'positionFromTop': 400,
    'wrapAround':true,
    // 'maxWidth': 2000,
    'fitImagesInViewport':false,
  });
});

const swiper = new Swiper('.swiper', {
  // Optional parameters
  // direction: 'vertical',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  effect: 'cube',

  autoplay: {
    delay: 2000,
  },
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});

