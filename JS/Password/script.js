sumTwo = 0;
sumThree = 0;
gap = 0;

function gapFunction(x) {
  for (let i = 0; i < x; i++) {
    sumTwo += 2 ** i;
    sumThree = sumThree + 3 ** i;
    gap = sumThree -sumTwo
    console.log(i,sumTwo)
    // console.log(`${i + 1}. sıradaki fark = ${sumThree} - ${sumTwo} ==${gap}`)
    
  }
}

gapFunction(10);

// sum = 0;
// sumKg = null;

// function chess(x) {
//   for (let i = 0; i < x; i++) {
//     sum = sum + 2 ** i;

//     if (i > 60) {
//       sumKg = sum / 1000;
//       console.log(sumKg);
//     }
//   }
// }

// chess(64);
