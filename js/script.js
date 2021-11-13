function squareSum(numbers) {
  let val = numbers
    .map((d, i) => {
      return d * d;
    })
    .reduce((a, b) => {
      return (a += b);
    }, 0);
  return val;
}

function countSheeps(arrayOfSheep) {
  // TODO May the force be with you
  let c = 0;
  let b = arrayOfSheep.forEach((a) => {
    if (a === true) {
      c += 1;
    }
  });
  return c;
}

function countSheeps(arr) {
  return arr.filter(Boolean).length;
}

function century(year) {
  // Finish this :)
  return Math.ceil(year / 100);
}

function basicOp(operation, value1, value2) {
  switch (operation) {
    case "+":
      return value1 + value2;
    case "-":
      return value1 - value2;
    case "*":
      return value1 * value2;
    case "/":
      return value1 / value2;
    default:
      return 0;
  }
}

function isDivisible(n, x, y) {
  if (n % x == 0 || n % y == 0) {
    return true;
  } else {
    return false;
  }
}

function digitize(n) {
  return [...n.toString()].reverse().map((d, i) => {
    return parseInt(d);
  });
}
function digitize(n) {
  return Array.from(String(n), Number).reverse();
}

function abbrevName(name) {
  return (
    name.split(" ")[0][0].toUpperCase() +
    "." +
    name.split(" ")[1][0].toUpperCase()
  );
}

function abbrevName(name) {
  return name
    .split(" ")
    .map((i) => i[0].toUpperCase())
    .join(".");
}
function findNeedle(haystack) {
  // your code here
  const inde = haystack.findIndex((d) => {
    return d == "needle";
  });
  return `found the needle at position ${inde}`;
}
function findNeedle(haystack) {
  return "found the needle at position " + haystack.indexOf("needle");
}

function invert(array) {
  if (array.length == 0) {
    return [];
  } else {
    let x = array.map((d) => {
      return -d;
    });
    return x;
  }
}

function booleanToString(b) {
  return b ? "true" : "false";
}

function ff(input) {
  let n = input.reduce((a, b) => {
    if (b > 0) {
      a++;
    }
    return a;
  }, 0);
  let z = input.reduce((a, b) => {
    if (b < 0) {
      a = a + b;
    }
    return a;
  }, 0);
  return [n, z];
}
function countPositivesSumNegatives(input) {
  return input && input.length
    ? [
        input.filter((p) => p > 0).length,
        input.filter((n) => n < 0).reduce((a, b) => a + b, 0),
      ]
    : [];
}

function past(h, m, s) {
  return (h * 3600 + m * 60 + s) * 1000;
}

function hero(bullets, dragons) {
  //Get Coding!
  if (bullets / 2 == dragons || bullets / 2 > dragons) {
    return true;
  }
  return false;
}

function fakeBin(x) {
  return x
    .split("")
    .map((a) => {
      parseInt(a);
      if (a < 5) {
        a = "0";
      } else {
        a = "1";
      }
      return a;
    })
    .join("");
}

function check(a, x) {
  if (a.includes(x) == 1) {
    return true;
  }
  return false;
}

function bmi(weight, height) {
  let p = weight / height;
  if (p <= 18.5) {
    return "Underweight";
  } else if (p <= 25) {
    return "Normal";
  } else if (p <= 30) {
    return "Overweight";
  } else {
    return "Overweight";
  }
}
function bmi(weight, height) {
  var formula = weight / Math.pow(height, 2);
  switch (true) {
    case formula <= 18.5:
      return "Underweight";
    case formula <= 25.0:
      return "Normal";
    case formula <= 30:
      return "Overweight";
    default:
      return "Obese";
  }
}

function arrayPlusArray(arr1, arr2) {
  return [...arr1, ...arr2].reduce((a, b) => {
    return (a += b);
  });
}

function DNAtoRNA(dna) {
  // create a function which returns an RNA sequence from the given DNA sequence
  return dna
    .split("")
    .map((d) => {
      if (d === "T") {
        d = "U";
      }
      return d;
    })
    .join("");
}

function DNAtoRNA(dna) {
  return dna.replace(/T/g, "U");
}
function DNAtoRNA(dna) {
  return dna.split("T").join("U");
}

