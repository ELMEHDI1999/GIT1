let cart = document.querySelector(".cart");
let count = 0;
let btn;
let random;
function Review(name, job, image, info) {
  this.name = name;
  this.job = job;
  this.image = image;
  this.info = info;
}

let r1 = new Review(
  "Susan Smith",
  "WEB DEVELOPER",
  "person-1.jpeg",
  `I'm baby meggings twee health goth +1. Bicycle rights tumeric
chartreuse before they sold out chambray pop-up. Shaman humblebrag
pickled coloring book salvia hoodie, cold-pressed four dollar toast
everyday carry`
);
let r2 = new Review(
  "Anna Johnson",
  "INTERN",
  "person-3_ipa0mj.jpg",
  `Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier 
  gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.`
);
let r3 = new Review(
  "Bill Anderson",
  "THE BOSS",
  "person-4_t9nxjt (1).jpg",
  `Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic.
  .`
);

let data = [r1, r2, r3];

function setReview(review) {
  const { name, job, image, info } = review;
  let content = ` <div class="imgCircle">
  <img src='image/${image}' alt="" srcset="" />
</div>
<h4 id="author">${name}</h4>
<p id="job">${job}</p>
<p class="info">
 ${info}
</p>
<a href="#" class="btn"><i class="fas fa-chevron-left" id='left'></i></a>
<a href="#" class="btn"><i class="fas fa-chevron-right" id='right'></i></a>
<a href="#" class="random" onclick=rnd()>Random User</a>
`;
  cart.innerHTML = content;
  btn = Array.from(document.querySelectorAll(".btn"));
  random = document.querySelector(".random");
  s();
}

window.onload = setReview(data[0]);

function s() {
  btn.forEach((a) => {
    a.addEventListener("click", function (e) {
      e.preventDefault();
      if (e.target.tagName == "I") {
        let vaiId = e.target.getAttribute("id");
        if (vaiId == "right") {
          count++;
        } else {
          count--;
        }
        if (count >= data.length) {
          count = 0;
        } else if (count < 0) {
          count = data.length - 1;
        }
        setReview(data[count]);
      }
    });
  });
}
function rnd() {
  count = Math.floor(Math.random() * data.length);
  setReview(data[count]);
}
