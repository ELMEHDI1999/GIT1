let c = false;
function set(e) {
  let loremText = document.querySelectorAll(".lorem");
  let btn = document.querySelectorAll(".btn");
  c = !c;
  let value = e.getAttribute("value");
  if (c) {
    cc(e, loremText, btn);
    e.classList.replace("fa-plus-square", "fa-minus-square");
  } else {
    cc(e, loremText, btn);
    e.classList.replace("fa-minus-square", "fa-plus-square");
  }
}
function cc(e, lorem, btn) {
  lorem.forEach((a) => {
    if (a.getAttribute("value") !== e.getAttribute("value")) {
      a.classList.remove("show");
    }
  });
  lorem[e.getAttribute("value")].classList.toggle("show");
}
/**
 * 
 * 
 * let loremText = document.querySelectorAll(".lorem");
  btn.addEventListener("click", function () {
    btn.classList.toggle("fa-plus-square");
    loremText.classList.toggle("show");
  });
 */
