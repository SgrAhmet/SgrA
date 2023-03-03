var input = prompt(`Please Enter Sentence`).trim().toLocaleLowerCase();


while(input.indexOf(` `,input.indexOf(` `)+1) > - 1){

  var input = prompt(`Sentence Shouldn't have no more 2 spaces`).trim().toLocaleLowerCase();
}






var words = input.split(" ");


for (let i = 1; i < words.length; i++) {
  var x = words[i].split("");

  x[0] = x[0].toLocaleUpperCase();

  words[i] = x.join("");
}

console.log(words.join(""));
