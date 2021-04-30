const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const modalBtn = document.querySelectorAll(".show-modal");
const closeBtn = document.querySelector(".close-modal");

const closeModal = () => {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

const openModal = () => {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

for (let i = 0; i < modalBtn.length; i++) {
  modalBtn[i].addEventListener("click", openModal);
}

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});

closeBtn.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);
