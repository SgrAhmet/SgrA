// ?Genel bir kural olarak, artık yıllar 4 rakamının katı olan yıllardır:

//? 1980, 1984, 1988, 1992, 1996, 2000, 2004, 2008, 2012, 2016, 2020, 2024, 2028, 2032, 2036, 2040, 2044, 2048 vb.
//? Ancak bu kuralın bir istisnası vardır:

//? 1. 100'ün katı olan yıllardan sadece 400'e kalansız olarak bölünebilenler artık yıldır:

//? Örneğin 1600 ve 2000 yılları artık yıldır ancak 1800 ve 1900 artık yıl değildir.


// const artikyil = function(year){

//     if(year % 4 === 0){
        
       
//         if(year % 100 === 0 && year % 400 !== 0){

//             alert("Artık Yıl Değil")
            

//         }else{
//             alert("Artık Yıl")
//         }

        


//     }else{
//         alert("Artık Yıl Değil")
//     }


// }

// let year = Number(prompt("Yıl Giriniz"))
// artikyil(year);




const artikyil = function(year){

    if(year % 4 === 0){
        
       
        if(year % 100 === 0 && year % 400 !== 0){

            alert("Artık Yıl Değil")
            

        }else if(year % 400 == 0 && year % 4000 === 0){

            alert("Artık Yıl Değil")

        }else{
            alert("Artık Yıl")
        }

        


    }else{
        alert("Artık Yıl Değil")
    }


}

let year = Number(prompt("Yıl Giriniz"))
artikyil(year);


