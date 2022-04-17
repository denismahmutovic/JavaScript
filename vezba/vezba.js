document.getElementById("demo").innerText = "Vezba-home"

// var broj = 65;
// var rez = "5";
// console.log (broj,rez)
// rez = parseInt (rez);
// console.log(rez)
// console.log (broj + rez)
// console.log (typeof rez)

//zamene variabli 

// var broj = 5;  
// var drugi_broj = 10;
// var treci_broj;

// treci_broj = broj;
// broj = drugi_broj;
// drugi_broj = treci_broj;



// console.log(broj);
// console.log( drugi_broj)

   //ubacinje variabli unutar stringova
// var ime = "denis";
// var prezime = "mahmutovic"
// var godine = 26
// var recenica = `ja sam ${ime}  ${prezime} imam ${godine}`

// console.log (recenica);

// var prvi_broj = 11;
// var drugi_broj = 12
// if(prvi_broj < drugi_broj){
//     console.log("prvi broj je manji od drugog");}
//     else {
//         console.log("prvi broj nije manji od drugog");
//     }
    
//     console.log(prvi_broj < drugi_broj)

// var vreme = 21;
// if (vreme < 10){
//     console.log("dobro jutro!");}
//     else if(vreme < 20)
//         console.log("dobar dan");
//     else{
//         console.log("dobro vece")
//     }
    // var mjesec = 7
    // switch(mjesec){
    //     case 1:
    //         console.log("januar")
    //         break   
    //         case 2:
    //             console.log("februar")
    //             break
    //             case 6:
    //                 console.log("jun")
    //                 case 7:
                        
    //                     console.log("jul")
    // }

    // Brojac
   
        

    // var novcanice = 25
    // var  vrednost_novcanice = 10;
    // var brojac = 0
    // var izbrojane_novcanice = 0
    // while (brojac < 25){
    //     izbrojane_novcanice++;
    //     console.log(izbrojane_novcanice);
    //     brojac ++
    // }
    
 //nizovi
//  var novcanice = [10, 5, 20, 5, 10, 100, 20, 50];
//  var broj_novcanica = novcanice.length;
//  var brojac = 0;
//  while(brojac < broj_novcanica){
     
//      console.log(novcanice[brojac])
//      brojac++
//  }
// var novcanice = [10, 20, 30, 40, 50, 60, 70, 80]
// var broj_novcanica = novcanice.length;
// var brojac = 0;
// while(brojac < broj_novcanica){
//     console.log('----------------------------');
//     console.log("uslov prosao");
//     console.log(`novcanice na pozici [${brojac}]`)
//     brojac ++
// }

// for(var novcanica of novcanice){
//     console.log(novcanica);
// }
// for (var pare of novcanice){
//     console.log(pare)
// }

// var automobili = ["audi", "Bmw", "mercedes", "porshe"];
// for (var automobil of automobili){
//     console.log (automobil) 
// }

// var automobili ={
//     audi:['7000', '2017', 'q7'], bmw: ['50000', '2016', '330D']
    

//     }
// for (auto in automobili){
//     var naziv = automobili;
//     console.log(naziv)
//     console.log(automobili[auto]);
// }

// var osoba ={
//     ime: "denis", godine: "26", grad: "Novi Pazar"
    
// }
// console.log(`ime:${osoba.ime}, godine:${osoba.godine}, grad: ${osoba.grad} `)

                            //done

// var osoba ={
//     ime: "denis", prezime:"mahmutovic",  godine: 24, grad:"Novi pazar"
// }
// console.log(`ime:${osoba.ime}, prezime: ${osoba.prezime}, godine:${osoba.godine}, grad:${osoba.grad}`)


// var nekretnine = {
//     stan: 70000,
//     kuca: 150000,
//     plac: 30000
// };
// // procacun za stan od 15 godina.
// racunanje_mesecne_rate (15, "stan")

// //proracun za Placac od 5 godina
// racunanje_mesecne_rate (5, "plac")

// //proracun za kucu 20 goduna
// racunanje_mesecne_rate (20,"kuca")

// // OVA FUNKCIJA IZRACUNAVA MESECNU RATU ZA ORDEDJENU  NEKRETNINU NA ORDJEDJENI BROJ GODINA.
// function racunanje_mesecne_rate(godine, vrsta_nekretnina){
//     var mesec = godine * 12;
//     var rata = nekretnine [vrsta_nekretnina] / mesec;
//     rata = rata.toFixed(2)
//     // console.log(rata)
//     console.log("------------------")

//     //  console.log(mesec + " mesec")
// //  console.log (rata + "eura")
//  console.log(`mesecna rata za ${vrsta_nekretnina} iznosi ${rata} eura na ${godine} godina` )
// }
// var nov_cod =document.createElement("div")
// console.log (nov_cod)
// nov_cod.classList = "dasas"






// var mesec = 10 * 12;
// var rata = nekretnine.stan / mesec;
// rata = rata.toFixed(2);
// console.log(mesec + "mesec")
// console.log (rata + "eura")
// console.log(`mesecna rada za stan iznosi ${rata} na 10 godina` )





const reviews = [
   {
      id:1,
      name: "sara",
      job: "novinar",
      img : "http://127.0.0.1:5500/vezba/radius1.webp ",
      Text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium neque"
   }

   {
      id:1,
      name: "sara",
      job: "novinar",
      img : "http://127.0.0.1:5500/vezba/radius1.webp ",
      Text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium neque",
   }
];
const img = document.getElementById("person-img");
const author = document.getElementById("author");

const job = document.getElementById("job");
const info = document.getElementById("info");
const prevBtn = document.querySelector(".prev-btn");
const next = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");

