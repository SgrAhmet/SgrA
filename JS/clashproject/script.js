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
const archer = new Buildings("X",2,3,4,5,6,7,8,10,11,13,15,17,19,20);
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
  thlevel = 1;
}
function function2() {
  thlevel = 2;
}
function function3() {
  thlevel = 3;
}
function function4() {
  thlevel = 4;
}
function function5() {
  thlevel = 5;
}
function function6() {
  thlevel = 6;
}
function function7() {
  thlevel = 7;
}
function function8() {
  thlevel = 8;
}
function function9() {
  thlevel = 9;
}
function function10() {
  thlevel = 10;
}
function function11() {
  thlevel = 11;
}
function function12() {
  thlevel = 12;
}
function function13() {
  thlevel = 13;
}
function function14() {
  thlevel = 14;
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
