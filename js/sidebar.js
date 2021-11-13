let sideBtn = document.querySelector(".side-btn");
let sidebar = document.querySelector(".sidebar");
let bars = document.querySelector("#bars");

sideBtn.addEventListener("click", function () {
  sidebar.classList.toggle("toggle");
});
bars.addEventListener("click", function () {
  sidebar.classList.add("toggle");
});
