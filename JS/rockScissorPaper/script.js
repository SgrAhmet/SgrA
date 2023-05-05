// _____________________________Asiggemnt______________________________
const selectArea = document.querySelector("#select");
const yourChoiceArea = document.getElementById("your-choice");
const pcChoiceArea = document.getElementById("pc-choice");
const tas = "fa-regular fa-hand-back-fist fa-rotate-90";
const kagıt = "fa-regular fa-hand";
const makas = "fa-regular fa-hand-scissors fa-flip-horizontal";
const choiceArea = [tas, kagıt, makas];
let yourScore = document.querySelector("#your-score");
let pcScore = document.querySelector("#pc-score");
let yourChoice;
let pcChoice;

//  yourScore.innerHTML++
//  pcScore.innerHTML++



// ____________________Seçim-Yapma______________________________________
selectArea.addEventListener("click", (e) => {
  if (e.target.classList.value) {
    document.querySelectorAll("#select i").forEach(e =>e.style.color = "#EEE9DA")


    yourChoiceArea.innerHTML = `<i id ="black-color" class="${e.target.classList.value}"></i>`;
    yourChoice = e.target.classList.value;
    
    e.target.style.color = "#a5a196"
    pc();
  }
});

// ____________________PC-Seçim-Yapma______________________________________

function pc() {
  pcChoice = choiceArea[Math.floor(Math.random() * 3)];
  // pcChoice = choiceArea[0];
  pcChoiceArea.innerHTML = `<i class="${pcChoice}"></i>`;
  game();
}
// _______________________Oyun_________________________________________


function game() {
  switch (yourChoice) {
    case `fa-regular fa-hand-back-fist fa-rotate-90`:
      if(pcChoice == "fa-regular fa-hand" ){
        lose()
      }else if(pcChoice == "fa-regular fa-hand-scissors fa-flip-horizontal" ){
          win()
      }
      break;

    case `fa-regular fa-hand`:
      if(pcChoice == "fa-regular fa-hand-back-fist fa-rotate-90" ){
        win()
      }else if(pcChoice == "fa-regular fa-hand-scissors fa-flip-horizontal" ){
          lose()
      }
      break;

    case `fa-regular fa-hand-scissors fa-flip-horizontal`:
      if(pcChoice == "fa-regular fa-hand-back-fist fa-rotate-90" ){
        lose()
      }else if(pcChoice == "fa-regular fa-hand" ){
          win()
      }
      break;
      
          
    default:
      break;

      
  }
  if(yourChoice == pcChoice) {
     document.querySelector(".main-container").classList.add("active")
  document.querySelector(".hub").style.boxShadow = "0px 0px 10px 10px yellow";
  document.querySelector(".result").style.backgroundColor = "yellow";
  document.querySelector(".result-msg").innerHTML = "It's draw";
 
  }
}

function win() {
  document.querySelector(".main-container").classList.add("active")
  document.querySelector(".hub").style.boxShadow =
    "0px 0px 10px 10px greenyellow";
  document.querySelector(".result").style.backgroundColor = "greenyellow";
  document.querySelector(".result-msg").innerHTML = "You Win";
  yourScore.innerHTML++;
}
function lose() {
  document.querySelector(".main-container").classList.add("active")
  document.querySelector(".hub").style.boxShadow = "0px 0px 10px 10px red";
  document.querySelector(".result").style.backgroundColor = "red";
  document.querySelector(".result-msg").innerHTML = "You Lost";
  pcScore.innerHTML++;
}

