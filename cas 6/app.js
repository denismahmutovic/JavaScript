// N i Z O V I

// const cars = ["BMW", "AUdi", "Mercedes","Skoda", "vW"]
// len; krece od  0  a zavrsavju se na -1

// cars [0] = 3;  // promena nizova
// console.log(cars)
// cars.length = 0  // prazan niz

        //index
//  const cars = ["BMW", 4, true, null, undefined, "vW"];
//  for(let i = 0; i < cars.length; i++){
//      if(cars[i]){
//          console.log(cars[i])
//      }
//     }  

    // for(let car in cars){  // in se koristi samo za nizove
    //     console.log(car)
    // };

    // const studenti = ["marko", "janko", 'sasa', "zika"]

    // studenti [8] = "zika"
    // console.log(studenti)
// ---------------------------- HOME--------------------------------------------------

const play_lista = ["Eliti-Odredi","Rasta","Nucci", "Voyage", "Coby", null, false]
 
let duzina = play_lista.length

for(let i = 0; i < duzina; i++){
    if(play_lista[i]){
        console.log(play_lista[i])
    }
}
const play = ["Eliti-Odredi","Rasta","Nucci", "Voyage", "Coby","Denis","Marko"]
console.log(play.length)
play[0]= "MARe"
console.log(play[6])
play.length = 0
console.log(play)

const studenti  = ["Amina", "sara","Hana"]
for (let student of studenti){
    console.log(student)
}































