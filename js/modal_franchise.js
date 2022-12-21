(() => {
  const refs = {
    openModalBtn: document.querySelector("[franchise-open]"),
    closeModalBtn: document.querySelector("[franchise-close]"),
    modal: document.querySelector("[franchise-modal]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    document.body.classList.toggle("modal-open");
    refs.modal.classList.toggle("is-hidden");
  }
})();
