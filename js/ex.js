let color = ["A", "B", "C", "D", "E", "F", 0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let mainBc = document.getElementById("mainBc");
let btn = document.querySelector(".btn");
let idTxt = document.querySelector(".idTxt");
function randomColor(arr) {
  let rC = "#";
  for (let i = 0; i < 6; i++) {
    let random = Math.floor(Math.random() * arr.length);
    rC += arr[random];
  }
  document.body.style.backgroundColor = rC;
  idTxt.textContent = rC;
}
window.onload = randomColor(color);
btn.addEventListener("click", function () {
  randomColor(color);
});
