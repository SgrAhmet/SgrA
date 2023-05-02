//! document.title = "TH1"

function Buildings(th1, th2, th3, th4, th5, th6, th7,th8,th9,th10,th11,th12,th13,th14) {
  this.th1 = th1;
  this.th2 = th2;
  this.th3 = th3;
  this.th4 = th4;
  this.th5 = th5;
  this.th6 = th6;
  this.th7 = th7;
  this.th8 = th8;
  this.th9 = th9;
  this.th10 = th10;
  this.th11 = th11;
  this.th12 = th12;
  this.th13 = th13;
  this.th14 = th14;
}

const cannon = new Buildings(2,3,4,5,6,7,8,10,11,13,15,17,19,20);
const archer = new Buildings("X",2,3,4,6,7,8,10,11,13,15,17,19,20);
const mortar = new Buildings("X","X",1,2,3,4,5,6,7,8,10,12,13,14);
const airDefense = new Buildings("X","X","X",2,3,4,5,6,7,8,9,10,11,12);
const wizardTower  = new Buildings("X","X","X","X",2,3,4,6,7,9,10,11,13,14);
const airSweper  = new Buildings("X","X","X","X","X",2,3,4,5,6,7,7,7,7);
const hiddenTesla  = new Buildings("X","X","X","X","X","X",3,6,7,8,9,10,12,13);
const bombTower  = new Buildings("X","X","X","X","X","X","X",2,3,4,6,7,8,9);
const xBow  = new Buildings("X","X","X","X","X","X","X","X",3,4,5,6,8,9);
const infernoTower  = new Buildings("X","X","X","X","X","X","X","X","X",3,5,6,7,8);
const eagleArtillery  = new Buildings("X","X","X","X","X","X","X","X","X","X",2,3,4,5);
const scattershot  = new Buildings("X","X","X","X","X","X","X","X","X","X","X","X",2,3);


var thlevel;

function function1() {
  document.querySelectorAll("button").forEach(i => i.style.backgroundColor = "white")
  document.querySelector(".banner2 button:nth-child(1)").style.backgroundColor = "#d97c0b"

  thlevel = 1;
  document.title = `TownHall ${thlevel}`
}
function function2() {
  document.querySelectorAll("button").forEach(i => i.style.backgroundColor = "white")
  document.querySelector(".banner2 button:nth-child(2)").style.backgroundColor = "#d97c0b"

  thlevel = 2;
  document.title = `TownHall ${thlevel}`

}
function function3() {
  document.querySelectorAll("button").forEach(i => i.style.backgroundColor = "white")
  document.querySelector(".banner2 button:nth-child(3)").style.backgroundColor = "#d97c0b"
  thlevel = 3;
  document.title = `TownHall ${thlevel}`

}
function function4() {
  document.querySelectorAll("button").forEach(i => i.style.backgroundColor = "white")
  document.querySelector(".banner2 button:nth-child(4)").style.backgroundColor = "#d97c0b"
  thlevel = 4;
  document.title = `TownHall ${thlevel}`

}
function function5() {
  document.querySelectorAll("button").forEach(i => i.style.backgroundColor = "white")
  document.querySelector(".banner2 button:nth-child(5)").style.backgroundColor = "#d97c0b"
  thlevel = 5;
  document.title = `TownHall ${thlevel}`

}
function function6() {
  document.querySelectorAll("button").forEach(i => i.style.backgroundColor = "white")
  document.querySelector(".banner2 button:nth-child(6)").style.backgroundColor = "#d97c0b"
  thlevel = 6;
  document.title = `TownHall ${thlevel}`
}
function function7() {
  document.querySelectorAll("button").forEach(i => i.style.backgroundColor = "white")
  document.querySelector(".banner2 button:nth-child(7)").style.backgroundColor = "#d97c0b"
  thlevel = 7;
  document.title = `TownHall ${thlevel}`
}
function function8() {
  document.querySelectorAll("button").forEach(i => i.style.backgroundColor = "white")
  document.querySelector(".banner2 button:nth-child(9)").style.backgroundColor = "#d97c0b"
  thlevel = 8;
  document.title = `TownHall ${thlevel}`
}
function function9() {
  document.querySelectorAll("button").forEach(i => i.style.backgroundColor = "white")
  document.querySelector(".banner2 button:nth-child(10)").style.backgroundColor = "#d97c0b"
  thlevel = 9;
  document.title = `TownHall ${thlevel}`
}
function function10() {
  document.querySelectorAll("button").forEach(i => i.style.backgroundColor = "white")
  document.querySelector(".banner2 button:nth-child(11)").style.backgroundColor = "#d97c0b"
  thlevel = 10;
  document.title = `TownHall ${thlevel}`
}
function function11() {
  document.querySelectorAll("button").forEach(i => i.style.backgroundColor = "white")
  document.querySelector(".banner2 button:nth-child(12)").style.backgroundColor = "#d97c0b"
  thlevel = 11;
  document.title = `TownHall ${thlevel}`
}
function function12() {
  document.querySelectorAll("button").forEach(i => i.style.backgroundColor = "white")
  document.querySelector(".banner2 button:nth-child(13)").style.backgroundColor = "#d97c0b"
  thlevel = 12;
  document.title = `TownHall ${thlevel}`
}
function function13() {
  document.querySelectorAll("button").forEach(i => i.style.backgroundColor = "white")
  document.querySelector(".banner2 button:nth-child(14)").style.backgroundColor = "#d97c0b"
  thlevel = 13;
  document.title = `TownHall ${thlevel}`
}
function function14() {
  document.querySelectorAll("button").forEach(i => i.style.backgroundColor = "white")
  document.querySelector(".banner2 button:nth-child(15)").style.backgroundColor = "#d97c0b"
  thlevel = 14;
  document.title = `TownHall ${thlevel}`
}



function mainFunction() {
document.querySelector(".card-1 p").innerHTML = `${cannon[`th${thlevel}`]}`;
document.querySelector(".card-2 p").innerHTML = `${archer[`th${thlevel}`]}`;
document.querySelector(".card-3 p").innerHTML = `${mortar[`th${thlevel}`]}`;
document.querySelector(".card-4 p").innerHTML = `${airDefense[`th${thlevel}`]}`;
document.querySelector(".card-5 p").innerHTML = `${wizardTower[`th${thlevel}`]}`;
document.querySelector(".card-6 p").innerHTML = `${airSweper[`th${thlevel}`]}`;
document.querySelector(".card-7 p").innerHTML = `${hiddenTesla[`th${thlevel}`]}`;
document.querySelector(".card-8 p").innerHTML = `${bombTower[`th${thlevel}`]}`;
document.querySelector(".card-9 p").innerHTML = `${xBow[`th${thlevel}`]}`;
document.querySelector(".card-10 p").innerHTML = `${infernoTower[`th${thlevel}`]}`;
document.querySelector(".card-11 p").innerHTML = `${eagleArtillery[`th${thlevel}`]}`;
document.querySelector(".card-12 p").innerHTML = `${scattershot[`th${thlevel}`]}`;


}

// let num = 3

// document.querySelector(`.banner2 button:nth-child(${num})`).style.backgroundColor = "red"


