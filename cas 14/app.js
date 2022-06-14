
// const students = [
//     {name:"faris",grade: 8,year:2},
//     {name:"isko",grade: 10,year:4},
//     {name:"aldin",grade: 8,year:2},
//     {name:"amina",grade: 9,year:4},
//     {name:"sabina",grade: 9,year:3},
//     {name:"denis",grade: 7,year:4},
//     {name:"senad",grade: 6,year:1},

// ];
// function getAvgGrade(array){
//     const ocene = array.map((el)=> el.grade )
//     console.log(ocene)
//     const prosek = ocene.reduce((total,value)=> total+value) / ocene.length;
//     console.log(+prosek.toFixed(2))
//     return +prosek.toFixed(2);


// }
// getAvgGrade(students);





// niz koi sadrzi samo ocene


// const person = {
//     name:"john doe",
//     age:22
// };
// function sayHello(){
// console.log(`hello ${this.name}`)
// }
// sayHello.call(person)

// ---------------------------HOME----------------------------------


// const students = [
//     {name:"faris",grade: 8,year:2},
//     {name:"isko",grade: 10,year:4},
//     {name:"aldin",grade: 8,year:2},
//     {name:"amina",grade: 9,year:4},
//     {name:"sabina",grade: 9,year:3},
//     {name:"denis",grade: 7,year:4},
//     {name:"senad",grade: 6,year:1},
// ]
// function getAvgGrade(array){
//     const ocene = array.map((el)=> el.grade);
//     const zbir = ocene.reduce((total,value)=> total+value ) / ocene.length;
//     console.log(+zbir.toFixed(2))
// }
// getAvgGrade(students)

const person = {
    name:"John Doe",
    age:22,
    getFirstname:function(){
        console.log(this.name)
    }
};
function sayHello(){
    console.log(`Hello ${this.name}`)
}
sayHello.call(person)