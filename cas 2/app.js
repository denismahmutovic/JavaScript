// const ime = "max"
// let godine = 30;
// console.log(ime + godine)
// godine = 25
// console.log(godine)


// console.log(5===5)
// console.log(5 !== 6)

// const ime = "max"
// const godine = 40;
// let meseci = godine *12;
// console.log(meseci)

// const ime = prompt ("unesi nesto")
// const godine = prompt ("unesi tvoje godine")
// alert ("ziveo si " + godine * 12 + " meseci")  

//prefixni i posrfixni operatori


// let age = 20
// console.log(++age) //prefinxni se dodaje prvi


// const age = 17
// if (age >= 18){
//     console.log("ponuletan si")

// } else if (age < 18){
//     console.log("nisi punoletan")

// } else {
//     console.log("izvsava se samo u slucaju kad nijedan uslov nije zadovoljan")
// }

// const age = prompt ("unesi tvoje godine")
// if (+age === 18){
//     console.log("tek si postao punoletan")
// } else if (age  >18){
//     console.log("ti si odrstao")
//                                         //+ pretvara broj u sting u prompt
// } else if( age > 12){
//     console.log("ti si dinejdzer")
// } else{
//     console.log("ti si dete")
// }


// const a = 4
// const b = false
// console.log(a&&b);


// const a = 4
// const b = 5;
// console.log(a &&b)   // vraca zadju vredenost ako si uslovi tacni

// const a = 4
// const b =2
// const c = 5
// console.log(a&&b&&c) //and operator


// const a = 4;
// const b = false      //prvi tacan koi naleti :D
// console.log(a||b)
// console.log(!5)
// console.log(!5 ||!false)


                                //fizz buzz = domaci//
//------------------------------------------------------------------------------------------//
// let prvi_broj =  9
// let = drugi_broj = 10


// if (prvi_broj > drugi_broj){
//     console.log("tacno")
// } else if ( drugi_broj > prvi_broj){
//     console.log("Ne tacno")
// } else {
//     console.log("ne znam")
// }

// let a = 17
// let b = 19
// if (a < b){
//     console.log("tacno")
// } else if (b > a){
//     console.log("ne tacno")
// } else console.log("vredsnost nije definasa")


// const c = 4
// const d = 5;
// console.log(c &&d)

// let a = "ponedeljak"
// let b = "utorak"
// let c = 25
// console.log(a&&b&&c)

// // console.log(10===1)
// console.log(6!== 5)

// let name  = "denis"
// let godine = 25
// let meseci = godine * 12
// console.log(meseci) 

// const ime = prompt ("Unesi vrednost")
// const godine = prompt ("Unesi tvoje godine");
// alert ("ziveo si " + godine * 12 + " meseci")


// const age = 17
// if (age >=18){
//     console.log("punoletans si")
//     } else if (age < 18){
//         console.log("nisi punoletan")

//     } else("done")


// const a = 4;
// const b = false
// console.log(a||b)
// console.log(!b)  

// let godine = 12
// godine +=8
// console.log(godine)


// let ime = "Denis"
// let godine = 26
// let grad = "Novi Pazar"
// let recenica = `ja sam ${ime} imam ${godine} godina zivim u ${grad}`;
// console.log(recenica)

// let prviBroj = 10
// let drugiBroj = 5
// let treciBroj = 7
// let cetvriBroj = 8
// console.log(prviBroj > drugiBroj)
// console.log(treciBroj > cetvriBroj)
// console.log((prviBroj > drugiBroj) && (treciBroj > cetvriBroj ))

// let prviBroj = 11
// let drugiBroj = 10
// if (prviBroj < drugiBroj){
//     console.log("prvi broj je manji od drugog")
// } else if (prviBroj > drugiBroj){
//     console.log("drugi broj je veci od prvog")
// }

// let vreme = 19
// if (vreme < 10){
//     console.log("dobro jutro")
// } else if (vreme < 20){
//     console.log("dobar  dan!")
// } else{
//     console.log("dobro vece")
// }







// let mesec = 1
// switch (mesec){
//     case 1:
//         console.log("Januar")
//         break;
//         case 2:
//          console.log("Februar");
//             break
//           case 3:
//          console.log("Mart")
//               break
//             case 4:
//             console.log("April")
//              break;
//              default:{
//                  console.log("nema vise uslova")
//              }
// } 


// let novac = 25
// let vrednost = 10
// let brojac = 0
// let rezultat = 0
// while (brojac < 25){
//     rezultat++;
//     // console.log(rezultat)
//     brojac ++

// }
// console.log(rezultat * vrednost)

  // P E T LJ E
// let novcanice =[10,5 ,20 ,50,5,10,100,20,50]
// let = broj_novcanica = novcanice.length;
// let = brojac = 0
// while(brojac < broj_novcanica){
//     console.log("-----------")
//     console.log("uslov prosao")
//     console.log(`novcanica za pozici niza [${brojac}]: ${novcanice[brojac]}`);
   
//     brojac ++
// }

// let novcanice =[10,5 ,20 ,50,5,10,100,20,50]
// let = broj_novcanica = novcanice.length;
// // let = brojac = 0
// let ukupno_novca = 0

// for (let brojac = 0; brojac < broj_novcanica; brojac ++){
//     console.log(novcanice[brojac])
//    ukupno_novca+= novcanice[brojac]  
// }
// console.log("### KRAJ PERLJE ###")
// console.log(ukupno_novca)


// let novcanice =[10,5 ,20 ,50,5,10,100,20,50]
// for(let novcanica of novcanice){
//     console.log(novcanica)

// }


// let automobili = ['audi', "bmw", "porshe", "mercedes"];
// for(let automobil of automobili){
//     console.log(automobil)
// }

// let automobili = ["audi", "bmw", "porshe", 'mercedes'];

// automobili.forEach (function(automobil){
//     console.log(automobil)

// })


let automobili = {
    prvi_auto: "audi",
    drugi_auto: "bmw",
    treci_auto: "porshe"
};
console.log(automobili)