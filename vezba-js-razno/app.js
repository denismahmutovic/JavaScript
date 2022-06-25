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



const students = [
    { name: "Faris", grade: 8, year: 2 },
    { name: "Isko", grade: 10, year: 4 },
    { name: "Aldin", grade: 8, year: 2 },
    { name: "Amina", grade: 9, year: 4 },
    { name: "Sabina", grade: 9, year: 3 },
    { name: "Denis", grade: 7, year: 4 },
    { name: "Senad", grade: 6, year: 1 },
]
function getAvgGrade(array){
       const grades = array.map((el)=> el.grade)
       console.log(grades)
       const imena = array.map((el)=> el.name)
       console.log(imena)
       const years = array.map((el)=> el.year)
       console.log(years)
       const parni = array.filter((el)=> el.year %2===0)
       console.log(parni)
       
    
    }
    getAvgGrade(students);