let prev = document.querySelector(".prev");
let next = document.querySelector(".next");
let headerWidth = document.querySelector("header").clientWidth;
let all = document.querySelector(".all");
let allChildren = Array.from(all.children);

// addevent
counter = 0;
prev.addEventListener("click", function (e) {
  sliderItem(e.currentTarget);
});

next.addEventListener("click", function (e) {
  sliderItem(e.currentTarget);
});

function sliderItem(current) {
  if (current.textContent == "Prev") {
    counter--;
    if (counter <= 0) {
      current.disabled = true;
    } else {
      next.disabled = false;
    }
  } else if ((current.textContent = "Next")) {
    counter++;
    if (counter >= allChildren.length - 1) {
      current.disabled = true;
    } else {
      prev.disabled = false;
    }
  }
  moveTo(counter);
}

function moveTo(count) {
  all.style.marginLeft = `-${all.children[0].clientWidth * count}px`;
}
function loadContent() {
  all.style.width = `${all.children.length * headerWidth}px`;
  allChildren.forEach((item) => {
    item.style.width = `${all.clientWidth / allChildren.length}px`;
  });
  prev.disabled = true;
}
window.onload = loadContent();
