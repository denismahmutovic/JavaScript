

   //BRZ NACIN DA NADJEMO NAJVECI BROJ U NIZU
          
// const numArray = [10, 30 ,50 , 100, 200,1000];

// console.log(Math.max.apply(null, numArray))




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



            //spoji sva tri i izvuci boolean

// const words = ["televizor","daljinski","telefon","voda","ranac","stolica"];
// const numbers = [2,8,9,11,26,85,86,90,102,1003,1120];
// const booleans = [true,false,true,false]
// const spoji= [...numbers,...booleans,...words]
// const trazi = spoji.filter((el)=> typeof el ==='boolean')

// console.log(trazi);




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

// const numbers = [1,2,3,1,5,2,7,2,10]
// const spojeni = new Set (numbers)
// const names = ["faris","aldin","senad","denis","dzenan"]
// const spojiDva = [...names,...spojeni]
// console.log(spojiDva)


// const movies = [
//     { title: "Movie 1", rating: 8, budget: "230M" },
//     { title: "Movie 2", rating: 5, budget: "200M" },
//     { title: "Movie 3", rating: 9, budget: "280M" },
//     { title: "Movie 4", rating: 4, budget: "300M" },
//     { title: "Movie 5", rating: 8, budget: "180M" }
// ]
// const newArr = movies.map((el)=> el.rating * parseInt(el.budget))
// const fl = movies.filter((el)=> el.title === "Movie 3")
// const izmena = fl.map((el)=>{
//     return{
//         title: el.title ="IZMENA", rating: el.rating
//     }
// })
// console.log(izmena)
// const trazi = movies.map((el)=>{
//     return{
//         rating: el.rating, budget: el.budget=+ 1 // el.budger prebacivanje strniga u number =+
//     }
// })
// console.log(trazi)
// console.log(newArr)




// function Nova (){
//     console.log("pocetak posla")
// } setTimeout (()=>{
//     console.log("CEKA")
// },2000);
// console.log("kraj posla")
// console.log(">")

// Nova()


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

// myPromise = new Promise ((resolve,reject)=>{
//     const person = {
//         firstName: "denis",
//         lastName: "mahmutovic",
//         age:25,
//         fullName: function(){
//             return this.firstName + " " + this.lastName 
//         }
//     };
//     if(person.age >= 26 && person.age <= 30){
//         resolve(person.fullName());
//     } else{
//         reject(person.fullName())
//     }
// })
// myPromise
// .then((arg)=>{
//     console.log(`person ${arg} USLOV PROSAO`)
// })
// .catch((arg)=>{
//     console.log(`peson ${arg} USLOV NIJE PROSAO`)
// })



// function mojaFunc(){
//     console.log("prva");
//     function drugaFunc(){
//         console.log("driga")
//     };
//     return drugaFunc
// };
// mojaFunc()()


//Closure

// function mojaFunc(){
//     a= 10
//     b= 12  
//     console.log(b)

//     function drugaFunc(arg1){
//         console.log("Druga")
//         console.log(a + arg1);
//     }
//     return drugaFunc
// }
// rez = mojaFunc()
// rez(12)




// prom = new Promise((res,rej)=>{
//     res()
// })
// prom.then(()=>{
//     console.log("b")
    
// });

// console.log("A")

// prom.then(()=>{
//     console.log("C")
// })
// // prvo se izvrsava spoljni Promise pa onda oni unutar njih


//  const getUsers = async ()=>{
//      const response = await fetch("https://jsonplaceholder.typicode.com/users?id=2")
//      const posts = await response.json()
//      return posts.map((el)=>{
//          return {name:"denis", id:el.id, email:el.email}
//      })
//  }
//  getUsers().then((res)=> console.log(res))

 
 

 /// RADII

