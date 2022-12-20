(() => {
  const refs = {
    openModalBtn: document.querySelector("[ingredients_one-open]"),
    closeModalBtn: document.querySelector("[ingredients_one-close]"),
    modal: document.querySelector("[ingredients_one-modal]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    document.body.classList.toggle("modal-open");
    refs.modal.classList.toggle("is-hidden");
  }
})();
