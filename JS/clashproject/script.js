function levels(th1, th2, th3) {
  this.th1 = th1;
  this.th2 = th2;
  this.th3 = th3;
}

const connon = new levels(2, 4, 6);
const archer = new levels(3, 5, 7);

let mortar = {
  th1: 1,
  th2: 5,
  th3: 9,
};

// console.log(mortar)

mortar.th4 = 3

// console.log(mortar)

// console.log(Object.keys(mortar))


console.log(document.getElementsByTagName("button"))

let buttons = document.getElementById("th1")

buttons.addEventListener("click", function() {
    
    console.log("ahmet")

  });

  
