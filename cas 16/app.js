// jsv90000.app


// setTimeout   

// console.log("hi")
// setTimeout (function(){
//     console.log("there")
// }, 5000);
// console.log("JS")

function drugiPosao(){
    console.log("niz parnih")
}
function nekiPosao(arg1){
    console.log("ceo niz")
    setTimeout(()=> {
        console.log("filter niza")
        arg1();
    },3000)
}

nekiPosao(drugiPosao)
console.log("komanda1")
console.log("komanda2")
console.log("komanda3")

//stek zadnji usao prvi izlazi
// console.log("comanda 1")
// console.log("comanda 2")

// setTimeout(() => {
//     console.log("comanda3")
// },5000);

// console.log("comanda4")

// setTimeout(()=>{
//     console.log("comanda 5")
// },3000)


// let r = fetch("https://6240631319f60987923b424c.mockapi.io/Users")
// .then(response => response.json()).then(data => {
//     console.log(data);
// })