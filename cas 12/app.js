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

 const radnik = {
    first_name: "Bob",           //this je Radnik
     last_name : "Euroblok",
     fullname:function(){
        //  console.log(this)
         return this.first_name +" " +  this.last_name;
     },
     adresa:"avnoja",
     broj: "bb",
     grad: "Novi Pazar",
     getAdress:function (){
         console.log(this)
     }
    
    }
    
    radnik.adresa.getAdress()
    
//     function staJeOvdeThi(){
//         console.log(this)
//     }
// staJeOvdeThi()