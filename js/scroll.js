const link = Array.from(document.querySelectorAll(".link ul li a"));
const parentlink = document.querySelector("header");
let boxes = Array.from(document.querySelectorAll(".boxes"));
let co = 0;

link.forEach((item) => {
  item.addEventListener("click", function (e) {
    e.preventDefault();
    let placeLink = e.target.dataset.place;
    window.scrollTo({
      left: 0,
      top: Filtered(placeLink),
      behavior: "smooth",
    });
  });
});

function Filtered(data) {
  const filter = boxes.filter((item) => {
    return item.dataset.place === data;
  });
  return filter[0].offsetTop - parentlink.getBoundingClientRect().height;
}

