// _____________________________Asiggemnt______________________________
const selectArea = document.querySelector("#select");
const yourChoiceArea = document.getElementById("your-choice");
const tas ="fa-regular fa-hand-back-fist fa-rotate-90"
const kagıt ="fa-regular fa-hand"
const makas ="fa-regular fa-hand-scissors fa-flip-horizontal"
const choiceArea = [tas,kagıt,makas]
let yourChoice ;
let pcChoice ;

// ____________________Seçim-Yapma______________________________________
selectArea.addEventListener("click", (e) => {
  if (e.target.classList.value) {
    yourChoiceArea.innerHTML = `<i  class="${e.target.classList.value}"></i>`;
    yourChoice = e.target.classList.value 
    pc()
  }
});

// ____________________PC-Seçim-Yapma______________________________________

function pc(){
    pcChoice = choiceArea[Math.floor(Math.random() *3)]
    console.log(pcChoice)
    game()
}
// _______________________Oyun_________________________________________


