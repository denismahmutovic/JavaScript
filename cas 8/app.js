// const cars = ["bmw", "audi", "smart"]

// cars.push("meercedes","bmw", "vw") //sa njom dodajemo elemente na kraj niza
// cars.pop() // brise zadnji elementa u nizu
// const zadnji = cars.pop() // uzimamo zadjni elementa za imenom
// console.log(cars)
// const godine = [12, 76, 26,6,23,21,29,16]

// function returnAdults(ages){
//     let niz = []
//     for(let i of ages){
//         if(i >=18){
//             niz.push(i);
//         }

//     } return niz
    


// }
// console.log(returnAdults(godine))

// const druge_godine = [12,76,8,10,5,12,28,98,101]

// function returnAdults(ages){
//     let niz = []
//     for(let i of ages){
//         if(i < 18){
//             niz.push(i);
//         }

//     } return niz

//     console.log(returnAdults(druge_godine))


// dodavanje na pocetnu niza unshift
// const cars = ["bmw", "audi","smart", "mercefed", "mini","fiat"]
// cars.unshift ("ford")
// cars.unshift ("katilak")
// //brisanje prvog clana u nizu
// cars.shift ()
// const shiftValue =cars.shift() //ubaciabnje niza u conconel.log

// //obrniti niz
// cars.reverse() // okrecanje niza zadnji da bude prvi

// //spajanje dva niza  -contact (niz)
// const imena = ["faris","isko", "aldin"]
// const age = [20,100,50,120,200,76]
// const spojenNiz = imena.concat(age)
// console.log(spojenNiz)

// //trazenje clanas niza - find ()  // 
// // el prestavlja svaki clan svog niza
// const trazenaVrednost = cars.find(el => el > 50)

// //trazajne indeksa - finIndex
// const trazeniIndex = age.findIndex(el => el > 100) 




// console.log(trazeniIndex)

// console.log(trazenaVrednost)

// -----------------------------------HOME--------------------------------------------------


// const imena = ["denis","faris","daris", "mesa", "adnan"]
// imena.push("sara")
// const sara = imena.pop();
// console.log(sara)
// console.log(imena)

// const godine = [12,76,26,6, 23,21,29,16]


// function punoletna_deca (ages){
//     let punoletni = [];
//     for(let i of ages){
//         if(i <=18){
//             punoletni.push(i)
//         };

//     }
//     return punoletni;
    

// }
// console.log(punoletna_deca(godine));



// const maloletne_godine = [12,76,26,6, 23,21,29,16]

// function maloletni (age){
//     let prazna =[];
//     for (let i of age){
//         if(i < 18){
//             prazna.push(i)
        

//         } 
//     }
//     return prazna;
// }
// console.log(maloletni(maloletne_godine))



// let punoletna_mommci = [10,20,30,40,50,17,11]

// function punoletni (age){
//     let prazna = []
//     for(let  i of age){
//         if(i >= 18){
//             prazna.push (i)

//         }
//     }
//     return prazna;
// }
// console.log(punoletni(punoletna_mommci))


const automobili = ["bmw","audi", "VW"]
const brojevi = [5,12,8,130,44,140]
const trazeniIndex = automobili.forEach (el => console.log(el))
console.log(trazeniIndex)