function points(games) {
  let pt = 0;
  // your code here
  for (let i = 0; i < games.length; i++) {
    let dt = games[i].split(":");
    let x = dt[0];
    let y = dt[1];

    if (x > y) {
      pt += 3;
    } else if (x < y) {
      pt += 0;
    } else if (x == y) {
      pt += 1;
    }
  }
  return pt;
}
function points(games) {
  let total = 0;
  games.map((game) => {
    if (game[0] === game[2]) {
      total += 1;
    } else if (game[0] > game[2]) {
      total += 3;
    }
  });
  return total;
}
/*const points = (games) =>
  games.reduce((output, current) => {
    return (output +=
      current[0] > current[2] ? 3 : current[0] === current[2] ? 1 : 0);
  }, 0);
*/
function countBy(x, n) {
  let z = [];
  let w = 0;
  for (let i = 0; i < n; i++) {
    z.push((w += x));
  }
  return z;
}

function simpleMultiplication(number) {
  if (number % 2 == 0) {
    return number * 8;
  }
  return number * 9;
}

function rentalCarCost(d) {
  if (d >= 7) {
    return d * 40 - 50;
  } else if (d >= 3) {
    return d * 40 - 20;
  } else {
    return d * 40;
  }
}

function betterThanAverage(classPoints, yourPoints) {
  // Your code here
  const average = classPoints.reduce((a, b) => a + b, 0) / classPoints.length;

  if (yourPoints > average) {
    return true;
  }
  return false;
}

function firstNonConsecutive(arr) {
  let check = false;
  if (arr.length >= 2) {
    for (let x = 1; x < arr.length; x++) {
      if (arr[x] - 1 === arr[x - 1]) {
        check = true;
      } else {
        return arr[x];
      }
    }
  }
  if (check) {
    return null;
  }
}

function firstNonConsecutive(arr) {
  for (let i = 0; i < arr.length - 1; ++i) {
    if (arr[i] + 1 !== arr[i + 1]) {
      return arr[i + 1];
    }
  }
  return null;
}

function sumArray(array) {
  let m = 0;
  let n = 0;
  let all = 0;
  if (array.length === 0) {
    return null;
  } else if (array.length === 1) {
    return 0;
  }
  let min = Math.min(...array);
  let max = Math.max(...array);
  let summe = array.map((d) => {
    if (d == min) {
      m += 1;
    } else if (d == max) {
      n += 1;
    } else {
      all += d;
    }
  });
  if (m == 2) {
    all += min;
  }
  if (n == 2) {
    all += max;
  }
  return all;
}

function sumMix(x) {
  return x.reduce((a, b) => {
    let c = parseInt(b);
    a += c;
    return a;
  }, 0);
}

const quarterOf = (month) => {
  console.log([0, 12]);
};

/*const quarterOf = (month) => {
  return Math.ceil(month / 3);
};*/

// Smash Words
function smash(words) {
  "use strict";
  return words.join(" ");
}

function cockroachSpeed(s) {
  //Good Luck!
  return Math.floor(s * 27.7778);
}

function setAlarm(employed, vacation) {
  if (employed && vacation) {
    return false;
  } else if (employed) {
    return true;
  }

  return false;
}
function setAlarm(employed, vacation) {
  return employed && !vacation;
}

var countSheep = function (num) {
  let s = "";
  for (let i = 1; i <= num; i++) {
    s += `${i} sheep...`;
  }
  return s;
};
class Kata {
  static getVolumeOfCuboid(length, width, height) {
    return width * height * length;
  }
}
function solution(a, b) {
  if (a.length > b.length) {
    return `${b}${a}${b}`;
  } else if (a.length < b.length) {
    return `${a}${b}${a}`;
  }
}

function getGrade(s1, s2, s3) {
  let avg = (s1 + s2 + s3) / 3;
  switch (true) {
    case avg >= 90 && avg <= 100:
      return "A";
      break;
    case avg >= 80 && avg < 90:
      return "B";
      break;
    case avg >= 70 && avg < 80:
      return "C";
      break;
    case avg >= 60 && avg < 70:
      return "D";
      break;
    case avg >= 0 && avg < 70:
      return "F";
      break;
  }
}
//Basic variable assignment

function enough(cap, on, wait) {
  // your code here
  let car = on + wait;
  if (car <= cap) {
    return 0;
  }

  return on + wait - cap;
}

