(() => {
  const refs = {
    openModalBtn: document.querySelector("[ingredients-open]"),
    closeModalBtn: document.querySelector("[ingredients-close]"),
    modal: document.querySelector("[ingredients-modal]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    document.body.classList.toggle("modal-open");
    refs.modal.classList.toggle("is-hidden");
  }
})();
