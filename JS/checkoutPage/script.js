const taxPercent = 0.18
const shippingPrice = 19.99

window.addEventListener("load",()=>{
    
    // subTotal()
})


document.querySelector(".shoppingCartDiv").addEventListener("click",(e)=>{
        // Minus
        if(e.target.classList.contains("fa-minus")){
            if(e.target.nextElementSibling.innerText == 1){
                confirm("Your product will delete") ? e.target.closest(".product").remove() : null
            }
            else{
                e.target.nextElementSibling.innerText --
                productTotal(e)
            }
        }
        // Plus
        else if(e.target.classList.contains("fa-plus")){
            
            e.target.previousElementSibling.innerText ++
            productTotal(e)
        }
        // Trash
        else if(e.target.classList.contains("fa-trash")){
            confirm("Your product will delete") ? e.target.closest(".product").remove() : null
        }

})

const productTotal = (e)=>{
    console.log(e.target.closest(".main").nextElementSibling.querySelector(".price").innerText)
}