function feast(beast, dish) {
  //your function hered
  let dS = beast[0];
  let dE = beast[beast.length - 1];
  let rS = dish[0];
  let rE = dish[dish.length - 1];
  if (dS === rS && dE === rE) {
    return true;
  }
  return false;
}
function feast(beast, dish) {
  return (
    beast[0] === dish[0] && beast[beast.length - 1] === dish[dish.length - 1]
  );
}

function fixTheMeerkat(arr) {
  //your code here
  return arr
    .map((d) => {
      return d;
    })
    .reverse();
}

String.prototype.toAlternatingCase = function () {
  // Define your method here :)
  return this.split("")
    .map((d) => {
      if (d == d.toUpperCase()) {
        d = d.toLowerCase();
      } else {
        d = d.toUpperCase();
      }
      return d;
    })
    .join("");
};
/*String.prototype.toAlternatingCase = function () {
  return this.split("")
    .map((a) => (a === a.toUpperCase() ? a.toLowerCase() : a.toUpperCase()))
    .join("");
};*/

function expressionMatter(a, b, c) {
  let one = 0;
  let tt = [a, b, c].map((d) => {
    if (d == 1) {
      one++;
    }
  });
  if (one >= 2) {
    return a + b + c;
  } else {
    let max = a * (b + c);
    let z = a * b * c;
    let g = a + b * c;
    let t = (a + b) * c;
    let arr = [max, z, g, t];
    let mx = Math.max(...arr);
    return mx;
  }
}
function expressionMatter(a, b, c) {
  return Math.max(a + b + c, a * b * c, (a + b) * c, a * (b + c));
}

function updateLight(current) {
  //your code here!
  if (current == "green") {
    return "yellow";
  } else if (current == "yellow") {
    return "red";
  } else {
    return "green";
  }
}
function updateLight(current) {
  return current === "yellow"
    ? "red"
    : current === "green"
    ? "yellow"
    : "green";
}

function createArray(number) {
  var newArray = [];

  for (var counter = 1; counter <= number; counter++) {
    newArray.push(counter);
  }

  return newArray;
}

function square(n) {
  return n * n;
}
const isDivideBy = (number, a, b) => number % a === 0 && number % b === 0;

function otherAngle(a, b) {
  let r = 180 - (a + b);
  if (r > 0) {
    return r;
  }
  return 0;
}

const areaOrPerimeter = function (l, w) {
  // Return your answer
  if (l == w) {
    return l * w;
  }
  return 2 * (l + w);
};

function doubleChar(str) {
  return str
    .split("")
    .map((d) => {
      return d.repeat(2);
    })
    .join("");
}

const rps = (p1, p2) => {
  if (p1 == "scissors" && p2 == "rock") {
    return `Player 2 won!`;
  } else if (p1 == "rock" && p2 == "scissors") {
    return `Player 1 won!`;
  } else if (p1 == p2) {
    return `Draw!`;
  } else if (p1 == "paper" && p2 == "scissors") {
    return `Player 2 won!`;
  } else if (p1 == "scissors" && p2 == "paper") {
    return `Player 1 won!`;
  } else if (p1 == "paper" && p2 == "rock") {
    return `Player 1 won!`;
  } else if (p1 == "rock" && p2 == "paper") {
    return `Player 2 won!`;
  }
};
// https://www.codewars.com/kata/5672a98bdbdd995fad00000f/solutions
//Find numbers which are divisible by given number

function divisibleBy(numbers, divisor) {
  return numbers.filter((d) => {
    return d % divisor == 0;
  });
}

String.prototype.isUpperCase = function () {
  // your code here
  let c = 0;
  let b = this.split("").map((d) => {
    if (d == d.toUpperCase()) {
    } else {
      c++;
    }
  });
  if (c > 0) {
    return false;
  }
  return true;
};

String.prototype.isUpperCase = function () {
  return this == this.toUpperCase();
};

function greet(language) {
  let lang = {
    english: "Welcome",
    czech: "Vitejte",
    danish: "Velkomst",
    dutch: "Welkom",
    estonian: "Tere tulemast",
    finnish: "Tervetuloa",
    flemish: "Welgekomen",
    french: "Bienvenue",
    german: "Willkommen",
    irish: "Failte",
    italian: "Benvenuto",
    latvian: "Gaidits",
    lithuanian: "Laukiamas",
    polish: "Witamy",
    spanish: "Bienvenido",
    swedish: "Valkommen",
    welsh: "Croeso",
  };
  if (
    language == "IP_ADDRESS_INVALID" ||
    language == "IP_ADDRESS_NOT_FOUND" ||
    language == "IP_ADDRESS_REQUIRED"
  ) {
    return "Welcome";
  }
  return `${lang[language]}`;
}
/*function greet(lang) {
  return langs[lang] || langs["english"];
}*/
//Welcome!

