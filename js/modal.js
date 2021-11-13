let btnModal = document.querySelector(".btn-modal");
let over = document.querySelector(".over");
let bars = document.getElementById("bars");

btnModal.addEventListener("click", function () {
  over.classList.toggle("show");
});
bars.addEventListener("click", function () {
  over.classList.toggle("show");
});
