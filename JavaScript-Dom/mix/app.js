let allTotal = 0
function addToCart(element){
    let mainEl = element.closest('.single-item');
    let price = mainEl.querySelector(".price").innerText
    let name =  mainEl.querySelector("h3").innerText
    let quantity = mainEl.querySelector("input").value
    let cartItems = document.querySelector(".cart-items")

    if(parseInt(quantity)> 0){
        price = price.substring(1)
        let total = price * parseInt(quantity)
        allTotal += total
        cartItems.innerHTML += `<div class="cart-single-item"> 
                                    <h3> ${name}</h3>
                                    <p> $${price} x ${quantity} = $<span> ${total}</span></p>
                                    <button onclick="removeFromcart(this)"class="remove-item">ukloni</button>
                                    </div>`
    document.querySelector(".total").innerText = `ukupno ${allTotal}din`
    element.innerText = 'dodato'
    element.setAttribute("disabled",true)                                
    } else{
        alert("obaberi kolicinu")
    }

}

function removeFromcart (element){
    let mainEl = element.closest(".cart-single-item");
    let price = mainEl.querySelector("p span").innerText
    let name = mainEl.querySelector("h3").innerText
    let vagetables = document.querySelector(".single-item")
    price = parseInt(price)
    allTotal -= price
    
    mainEl.remove()
    document.querySelector(".total").innerHTML = `total: ${allTotal}`
    vagetables.forEach(function (vege){
        let itemName = vege.querySelector(".si-content h3").innerText;
        if (itemName === name){
         vage.querySelector(".actions input").value = 0 // actions je classa
         vage.querySelector(".actions button").removeAttribute ("disabled"); // actions je clasa
         vage.querySelector(".actions button").innerHTML = "Dodaj";
        }
            
        });
    }
}