function twiceAsOld(dadYearsOld, sonYearsOld) {
  // your code here
  let y = sonYearsOld - (dadYearsOld - sonYearsOld);
  if (y < 0) {
    return -y;
  }
  return y;
}
/*function twiceAsOld(dadYearsOld, sonYearsOld) {
  return Math.abs(dadYearsOld - 2 * sonYearsOld);
}*/

function removeEveryOther(arr) {
  //your code here
  let t = [];
  for (let i = 0; i < arr.length; i += 2) {
    t.push(arr[i]);
  }
  return t;
}

function removeEveryOther(arr) {
  return arr.filter(function (elem, index) {
    return index % 2 === 0;
  });
}
function removeEveryOther(arr) {
  //your code here
  for (var i = 1; i < arr.length; i++) {
    arr.splice(i, 1);
  }
  return arr;
}

function oddCount(n) {
  // your code here
  let t = [];
  for (let i = 1; i < n; i += 2) {
    t.push(i);
  }
  return t.length;
}
const odCount = (n) => n / 2;

function twoSort(s) {
  let d = s.sort();
  let f = d[0];
  return f
    .split("")
    .map((a) => {
      return a;
    })
    .join("***");
}
/*function getAge(inputString) {
  // return correct age (int). Happy coding :)
  return parseInt(inputString);
}
function getAge(inputString) {
  return +inputString[0];
}*/

function index(array, n) {
  //your code here
  let s = array.filter((a, i) => {
    return i == n;
  });
  if (s.length > 0) {
    return s.join("") ** n;
  }
  return -1;
}
/*function index(array, n) {
  return array.length > n ? Math.pow(array[n], n) : -1;
}
function index(array, n) {
  return Math.pow(array[n], n) || -1;
}*/
function hoopCount(n) {
  //your code goes here
  return n >= 10
    ? "Great, now move on to tricks"
    : "Keep at it until you get it";
}

function checkAlive(health) {
  if (health <= 0) {
    return false;
  } else {
    return true;
  }
}

function strCount(str, letter) {
  //code here
  return str.split(letter).length - 1;
}

function howManyLightsabersDoYouOwn(name) {
  return name == "Zach" ? 18 : 0;
}

var Ball = function (ballType = "regular") {
  this.ballType = ballType;
  return this.ballType;
};

function stringy(size) {
  // your code here
  let s = "";
  for (let i = 0; i < size; i += 1) {
    s[i - 1] == "1" ? (s += "0") : (s += "1");
  }
  return s;
}
const string = (size) => "10".repeat(size).slice(0, size);
//Switch it Up!

switchItUp = (n) =>
  [
    "Zero",
    "One",
    "Two",
    "Three",
    "Four",
    "Five",
    "Six",
    "Seven",
    "Eight",
    "Nine",
  ][n];

/*var Animal = "Giraffe";
switch (Animal) {
  case "Cow":
  case "Giraffe":
  case "Dog":
  case "Pig":
    console.log("This animal is not extinct.");
    break;
  case "Dinosaur":
  default:
    console.log("This animal is extinct.");
}*/
function testEven(n) {
  //Your awesome code here!

  // Correct the mistakes of the character recognition software

  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch
  return n % 2 == 0;
}

function multiTable(number) {
  // good luck
  let a = "";
  if (number >= 1 && number <= 10) {
    for (let i = 1; i <= 10; i++) {
      let val = i * number;
      a += `${i} * ${number} = ${i * number}\n`;
    }
    return a.slice(0, -1);
  }
}

function generateRange(min, max, step) {
  let a = [];
  for (let m = min; m <= max; m += step) {
    a.push(m);
  }
  return a;
}

function findDifference(a, b) {
  //loading...
  let j = Math.abs(
    a.reduce((a, b) => {
      return (a *= b);
    }, 1) -
      b.reduce((a, b) => {
        return (a *= b);
      }, 1)
  );

  return j;
}

