let num = "97"

// ?----------------------------------------------------
// console.log(num)
// console.log(num.split(""))
// console.log(num.split("")[0])
// console.log(Math.pow(num.split("")[0],2) )  
// console.log(Math.pow(num.split("")[1],2) )  
// console.log(num.length)
// ?----------------------------------------------------

var sum = 0

// for(let i = 0; i < num.length  ; i++){


// sum = sum + Math.pow(num.split("")[i],2)

// console.log(sum)

// } 

// num = sum

while(num != 1){

    for(let i = 0; i < num.length  ; i++){


        sum = sum + Math.pow(num.split("")[i],2)
        
        console.log(sum)
        
        } 
        
        num = sum

}