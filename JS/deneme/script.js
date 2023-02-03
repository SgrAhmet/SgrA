let dop = 2003
let name = "Ahmet"


let yıl = new Date().getFullYear()
console.log(yıl)


let yas = yıl - dop
console.log(yas)
console.log({yas})

// console.log(name + " " + yas + " yaşında")


console.log(`${name} şu anda ${yas} yaşındadır.`)  //?backTick kullanımı


function tellMyDate (ad,dt) {

    let yas = new Date().getFullYear() - dt
    console.log(`${ad} şu anda ${yas} yaşındadır.`) 
}

tellMyDate ("ahmet",2212)



console.log(`${name} ${dop} yılında doğdu`)

// console.log(`${name} (${new Date().getFullYear()} - ${dop})`) yusuf abime sor



    let pi = 3.14
    // let r = prompt("yarıçap girin")
    // console.log(r)

    let R = Number(prompt("yarıçap girin"))
    console.log(R)

    let alan = pi * R * R
    console.log(alan)

    console.log(`Dairenin Alanı ${alan} dır`)


    console.log(`Dairenin Alanı ${Math.floor(alan)} dır`)
    console.log(`Dairenin Alanı ${Math.ceil(alan)} dır`)
    console.log(`Dairenin Alanı ${Math.trunc(alan)} dır`)
    console.log(`Dairenin Alanı ${Math.round(alan)} dır`)
