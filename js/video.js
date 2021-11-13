let item = document.querySelectorAll(".item");
let slide = document.querySelector(".slide");
let vd = document.querySelector(".vd");

item.forEach((item) => {
  item.addEventListener("click", function (e) {
    uploadVd(e.target.textContent);
  });
});

function uploadVd(state) {
  if (state == "Pause") {
    slide.style.right = "0px";
    vd.pause();
  } else {
    slide.style.right = "50%";
    vd.play();
  }
}
