let gen = document.querySelector(".gen");
let p = `<p>Cat gets stuck in tree firefighters try to get cat down firefighters get stuck in tree cat eats firefighters' slippers kitty power ignore the squirrels, you'll never catch them anyway for what a cat-ass-trophy! or purr as loud as possible, be the most annoying cat that you can, and, knock everything off the table. Pretend you want to go out but then don't bite off human's toes, yet disappear for four days and return home with an expensive injury; bite the vet so catch eat throw up catch eat throw up bad birds.</p>`;
let number = document.getElementById("number");
let txtContainer = document.querySelector(".txt-container");

gen.addEventListener("click", function (e) {
  e.preventDefault();
  if (number.value < 0) {
    alert("ENTER POSTIVE NUMBER");
  }
  setText(number.value);
});

function setText(value) {
  let values = parseInt(value);
  let j = "";
  let t = [];
  for (let i = 0; i < values; i++) {
    j += p;
  }
  txtContainer.innerHTML = j;
}
