let num = Math.floor(Math.random() * 100)  + 1




let guess = Number(prompt("Please Enter Your Guess"))







if(guess<num){

    alert("Your Guess is lower")
    let guess0 = prompt("Guess Again")

    if(guess0<num){
        alert("Your Guess is lower")
        let guess1 = prompt("Guess Again")

        if(guess1!==num){
            alert("You Lost")
                    } else {

                            alert("You Win")
                    }
        

        } else if(guess0>num) {
            alert("Your Guess is higher")
            let guess2 = prompt("Guess Again")
            if(guess2!==num){
                alert("You Lost")
            } else{
                alert("You Win")
            }

        }

} else if(guess>num){
    alert("Your Guess is higher")
} else {

    alert("Reyizim sen kahin misin")
}