function howMuchILoveYou(nbPetals) {
  let phrase = {
    0: "not at all",
    1: "I love you",
    2: "a little",
    3: "a lot",
    4: "passionately",
    5: "madly",
  };
  return phrase[nbPetals % 6];
}

function move(position, roll) {
  // return the new position
  return position + roll * 2;
}

function humanYearsCatYearsDogYears(humanYears) {
  switch (humanYears) {
    case 1:
      return [1, 15, 15];
    case 2:
      return [2, 24, 24];
    default:
      return [humanYears, (humanYears - 2) * 4 + 24, (humanYears - 2) * 5 + 24];
  }
}

function getRealFloor(n) {
  if (n >= 13) {
    return n - 2;
  } else if (n == 0) {
    return 0;
  } else if (n < 0) {
    return n;
  }
  return n - 1;
}

function xor(a, b) {
  // TODO: Program Me
  return a && b ? false : a || b ? true : false;
}

function gooseFilter(birds) {
  var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
  let v = [];
  let t = birds.forEach((a) => {
    if (geese.includes(a)) {
    } else {
      v.push(a);
    }
  });
  return v;
}

function arr(N = 0) {
  let fa = [];
  for (let i = 0; i < N; i++) {
    fa.push(i);
  }
  return fa;
}

function peopleWithAgeDrink(old) {
  let v = "";
  switch (true) {
    case old < 14:
      v = "drink toddy";
      break;

    case old < 18:
      v = "drink coke";
      break;

    case old < 21:
      v = "drink beer";
      break;

    case old >= 21:
      v = "drink whisky";
      break;
  }
  return v;
}
parseInt;
/*const peopleWithAgeDrink = (age) =>
  age < 14
    ? "drink toddy"
    : age < 18
    ? "drink coke"
    : age < 21
    ? "drink beer"
    : "drink whisky";*/

function sumStr(a, b) {
  if (a == "" && b == "") {
    return `0`;
  } else if (a == "") {
    return `${b}`;
  } else if (b == "") {
    return `${a}`;
  }

  let v = parseInt(b) + parseInt(a);
  return `${v}`;
}
function sumStr(a, b) {
  return String(Number(a) + Number(b));
}
function sumStr(a, b) {
  return ((parseInt(a) || 0) + (parseInt(b) || 0)).toString();
}

function mouthSize(animal) {
  // code here
  return animal.toLowerCase() == "alligator" ? "small" : "wide";
}
// nyh event
const nthEven = (n) => (n - 1) * 2;

function hello(name) {
  return name
    ? `Hello, ${name.charAt(0).toUpperCase()}${name.slice(1).toLowerCase()}!`
    : `Hello, World!`;
}

function between(a, b) {
  // your code here
  let arr = [];
  for (let i = a; i <= b; i++) {
    arr.push(i);
  }
  return arr;
}

function checkForFactor(base, factor) {
  // code here
  return base % factor == 0;
}

function dutyFree(normPrice, discount, hol) {
  return Math.floor((hol / normPrice / discount) * 100);
}

function well(x) {
  let p = x.filter((a) => {
    return a == "good";
  }).length;
  return p == 0 ? "Fail!" : p == 2 || p == 1 ? "Publish!" : "I smell a series!";
}

function _if(bool, func1, func2) {
  // ...
  return bool ? func1() : func2();
}

//Dollars and Cents

function formatMoney(amount) {
  // your formatting code here
  let h = `$${amount.toFixed(2)}`;
  return h;
}
function isPalindrome(line) {
  let t = line.toString();
  let l = line.toString().split("").reverse().join("");
  return t == l ? true : false;
}

function distinct(a) {
  let c = [];
  a.forEach((a, d) => {
    if (c.includes(a)) {
    } else {
      c.push(a);
    }
  });
  return c;
}
function distinct(a) {
  return [...new Set(a)];
}

/*const distinct = (arr) => arr.filter((item, i, arr) => arr.indexOf(item) == i);*/

function powersOfTwo(n) {
  let a = [];
  let c = 0;
  if (n == 0) {
    return [1];
  }
  for (let i = 0; i <= n; i += 1) {
    a.push(2 ** i);
  }
  return a;
}
//Alan Partridge II - Apple Turnover

function apple(x) {
  return parseInt(x * x) >= 1000
    ? "It's hotter than the sun!!"
    : "Help yourself to a honeycomb Yorkie for the glovebox.";
}

