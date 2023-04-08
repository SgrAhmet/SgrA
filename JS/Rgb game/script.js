let a = Math.ceil(Math.random() * 255);
let b = Math.ceil(Math.random() * 255);
let c = Math.ceil(Math.random() * 255);

// var styles = `
// .colors div{ 
// background-color: rgb(${a},${b},${c});
// }

// `;
// var styleSheet = document.createElement("style");
// styleSheet.innerText = styles;
// document.head.appendChild(styleSheet);


let text = `${Math.ceil(Math.random() * 255)},${Math.ceil(
  Math.random() * 255
)},${Math.ceil(Math.random() * 255)}`;

var styles = `
.colors div{ 
background-color: rgb(${text});

}


`;
var styleSheet = document.createElement("style");
styleSheet.innerText = styles;
document.head.appendChild(styleSheet);




document.getElementById("text").innerHTML = text;

