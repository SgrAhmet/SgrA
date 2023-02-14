let num = Math.floor(Math.random() * 100)  + 1
console.log(num)
let count = 1

let guess = Number(prompt("Please Enter Your Guess"))



while(guess !== num){

    if (guess < num) {
        alert("Your Guess is lower")
        guess = Number(prompt("Please Enter Your Guess"))
        count++
    } else{

        alert("Your Gues is Higher")
        guess = Number(prompt("Please Enter Your Guess"))
        count++
    }

}

alert(`You Win With ${count} Rights`)


