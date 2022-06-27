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

    const namee = {
        firstName:"denis",
        lastName:"Mahmutovic",
        fullName:function(city,godine){
            console.log(this.firstName + " " +this.lastName, " "+ city + godine)
        }
    }
    namee.fullName("BG"," " + 25)
    

     // POZIVANJE VISE OBJEKTA ZA JEDNOM FUNKCIJOM APPLY, CALL
    const namee2 = {
        firstName:"beni",
        lastName:"mahmutovic"
    }
    namee.fullName.apply(namee2,["Novi Pazar",24])