let counter = 0
const mainDiv = document.querySelector("main")


const load = async ()=>{
    
    try {

        const response = await fetch("https://restcountries.com/v3.1/all").then(response=>response.json())

        

    for (let i = 0; i < 200; i++) {
        
        
        
        const newImg = document.createElement("img")
        newImg.src = `${response[i].flags.png}`
        newImg.width = `200` 
        
        mainDiv.appendChild(newImg)
      }
  


    } catch (error) {
        
    }

}

load();