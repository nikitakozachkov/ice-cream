(() => {
  const refs = {
    openModalBtn: document.querySelector("[buy-now-open]"),
    closeModalBtn: document.querySelector("[buy-now-close]"),
    modal: document.querySelector("[buy-now-modal]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    document.body.classList.toggle("modal-open");
    refs.modal.classList.toggle("is-hidden");
  }
})();
