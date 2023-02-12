

// let num = Number(prompt("Sayı Giriniz2"))


// let isaret;
// if(num == 0){
//     isaret = "Sıfır"
//     console.log(isaret)
// }

// else if(num < 0){
//    isaret = "Negatif"
//     console.log(isaret)

// }

// else {
//     isaret = "Pozitif"
//     console.log(isaret)
// }


const n1 = Number(prompt("Please Enter A Number"))
const x  = prompt("+,-,*,/")
const n2 = Number(prompt("Please Enter A Number"))

switch (x) {
    case "+":
        
        console.log(`${n1} ${x} ${n2} = ${n1+n2} `)
        
        break;
    case "-":
        console.log(`${n1} ${x} ${n2} = ${n1-n2} `)
        break;

    case "*":
        console.log(`${n1} ${x} ${n2} = ${n1*n2} `)
        break;
    default:

    console.log(`${n1} ${x} ${n2} = ${n1/n2} `)
        break;
}

// const age = Number(prompt("Yaş Girin"))
// console.log(age < 18 ? "Kid" : "Not a Kid")

