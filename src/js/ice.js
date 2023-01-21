const modals = document.querySelectorAll("[data-modal]");
const openModalBtns = document.querySelectorAll("[data-modal-open]");
const closeModalBtns = document.querySelectorAll("[data-modal-close]");

for (let i = 0; i < modals.length; i++) {
  openModalBtns[i].addEventListener("click", openModal.bind(null, i));
  closeModalBtns[i].addEventListener("click", closeModal.bind(null, i));
}

function openModal(index) {
  modals[index].classList.remove("is-hidden");
}

function closeModal(index) {
  modals[index].classList.add("is-hidden");
}

document.getElementById("myBtn").addEventListener("click", function(){
  window.open("https://www.google.com/maps/place/GoIT:+%D0%9A%D1%83%D1%80%D1%81%D1%8B+%D0%BF%D1%80%D0%BE%D0%B3%D1%80%D0%B0%D0%BC%D0%BC%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D1%8F+%D0%B2+%D0%9A%D0%B8%D0%B5%D0%B2%D0%B5+%7C+IT+%D0%9A%D1%83%D1%80%D1%81%D1%8B/@50.4250354,30.5338423,18z/data=!4m6!3m5!1s0x40d4d96f5139689b:0xa1f7c65300bebad1!4b1!8m2!3d50.4249597!4d30.5340916", "_blank");
});