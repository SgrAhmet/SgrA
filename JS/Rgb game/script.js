let counter = 0;

let d1 = null;
let d2 = null;
let d3 = null;
let d4 = null;
let d5 = null;
let d6 = null;

answer = null;

var correct = new Audio(`correct.wav`);
var wrong = new Audio(`wrong.wav`);

function game() {
  d1 = `${Math.ceil(Math.random() * 255)},${Math.ceil(
    Math.random() * 255
  )},${Math.ceil(Math.random() * 255)}`;

  d2 = `${Math.ceil(Math.random() * 255)},${Math.ceil(
    Math.random() * 255
  )},${Math.ceil(Math.random() * 255)}`;

  d3 = `${Math.ceil(Math.random() * 255)},${Math.ceil(
    Math.random() * 255
  )},${Math.ceil(Math.random() * 255)}`;

  d4 = `${Math.ceil(Math.random() * 255)},${Math.ceil(
    Math.random() * 255
  )},${Math.ceil(Math.random() * 255)}`;

  d5 = `${Math.ceil(Math.random() * 255)},${Math.ceil(
    Math.random() * 255
  )},${Math.ceil(Math.random() * 255)}`;

  d6 = `${Math.ceil(Math.random() * 255)},${Math.ceil(
    Math.random() * 255
  )},${Math.ceil(Math.random() * 255)}`;

  document.querySelector(".div1").style.backgroundColor = `rgb(${d1})`;
  document.querySelector(".div2").style.backgroundColor = `rgb(${d2})`;
  document.querySelector(".div3").style.backgroundColor = `rgb(${d3})`;
  document.querySelector(".div4").style.backgroundColor = `rgb(${d4})`;
  document.querySelector(".div5").style.backgroundColor = `rgb(${d5})`;
  document.querySelector(".div6").style.backgroundColor = `rgb(${d6})`;

  document.querySelector("#score").innerHTML = counter;

  let divarea = [d1, d2, d3, d4, d5, d6];

  answer = divarea[Math.ceil(Math.random() * 6) - 1];

  document.getElementById("text").innerHTML = `(${answer})`;
}

game();

function Func1() {
  if (d1 == answer) {
    counter++;
    document.querySelector("#score").innerHTML = counter;
    correct.play();
    game();

    // document.querySelector(".div1").classList.add("correct")
    // document.querySelector(".div1").classList.add("zero")
  } else {
    counter = 0;
    document.querySelector("#score").innerHTML = counter;
    game();
    wrong.play();
  }
}
function Func2() {
  if (d2 == answer) {
    counter++;
    document.querySelector("#score").innerHTML = counter;
    correct.play();
    game();
  } else {
    counter = 0;
    document.querySelector("#score").innerHTML = counter;
    game();
    wrong.play();
  }
}

function Func3() {
  if (d3 == answer) {
    counter++;
    document.querySelector("#score").innerHTML = counter;
    correct.play();
    game();
  } else {
    counter = 0;
    document.querySelector("#score").innerHTML = counter;
    game();
    wrong.play();
  }
}

function Func4() {
  if (d4 == answer) {
    counter++;
    document.querySelector("#score").innerHTML = counter;
    correct.play();
    game();
  } else {
    counter = 0;
    document.querySelector("#score").innerHTML = counter;
    game();
    wrong.play();
  }
}

function Func5() {
  if (d5 == answer) {
    counter++;
    document.querySelector("#score").innerHTML = counter;
    correct.play();
    game();
  } else {
    counter = 0;
    document.querySelector("#score").innerHTML = counter;
    game();
    wrong.play();
  }
}

function Func6() {
  if (d6 == answer) {
    counter++;
    document.querySelector("#score").innerHTML = counter;
    correct.play();
    game();
  } else {
    counter = 0;
    document.querySelector("#score").innerHTML = counter;
    game();
    wrong.play();
  }
}

