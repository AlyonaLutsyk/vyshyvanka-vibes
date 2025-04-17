document.addEventListener('DOMContentLoaded', () => {
  const swiper = new Swiper('.collection-swiper', {
      spaceBetween: 20,
      speed: 1200,
      loop: false,
    autoplay: {
      delay: 2000,
      stopOnLastSlide: true,
      disableOnInteraction: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      768: {
        slidesPerView: 2,
        grid: {
          rows: 2,
            fill: 'row',
        },
        slidesPerGroup: 2,
      },
      1280: {
        slidesPerView: 3,
        grid: {
          rows: 2,
          fill: 'row',
        },
        slidesPerGroup: 6,
      },
    },
  });
});
