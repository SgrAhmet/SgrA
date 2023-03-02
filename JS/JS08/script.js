let str = `Hello World`
// console.log(str)

// console.log(str.length)

// console.log(str[0])
// console.log(str[1])
// console.log(str[2])
// console.log(str[3])
// console.log(str[4])

// console.log(str[str.length-1])

// for(let i = 0 ; i < str.length ; i++ ){

//     console.log(str[i])

// }

for(let a = (str.length-1); a >= 0 ; a--){
    console.log(str[a],a)
}

// console.log(str.slice(1,8))
console.log(str.slice(str.length - 3))
// ?son 3(n) harf alma
// console.log(str.slice(4,7))
// console.log(str.slice(3))
// console.log(str.slice(-6,-2))

// console.log(str.slice(2,4))
// console.log(str.slice(4,2))

// console.log(str.substring(2,4))
// console.log(str.substring(4,2))

console.log(str.includes(`World`))
console.log(str.includes(`ahmet`))
console.log(str.includes(`Hello`))
console.log(str.includes(`hello`))

console.log(str.indexOf(`World`))
// ? Kaçıncı Karakterse Onu Döndürür (0,1,2,3....)
console.log(str.lastIndexOf(`World`))
// ?indexof un tersi

console.log(str.indexOf(`l`))
// ? Denemkki İLk Karakteri ALıyo

console.log(str.indexOf(`l`,4))
// ?4. karakterden sonra ara demek

console.log(str.search("World"))
console.log(str.search(/World/))
console.log(str.search(/world/))
console.log(str.search(/world/i))
// i koyarsan küçkü harf büyük harf farketmez


let str2 = "Mr Brown have a brown house and brown cat"

console.log(str2)

console.log(str2.replace("brown","black"))

console.log(str2.replace(/brown/i,"black"))

console.log(str2.replace(/brown/g,"black"))
// ?hepsini seçer replaceAll ile aynı

console.log(str2.replaceAll("brown","black"))


console.log(str2.replace(/brown/ig,"black"))
