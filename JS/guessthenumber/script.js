let num = Math.floor(Math.random() * 100)  + 1




let guess = Number(prompt("Please Enter Your Guess (You Have 3 Rights)"))







if(guess<num){

    alert("Your Guess is lower")
    let guess0 = prompt("Guess Again")

    if(guess0<num){
        alert("Your Guess is lower")
        let guess1 = prompt("Guess Again")

        if(guess1!==num){
            alert(`You Lost -- Number is ${num}`)
                    } else {

                            alert("You Win")
                    }
        

        } else if(guess0>num) {
            alert("Your Guess is higher")
            let guess2 = prompt("Guess Again")
            if(guess2!==num){
                alert(`You Lost -- Number is ${num}`)
            } else{
                alert("You Win 3 Rights")
            }

        } else {
            alert("You Won With 2 Rights")
        }

} else if(guess>num){
    alert("Your Guess is higher")
    let guess3 = prompt("Guess Again")

    if(guess3<num){
        alert("Your Guess is lower")
        let guess4 = prompt("Guess Again")

        if(guess4!==num){
            alert(`You Lost -- Number is ${num}`)
                    } else {

                            alert("You Win")
                    }
        

        } else if(guess3>num) {
            alert("Your Guess is higher")
            let guess5 = prompt("Guess Again")
            if(guess5!==num){
                alert(`You Lost -- Number is ${num}`)
            } else{
                alert("You Win")
            }

        } else {

            alert("You Won With 2 Rights")
        }
} else {

    alert("Reyizim sen kahin misin")
}
