const swiper = new Swiper('.testimonials-swiper', {
  slidesPerView: 1,
  spaceBetween: 20,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 32,
    },
    1280: {
      slidesPerView: 3,
      spaceBetween: 26,
    },
  },
});
