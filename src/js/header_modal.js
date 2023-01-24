(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-header-modal-open]'),
    openModalMobileBtn: document.querySelector('[data-header-modal-mobile-open]'),
    closeModalBtn: document.querySelector('[data-header-modal-close]'),
    modal: document.querySelector('[data-header-modal]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);
  refs.openModalMobileBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    document.body.classList.toggle('modal-open');
    refs.modal.classList.toggle('is-hidden');
  }
})();
