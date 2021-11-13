function setTime() {
  let list = document.querySelector(".list");
  let currentDate = new Date(2021, 10, 11, 20, 40);
  let dataNow = new Date();
  let diffrent = currentDate - dataNow;
  let oneDay = 24 * 60 * 60 * 1000;
  let onehours = 60 * 60 * 1000;
  let oneMin = 60 * 1000;
  let day = Math.floor(diffrent / oneDay);
  let hours = Math.floor((diffrent % oneDay) / onehours);
  let min = Math.floor((diffrent % onehours) / oneMin);
  let seconde = Math.floor((diffrent % oneMin) / 1000);
  let date = [day, hours, min, seconde];
  let indexDey = ["Day", "Hours", "Min", "Sec"];
  function check(item) {
    if (item < 10) {
      return `0${item}`;
    }
    return item;
  }
  const show = date
    .map((item, index) => {
      return `<li>${check(item)}</br>${indexDey[index]}</li>`;
    })
    .join("");
  list.innerHTML = show;
  if (diffrent < 0) {
    clearInterval(counddown);
    list.innerHTML = "Finiiiiiish";
  }
}
let counddown = setInterval(function () {
  setTime();
}, 1000);
