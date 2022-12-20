(() => {
  const refs = {
    openModalBtn: document.querySelector("[ingredients_three-open]"),
    closeModalBtn: document.querySelector("[ingredients_three-close]"),
    modal: document.querySelector("[ingredients_three-modal]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
  }
})();
