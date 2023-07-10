let counter = 0;
const mainDiv = document.querySelector(".mainDiv");
const form = document.querySelector("form");
const inputText = document.querySelector("form input[type=text]")

window.addEventListener("load",()=>{
    loadAll();
    
})

form.addEventListener("submit",(e)=>{
    load()
    e.preventDefault()
    form.reset()
  
})


const loadAll = async () => {
  try {
    const response = await fetch("https://restcountries.com/v3.1/all").then(
      (response) => response.json()
    );

    for (let i = 0; i < 200; i++) {
      const newCountry = document.createElement("div");
      const newCountryName = document.createElement("h3");
      const newCapital = document.createElement("p");
      const newPopulation = document.createElement("p");
      const newArea = document.createElement("p");
      const newSup = document.createElement("sup");
      const newCurrencie = document.createElement("p");
      const newFlagLink = document.createElement("a");
      const newFlag = document.createElement("img");

      newCountry.classList = "country";

      // -------------------------------------------------------------

      if (response[i].name.common) {
        newCountryName.innerText = `${response[i].name.common}`;
      } else {
        newCountryName.innerText = `None`;
      }

      // -------------------------------------------------------------

      if (response[i].capital) {
        newCapital.innerText = `Capital : ${response[i].capital[0]}`;
      } else {
        newCapital.innerText = `Capital : None`;
      }

      // -------------------------------------------------------------
      if (response[i].population) {
        newPopulation.innerText = `Population : ${response[i].population}`;
      } else {
        newPopulation.innerText = `Population : None`;
      }
      // -------------------------------------------------------------
      if (response[i].area) {
        newArea.innerText = `Area : ${response[i].area}km`;
      } else {
        newArea.innerText = `Area : None km`;
      }
      // -------------------------------------------------------------

      newSup.innerText = `2`;
      // -------------------------------------------------------------
      if (response[i].currencies) {
        newCurrencie.innerText = `Currencie : ${
          Object.values(response[i].currencies)[0].name
        } (${Object.values(response[i].currencies)[0].symbol})`;
      } else {
        newCurrencie.innerText = `Currencie : None (none)`;
      }

      // -------------------------------------------------------------
      if (response[i].maps.googleMaps) {
        newFlagLink.href = `${response[i].maps.googleMaps}`;
      } else {
        newFlagLink.href = `#`;
      }

      // -------------------------------------------------------------

      newFlagLink.target = "_blank";
      // -------------------------------------------------------------
      if (response[i].flags.png) {
        newFlag.src = `${response[i].flags.png}`;
      } else {
        newFlag.src = `#`;
        newFlag.alt = `Null`;
      }

      // -------------------------------------------------------------

      mainDiv.appendChild(newCountry);
      newCountry.appendChild(newCountryName);
      newCountry.appendChild(newCapital);
      newCountry.appendChild(newPopulation);
      newCountry.appendChild(newArea);
      newArea.appendChild(newSup);
      newCountry.appendChild(newCurrencie);
      newCountry.appendChild(newFlagLink);
      newFlagLink.appendChild(newFlag);

      
    }
  } catch (error) {
    
    console.log(error);
  }
};



const load =  async()=>{
//    mainDiv.style.display = "none"
   mainDiv.innerHTML = ""

  



    try {
        
        const response = await fetch(`https://restcountries.com/v3.1/name/${inputText.value}`).then(
      (response) => response.json()
    );

    const newCountry = document.createElement("div");
    const newCountryName = document.createElement("h3");
    const newCapital = document.createElement("p");
    const newPopulation = document.createElement("p");
    const newArea = document.createElement("p");
    const newSup = document.createElement("sup");
    const newCurrencie = document.createElement("p");
    const newFlagLink = document.createElement("a");
    const newFlag = document.createElement("img");

    newCountry.classList = "country";

     // -------------------------------------------------------------

     if (response[0].name.common) {
        newCountryName.innerText = `${response[0].name.common}`;
      } else {
        newCountryName.innerText = `None`;
      }

      // -------------------------------------------------------------

      if (response[0].capital) {
        newCapital.innerText = `Capital : ${response[0].capital[0]}`;
      } else {
        newCapital.innerText = `Capital : None`;
      }

      // -------------------------------------------------------------
      if (response[0].population) {
        newPopulation.innerText = `Population : ${response[0].population}`;
      } else {
        newPopulation.innerText = `Population : None`;
      }
      // -------------------------------------------------------------
      if (response[0].area) {
        newArea.innerText = `Area : ${response[0].area}km`;
      } else {
        newArea.innerText = `Area : None km`;
      }
      // -------------------------------------------------------------

      newSup.innerText = `2`;
      // -------------------------------------------------------------
      if (response[0].currencies) {
        newCurrencie.innerText = `Currencie : ${
          Object.values(response[0].currencies)[0].name
        } (${Object.values(response[0].currencies)[0].symbol})`;
      } else {
        newCurrencie.innerText = `Currencie : None (none)`;
      }

      // -------------------------------------------------------------
      if (response[0].maps.googleMaps) {
        newFlagLink.href = `${response[0].maps.googleMaps}`;
      } else {
        newFlagLink.href = `#`;
      }

      // -------------------------------------------------------------

      newFlagLink.target = "_blank";
      // -------------------------------------------------------------
      if (response[0].flags.png) {
        newFlag.src = `${response[0].flags.png}`;
      } else {
        newFlag.src = `#`;
        newFlag.alt = `Null`;
      }

      // -------------------------------------------------------------

      mainDiv.appendChild(newCountry);
      newCountry.appendChild(newCountryName);
      newCountry.appendChild(newCapital);
      newCountry.appendChild(newPopulation);
      newCountry.appendChild(newArea);
      newArea.appendChild(newSup);
      newCountry.appendChild(newCurrencie);
      newCountry.appendChild(newFlagLink);
      newFlagLink.appendChild(newFlag);


    } catch (error) {
        console.log(error)
    }

}




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

