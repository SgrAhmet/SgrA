//! Genel bir kural olarak, artık yıllar 4 rakamının katı olan yıllardır:
//! 1980, 1984, 1988, 1992, 1996, 2000, 2004, 2008, 2012, 2016, 2020, 2024, 2028, 2032, 2036, 2040, 2044, 2048 vb.
//! Ancak bu kuralın iki istisnası vardır:
//! 1. 100'ün katı olan yıllardan sadece 400'e kalansız olarak bölünebilenler artık yıldır:
//! Örneğin 1600 ve 2000 yılları artık yıldır ancak 1800 ve 1900 artık yıl değildir.
//! Sadece 400'e tam olarak bölünebilenlerin artık yıl kabul edilmesinin nedeni, bir astronomik yılın 365,25 gün değil, yaklaşık olarak 365,242 gün olmasından kaynaklanan hatayı gidermektir.[1]
//! 2. Hesabı daha da hassas hâle getirmek için (400'e kalansız bölünebildiği halde) 4000'e kalansız olarak bölünebilen yıllar artık yıl kabul edilmez
//! Örneğin 4000, 8000, 12000, 16000, 24000, 32000, 48000, 64000 ve 96000 yılları 400'e tam bölünebildiği halde artık yıl kabul edilmeyecektir.


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