function correctTail(bod, tail) {
  sub = bod.slice(-1);
  if (sub == tail) {
    return true;
  } else return false;
}

var replaceDots = function (str) {
  return str.split(".").join("-");
};

function weatherInfo(temp) {
  var c = convertToCelsius(temp);
  if (c <= 0) return c + " is freezing temperature";
  else return c + " is above freezing temperature";
}

function convertToCelsius(temperature) {
  var celsius = (temperature - 32) * (5 / 9);
  return celsius;
}

function howManyDalmatians(number) {
  var dogs = [
    "Hardly any",
    "More than a handful!",
    "Woah that's a lot of dogs!",
    "101 DALMATIANS!!!",
  ];

  var respond =
    number <= 10
      ? dogs[0]
      : number <= 50
      ? dogs[1]
      : number == 101
      ? dogs[3]
      : dogs[2];

  return respond;
}

function getChar(c) {
  // ...
  return String.fromCharCode(c);
}
function isPalindrome(x) {
  // var args = Array.prototype.slice.call(arguments)[0];
  // your code here
  return x.split("").reverse().join("").toLowerCase() == x.toLowerCase()
    ? true
    : false;
}

function take(arr, n) {
  // Your code here
  return arr.slice(0, n);
}

/*function warnTheSheep(queue) {
  let count = 1;
  for (let x = queue.length - 1; x >= 0; x--) {
    if (queue[queue.length - 1] == "wolf") {
      return "Pls go away and stop eating my sheep";
    } else if (queue[x - 1] == "wolf") {
      return `Oi! Sheep number ${count}! You are about to be eaten by a wolf!`;
    }
    count += 1;
  }
}*/
function warnTheSheep(queue) {
  const position = queue.reverse().indexOf("wolf");
  return position === 0
    ? "Pls go away and stop eating my sheep"
    : `Oi! Sheep number ${position}! You are about to be eaten by a wolf!`;
}

function getSize(width, height, depth) {
  return [
    width * height * 2 + depth * height * 2 + width * depth * 2,
    width * height * depth,
  ];
}
function hexToDec(hexString) {
  return parseInt(hexString, 16);
  //your code here
}

function Sleigh() {}

Sleigh.prototype.authenticate = function (name, password) {
  return name == "Santa Claus" && password == "Ho Ho Ho!" ? true : false;
  // TODO
};

function plural(n) {
  // ...
  return n == 1 ? false : true;
}

function noBoringZeros(n) {
  if (n == 0) {
    return 0;
  }
  // your code
  let t = n.toString().split("");
  let g = t.reduce((a, b) => {
    if (!a.includes(b)) {
      a.push(b);
    }
    return a;
  }, []);
  return g[g.length - 1] == 0
    ? parseInt(g.splice(0, g.length - 1).join(""))
    : parseInt(g.join(""));
}
//get character from ASCII Value

function pipeFix(numbers) {
  let t = [];
  for (let x = numbers[0]; x <= numbers[numbers.length - 1]; x++) {
    t.push(x);
  }
  return t;
}

/*if (!numbers[count + 1] == numbers[count] + 1) {
  t.push(numbers[count] + 1);
}
numbers.length += 1;*/

const book = {
  title: "How JavaScript Works",
  author: "Douglas Crockford",
};
for (const propName in book) {
  book[propName];
}

const words = ["ability", "calculate", "calendar", "double", "door"];
const stopTo = "double";
for (let word of words) {
  if (word == stopTo) {
    break;
  }
}

words.every((w) => {
  if (w.startsWith(stopTo)) {
    return false;
  } else {
    return true;
  }
});
function finalGrade(exam, projects) {
  if (exam <= 100 && projects >= 0) {
    return exam > 90 || projects > 10
      ? 100
      : exam > 75 && projects >= 5
      ? 90
      : exam > 50 && projects >= 2
      ? 75
      : 0;
  }
}

function capitalizeWord(word) {
  word[0].toUpperCase();
  return word[0].toUpperCase() + word.slice(1);
}

function getDrinkByProfession(param = "beer") {
  const arr = {
    ["jabroni"]: "Patron Tequila",
    ["school counselor"]: "Anything with Alcohol",
    ["programmer"]: "Hipster Craft Beer",
    ["bike gang member"]: "Moonshine",
    ["politician"]: "Your tax dollars",
    ["rapper"]: "Cristal",
  };
  if (!arr[param.toLocaleLowerCase()]) {
    return "Beer";
  }
  return arr[param.toLocaleLowerCase()];
}

