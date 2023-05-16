const htmlUl = document.getElementById("main-ul");
const addButton = document.getElementById("add-button");
const myInput = document.getElementById("input");
let todoList = JSON.parse(localStorage.getItem("todoList")) || [];

window.addEventListener("load", (e) => {
  todoList.forEach((element) => {
    createNewElement(element);
  });
});

addButton.addEventListener("click", () => {
  // if(myInput.innerText === ""){

  //     alert("Please Enter New Todo")
  //     return;
  // }

  const newList = {
    id: new Date().getTime(),
    name: myInput.value,
    checked: false,
  };
  myInput.value = "";
  myInput.focus();

  todoList.push(newList);
  localStorage.setItem("todoList", JSON.stringify(todoList));
  createNewElement(newList);
});

myInput.addEventListener("keydown", (event) => {
  if (event.keyCode === 13) {
    addButton.click();
  }
});

const createNewElement = (newList) => {
  const { id, name, checked } = newList;

  const newLi = document.createElement("li");
  newLi.setAttribute("id", id);
  checked ? newLi.classList.add("checked") : null;
  htmlUl.prepend(newLi);

  const newCheckBox = document.createElement("i");
  newCheckBox.setAttribute("class", "fa-regular fa-square-check");
  newLi.appendChild(newCheckBox);

  const newP = document.createElement("p");
  newP.innerText = name;
  newLi.appendChild(newP);

  const newTrashBtn = document.createElement("i");
  newTrashBtn.setAttribute("class", "fa-solid fa-trash-can");
  newLi.appendChild(newTrashBtn);

//   console.log(newLi);
};

htmlUl.addEventListener("click",(e)=>{

    if(e.target.classList.value.includes("fa-square-check")){
        e.target.classList.toggle("fa-solid")
        e.target.closest("li").classList.toggle("checked")

    //   e.target.closest("li").id
    todoList.filter((a)=>{
        a.id == e.target.closest("li").id
        
    }).forEach(()=>{
        console.log("ahmet")
    })
    }
    
})

