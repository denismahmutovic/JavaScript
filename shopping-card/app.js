let allTotal = 0; // dugme za total za izdracuna sve 
function addToCart(element){
let mainEl = element.closest('.single-item');
let price = mainEl.querySelector ('.price').innerText; //korpa da izcucemo samo broj innerText
let name = mainEl.querySelector ("h3").innerText; //izvukli ime innerText;
let quantity = mainEl.querySelector ("input").value;
let cartItems = document.querySelector (".cart-items"); //dodali smo smo desnu korpu
if (parseInt (quantity) > 0){
    
price = price.substring(1);
price = parseInt(price);
let total = price *  parseInt(quantity);  //{ stavili smo broj samo   }

    allTotal += total; // dugme da izdracuna sve u korpu

    cartItems.innerHTML += `<div class ="cart-single-item">
                                            <h3>${name}</h3>
                                            <p> $${price} x ${quantity} = $<span>${total}</span></p>
                                            <button onclick="removeFromcart(this)" class="remove-item" >Ukloni</button>
                                        </div>`;

document.querySelector(".total").innerText = `Ukupno:${allTotal}Din`       // cena na kraj                                
    element .innerText = "Dodato"; // kada pretisnemo dugme pise dodato
    element.setAttribute ("disabled", "true"); // kada pretisnemo dugme jednom ne moze vise
} else {
    alert ("Odaberi kolicinu")
}
} 

function removeFromcart (element){    //funkcija od dugmeta da se ukloni aktikal ceo kod,koju sam dodao u div
    let mainEl = element.closest(".cart-single-item");  //uklanjamo elemenat
    let price = mainEl.querySelector("p span").innerText;
    let name = mainEl.querySelector("h3").innerText; // da se dugme [DODAJ] restaruje kada pogresimo aktikle iz korpe 
    let vagetables = document.querySelectorAll(".single-item"); // da se dugme [DODAJ] restaruje kada pogresimo aktikle iz korpe 
    console.log (price)
    price = parseInt (price);
    allTotal -= price;
    mainEl.remove ();   
    document.querySelector (".total").innerHTML = `total: $${allTotal}` 

   vagetables.forEach(function (vege){
       let itemName = vege.querySelector(".si-content h3").innerText;
       if (itemName === name){
        vage.querySelector(".actions input").value = 0 // actions je classa
        vage.querySelector(".actions button").removeAttribute ("disabled"); // actions je clasa
        vage.querySelector(".actions button").innerHTML = "Dodaj";
       }
           
       });
   }
//nije zavsena zadatak treba ovo dugme na kraju kad se ukloni iz koppre da se vrati dugme na 0  da mozemo opet da ubacimo artikal
