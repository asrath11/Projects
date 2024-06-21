let showModel = document.querySelectorAll(".show-model");
let container = document.querySelector(".container");
let hidden = document.querySelector(".hidden");
let modelContainer = document.querySelector(".model-container");
let closeBtn = document.querySelector(".close-btn");
let overlay = document.querySelector(".overlay");


showModel.forEach((model) => {
  model.addEventListener("click", () => {
    modelContainer.classList.remove("hidden");
    container.classList.add("blur");
    overlay.classList.remove("hidden");

    closeBtn.addEventListener("click", () => {
      modelContainer.classList.add("hidden");
      container.classList.remove("blur");
      overlay.classList.add("hidden");
    });
  });
});
