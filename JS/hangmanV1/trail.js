let area = [];
let right = 0;
let theWord = "araba";

theWord.split("").map((item) => {
  area.push("_");
});

document.getElementById("dom").innerHTML = area.join(" ");
document.getElementById("right").innerHTML = 6 - right;

console.log(area.join(" "))
let guess = null

console.log(guess)
function deneme(){

    guess = "a"
console.log(guess)
console.log(right)
console.log(area)
if (theWord.includes(guess)) {
    for (let i = 0; i < theWord.length; i++) {
      area[theWord.indexOf(guess, i)] = guess;
    }
    right++;
  } else {
    right++;
  }
document.getElementById("dom").innerHTML = area.join(" ");
document.getElementById("right").innerHTML = 6 - right;

document.getElementById("1").classList.add("ahmet")


}
function deneme2(){

    guess = "f"
console.log(guess)
console.log(right)
console.log(area)
if (theWord.includes(guess)) {
    for (let i = 0; i < theWord.length; i++) {
      area[theWord.indexOf(guess, i)] = guess;
    }
    right++;
  } else {
    right++;
  }
  document.getElementById("dom").innerHTML = area.join(" ");
  document.getElementById("right").innerHTML = 6 - right;

  document.getElementById("2").classList.add("ahmet")
}

// document.getElementById("2").classList.add("ahmet")

// document.querySelectorAll(".letter").addEventListener ( "click" ,document.querySelectorAll(".letter").classList.add("ahmet"))
