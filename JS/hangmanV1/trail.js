// const words = ["Araba" ,"Diş", "Mavi", "Kelebek", "Sarı", "Yeşil", "Kırmızı", "Siyah", "Araba", "Hayvan", "Şişe", "Kalem", "Kök", "Masa", "Ayak", "Deniz", "Balık", "Köpek", "Kedi", "Aslan", "Ağaç", "Orman", "Çiçek", "Gül", "Papatya", "Satır", "Halat", "Dans", "Piyes", "Karanfil", "Bulut", "Defter", "Kitap", "Çekirdek", "Antilop", "Aşk", "Cüzdan", "Çanta", "Para", "Ayna", "Taş", "Yosun", "Yaprak", "Ceket", "Mevsim", "Şal", "Perde", "Tırnak", "Deri", "Söz", "Şiir", "Laf", "Zaman", "Pencere", "Gölge", "Göl", "Gemi", "Okyanus", "Kaval", "Gitar", "Keman", "Pus", "Sis", "Rüzgar", "Yel", "Fırtına", "Dil", "Ülke", "Kıta", "Ahşap", "Tahta", "Maç", "Yarın", "Kız", "Oğlan", "Bebek", "Anne", "Baba"]

let words =["Ali","Ahmet","Mehmet","Hüseyin","Kemal","Osman","İbrahim","Mustafa","Murat","Emre","Barış","Bora","Can","Cem","Deniz","Ege","Efe","Furkan","Gökhan","Gürkan","Halil","İsmail","Kadir","Levent","Mert","Necati","Oktay","Ömer","Poyraz","Rıdvan","Sami","Serdar","Talha","Tunç","Uğur","Yalçın","Yavuz","Yiğit","Yücel","Zeki","Aslı","Ayşe","Buse","Cansu","Demet","Elif","Esra","Fatma","Gizem","Hacer","İlayda","Jale","Kader","Leyla","Merve","Nur","Oya","Pelin","Rabia","Seda","Şule","Tuğçe","Umay","Vildan","Yağmur","Zehra","Ahsen","Begüm","Ceyda","Dilek","Ebru","Fulya","Gözde","Hilal","İpek","Jasmine","Kübra","Lale","Meltem","Nehir","Özge","Pınar","Reyhan","Selin","Tuba","Ülkü","Yasemin","Zeliha","ZEYNEP","satılmış","nejla","yusuf","furkan","ahmet"]







let theWord = words[Math.floor(Math.random() * (words.length ))].toLocaleLowerCase()


// let theWord = "abcçdefgğhıijklmnoöprsştuüvyz"
let area = [];
let right = -6;


theWord.split("").map((item) => {
  area.push("_");
});

document.getElementById("loseword").innerHTML = theWord;
document.getElementById("dom").innerHTML = area.join(" ");
document.getElementById("right").innerHTML = 6 - right;

console.log(area.join(" "))
let guess = null

console.log(guess)


