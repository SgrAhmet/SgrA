// let words = ["ahmet","araba","kedi","laptop","lamba","bebek","priz"]
// console.log(words)

// // ? rasgele kelime seçici
// let theWord = words[Math.floor(Math.random() * (words.length ))]

// console.log(theWord)

let area = [];
let right = 0;
let theWord = "araba";

theWord.split("").map((item) => {
  area.push("_");
});

document.getElementById("dom").innerHTML = area;

while (right < 6 && area.includes("_")) {
  let guess = prompt(`please enter guess`);

  if (theWord.includes(guess)) {
    for (let i = 0; i < theWord.length; i++) {
      area[theWord.indexOf(guess, i)] = guess;
    }
    right++;
  } else {
    right++;
  }

  document.getElementById("dom").innerHTML = area;
}

console.log(`ahmet hıyardr`);

console.log(right);
console.log(area.join(" "), theWord);
