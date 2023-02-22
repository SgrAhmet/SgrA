const artikyil = function(year){

    if(year % 4 === 0){
        
        if(year % 100 === 0 && year % 400 === 0 ){
            alert("Artık Yıl")
        }


    }else{
        alert("Artık Yıl Değil")
    }


}