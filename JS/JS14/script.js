document.querySelector(".inputs button").addEventListener("click",() =>{



    const newElemnt = document.createElement("li")
const newText = document.createTextNode(`${document.querySelector("input").value}`)
newElemnt.appendChild(newText)
document.querySelector("ul li").before(newElemnt)
document.querySelector("input").value = ""
document.querySelector("input").focus()
}

)


document.querySelector("input").addEventListener("keydown",(event)=>{
    // console.log(event)
    if(event.keyCode === 13){
        document.querySelector(".inputs button").click()
    }
})