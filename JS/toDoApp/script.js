const listsArea = document.querySelector(".lists");
let counter = 1;
// console.log(listsArea.innerHTML);

// ------------------------Yeni List Ekleme-----------------------------

document.getElementById("my-button").addEventListener("click", () => {
  listsArea.innerHTML += `
   <div class="list list-${counter}">
    <div class="left">
         <div class="checkbox">

    </div>
    <p>${document.querySelector(".my-input").value}</p>
    </div>
   
    <i class="fa-regular fa-trash-can i-${counter}"></i>
   </div>
    
   `;
  document.querySelector(".my-input").value = ``;
  document.querySelector(".my-input").focus();

  counter++;
});
// ------------------------Enter Tuşu--------------------------------
document.querySelector(".my-input").addEventListener("keydown", (event) => {
  if (event.keyCode === 13) {
    document.querySelector(".inputs button").click();
  }
});
// ------------------------Silme Tuşu--------------------------------

document.querySelector(".lists").addEventListener("click", (e) => {
  if (e.target.classList.value.includes("fa-regular fa-trash-can")) {
    // e.target.parentElement.innerHTML = ``
    e.target.parentElement.classList.value = `none`;
    console.log(e.target.parentElement)
    //  console.log(e.target.parentElement.children[0].children[1])
  }
});
// ------------------------CheckBox Tuşu--------------------------------

document.querySelector(".lists").addEventListener("click", (e) => {
  if (e.target.classList.value.includes("checkbox")) {
    e.target.nextElementSibling.classList.toggle("line-through");
    e.target.classList.toggle("checked")
    
  }
});

// ------------------------Edit Tuşu--------------------------------

