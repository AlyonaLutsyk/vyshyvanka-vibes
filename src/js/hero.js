document.addEventListener('DOMContentLoaded', function () {
  const btn = document.querySelector('.hero-btn');
  if (btn) {
    btn.addEventListener('click', function () {
      btn.classList.toggle('active'); // стрілка обертається одразу

      const targetSelector = btn.dataset.scrollTo;
      const target = document.querySelector(targetSelector);

      if (target) {
        setTimeout(() => {
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
          });
        }, 800); // 2.5 секунди затримки перед прокруткою
      }
    });
  }
});