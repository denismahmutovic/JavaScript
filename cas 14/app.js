
// // const students = [
// //     {name:"faris",grade: 8,year:2},
// //     {name:"isko",grade: 10,year:4},
// //     {name:"aldin",grade: 8,year:2},
// //     {name:"amina",grade: 9,year:4},
// //     {name:"sabina",grade: 9,year:3},
// //     {name:"denis",grade: 7,year:4},
// //     {name:"senad",grade: 6,year:1},

// // ];
// // function getAvgGrade(array){
// //     const ocene = array.map((el)=> el.grade )
// //     console.log(ocene)
// //     const prosek = ocene.reduce((total,value)=> total+value) / ocene.length;
// //     console.log(+prosek.toFixed(2))
// //     return +prosek.toFixed(2);


// // }
// // getAvgGrade(students);





// // niz koi sadrzi samo ocene


// // const person = {
// //     name:"john doe",
// //     age:22
// // };
// // function sayHello(){
// // console.log(`hello ${this.name}`)
// // }
// // sayHello.call(person)

// // ---------------------------HOME----------------------------------


// // const students = [
// //     {name:"faris",grade: 8,year:2},
// //     {name:"isko",grade: 10,year:4},
// //     {name:"aldin",grade: 8,year:2},
// //     {name:"amina",grade: 9,year:4},
// //     {name:"sabina",grade: 9,year:3},
// //     {name:"denis",grade: 7,year:4},
// //     {name:"senad",grade: 6,year:1},
// // ]
// // function getAvgGrade(array){
// //     const ocene = array.map((el)=> el.grade);
// //     const zbir = ocene.reduce((total,value)=> total+value ) / ocene.length;
// //     console.log(+zbir.toFixed(2))
// // }
// // getAvgGrade(students)

// // const person = {
// //     name:"John Doe",
// //     age:22,
    
// // };
// // function sayHello(){
// //     console.log(`Hello ${this.name}`)
// // }
// // sayHello.call(person)



// // const JaSam = {
// //     ime:"Denis",
// //     Prezime:'mahmutovic',
// //     godine:26,
// //     Posao:"DEEJAY"
// // }
// // function JaSamm(){
// //     console.log(`ja sam ${ime}`)
// // }
// // JaSamm.call(JaSam)
// // let hrana = {
// //     Rostilj:"Hambuger,Belo meso, Batak, Virsle",
// //     BrzanaHrana:"Topli,Pizza,Piroska"

// // }
// // function Kasa(text,ocena){
// //     return `${this.BrzanaHrana} ${text} ${ocena}`
// // }
// // console.log(Kasa.call(hrana,"je ukusna ", 10))
// // console.log(Kasa.apply(hrana,["Nije ukusan", 6]))

// // const bindFunc = Kasa.bind(hrana)
// // console.log(bindFunc("nije nesto",9))

// // const NumArray = [10,30,40,5,100,200,1000]
// // console.log(Math.max.apply(null,NumArray))

// // const ime = "Denis M"
// // const zanimanje = "Deejay"
// // const godine = 26
// // console.log(`ja sam ${ime} i Moje zanimanje je ${zanimanje} i imam ${godine} Godina`)
// const zanimanje = {
//     ime:"Denis",
//     Prezime:'mahmutovic',
//     godine:26,
//     Posao:"DEEJAY",
// }
// function dj(){
//     console.log(`ja sam ${this.ime} i ja sam ${this.Posao}`)
// }
// dj.call(zanimanje)

// const hrana = {
//     food: "Pizza, Piroksa",
//     Rostilj:"Hambuger, Belo meso"
    
// }
// function Kasa (text,ocena){
//     return `${this.Rostilj} ${text} ${ocena}`
    
// }
// function Kasaa(text,ocena){
//     return `${this.food} ${text} ${ocena}`
// }
// console.log(Kasaa.call(hrana,"je predivna ocena", 10))
// console.log(Kasa.apply(hrana,["je pdevivna ocena",9]))

// const DATA = [10,20,30,100,2000]
// console.log(Math.round.apply(null,DATA))



