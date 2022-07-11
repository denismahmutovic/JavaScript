const bredn = document.getElementsByTagName("span");
for(auto of bredn){
    console.log(auto.innerText)
}
// console.log(bredn[0].innerText)

let model = document.getElementsByClassName("automobili-model");
// for(modeli of model){
//     console.log(modeli.innerText)
// }
// let najbolji = document.getElementById("recenica")
// console.log(najbolji.innerText)



brend = document.querySelectorAll("span")
console.log(brend)
for(auto of brend){
    console.log(auto.innerText)
}

let modeli = document.querySelector(".automobili-model")
for(modeli of model){
    console.log(modeli.innerText)
}

// Brisanje iz HTML remove()

let recenica = document.querySelector("#recenica");
recenica.remove()

// Kreiranje novog Div elementa

// let novi_el = document.createElement("div")
// let body = document.querySelector("body")
// body.appendChild(novi_el)
// novi_el.classList = "novi-element";
// novi_el.innerText = "pozdrav!"


let novi = document.createElement("div")
let body = document.querySelector("body")
body.appendChild(novi)
novi.classList = "denis"
novi.innerText = "kralj"


