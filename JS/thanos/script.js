// const texts = ["You were spared by Thanos.","You were slain by Thanos, for the good of the Universe."]

// let a = Number(Math.floor(Math.random() * 100) + 1)

// console.log(a)

// if(a < 50){
//     a = 0
    
// }else{
//     a = 1
// }

// console.log(a)

// let chosen = document.getElementById("index").innerHTML = texts[a]

function refresh(){
    const texts = ["You were spared by Thanos.","You were slain by Thanos, for the good of the Universe."]

let a = Number(Math.floor(Math.random() * 100) + 1)

console.log(a)

if(a < 50){
    a = 0
    
}else{
    a = 1
}

console.log(a)

let chosen = document.getElementById("index").innerHTML = texts[a]

}