let counter = 0
const mainDiv = document.querySelector(".mainDiv")


const load = async ()=>{
    
    try {

        const response = await fetch("https://restcountries.com/v3.1/all").then(response=>response.json())

        

    for (let i = 0; i < 5; i++) {

        const newCountry = document.createElement("div")
        const newCountryName = document.createElement("h3")
        const newCapital = document.createElement("p")
        const newPopulation = document.createElement("p")
        const newArea = document.createElement("p")
        const newSup = document.createElement("sup")
        const newCurrencie = document.createElement("p")
        const newFlagLink = document.createElement("a")
        const newFlag = document.createElement("img")
        
        
        newCountry.classList = "country"
        newCountryName.innerText = `${response[i].name.common}`
        newCapital.innerText = `Capital : ${response[i].capital[0]}`
        newPopulation.innerText = `Population : ${response[i].population}`
        newArea.innerText = `Area : ${response[0].area}km`
        newSup.innerText = `2`
        newCurrencie.innerText = `Currencie : ${Object.values(response[i].currencies)[0].name} (${Object.values(response[i].currencies)[0].symbol})`
        newFlagLink.href = `${response[i].maps.googleMaps}`
        newFlagLink.target = "_blank"
        newFlag.src = `${response[i].flags.png}`

        
        
         mainDiv.appendChild(newCountry)
         newCountry.appendChild(newCountryName)
         newCountry.appendChild(newCapital)
         newCountry.appendChild(newPopulation)
         newCountry.appendChild(newArea)
         newArea.appendChild(newSup)
         newCountry.appendChild(newCurrencie)
         newCountry.appendChild(newFlagLink)
         newFlagLink.appendChild(newFlag)
        
     
      }
  


    } catch (error) {
        
    }

}

load();


// const newCountry = document.createElement("div")
// const newCountryName = document.createElement("h3")
// const newCapital = document.createElement("p")
// const newPopulation = document.createElement("p")
// const newArea = document.createElement("p")
// const newSup = document.createElement("sup")
// const newCurrencie = document.createElement("p")
// const newFlagLink = document.createElement("a")
// const newFlag = document.createElement("img")


// newCountry.classList = "country"
// newCountryName.innerText = "Poland"
// newCapital.innerText = "Capital : Warsaw"
// newPopulation.innerText = "Population : 737371"
// newArea.innerText = "Area : 73771km"
// newSup.innerText = `2`
// newCurrencie.innerText = "Currencie : Turkish lira (₺)"
// newFlagLink.href = "https://goo.gl/maps/dXFFraiUDfcB6Quk6"
// newFlagLink.target = "_blank"
// newFlag.src = "https://flagcdn.com/w320/tr.png"


//  mainDiv.appendChild(newCountry)
//  newCountry.appendChild(newCountryName)
//  newCountry.appendChild(newCapital)
//  newCountry.appendChild(newPopulation)
//  newCountry.appendChild(newArea)
//  newArea.appendChild(newSup)
//  newCountry.appendChild(newCurrencie)
//  newCountry.appendChild(newFlagLink)
//  newFlagLink.appendChild(newFlag)
