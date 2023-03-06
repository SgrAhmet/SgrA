
function count(){
    var metin = document.getElementById("text").value;
    let words = metin.split(` `);
    let letters = metin.split(``);
    document.getElementById("demo").innerHTML = `Letters Legnth : ${letters.length} Words Length : ${words.length}`;
}
