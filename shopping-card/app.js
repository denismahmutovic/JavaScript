let allTotal = 0; // dugme za total za izdracuna sve 
function addToCart(element){  
let mainEl = element.closest('.single-item'); // uzimamo sve iz clase/ h3 cene...
let price = mainEl.querySelector ('.price').innerText; //uzvecemo $ cenu sa innerText
let name = mainEl.querySelector ("h3").innerText; //izvukli ime innerText;
let quantity = mainEl.querySelector ("input").value; // za input stavljamo value //  quantity html name 
let cartItems = document.querySelector (".cart-items"); //dodali clasu korpu gde smestamo sta smo dodali
if (parseInt (quantity) > 0){
                                            //if smo stavili da ne mozemo da stavimo 0 U kopru
                                            // vec da mora da bude vece od 0
price = price.substring(1); //brisemo $ ispred broja//

price = parseInt(price); // pretvorili smo sting u number
let total = price *  parseInt(quantity);  //{ stavili smo broj samo   }

    allTotal += total; // dugme da izdracuna sve u korpu

    cartItems.innerHTML += `<div class ="cart-single-item">
                                            <h3>${name}</h3>
                                            <p> $${price} x ${quantity} = $<span>${total}</span></p>
                                            <button onclick="removeFromcart(this)" class="remove-item" >Ukloni</button>
                                        </div>`;
                //dodali smo classu za kopru da izbaci sve jedan pored drugog ali moramoo u css 
                // da stavimo displey flex justyfy:space-betwen, i dodali smo dugme
                //ukloni


document.querySelector(".total").innerText = `Ukupno:${allTotal}Din`   //dodali smo i clase
                                                    //total da bi cena pisala dole na kraju. 
                                                    
                                                
    element .innerText = "Dodato"; // kada pretisnemo dugme pise dodato na dugme

    element.setAttribute ("disabled", "true"); // kada pretisnemo dugme jednom ne moze vise
} else {
    alert ("Odaberi kolicinu")
}
} 

function removeFromcart (element){    //funkcija od dugmeta da se ukloni aktikal ceo kod,koju sam dodao u div jss
    let mainEl = element.closest(".cart-single-item");  //uklanjamo iz korpe sve iz diva
    let price = mainEl.querySelector("p span").innerText; // dodali smo span u div da bi uzeli samo 
                                                        //broj koi je izdracunat ==10,20 [primer]

    let name = mainEl.querySelector("h3").innerText; // da se dugme [DODAJ] restaruje kada pogresimo aktikle iz korpe 
    let vagetables = document.querySelectorAll(".single-item"); // da se dugme [DODAJ] restaruje kada pogresimo aktikle iz korpe 
    console.log (price)
    price = parseInt (price); //price pretvarno u number je je bio string
    allTotal -= price;
    mainEl.remove ();   // //uklanjamo iz korpe sve iz diva
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
