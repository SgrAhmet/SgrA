
function myCount(){
    var metin = document.getElementById("text").value;
    let words = metin.split(` `);
    let letters = metin.split(``);
    // document.getElementById("words").innerHTML = `${words.length}`;
    // document.getElementById("letter").innerHTML = `${letters.length}`;
}



function countToWords(){

    var metin = document.getElementById("text").value;
    let words = metin.split(` `);
    let letters = metin.split(``);
    // document.getElementById("words").innerHTML = `${words.length}`;
    // document.getElementById("letter").innerHTML = `${letters.length}`;




    let from = 0 ;
    let to = words.length;
    let step = to > from ? 1 : -1;
    let interval = words.length;

    if(from == to){
        document.querySelector("#words").textContent = from;
        return;
    }

    let counter = setInterval(function(){
        from += step;
        document.querySelector("#words").textContent = from;

        if(from == to){
            clearInterval(counter);
        }
    }, interval);



    let from1 = 0 ;
    let to1 = letters.length;
    let step1 = to1 > from1 ? 1 : -1;
    let interval1 = 3;

    if(from1 == to1){
        document.querySelector("#letter").textContent = from1;
        return;
    }

    let counter1 = setInterval(function(){
        from1 += step1;
        document.querySelector("#letter").textContent = from1;

        if(from1 == to1){
            clearInterval(counter1);
        }
    }, interval1);




}


