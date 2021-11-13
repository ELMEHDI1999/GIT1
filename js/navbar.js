let check = false;
let social = document.querySelector(".social");
let bars = document.querySelector("#bars");
bars.style.display = "none";
let logo = document.querySelector(".logo");
let navbar = document.querySelector(".navbar");

window.addEventListener("resize", function () {
  if (this.innerWidth < 850) {
    check = true;
    bars.style.display = "block";
    social.style.display = "none";
    logo.classList.add("logo-header");
    navbar.classList.add("active-navbar");
  } else {
    check = false;
    bars.style.display = "none";
    social.style.display = "block";
    navbar.classList.remove("active-navbar");
  }
});

function setNav(check) {
  if (check) {
    return `<i class="fas fa-bars" id='bars'></i>`;
  } else {
    return `<i class="fab fa-facebook-square"></i>
      <i class="fab fa-linkedin"></i>
      <i class="fab fa-twitter-square"></i>
      <i class="fab fa-twitch"></i>`;
  }
}

bars.addEventListener("click", function () {
  navbar.classList.toggle("active-navbar");
});
