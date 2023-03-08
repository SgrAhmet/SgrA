// let num = prompt("Please Enter Number")

let num = "2542";
console.log("sayınnı kendisi",num)
// console.log(num.split(""))
// console.log("sayının tersi",+num.split("").reverse().join(""))

// ?========================================

if( +num == +num.split("").reverse().join("")){

    console.log("Your number is palindromic number")


}else{


    var upNum = num 
    
    while(+upNum != +upNum.split("").reverse().join("")){

    upNum =  Number(upNum) + 1
    upNum = upNum.toString()
    
    }
    console.log(`up ${upNum}`)
    

    var lowNum = num

    while(+lowNum != +lowNum.split("").reverse().join("")){

        lowNum = Number(lowNum) - 1
        lowNum = lowNum.toString()

    }
    
    console.log(`low ${lowNum}`)

       if(+num - +lowNum <= +upNum - +num ) {

        console.log(`Nearest palindromic number is ${lowNum}`)

       }  else{

        console.log(`Nearest palindromic number is ${upNum}`)
       }


}





