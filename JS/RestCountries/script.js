const mainDiv = document.querySelector("main")

const giveMyApi = async ()=>{
  

    try {

    const response = await fetch("https://restcountries.com/v3.1/name/TURkEy").then(response=>response.json())


        console.log(response)
    // -----ToDo List---------------------------------------
   
    console.log(Object.values(response[0].currencies)[0].name)
    console.log(Object.values(response[0].currencies)[0].symbol)
    console.log(response[0].flags.png)
    console.log(response[0].name.common)
    console.log(Object.values(response[0].name.nativeName)[0].official)
    console.log(response[0].flag)
    console.log(response[0].population)
    console.log(response[0].capital[0])
    console.log(response[0].maps.googleMaps)
    console.log(`${response[0].area}km2`)

    // -----------------------------------------------------

   
    // mainDiv.innerHTML = `<img src="${response[0].flags.png}" alt="" width= 200px>
    // `
    const newImg = document.createElement("img")
    newImg.src = `${response[0].flags.png}`
    newImg.width = `200` 
    console.log(newImg)
    mainDiv.appendChild(newImg)
    


    } catch (error) {
            console.log(error)
    }

}

giveMyApi();