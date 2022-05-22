// function sabeir_tri_pet(){
//     const zbir = 3+5
//     console.log(zbir)
// } return zbir;
// console.log(ime_funcije())

// const zvir_tri_pet = sabeir_tri_pet ()

// const arrowFunc = () => {

// }






// function saberi (a,b){
//     return a + b

// }
// console.log((10,15))
// function inchToCm (inch){            var name GLOBALNA
//     return inch *2.54
// }
// console.log(inchToCm(10))



// function staza (rek){
//     return rek*2
// }
// const rez = staza(800)
// console.log(rez)

                                // lokalni {

                                // }

// const visina = inchToCm(25);
// console.log(visina)

// const inchToCm =(inch)=> inch*2.54; 
// const saberi = (a,b)=> a+b
// console.log(saberi(10,11))
// console.log(inchToCm(10))

// function sabiraj(prvi,drugi,treci=false){
//     if(treci){
//         return prvi + drugi +treci;
    
//     } else{
//         prvi+drugi
//     }
//     return prvi+drugi+treci
// } 
// console.log(sabiraj(2,2,10))



// fukcija da se unese tri broja i da 
//promnt  
// --------------------------------home-----------------------------------

// const saberi = (a,b) => a+b;
// console.log(saberi(10,1))
// const rek_centar = rek => rek * 800;
// console.log(rek_centar(2) +" metara")

// const sopink = idea => idea * 200 +" Dinara"
// console.log(sopink(10))

// const ime = "denis"
// function proba(){
//     const ime = "deni";
//     console.log(ime)
// }
// proba()

// function sabijar (prvi,drugi,treci =false){
//     if(treci){
//         return prvi + drugi + treci;

//     } else{
//         return prvi + drugi
//     }
// }
// console.log(sabijar(2,2,3))


// function izdracinajj(){
//     const jednako = 3+9;
//     return jednako

// } 
// console.log(izdracinajj())

// const izdracinaj = (jednako) =>{
//     jednako = 10+10
//     return jednako
// }
// console.log(izdracinaj())   //yes

// const sababeri_dvabroja = (a,b)=> a+b;
// console.log(sababeri_dvabroja(10,11))


// let = nekretnine = {
//     stan: 70000,
//     kuca:150000,
//     plac:30000

// };

// const izdracinaj= (godine, vesta_nekretnina) =>{
//     let meseci = godine * 12
//     let rata = nekretnine[vesta_nekretnina] / meseci
//     rata = rata.toFixed(2)
//     console.log("---------------------------------")
//     console.log(`mesecna rata za stan ${vesta_nekretnina} iznosi ${rata}eura na ${godine} godina`)
    
// }
// izdracinaj(15,"stan")
// izdracinaj(5,"plac")
// izdracinaj(20,"kuca")


let automobili = {
    auto: 300,
    motor:200,
    biciklo:100
};

const izracunaj = (godine,rate) =>{
    let meseci = godine * 12
    let rata_mesecna = automobili[rate] / meseci
    rata_mesecna = rata_mesecna.toFixed(2)
    console.log("-----------------------------")
//    console.log(`mesecna rata za  ${rate} iznosi ${rata_mesecna}eura na ${godine} godina`)
console.log(rate,rata_mesecna,godine)

}
izracunaj(2,"auto")
izracunaj(1,"motor")
izracunaj(12,"biciklo")



// --------------------------DOMACI----------------------------------

// let number1 = prompt("Unesite Prvu vrednost")
// let number2 = prompt("Unesite Drugu vrednost")
// let number3 = prompt("Unesite Trecu vrednost");
// const brojevi = (number1,number2,number3) =>{
//   const mnozenje = "Rezultat " + number1 * number2 * number3 ;
//   return mnozenje;

//  }
//  alert(brojevi(number1,number2,number3) );
 