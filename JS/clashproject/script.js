//! document.title = "TH1"

function Buildings(th1, th2, th3, th4, th5, th6, th7) {
  this.th1 = th1;
  this.th2 = th2;
  this.th3 = th3;
  this.th4 = th4;
  this.th5 = th5;
  this.th6 = th6;
  this.th7 = th7;
}

const mortar = new Buildings("X", "X", 1, 2, 3, 4, 5);

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

console.log(mortar);

function mainFunction() {
  document.getElementById("mortar").innerHTML = `${mortar[`th${thlevel}`]}`;
}
ç