function findMultiples(integer, limit) {
  //your code here
  let count = 0;
  let t = [];
  for (let i = 0; i < limit / integer; i++) {
    count += integer;
    t.push(count);
  }
  return t;
}
/*

function findMultiples(int,limit){
  let result = []
  
  for (let i = int; i<=limit ; i+=int)
    result.push(i)
    
  return result
}
*/

const flip = (d, a) => {
  //TODO
  if (d == "R") {
    return a
      .join("")
      .split("")
      .reverse()
      .sort()
      .map((a) => {
        return parseInt(a);
      });
  } else if (d == "L") {
    return a
      .join("")
      .split("")
      .reverse()
      .sort((a, b) => {
        return b - a;
      })
      .map((a) => {
        return parseInt(a);
      });
  }
};

//Gravity Flip
//Exclamation marks series #11: Replace all vowel to exclamation mark in the sentence

function replace(s) {
  //coding and coding....
  return s.replace(/[ad]/gi, "!");
}

function unusualFive() {
  let c = "0123456789*+-/";
  return 250 % 50 == 0 ? 5 : 0;
}

function unusualFive() {
  return "".charCodeAt();
}
function unusualFive() {
  return "DaniQ".length;
}

function problem(x) {
  //your code here
  return typeof x == "string" ? "Error" : x * 50 + 6;
}

function printArray(array) {
  //show me the code!
  return array.join(",");
}

function combat(health, damage) {
  // Write your code here
  return health - damage <= 0 ? 0 : health - damage;
}

function squareOrSquareRoot(array) {
  return array.map((a) => {
    if (a % Math.sqrt(a) == 0) {
      a = Math.sqrt(a);
    } else {
      a = a * a;
    }
    return a;
  });
}
//Grasshopper - Variable Assignment Debug
function tripleTrouble(one, two, three) {
  //Solution
  let arr = "";
  for (let i = 0; i < one.length; i++) {
    arr += one[i] + two[i] + three[i];
  }
  return arr;
}

function shortcut(string) {
  console.log(string.replace(/[aeiou]/gi, ""));
}

/*function shortcut(str) {
  return str.split('').filter(function(e) {
    return ['a', 'e', 'i', 'o', 'u'].indexOf(e) == -1 
  }).join('')
}*/
function arrayMadness(a, b) {
  return sum(a, b);
  // Ready, get set, GO!!!
}
function sum(a, b) {
  return (
    a.reduce((c, b) => {
      return (c += b ** 2);
    }, 0) >
    b.reduce((c, b) => {
      return (c += b ** 3);
    }, 0)
  );
}

function nameShuffler(str) {
  //Shuffle It
  return str.split(" ").reverse().join(" ");
}

function nextId(ids) {
  let arr = [...new Set(ids)];
  //this will be awesome!

  const id = arr
    .sort((a, b) => {
      return a - b;
    })
    .findIndex((a, i) => {
      return a != i;
    });
  return id == -1 ? arr.length : id;
}
//noobCode 01: SUPERSIZE ME.... or rather, this integer!
function superSize(num) {
  return parseInt(
    num
      .toString()
      .split("")
      .sort((a, b) => {
        return b - a;
      })
      .join("")
  );
}
let arrDup = [1, 3, 5, 1, 1, 5, 3, 3, 3, 0, 0];
const dupl = arrDup.reduce((a, b) => {
  const val = a[b] || 0;
  a[b] = val + 1;
  return a;
}, {});

// add the value "codewars" to the websites array 1,000 times
var websites = [];
for (let i = 0; i < 1000; i++) {
  websites.push("codewars");
}
function reverse(string) {
  //your code here
  return string.split(" ").reverse().join(" ");
}
//Mr. Freeze
/**
 * var websites = new Array(1000).fill("codewars");
 */
//Convert to Binary
/**
 *  function nextId(ids){
  var x = 0;
  while (ids.includes(x)) x++;
  return x;
}
 */

function toBinary(n) {
  return parseInt((n >>> 0).toString(2));
}

var Ghost = function () {
  this.random = ["white", "yellow", "purple", "red"];
  this.color = this.random[Math.floor(Math.random() * this.random.length)];
};

