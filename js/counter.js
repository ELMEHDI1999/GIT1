let count = 0;
let idC = document.querySelector(".idC");
function Adde(dt) {
  let val = dt.dataset.val;
  if (val == "-") {
    count--;
  } else if (val == "+") {
    count++;
  } else {
    count = 0;
  }
  changColor();
}
function changColor() {
  if (count < 0) {
    idC.style.color = "red";
  } else if (count > 0) {
    idC.style.color = "green";
  } else {
    idC.style.color = "black";
  }
  idC.textContent = count;
}
