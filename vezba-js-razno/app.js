//  Asinhroni JS 

// const fun = function (){
//     console.log("pocetak posla...")
//     setTimeout(function(){
//         for(let i =0; i <= 9999999101;i++){
//             return console.log("kraj for pelje")
//         }
//     },1000)
//     return "kraj cele funkcije"
// }
// console.log(fun())



function myFunction(){
    console.log("poruka pre pocetka izvzavanje posla")
    setTimeout(()=>{
        console.log("prvi posao ide da se izvrsava");
    },1500)
    setTimeout(()=>{
        console.log("drugi deo posla ide da se izvesava")
    },1500)
    setTimeout(()=>{
        console.log("treci deo posle ide da se izvrsava")
    },1500)
    return console.log("kraj glave funkcije")
}
myFunction()