function game1(){

  if(right < 5){
    guess = "a"
if (theWord.includes(guess)) {
    for (let i = 0; i < theWord.length; i++) {
      area[theWord.indexOf(guess, i)] = guess;
    }
  } else {
    right++;
  }
document.getElementById("dom").innerHTML = area.join(" ");
document.getElementById("right").innerHTML = 6 - right;
document.getElementById("1").classList.add("ahmet")
  }else{
   right++
    document.getElementById("right").innerHTML = 6 - right;
    document.getElementById("loseid").classList.add("ahmet2")

    document.getElementById("right").classList.add("ahmet3")

    document.getElementById("right").classList.add("ahmet3")
  
  }

  if(!area.includes("_")){
    document.getElementById("winid").classList.add("ahmet2")
  }
}
function game2(){

  if(right < 5){
    guess = "b"
if (theWord.includes(guess)) {
    for (let i = 0; i < theWord.length; i++) {
      area[theWord.indexOf(guess, i)] = guess;
    }
  } else {
    right++;
  }
document.getElementById("dom").innerHTML = area.join(" ");
document.getElementById("right").innerHTML = 6 - right;
document.getElementById("2").classList.add("ahmet")
  }else{
   right++
    document.getElementById("right").innerHTML = 6 - right;
    document.getElementById("loseid").classList.add("ahmet2")

    document.getElementById("right").classList.add("ahmet3")
  }

  if(!area.includes("_")){
    document.getElementById("winid").classList.add("ahmet2")
  }
}
function game3(){

  if(right < 5){
    guess = "c"
if (theWord.includes(guess)) {
    for (let i = 0; i < theWord.length; i++) {
      area[theWord.indexOf(guess, i)] = guess;
    }
  } else {
    right++;
  }
document.getElementById("dom").innerHTML = area.join(" ");
document.getElementById("right").innerHTML = 6 - right;
document.getElementById("3").classList.add("ahmet")
  }else{
   right++
    document.getElementById("right").innerHTML = 6 - right;
    document.getElementById("loseid").classList.add("ahmet2")

    document.getElementById("right").classList.add("ahmet3")
  }

  if(!area.includes("_")){
    document.getElementById("winid").classList.add("ahmet2")
  }
}
function game4(){

  if(right < 5){
    guess = "ç"
if (theWord.includes(guess)) {
    for (let i = 0; i < theWord.length; i++) {
      area[theWord.indexOf(guess, i)] = guess;
    }
  } else {
    right++;
  }
document.getElementById("dom").innerHTML = area.join(" ");
document.getElementById("right").innerHTML = 6 - right;
document.getElementById("4").classList.add("ahmet")
  }else{
   right++
    document.getElementById("right").innerHTML = 6 - right;
    document.getElementById("loseid").classList.add("ahmet2")

    document.getElementById("right").classList.add("ahmet3")
  }

  if(!area.includes("_")){
    document.getElementById("winid").classList.add("ahmet2")
  }
}
function game5(){

  if(right < 5){
    guess = "d"
if (theWord.includes(guess)) {
    for (let i = 0; i < theWord.length; i++) {
      area[theWord.indexOf(guess, i)] = guess;
    }
  } else {
    right++;
  }
document.getElementById("dom").innerHTML = area.join(" ");
document.getElementById("right").innerHTML = 6 - right;
document.getElementById("5").classList.add("ahmet")
  }else{
   right++
    document.getElementById("right").innerHTML = 6 - right;
    document.getElementById("loseid").classList.add("ahmet2")

    document.getElementById("right").classList.add("ahmet3")
  }

  if(!area.includes("_")){
    document.getElementById("winid").classList.add("ahmet2")
  }
}
function game6(){

  if(right < 5){
    guess = "e"
if (theWord.includes(guess)) {
    for (let i = 0; i < theWord.length; i++) {
      area[theWord.indexOf(guess, i)] = guess;
    }
  } else {
    right++;
  }
document.getElementById("dom").innerHTML = area.join(" ");
document.getElementById("right").innerHTML = 6 - right;
document.getElementById("6").classList.add("ahmet")
  }else{
   right++
    document.getElementById("right").innerHTML = 6 - right;
    document.getElementById("loseid").classList.add("ahmet2")

    document.getElementById("right").classList.add("ahmet3")
  }

  if(!area.includes("_")){
    document.getElementById("winid").classList.add("ahmet2")
  }
}
function game7(){

  if(right < 5){
    guess = "f"
if (theWord.includes(guess)) {
    for (let i = 0; i < theWord.length; i++) {
      area[theWord.indexOf(guess, i)] = guess;
    }
  } else {
    right++;
  }
document.getElementById("dom").innerHTML = area.join(" ");
document.getElementById("right").innerHTML = 6 - right;
document.getElementById("7").classList.add("ahmet")
  }else{
   right++
    document.getElementById("right").innerHTML = 6 - right;
    document.getElementById("loseid").classList.add("ahmet2")

    document.getElementById("right").classList.add("ahmet3")
  }

  if(!area.includes("_")){
    document.getElementById("winid").classList.add("ahmet2")
  }
}
function game8(){

  if(right < 5){
    guess = "g"
if (theWord.includes(guess)) {
    for (let i = 0; i < theWord.length; i++) {
      area[theWord.indexOf(guess, i)] = guess;
    }
  } else {
    right++;
  }
document.getElementById("dom").innerHTML = area.join(" ");
document.getElementById("right").innerHTML = 6 - right;
document.getElementById("8").classList.add("ahmet")
  }else{
   right++
    document.getElementById("right").innerHTML = 6 - right;
    document.getElementById("loseid").classList.add("ahmet2")

    document.getElementById("right").classList.add("ahmet3")
  }

  if(!area.includes("_")){
    document.getElementById("winid").classList.add("ahmet2")
  }
}
function game9(){

  if(right < 5){
    guess = "ğ"
if (theWord.includes(guess)) {
    for (let i = 0; i < theWord.length; i++) {
      area[theWord.indexOf(guess, i)] = guess;
    }
  } else {
    right++;
  }
document.getElementById("dom").innerHTML = area.join(" ");
document.getElementById("right").innerHTML = 6 - right;
document.getElementById("9").classList.add("ahmet")
  }else{
   right++
    document.getElementById("right").innerHTML = 6 - right;
    document.getElementById("loseid").classList.add("ahmet2")

    document.getElementById("right").classList.add("ahmet3")
  }

  if(!area.includes("_")){
    document.getElementById("winid").classList.add("ahmet2")
  }
}
function game10(){

  if(right < 5){
    guess = "h"
if (theWord.includes(guess)) {
    for (let i = 0; i < theWord.length; i++) {
      area[theWord.indexOf(guess, i)] = guess;
    }
  } else {
    right++;
  }
document.getElementById("dom").innerHTML = area.join(" ");
document.getElementById("right").innerHTML = 6 - right;
document.getElementById("10").classList.add("ahmet")
  }else{
   right++
    document.getElementById("right").innerHTML = 6 - right;
    document.getElementById("loseid").classList.add("ahmet2")

    document.getElementById("right").classList.add("ahmet3")
  }

  if(!area.includes("_")){
    document.getElementById("winid").classList.add("ahmet2")
  }
}
function game11(){

  if(right < 5){
    guess = "ı"
if (theWord.includes(guess)) {
    for (let i = 0; i < theWord.length; i++) {
      area[theWord.indexOf(guess, i)] = guess;
    }
  } else {
    right++;
  }
document.getElementById("dom").innerHTML = area.join(" ");
document.getElementById("right").innerHTML = 6 - right;
document.getElementById("11").classList.add("ahmet")
  }else{
   right++
    document.getElementById("right").innerHTML = 6 - right;
    document.getElementById("loseid").classList.add("ahmet2")

    document.getElementById("right").classList.add("ahmet3")
  }

  if(!area.includes("_")){
    document.getElementById("winid").classList.add("ahmet2")
  }
}
function game12(){

  if(right < 5){
    guess = "i"
if (theWord.includes(guess)) {
    for (let i = 0; i < theWord.length; i++) {
      area[theWord.indexOf(guess, i)] = guess;
    }
  } else {
    right++;
  }
document.getElementById("dom").innerHTML = area.join(" ");
document.getElementById("right").innerHTML = 6 - right;
document.getElementById("12").classList.add("ahmet")
  }else{
   right++
    document.getElementById("right").innerHTML = 6 - right;
    document.getElementById("loseid").classList.add("ahmet2")

    document.getElementById("right").classList.add("ahmet3")
  }

  if(!area.includes("_")){
    document.getElementById("winid").classList.add("ahmet2")
  }
}
function game13(){

  if(right < 5){
    guess = "j"
if (theWord.includes(guess)) {
    for (let i = 0; i < theWord.length; i++) {
      area[theWord.indexOf(guess, i)] = guess;
    }
  } else {
    right++;
  }
document.getElementById("dom").innerHTML = area.join(" ");
document.getElementById("right").innerHTML = 6 - right;
document.getElementById("13").classList.add("ahmet")
  }else{
   right++
    document.getElementById("right").innerHTML = 6 - right;
    document.getElementById("loseid").classList.add("ahmet2")

    document.getElementById("right").classList.add("ahmet3")
  }

  if(!area.includes("_")){
    document.getElementById("winid").classList.add("ahmet2")
  }
}
function game14(){

  if(right < 5){
    guess = "k"
if (theWord.includes(guess)) {
    for (let i = 0; i < theWord.length; i++) {
      area[theWord.indexOf(guess, i)] = guess;
    }
  } else {
    right++;
  }
document.getElementById("dom").innerHTML = area.join(" ");
document.getElementById("right").innerHTML = 6 - right;
document.getElementById("14").classList.add("ahmet")
  }else{
   right++
    document.getElementById("right").innerHTML = 6 - right;
    document.getElementById("loseid").classList.add("ahmet2")

    document.getElementById("right").classList.add("ahmet3")
  }

  if(!area.includes("_")){
    document.getElementById("winid").classList.add("ahmet2")
  }
}
function game15(){

  if(right < 5){
    guess = "l"
if (theWord.includes(guess)) {
    for (let i = 0; i < theWord.length; i++) {
      area[theWord.indexOf(guess, i)] = guess;
    }
  } else {
    right++;
  }
document.getElementById("dom").innerHTML = area.join(" ");
document.getElementById("right").innerHTML = 6 - right;
document.getElementById("15").classList.add("ahmet")
  }else{
   right++
    document.getElementById("right").innerHTML = 6 - right;
    document.getElementById("loseid").classList.add("ahmet2")

    document.getElementById("right").classList.add("ahmet3")
  }

  if(!area.includes("_")){
    document.getElementById("winid").classList.add("ahmet2")
  }
}
function game16(){

  if(right < 5){
    guess = "m"
if (theWord.includes(guess)) {
    for (let i = 0; i < theWord.length; i++) {
      area[theWord.indexOf(guess, i)] = guess;
    }
  } else {
    right++;
  }
document.getElementById("dom").innerHTML = area.join(" ");
document.getElementById("right").innerHTML = 6 - right;
document.getElementById("16").classList.add("ahmet")
  }else{
   right++
    document.getElementById("right").innerHTML = 6 - right;
    document.getElementById("loseid").classList.add("ahmet2")

    document.getElementById("right").classList.add("ahmet3")
  }

  if(!area.includes("_")){
    document.getElementById("winid").classList.add("ahmet2")
  }
}
function game17(){

  if(right < 5){
    guess = "n"
if (theWord.includes(guess)) {
    for (let i = 0; i < theWord.length; i++) {
      area[theWord.indexOf(guess, i)] = guess;
    }
  } else {
    right++;
  }
document.getElementById("dom").innerHTML = area.join(" ");
document.getElementById("right").innerHTML = 6 - right;
document.getElementById("17").classList.add("ahmet")
  }else{
   right++
    document.getElementById("right").innerHTML = 6 - right;
    document.getElementById("loseid").classList.add("ahmet2")

    document.getElementById("right").classList.add("ahmet3")
  }

  if(!area.includes("_")){
    document.getElementById("winid").classList.add("ahmet2")
  }
}
function game18(){

  if(right < 5){
    guess = "o"
if (theWord.includes(guess)) {
    for (let i = 0; i < theWord.length; i++) {
      area[theWord.indexOf(guess, i)] = guess;
    }
  } else {
    right++;
  }
document.getElementById("dom").innerHTML = area.join(" ");
document.getElementById("right").innerHTML = 6 - right;
document.getElementById("18").classList.add("ahmet")
  }else{
   right++
    document.getElementById("right").innerHTML = 6 - right;
    document.getElementById("loseid").classList.add("ahmet2")

    document.getElementById("right").classList.add("ahmet3")
  }

  if(!area.includes("_")){
    document.getElementById("winid").classList.add("ahmet2")
  }
}
function game19(){

  if(right < 5){
    guess = "ö"
if (theWord.includes(guess)) {
    for (let i = 0; i < theWord.length; i++) {
      area[theWord.indexOf(guess, i)] = guess;
    }
  } else {
    right++;
  }
document.getElementById("dom").innerHTML = area.join(" ");
document.getElementById("right").innerHTML = 6 - right;
document.getElementById("19").classList.add("ahmet")
  }else{
   right++
    document.getElementById("right").innerHTML = 6 - right;
    document.getElementById("loseid").classList.add("ahmet2")

    document.getElementById("right").classList.add("ahmet3")
  }

  if(!area.includes("_")){
    document.getElementById("winid").classList.add("ahmet2")
  }
}
function game20(){

  if(right < 5){
    guess = "p"
if (theWord.includes(guess)) {
    for (let i = 0; i < theWord.length; i++) {
      area[theWord.indexOf(guess, i)] = guess;
    }
  } else {
    right++;
  }
document.getElementById("dom").innerHTML = area.join(" ");
document.getElementById("right").innerHTML = 6 - right;
document.getElementById("20").classList.add("ahmet")
  }else{
   right++
    document.getElementById("right").innerHTML = 6 - right;
    document.getElementById("loseid").classList.add("ahmet2")

    document.getElementById("right").classList.add("ahmet3")
  }

  if(!area.includes("_")){
    document.getElementById("winid").classList.add("ahmet2")
  }
}
function game21(){

  if(right < 5){
    guess = "r"
if (theWord.includes(guess)) {
    for (let i = 0; i < theWord.length; i++) {
      area[theWord.indexOf(guess, i)] = guess;
    }
  } else {
    right++;
  }
document.getElementById("dom").innerHTML = area.join(" ");
document.getElementById("right").innerHTML = 6 - right;
document.getElementById("21").classList.add("ahmet")
  }else{
   right++
    document.getElementById("right").innerHTML = 6 - right;
    document.getElementById("loseid").classList.add("ahmet2")

    document.getElementById("right").classList.add("ahmet3")
  }

  if(!area.includes("_")){
    document.getElementById("winid").classList.add("ahmet2")
  }
}
function game22(){

  if(right < 5){
    guess = "s"
if (theWord.includes(guess)) {
    for (let i = 0; i < theWord.length; i++) {
      area[theWord.indexOf(guess, i)] = guess;
    }
  } else {
    right++;
  }
document.getElementById("dom").innerHTML = area.join(" ");
document.getElementById("right").innerHTML = 6 - right;
document.getElementById("22").classList.add("ahmet")
  }else{
   right++
    document.getElementById("right").innerHTML = 6 - right;
    document.getElementById("loseid").classList.add("ahmet2")

    document.getElementById("right").classList.add("ahmet3")
  }

  if(!area.includes("_")){
    document.getElementById("winid").classList.add("ahmet2")
  }
}
function game23(){

  if(right < 5){
    guess = "ş"
if (theWord.includes(guess)) {
    for (let i = 0; i < theWord.length; i++) {
      area[theWord.indexOf(guess, i)] = guess;
    }
  } else {
    right++;
  }
document.getElementById("dom").innerHTML = area.join(" ");
document.getElementById("right").innerHTML = 6 - right;
document.getElementById("23").classList.add("ahmet")
  }else{
   right++
    document.getElementById("right").innerHTML = 6 - right;
    document.getElementById("loseid").classList.add("ahmet2")

    document.getElementById("right").classList.add("ahmet3")
  }

  if(!area.includes("_")){
    document.getElementById("winid").classList.add("ahmet2")
  }
}
function game24(){

  if(right < 5){
    guess = "t"
if (theWord.includes(guess)) {
    for (let i = 0; i < theWord.length; i++) {
      area[theWord.indexOf(guess, i)] = guess;
    }
  } else {
    right++;
  }
document.getElementById("dom").innerHTML = area.join(" ");
document.getElementById("right").innerHTML = 6 - right;
document.getElementById("24").classList.add("ahmet")
  }else{
   right++
    document.getElementById("right").innerHTML = 6 - right;
    document.getElementById("loseid").classList.add("ahmet2")

    document.getElementById("right").classList.add("ahmet3")
  }

  if(!area.includes("_")){
    document.getElementById("winid").classList.add("ahmet2")
  }
}
function game25(){

  if(right < 5){
    guess = "u"
if (theWord.includes(guess)) {
    for (let i = 0; i < theWord.length; i++) {
      area[theWord.indexOf(guess, i)] = guess;
    }
  } else {
    right++;
  }
document.getElementById("dom").innerHTML = area.join(" ");
document.getElementById("right").innerHTML = 6 - right;
document.getElementById("25").classList.add("ahmet")
  }else{
   right++
    document.getElementById("right").innerHTML = 6 - right;
    document.getElementById("loseid").classList.add("ahmet2")

    document.getElementById("right").classList.add("ahmet3")
  }

  if(!area.includes("_")){
    document.getElementById("winid").classList.add("ahmet2")
  }
}
function game26(){

  if(right < 5){
    guess = "ü"
if (theWord.includes(guess)) {
    for (let i = 0; i < theWord.length; i++) {
      area[theWord.indexOf(guess, i)] = guess;
    }
  } else {
    right++;
  }
document.getElementById("dom").innerHTML = area.join(" ");
document.getElementById("right").innerHTML = 6 - right;
document.getElementById("26").classList.add("ahmet")
  }else{
   right++
    document.getElementById("right").innerHTML = 6 - right;
    document.getElementById("loseid").classList.add("ahmet2")

    document.getElementById("right").classList.add("ahmet3")
  }

  if(!area.includes("_")){
    document.getElementById("winid").classList.add("ahmet2")
  }
}
function game27(){

  if(right < 5){
    guess = "v"
if (theWord.includes(guess)) {
    for (let i = 0; i < theWord.length; i++) {
      area[theWord.indexOf(guess, i)] = guess;
    }
  } else {
    right++;
  }
document.getElementById("dom").innerHTML = area.join(" ");
document.getElementById("right").innerHTML = 6 - right;
document.getElementById("27").classList.add("ahmet")
  }else{
   right++
    document.getElementById("right").innerHTML = 6 - right;
    document.getElementById("loseid").classList.add("ahmet2")

    document.getElementById("right").classList.add("ahmet3")
  }

  if(!area.includes("_")){
    document.getElementById("winid").classList.add("ahmet2")
  }
}
function game28(){

  if(right < 5){
    guess = "y"
if (theWord.includes(guess)) {
    for (let i = 0; i < theWord.length; i++) {
      area[theWord.indexOf(guess, i)] = guess;
    }
  } else {
    right++;
  }
document.getElementById("dom").innerHTML = area.join(" ");
document.getElementById("right").innerHTML = 6 - right;
document.getElementById("28").classList.add("ahmet")
  }else{
   right++
    document.getElementById("right").innerHTML = 6 - right;
    document.getElementById("loseid").classList.add("ahmet2")

    document.getElementById("right").classList.add("ahmet3")
  }

  if(!area.includes("_")){
    document.getElementById("winid").classList.add("ahmet2")
  }
}
function game29(){

  if(right < 5){
    guess = "z"
if (theWord.includes(guess)) {
    for (let i = 0; i < theWord.length; i++) {
      area[theWord.indexOf(guess, i)] = guess;
    }
  } else {
    right++;
  }
document.getElementById("dom").innerHTML = area.join(" ");
document.getElementById("right").innerHTML = 6 - right;
document.getElementById("29").classList.add("ahmet")
  }else{
   right++
    document.getElementById("right").innerHTML = 6 - right;
    document.getElementById("loseid").classList.add("ahmet2")

    document.getElementById("right").classList.add("ahmet3")
  }

  if(!area.includes("_")){
    document.getElementById("winid").classList.add("ahmet2")
  }
}




