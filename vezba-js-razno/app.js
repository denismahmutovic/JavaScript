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



// const students = [
//     { name: "Faris", grade: 8, year: 2 },
//     { name: "Isko", grade: 10, year: 4 },
//     { name: "Aldin", grade: 8, year: 2 },
//     { name: "Amina", grade: 9, year: 4 },
//     { name: "Sabina", grade: 9, year: 3 },
//     { name: "Denis", grade: 7, year: 4 },
//     { name: "Senad", grade: 6, year: 1 },
// ]
// function getAvgGrade(array){
//     const grades = array.map((el)=> el.grade)
//     console.log(grades)
//     const zbir = grades.reduce((total,value)=> total+value) / grades.length
//     return +(zbir.toFixed(2))
//     }
//     console.log(getAvgGrade(students))



    // const hrana = {
    //     food: "Pizza",
    //     drink: "redBul"
    // }
    // function favFood(text,ocena){
    //     return `${this.food} ${text} ${ocena}`
    // }
    // console.log(favFood.call(hrana,"je super", 10))
    // console.log(favFood.apply(hrana,["je extra",10]))

    // const bind = favFood.bind(hrana)
    // console.log(bind("do jaja",9))

    // const namee = {
    //     firstName:"denis",
    //     lastName:"Mahmutovic",
    //     fullName:function(city,godine){
    //         console.log(this.firstName + " " +this.lastName, " "+ city + godine)
    //     }
    // }
    // namee.fullName("BG"," " + 25)
    

    //  // POZIVANJE VISE OBJEKTA ZA JEDNOM FUNKCIJOM APPLY, CALL
    // const namee2 = {
    //     firstName:"beni",
    //     lastName:"mahmutovic"
    // }
    // namee.fullName.apply(namee2,["Novi Pazar",24])


    // const car = {
    //     mark:"Audi",
    //     model: "a4",
    //     maxSpeed:220,
    //     currentSpeed: 0,

    //     drive:function(value){
    //         if(this.currentSpeed + value >  this.maxSpeed){
    //             return "ne moze ovako"
    //         }else{
    //             this.currentSpeed += value
    //         }

    //     },
    //     break:function(value){
    //         return(this.currentSpeed -= value)
    //     },
    //     stop:function(){
    //         return(this.currentSpeed = 0)
    //     }
    // }
    // console.log(car)
    // car.drive(180)
    // console.log(car.drive(43))

    // nadji parne i saberi  ih :)
    // const niz = [41,26,58,56,94526,65,656,20,10]
    // const parni = niz.filter((el)=> el %2 === 0)
    // const zbir = parni.reduce((total,value)=> total+value)
    // console.log(zbir,parni)
    

    // const imena = ['daris',"denis","mare","ivan"]
    // const velikoSlovo = imena.map((el)=> el.toUpperCase())
    // console.log(velikoSlovo)



            // VRACA CELE BROJEVE 



//         const squareList = (arr) => {
//         const newArr = arr.filter((el)=> el >= 0 && el % parseInt (el)=== 0)
//         const neww = newArr.map((el)=> el * el)
//         return neww
//     }
//     const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2,6]);

//   console.log(squaredIntegers);




// const person = {
//     name :"deni",
//     age: 26,
//     job:"DEEJAY",
//     address: "NP",

// }



// const person2 = person
// console.log(person2)

// // Object.freeze() cini objekat immutabile(nepromenljivim)!!!
// Object.freeze(person1);

// // Object.seal() cini objekat promenljivim, ali nije dozvoljeno 
// // dodati niti brisati elemente!!!
// Object.seal(person1);

// // Object.keys() vraca niz kljuceva!!!
// Object.keys(person1);

// // Object.values() vraca niz vrednosti objekta!!!
// Object.values(person1);

// // Object.entries() vraca niz nizova. Svaki niz je (key,value) par!!!
// Object.entries(person1)

// // Object.is(person1, person2) => Identicko poredjenje nizova.
// Object.is(person1, person2);

// console.log(Object.is(person1, person2));



   // Spread Operatori

// const names = ["faris","aldin","senad","denis","dzenan"]
// const newNames = ["isko",...names]
// console.log(names)
// console.log(newNames)



// Preko new Set() gubimo duplikate, ali je potrebno opet vratiti u niz.


const numbers = [1,2,3,1,5,2,7,2,10]
const nemaDupli = new Set (numbers)
const names = ["faris","aldin","senad","denis","dzenan"]
const spojeni = [...names,...nemaDupli]

console.log(spojeni)