// Selectores

const content = ["Orquesta en la sinfonica infantil", "Vacaciones en Isla de plata", "Inicio del ACV", "Centro clinico", "Practicas de beisbol", "Ultima consulta con mi neurologo"];

const imgs = document.querySelectorAll(".img");
const modal = document.getElementById("modal");
const modalWindow = document.querySelector(".modal-window");
const modalImage = document.querySelector(".modal-image");
const modalText = document.querySelector(".modal-text");

// Abrir modal

for (let i = 1; i <= imgs.length; i++) {
  const img = imgs[i - 1];

  img.addEventListener("click", () => {
    modalImage.src = img.src;
    modalText.firstElementChild.innerHTML = content[i - 1];
    modalWindow.classList.remove("hidden");
    modalWindow.classList.add("activate");
    modal.style.display = "flex";
  });
}

// Cerrar modal

window.addEventListener("click", (event) => {
  if (event.target == modal) {
    modalWindow.classList.remove("activate");
    modalWindow.classList.add("hidden");

    setTimeout(() => {
      modal.style.display = "none";
    }, 500);
  }
});
