// document.getElementById("demo").innerText = "Vezba-home"

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





// const reviews = [
//    {
//       id:1,
//       name: "marina",
//       job: "novinar",
//       img : "https://html.com/wp-content/uploads/flamingo.webp",
//       Text: "dnsL"
//    },
//    {
//       id:2,
//       name: "sara",
//       job: "matemarcar",
//       img : "https://res.cloudinary.com/demo/image/upload/if_ar_gt_3:4_and_w_gt_300_and_h_gt_200,c_crop,w_300,h_200/sample.jpg",
//       Text: "dnsL" 
//    } 

   
      
// ];
// const img = document.getElementById("person-img");
// const author = document.getElementById("author");


// const job = document.getElementById("job");
// const info = document.getElementById("info");
// const prevBtn = document.querySelector(".prev-btn");
// const next = document.querySelector(".next-btn");
// const randomBtn = document.querySelector(".random-btn");

// let = currentItem = 0;

//    window.addEventListener("DOMContentLoaded", 
//    function () {
//    const item = reviews[currentItem];
//    img.src = item.img;
//    author.textContent = item.name;
//    job.textContent = item.job;
//    info.textContent = item.Text;

// });


//       function showPerson (person){
//          const item = reviews [person];
//          img.src = item.img;
//          author.textContent = item.name;
//          job. textContent = item.job;
//          info.textContent = item.Text;

//       }
//       nextBtn.addEventListener("click",function(){
//          currentItem++;
//          if(currentItem > reviews.length - 1){
//             currentItem = 0;

//          }
      
//       showPerson(currentItem);
//       });

//       var mesec = 10 * 12;
// var rata = nekretnine.stan / mesec;
// rata = rata.toFixed(2);
// console.log(mesec + "mesec")
// console.log (rata + "eura")
// console.log(`mesecna rada za stan iznosi ${rata} na 10 godina` )


// function ucitaj(){
//    var nekiText =document.querySelector('#demo');

//    let a = 40;
//    let b =10;
//    let c = a *b;

//    nekiText.innerHTML=c;
   

// }
// window.addEventListener('load', ucitaj);


// function proba (){
//    var text = document.querySelector("#demo")
//    let a = 60;
//    let b = 60;
//    let c = a+b;
//    text.innerHTML = c

// }
// window.addEventListener ("load", proba)






// function izracunaj (){
//    let a = document.querySelector("#input1")
//    let b = document.querySelector("#input2")
//    let brA = Number (a.value)
//    let brB = Number (b.value)
//    let c = brA + brB;
//    document.querySelector("#rez").innerText= c;
// }

// function init (){
//    let a = document.querySelector("#input1")
//    let b =document.querySelector("#input2")
//    a.addEventListener("change", izracunaj)
//    b.addEventListener("change", izracunaj)
// }
// window.addEventListener("load", init)


// function izdracinaj (){
// let a = document.querySelector("#number3")
// let b = document.querySelector("#number4")
// let brA = Number (a.value);
// let brB = Number (b.value);
// let c = brA * brB ;
// document.querySelector("#rezz").innerHTML = c;
// }
// function init (){
//    let a = document.querySelector("#number3");
//    let b = document.querySelector("#number4");
//    a.addEventListener ("change", izdracinaj)
//    b.addEventListener("change", izdracinaj)
// }
// window.addEventListener("load", init)






// function dodajIme (){
//    let ime = document.querySelector("#ime").value
//    let template = `
//                   <div>
//                   <section> 
//                   <h2>${ime}</h2>
//                   <p>podaci o osobi ${ime}</p>
//                   </div>`
//  document.querySelector('#imena').innerHTML += template;                 
// }
// function init (){
//    let btn = document.querySelector("#dodaj-ime");
//    document.addEventListener("click", dodajIme);
// }
// window.addEventListener ("load", init)





// // function vezba(){
// //     let e =document.querySelector('#pass');
// //     e.addEventListener('keyup', addName)
// // }

// // function addName(){
// //     let e = document.querySelector('#pass');
// //     let sifra = e.value;
// //     let message = '';

// //     if(sifra.length < 5 || sifra.length >10){
// //         message ='passwor is univailable';
// //     }
// //         let mes = document.querySelector('#message');
// //         mes.innerHTML=message;
// // }   
// // window.addEventListener('load', vezba);


// // const numbers = [45, 4, 9, 16, 25, 3];

// // let txt = "broj ";

// // numbers.forEach(myFunction);
// // document.getElementById("demo").innerHTML = txt ;

// // function myFunction(value, index, array) {
// //   txt += value + "<br>"; }

  
// // const numbers1 = [45, 4, 9, 16, 25];
// // const numbers2 = numbers1.map(myFunction);

// // document.getElementById("demo").innerHTML = numbers2;

// // function myFunction(value, index, array) {
// //   return value * 2 + "<br>";
// // }
// // document.getElementById("demo").innerHTML =
// // Math.floor(Math.random() * 101);


// // let x = 0;
// // document.getElementById("demo").innerHTML = Boolean(x);


// // var automobili = ["audi", "Bmw", "mercedes", "porshe"];
// // for (var automobil of automobili){
// //     console.log (automobil) 
// // }

// // var automobili ={
// //     audi:['7000']
// //     const letters = ["a","b","c"];

// // List all Elements
// let text = "";
// for (const x of letters) {
//   text += x + "<br>";
// }

// document.getElementById("demo").innerHTML = text;



// const hour = new Date().getHours(); 
// let greeting;

// if (hour < 18) {
//   greeting = "Good day";
// } else {
//   greeting = "Good evening";
// }

// document.getElementById("demo").innerHTML = greeting;



// const klikni_me = () => {
//   let a = 5;
//   let b = 10
//   console.log(a +  b)
// }
// klikni_me()

// const klikni = (dugme) => {
//   console.log (dugme.innerText);
// }
// let btns = document.querySelectorAll("button");
// btns.forEach(function (btn) {
// btn.addEventListener("click", function() {
//   console.log("kliknuo");
// });
// });


// var ime="Sanja";
// switch (ime){
//     case "Marija":
//         document.write ("CAo Marija");
//         break;
//     case "Milica":
//         document.write ("Cao Milice");
//         break;
//     case "Sanja":
//         document.write ("Cao Sanja");
//         break;
//     default:    // ako nema vise slucajeva onda se koristi default
//         document.write ("Cao Cao...");}










let imena = "Dalila"
switch(imena){
   case "Sanja":
          console.log("cao sanja")
      break;
   case "Dragana":
         console.log("Dobro dosla Dragana")
         break;
   case "Dalila":
         console.log("Hello Dalila")
            break;
   default:
         console.log("zdravo svima")
}
      