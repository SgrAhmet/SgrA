// let input = prompt(`Please Enter Sentence`).trim()

let input = "ahmEt zOTtirri Başkan YUSuf reİs FurkAn".trim().toLocaleLowerCase()

console.log(input)

var words = input.split(" ")

console.log(words)

console.log(words.length)


for(let i = 1; i < words.length;i++){

    // console.log(words[i])
    
    var x = words[i].split("")

    // console.log(x)

    x[0] = x[0].toLocaleUpperCase()

    console.log(x)

    // console.log(x.join(""))  

    words[i] = x.join("")

    console.log(words[i])
    
    

    // console.log(x[0].toLocaleUpperCase())

    // console.log(x[0].replace(`${x[0]}`,`${x[0].toUpperCase()}`))
   

   



}


console.log(words.join(""))
