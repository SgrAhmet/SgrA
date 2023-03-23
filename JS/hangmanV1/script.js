// let words = ["ahmet","araba","kedi","laptop","lamba","bebek","priz"]
// console.log(words)

 
// // ? rasgele kelime seçici
// let theWord = words[Math.floor(Math.random() * (words.length ))]

// console.log(theWord)

let area = []
let theWord = "araba"





theWord.split("").map((item) => {

    area.push("_")
    
})





let guess = prompt(`please enter guess`)

console.log(guess)

if(theWord.includes(guess)){

    for(let i = 0;i< theWord.length;i++){


        area[theWord.indexOf(guess,i)] = guess



}

    
}









console.log(area.join(" "),theWord)
