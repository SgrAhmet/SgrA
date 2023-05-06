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
let storagedYourScore = localStorage.getItem("yourTotalScore");
localStorage.setItem("yourTotalScore", storagedYourScore);
const topYourScoreArea = document.getElementById("top-your-score");
let storagedPcScore = localStorage.getItem("pcTotalScore");
localStorage.setItem("pcTotalScore", storagedPcScore);
const topPcScoreArea = document.getElementById("top-pc-score");
topYourScoreArea.innerHTML = storagedYourScore;
topPcScoreArea.innerHTML = storagedPcScore;
let yourChoice;
let pcChoice;




// console.log(storagedYourScore,storagedPcScore)

// let storagedScore = localStorage.getItem("highScore")
// localStorage.setItem("highScore", 2)
// console.log(storagedScore)

// ____________________Seçim-Yapma______________________________________
selectArea.addEventListener("click", (e) => {
  if (e.target.classList.value) {
    document
      .querySelectorAll("#select i")
      .forEach((e) => (e.style.color = "#EEE9DA"));

    yourChoiceArea.innerHTML = `<i id="black-color" class="${e.target.classList.value}"></i>`;
    yourChoice = e.target.classList.value;

    e.target.style.color = "#a5a196";
    setTimeout(time,2000)
    function time(){
      e.target.style.color = "#EEE9DA"
    }
    pc();
  }
});

// ____________________PC-Seçim-Yapma______________________________________

function pc() {
  pcChoice = choiceArea[Math.floor(Math.random() * 3)];
  // pcChoice = choiceArea[0]; //Deneme Yapmak İçin
  // Hileli Mod
  // if(yourChoice == tas){
  //   pcChoice = kagıt
  // }else if(yourChoice == makas){
  //   pcChoice =tas
  // }else{
  //   pcChoice = makas
  // }
  pcChoiceArea.innerHTML = `<i class="${pcChoice}"></i>`;
  game();
}
// _______________________Oyun_________________________________________

function game() {
  switch (yourChoice) {
    case `fa-regular fa-hand-back-fist fa-rotate-90`:
      if (pcChoice == "fa-regular fa-hand") {
        lose();
      } else if (pcChoice == "fa-regular fa-hand-scissors fa-flip-horizontal") {
        win();
      }
      break;

    case `fa-regular fa-hand`:
      if (pcChoice == "fa-regular fa-hand-back-fist fa-rotate-90") {
        win();
      } else if (pcChoice == "fa-regular fa-hand-scissors fa-flip-horizontal") {
        lose();
      }
      break;

    case `fa-regular fa-hand-scissors fa-flip-horizontal`:
      if (pcChoice == "fa-regular fa-hand-back-fist fa-rotate-90") {
        lose();
      } else if (pcChoice == "fa-regular fa-hand") {
        win();
      }
      break;

    default:
      break;
  }
  if (yourChoice == pcChoice) {
    document.querySelector(".main-container").classList.add("active");
    document.querySelector(".hub").style.boxShadow = "0px 0px 10px 10px yellow";
    document.querySelector(".result").style.backgroundColor = "yellow";
    document.querySelector(".result-msg").innerHTML = "It's draw";
  }

  if (pcScore.innerHTML >= 10) {
    localStorage.setItem("pcTotalScore", +storagedPcScore + 1);
    topPcScoreArea.innerHTML = storagedPcScore;

    document.querySelector(".modal-area").style.display = "flex";
  }
  if (yourScore.innerHTML >= 10) {
    localStorage.setItem("yourTotalScore", +storagedYourScore + 1);
    topYourScoreArea.innerHTML = storagedYourScore;
    document.querySelector(".modal-area").style.display = "flex";
    document.querySelector("#modal-msg").innerHTML = "🥳You Win🥳";
  }
}

document.getElementById("modal-btn").addEventListener("click", () => {
  location.reload();
});

// _______________________Fonksiyonlar_____________________________________

function win() {
  document.querySelector(".main-container").classList.add("active");
  document.querySelector(".hub").style.boxShadow =
    "0px 0px 10px 10px greenyellow";
  document.querySelector(".result").style.backgroundColor = "greenyellow";
  document.querySelector(".result-msg").innerHTML = "You Win";
  yourScore.innerHTML++;
}
function lose() {
  document.querySelector(".main-container").classList.add("active");
  document.querySelector(".hub").style.boxShadow = "0px 0px 10px 10px red";
  document.querySelector(".result").style.backgroundColor = "red";
  document.querySelector(".result-msg").innerHTML = "You Lost";
  pcScore.innerHTML++;
}

document.getElementById("reset-btn").addEventListener("click",()=>{
localStorage.setItem("pcTotalScore", 0);
localStorage.setItem("yourTotalScore", 0);
storagedPcScore = localStorage.getItem("storagedPcScore")
storagedYourScore = localStorage.getItem("storagedYourScore")
topPcScoreArea.innerHTML = 0;
topYourScoreArea.innerHTML = 0;
})

