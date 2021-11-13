let submit = document.getElementById("submit");
let values = document.getElementById("values");
let Textalert = document.querySelector(".alert");
let parentElement = document.querySelector(".item");
let st = document.querySelector(".setItem");
let itemClear = document.querySelector("#clear");
let data = JSON.parse(localStorage.getItem("data")) || [];
let edit;
let deleted;
let btn = document.getElementById("btn");

submit.addEventListener("submit", function (e) {
  e.preventDefault();
  let textBtn = btn.textContent;
  if (textBtn == "Submit") {
    checkSame(values.value, addAlert);
  } else if (textBtn == "Edit") {
    let id = btn.getAttribute("data-id");
    sekName(values.value, id);
  }
  setProduct(data);
  btn.textContent = "Submit";
  values.value = "";
});
function sekName(val, key) {
  const io =
    data.filter((a) => {
      return a == val;
    }).length > 0
      ? alert("YOUR VALUE IS EXIST")
      : (data = data.map((a, i) => {
          if (i == key) {
            a = values.value;
          }
          return a;
        }));
  localStorage.setItem("data", JSON.stringify(data));
  return io;
}
function addAlert(text) {
  Textalert.style.display = "block";
  if (text == "") {
    Textalert.classList.add("notexist");
    Textalert.classList.remove("exist");
    Textalert.textContent = "Please Enter Value";
  } else {
    Textalert.classList.add("exist");
    Textalert.classList.remove("notexist");
    Textalert.textContent = "Item Add To List";
    addTodata(values.value);
    setProduct(data);
    checkClear(data);
  }
  setTimeout(() => {
    Textalert.style.display = "none";
  }, 4000);
}

function addTodata(text) {
  data.push(text);
  localStorage.setItem("data", JSON.stringify(data));
}
function setProduct(item) {
  const mapItem = item
    .map((i, index) => {
      return `<div class="item">
      <div class="data">
        <p>${i}</p>
      </div>
      <div class="icon">
        <button class="edit" data-id=${index}>
          <i class="far fa-edit"></i>
        </button>
        <button class="delete" data-id=${index}>
          <i class="fas fa-trash-alt"></i>
        </button>
      </div>
    </div>`;
    })
    .join("");
  st.innerHTML = mapItem;
  edit = document.querySelectorAll(".edit");
  deleted = document.querySelectorAll(".delete");
  load();
}
function checkClear(data) {
  return data.length > 0
    ? (itemClear.style.display = "block")
    : (itemClear.style.display = "none");
}

function edited(id) {
  btn.textContent = "Edit";
  btn.setAttribute("data-id", id);
  const filtered = data.find((a, b) => {
    return b == id;
  });
  values.value = filtered;
}
function filtera(id) {
  const filtered = data.filter((a, b) => {
    return b != id;
  });
  localStorage.setItem("data", JSON.stringify(filtered));
  return filtered;
}

window.onload = function () {
  setProduct(data);
  checkClear(data);
  edit = document.querySelectorAll(".edit");
  load();
};

function load() {
  edit.forEach((item) => {
    item.addEventListener("click", function (e) {
      let value = e.target.parentElement.dataset.id;
      edited(value);
    });
  });

  deleted.forEach((item) => {
    item.addEventListener("click", function (e) {
      let value = e.currentTarget.dataset.id;
      setProduct(filtera(value));
    });
  });
}

function checkSame(item, f) {
  const Same =
    data.filter((a) => {
      return a == item;
    }).length > 0
      ? alert("You have Entered This Value")
      : f(values.value);
}
itemClear.addEventListener("click", function () {
  data = [];
  checkClear(data);
  localStorage.setItem("data", JSON.stringify(data));
  setProduct(data);
});
