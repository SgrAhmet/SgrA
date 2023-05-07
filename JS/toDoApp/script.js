const listsArea = document.querySelector(".lists")

document.getElementById("my-button").addEventListener("click",()=>{
    listsArea.innerHTML = `<div class="list">
    <div class="left">
         <div class="checkbox">

    </div>
    <p>${document.querySelector(".my-input").value}</p>
    </div>
   
    <i class="fa-regular fa-trash-can"></i>
   </div>`
})