function chromosomeCheck(sperm) {
  return sperm.includes("Y")
    ? "Congratulations! You're going to have a son."
    : "Congratulations! You're going to have a daughter.";
}

function differenceInAges(ages) {
  let c = ages.sort((a, b) => {
    return a - b;
  });
  /**let max = Math.max(...ages),
        min = Math.min(...ages)
        diff = max - min */
  return [c[0], c[c.length - 1], c[c.length - 1] - c[0]];
}

function sakuraFall(v) {
  // your code here
  let distToGround = 5 * 80; // distance from branch to ground = 400 centimeters
  let time = 0;

  if (v > 0) {
    time = distToGround / v;
  }

  return time;
}

function array(arr) {
  //Good luck
  let arrs = arr.split(",");
  let first = arrs.shift();
  let last = arrs.pop();
  return arrs.join("") == "" ? null : arrs.join(" ");
}
/**
 * function array(arr){
  return arr.split(",").slice(1,-1).join(" ") || null;
}
 */

function remove(s) {
  //coding and coding....
  return s[s.length - 1] == "!" ? s.slice(0, -1) : s;
}
/**
 * const remove = s => s.replace(/!$/, '');

 */
function include(arr, item) {
  // ...
  return arr.includes(item) ? true : false;
}

function SubtractSum(n) {
  let list =
    "kiwi,pear,kiwi,banana,melon,banana,melon,pineapple,apple,pineapple,cucumber,pineapple,cucumber,orange,grape,orange,grape,apple,grape,cherry,pear,cherry,pear,kiwi,banana,kiwi,apple,melon,banana,melon,pineapple,melon,pineapple,cucumber,orange,apple,orange,grape,orange,grape,cherry,pear,cherry,pear,apple,pear,kiwi,banana,kiwi,banana,melon,pineapple,melon,apple,cucumber,pineapple,cucumber,orange,cucumber,orange,grape,cherry,apple,cherry,pear,cherry,pear,kiwi,pear,kiwi,banana,apple,banana,melon,pineapple,melon,pineapple,cucumber,pineapple,cucumber,apple,grape,orange,grape,cherry,grape,cherry,pear,cherry,apple,kiwi,banana,kiwi,banana,melon,banana,melon98,pineapple,apple,pineapple".split(
      ","
    );
  let v = n;
  let sum;

  function xs(num) {
    sum = num
      .toString()
      .split("")
      .reduce((a, b) => {
        return (a += parseInt(b));
      }, 0);
    v = num - sum;
    return v;
  }
  while (list[v] == undefined) {
    xs(v);
  }
  if (list[v] !== undefined) {
    return "apple";
  }
}
function calculateAge(n, s) {
  // enter your code here.
  let z = s - n;
  if (z == 1) {
    return `You are 1 year old.`;
  } else if (z == -1) {
    return `You will be born in 1 year.`;
  }
  return z == 0
    ? "You were born this very year!"
    : z < 0
    ? `You will be born in ${Math.abs(z)} years.`
    : `You are ${z} years old.`;
}
//https://www.codewars.com/kata/5761a717780f8950ce001473/solutions/javascript

function sayHello(name, city, state) {
  return `Hello, ${name.join(" ")}! Welcome to ${city}, ${state}!`;
}

var findAverage = function (nums) {
  // Code here
  return (
    nums.reduce((a, b) => {
      return (a += b);
    }, 0) / nums.length
  );
};
//Regexp Basics - is it a digit?
//Subtract the Sum
function addLength(str) {
  //start-here
  return str.split(" ").map((d, i) => {
    return `${d} ${d.length}`;
  });
}

function remove(s, n) {
  //coding and coding....
  let t = s.split("");
  let count = 0;
  for (let i = 0; i < t.length; i++) {
    if (count != n) {
      if (t[i] == "!") {
        count++;
        t[i] = "";
      }
    }
  }
  return t.join("");
}

/*function remove(s,n){
  for (var i=0;i<n;i++) s=s.replace("!","");
  return s;
}*/

function multipleOfIndex(array) {
  // good luck
  return array.filter((a, b) => {
    return a % b == 0;
  });
}

function isDigit(s) {
  //your code
  return !isNaN(s.trim());
}
/**
 * function isDigit(s) {
  //your code
  return s==parseFloat(s)
  
}
 */
//Tip Calculator