//   fetch("https://jsonplaceholder.typicode.com/posts",
// {
//     method: 'POST', 
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(
//         [
//             {
//               "id": 1,
//               "name": "Denis",
//               "username": "Mahmutovic",
//               "email": "Dmahmutovic55@gmail.com",
//               "address": {
//                 "street": "Serbia",
//                 "suite": "/",
//                 "city": "Novi Pazar",
//                 "zipcode": "36300",
//                 "geo": {
//                   "lat": "-37.3159",
//                   "lng": "81.1496"
//                 }
//               },
//               "phone": "1-770-736-8031 x56442",
//               "website": "hildegard.org",
//               "company": {
//                 "name": "Romaguera-Crona",
//                 "catchPhrase": "Multi-layered client-server neural-net",
//                 "bs": "harness real-time e-markets"
//               }
//             },]
//     )
//   })
//   .then(res => res.json())
//   .then(data => console.log(data))
  
 


function myMove (n){
    a= ""
    for(let i = 1; i<=n;i++){
        if(i!==1)
        a+= "*"
        if(i===1)
        console.log(i)
        else{
            console.log(`1${a}${i}`)
        }
    }
}
myMove(10)

// RESENJE:
// 1
//  1*2
//  1**3
//  1***4
//  1****5
//  1*****6
//  1******7
//  1*******8
//  1********9
//  1*****10



                // OKRECE STRING U NAZAT PR:"Denis": VRACA "sineD"

const reverseString = (someString) => {
    	let arr = someString.split(' ');
    	arr.reverse();
    	for (let i = 0; i < arr.length; i++) {
    		let arr1 = arr[i].split('');
    		arr1.reverse();
    		arr[i] = arr1.join('');
    	}
    	someString = arr.join(' ');
    	return someString;
    };
    
    console.log(reverseString('denis')); // okreni ime 





    const isPalindrome = (someString) => {
        let stringUnazad = someString.split('');
        stringUnazad.reverse();
        stringUnazad = stringUnazad.join('');
        if (stringUnazad.toLowerCase() === someString.toLowerCase()) {
            return true;
        }
        return false;
    };
    
    console.log(isPalindrome('Racecar')); // true
    console.log(isPalindrome('apple')); // false
 




            //  VRACA SLOVA KOA SE NAJVISE PONAVLJAJU 

    const mostCommonCharacter = (someString) => {
        	let maxPonavljanja = 0;
        	let maxSlovo = someString[0];
        	for (let i = 0; i < someString.length; i++) {
        		let brojac = 0;
        		for (let j = 0; j < someString.length; j++) {
        			if (someString[i] === someString[j]) {
        				brojac++;
        			}
        		}
        		if (brojac > maxPonavljanja) {
        			maxPonavljanja = brojac;
        			maxSlovo = someString[i];
        		} else if (brojac === maxPonavljanja) {
        			if (someString[i].localeCompare(maxSlovo) === -1) {
        				maxSlovo = someString[i];
        				maxPonavljanja = brojac;
        			}
        		}
        	}
        	return maxSlovo;
        };
        
        console.log(mostCommonCharacter('abcddefg')); // d
        console.log(mostCommonCharacter('hfeggbdeff')); // f


        // / Make the function that takes 3 arguments: array of objects, key as string and value.
        // The function should find all objects in the array (1st argument) that have property (2nd argument) equal to the value (3rd argument) and return array of objects that pass this test.
        // You can consider that each object will have the property passed as 2nd value.
        
        // Example:


        const array1 = [
            { id: "333222111", name: "Sulejman", age: "22" },
            { id: "321123432", name: "Stefan", age: "25" },
            { id: "222312543", name: "Semir", age: "32" },
          ];
          
          function getObjects(array, key, value) {
              
              return array.filter(obj => obj[key] === value)
          }

          
          console.log(getObjects(array1, "name", "Semir",)); 
          // result: [ { id: '222312543', name: 'Semir', age: '32' } ] 
          
          console.log(getObjects(array1, "name", "samir")); 
          // result: [ ]
          
          
  
var library = [
	{
		author: 'Bill Gates',
		title: 'The Road Ahead',
		readingStatus: true,
	},
	{
		author: 'Steve Jobs',
		title: 'Walter Isaacson',
		readingStatus: true,
	},
	{
		author: 'Suzanne Collins',
		title: 'Mockingjay: The Final Book of The Hunger Games',
		readingStatus: false,
	},
];

for (let i = 0; i < library.length; i++) {
	if (library[i].readingStatus) {
		console.log(
			`Vec sam Procitao "${library[i].title}" by ${library[i].author}.`
		);
	} else {
		console.log(
			`Nisam Procitao "${library[i].title}" by ${library[i].author}.`
		);
	}
}


  
     
const DATA  = [10,20,30,40,50,60,100,299]
const imena= ["denis","beni","mare"]
novaFun =(arr)=>{
    const parni = arr.filter((el)=> el %2 === 0)
    const zbir = parni.reduce((total,value)=> total+value ) / parni.length
    const Velika = imena.map((el)=> el.toUpperCase())
    return Velika
}
console.log(novaFun(DATA))





// const BASE_URL = "https://jsonplaceholder.typicode.com"

// const getUser = async()=>{
//     const resposne = await fetch(BASE_URL +"/users")
//     const posts = resposne.json()
//     return posts
// }
// const MyUsers = getUser().then((arr)=>{
//     const news = arr.map((el)=>{
//         return{
//             name:el.name,
//             email:el.email
//         }
//     })
//     return news
// })
// MyUsers.then((res)=> console.log(res))
// .catch((err)=> console.log("ERRRO",err))


const BASE_URL = "https://jsonplaceholder.typicode.com"

 const getUsers = async()=>{
     const response = await fetch(BASE_URL+"/photos?id=15")
     const users = await response.json()
     return users

 }
 const myUsers = getUsers().then((arr)=>{
     const neww = arr.map((el)=>{
         return{
             name:el.name,
             title:el.title,
             url:el.url
         }
     })
     return neww
 })
 myUsers.then((res)=> console.log(res))


let age = 26
let baverage = (age>21)? "pivo" : "sok"
console.log(baverage)


// call apply 
//  sta je thiss = 
// osnovni tipovi padataka
//spreed operatori - nam omugucava da brzo kopiramo celi deo postojeceg niza ili objekta u drugi niz ili objekat

//termni operatio
//arrry funcija

// event loop kako radi  jedno od pitanja  da se opise =
//= kada pozovemo funciju ona ide u web-api i tamo izvsava tajmer koliko je zadat,onda kada zavrsi tajmer
// ne vraca se odmah u call stack  nego ide u que kad se isprazni


//kako radi ajax api  Front-end i Back-End mogu da komuniciraju preko API i na taj nacin mozemo da saljemo
// i da primamo JSON- podaci [Frond-end koisti JS] a [Back-END PHP]

// razlika izmenju var i const

 