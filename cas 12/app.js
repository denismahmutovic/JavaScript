//objekti

// const MyCar = {
//     id:1,
//     marka: "Audi",
//     model: "a4",
//     boja:"Crvena",
//     pogon:"prednji",
//     menjac:"automatski",
//     kontakt:[0622222,02033322],
//     servis:{
//         datum :"04,maj",
//         km:23000,
//         serviser: "Pasovic"
//     },
//     udaran:true
//                            // kljuc: vrenost
// }
// // console.log("moj auto je marke" ,MyCar.model) //["marka"]

// console.log(MyCar["servis"]["serviser"])
// console.log(MyCar.servis.datum)


// const radnik = {
//     first_name: "Bob",
//     last_name : "Euroblok",
//     age: 30,
//     job: "programer",
//     adresa: "avnoja bb",
//     city: "Novi Pazar",
//     contact:"06222222",
//     radni_sati: 40,
//     dnevnica:20,
// }
// console.log("radnik",radnik.first_name,radnik.last_name,radnik.age,radnik.city,radnik.radni_sati,radnik.radni_sati*radnik.dnevnica)

//  const radnik = {
//     first_name: "Bob",           //this je Radnik
//      last_name : "Euroblok",
//      fullname:function(){
//         //  console.log(this)
//          return this.first_name +" " +  this.last_name;
//      },
//      adresa:{
//          ulica:"avnoja",
//          broj:"bb",
//          grad:"Novi Pazar",
//          getAdress:function(){
//              return this.broj + " " + this.grad
//          }
//      }
    
//     };
//     console.log(radnik.adresa.getAdress())
//     console.log(radnik.fullname())
    
//     function staJeOvdeThi(){
//         console.log(this)
//     }
// staJeOvdeThi()

// ----------------------------------------------------------------

// const automobili = {
//     marka: "Audi",
//     model: "q7",
//     boja: "Bela",
//     pogon: "prednji",
//     menjac: "Automatik",
//     km:240000,
//     contact:[33322,0633333],
//     placanje:function(){
//        return this.marka + " a boje je " + this.boja + " contact ta telefon " + this.contact 
//     },
//     graza:{
//         parking:"50 Sat vremena",
//         vikend:"od 17 free",
//         placanje:" 7555",
//         rampa: function(){
//             return this.parking + " a viked cena je " + this.vikend + " posalji por na broj" + this.placanje
//         }
        
//     }
// }

    
//     // console.log("moj auto je marke", automobili["marka"], "i model je ", automobili.model,"presao", automobili["km"],"za vise infromacija pozovite na telefon",automobili["contact"])
//    console.log(automobili.placanje())
//    console.log(automobili.graza.rampa())
 
   

   
 const name = {
     firstname: "Denis",
     lastname: " Mahmutovic",
     FullName:function (homee){
         console.log(this.firstname + this.lastname + " from "  + homee)
     }
 }
 name.FullName("Novi Pazar")
 
 const name2 = {
     firstname: "Beni",
     lastname: " Mahmutovic",
     
 }
 name.FullName.call(name2, "Novi Sad")
 name.FullName.apply(name, ["Beograd"])

 


 

    

