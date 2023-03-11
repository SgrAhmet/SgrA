let num = "97"

console.log(num)

console.log(num.length)

console.log(+num)

console.log(num.split(""))

console.log(num.split("")[0])
console.log(num.split("")[1])

console.log(Math.pow(num.split("")[0],2))
console.log(Math.pow(num.split("")[1],2))

console.log("===========================")


function myFunction(){
let sum = 0

for(let i = 0 ; i  < num.length; i++){
     
    console.log(Math.pow(num.split("")[i],2))

    sum = sum + Math.pow(num.split("")[i],2)

    console.log(sum)

}

}


