(() => {
  const refs = {
    openModalBtn: document.querySelector("[our-location-open]"),
    closeModalBtn: document.querySelector("[our-location-close]"),
    modal: document.querySelector("[our-location-modal]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    document.body.classList.toggle("modal-open");
    refs.modal.classList.toggle("is-hidden");
  }
})();
