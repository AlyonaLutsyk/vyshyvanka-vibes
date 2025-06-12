(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open]'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
    modal: document.querySelector('[data-modal]'),
  };

  refs.openModalBtn.addEventListener('click', openModal);
  refs.closeModalBtn.addEventListener('click', closeModal);

  function openModal() {
    refs.modal.classList.add('is-open');
    document.body.classList.add('modal-open'); 
  }

  function closeModal() {
    refs.modal.classList.remove('is-open');
    document.body.classList.remove('modal-open');
  }
})();
