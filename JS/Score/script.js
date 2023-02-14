let score = Number(prompt("Please Enter Your Score"))


while(score > 100 || score < 0 ){

    score = Number(prompt("Scores Range From 100 to 0"))

}

console.log(score)