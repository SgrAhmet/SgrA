let num = Math.floor(Math.random() * 100)  + 1
console.log(num)

document.getElementById("number").innerHTML = num;

document.querySelector("#edit")
document.getElementsByClassName("edit")
document.querySelectorAll(".edit")








document.querySelector(".cevap").style.display = "none"
function Function2() {
    document.querySelector(".cevap").style.display = "block"

  }

function Function(){

    

console.log(num)
let count = 1

let guess = Number(prompt("Please Enter Your Guess"))



while(guess > 100 || guess < 0){

    guess = Number(prompt("Please Guess number between 1 and 100 "))
}





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


}