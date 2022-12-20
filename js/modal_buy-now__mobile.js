(() => {
  const refs = {
    openModalBtn: document.querySelector("[buy-now__mobile-open]"),
    closeModalBtn: document.querySelector("[buy-now__mobile-close]"),
    modal: document.querySelector("[buy-now__mobile-modal]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
  }
})();
