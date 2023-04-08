let counter = 0


function game() {
  let d1 = `${Math.ceil(Math.random() * 255)},${Math.ceil(
    Math.random() * 255
  )},${Math.ceil(Math.random() * 255)}`;

  let d2 = `${Math.ceil(Math.random() * 255)},${Math.ceil(
    Math.random() * 255
  )},${Math.ceil(Math.random() * 255)}`;

  let d3 = `${Math.ceil(Math.random() * 255)},${Math.ceil(
    Math.random() * 255
  )},${Math.ceil(Math.random() * 255)}`;

  let d4 = `${Math.ceil(Math.random() * 255)},${Math.ceil(
    Math.random() * 255
  )},${Math.ceil(Math.random() * 255)}`;

  let d5 = `${Math.ceil(Math.random() * 255)},${Math.ceil(
    Math.random() * 255
  )},${Math.ceil(Math.random() * 255)}`;

  let d6 = `${Math.ceil(Math.random() * 255)},${Math.ceil(
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

  let answer = divarea[Math.ceil(Math.random() * 6) - 1];

  document.getElementById("text").innerHTML = `${answer}`;

  
}

console.log(d1)
game();



function Func1(){

  // console.log(d1)
  // if(d1 == answer){
  //     counter++
  //     game();

  // }
  // else{
  //   counter = 0
  //   game();

  // }
}

Func1();