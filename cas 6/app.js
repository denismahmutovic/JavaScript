// N i Z O V I

// const cars = ["BMW", "AUdi", "Mercedes","Skoda", "vW"]
// len; krece od  0  a zavrsavju se na -1

// cars [0] = 3;  // promena nizova
// console.log(cars)
// cars.length = 0  // prazan niz

        //index
 const cars = ["BMW", 4, true, null, undefined, "vW"];
//  for(let i = 0; i < cars.length; i++){
//      if(cars[i]){
//          console.log(cars[i])
//      }
//     }  

    for(let car in cars){  // in se koristi samo za nizove
        console.log(car)
    };

    const studenti = ["marko", "janko", 'sasa', "zika"]

    studenti [8] = "zika"
    console.log(studenti)
