// const data1 = [2,26,38,75,11,29]
// const data2 = ["a","b","c","d", "e"]

// const murateArrays = (array1,arry2) => {
    
//     const spojenNiz = array1.concat(arry2);
//     const prazan = []
    
   







// da narpravimo pomocni niz koi ce da sardezi niz iz argumenta da ih spoji

// da izvradmo parne brojeve da sadrzi 

//  u taj niz da smestimo prvi dva mesta 10,20;


// Filter Metora

// const words = ["televizor", "daljicnki", "telefon","voda","ranac","stolica"]
// const godine = [2,8,9,11,15,85,100]


// const provera = words.concat(godine).filter(godine)
// console.log(provera)



 // MAP METORA
// const numbers = [2,5,10,3,4,8];
// const squereNumbers = numbers.map (el => el * el);
// console.log(squereNumbers)
// napravili  niz sa promejenim vrednostima


// const numbers = [25,100,9,16,64];
// const squereNumbers = numbers.map((el) => Math.sqrt(el))
// console.log(squereNumbers)


// const numbers = [2,5,3,1,10,8,7];
// const squereNumbers = numbers.map((el,index,array) =>{
//     if(index === 0 || index ===3 || index ===5){
//         return el*el
//     } else{
//         return el;
//     }


// })
// console.log(squereNumbers)




//el > 2 =el *7
//el > 2&& el<8 = (el*4) /2

// psece godine  u ljutkse godine

// const data1 = [1,3,4,2,7,6];
// const doAgeToHuman =(ages) => {
//     const humanAge = ages.map(age =>{
//         if(age > 2 && age < 8){
//             return(age *4) /2
//         } else if (age >2){
//             return age * 7;
//         }
//     });

// const less = humanAge.filter((el) => el <10);
// return less

// };

// console.log(doAgeToHuman (data1));

// ------------------------------home--------------------------------------------



// const DATA1 = [2,26,38,75,11,29]
// const DATA2 = ["a","b","c","d","e"]

// const fun = (broj1,broj2)=>{
//     const pomocna = broj1.concat(broj2);
//     let prazna = []
//     for(let i of pomocna){
//         if(i %2 === 0){
//             prazna.push[i]
//         }
//     }
//     prazna.unshift(10,20)
//     return "prvi pomocni niz je " + pomocna +   " drugi pomocni niz je " + prazna
// }
// console.log(fun(DATA1,DATA2))



// const words = ["98", "daljinski", "telefon", "voda", "ranac", 'stolica']

// const novi = words.filter((el) => el[1] === "e")
// const duzina = words.filter((el)=> el.length <6)
// // console.log(duzina)
// // console.log(novi)

// const numbers = [2,8,9,11,26,86,90,102,1003,1120];

// const novii = words.concat(numbers).filter((el) => el % 2 === 0 )
// // console.log(novii);
// const boolens = [true, false,true,false];
// const newW = novii.concat(boolens).filter((el) => typeof el === "boolean")
// console.log(newW)



// const data1 = [2,26.38,75,11,29,50]
// const data2 = ["a","b","c","d","e"]

// const fun =(broj1,broj2) =>{
//     const pomocni_niz = broj1.concat(broj2);
//     const prazan = []
//     for(let i of pomocni_niz){
//         if(i %2===0){
//             prazan.push(i)
//         }
//     }
//     prazan.unshift(10,20)
//     return pomocni_niz + prazan
// }
// console.log(fun(data1,data2)) // resen -.-





//  const words = ["98", "daljinski", "telefon", "voda", "ranac", 'stolica']
//  const trazimo_e = words.filter((el) => el [1] === "e")
//  console.log(trazimo_e ) //resen



//   const numbers = [2,8,9,11,26,86,90,102,1003,1120];
//   const parni = words.concat(numbers).filter((el ) => el % 2=== 0)
//     console.log(parni)



 
// const  boolens = [true, false,true,false];
// const vrenost = boolens.filter((el) => typeof el === "boolean")
// console.log(vrenost) 

// const brojeve = [2,3]
// const square = brojeve.map((el) => Math.sign(el))

// console.log(square)

// const numbers = [2,5,3,1,10,8,7];
// const squre = numbers.map((el,index )=> {
//     if(index === 0 || index === 3 || index === 5) {
//         return el*el;
//     } else{
//         return el;
//     }
// })
// console.log(squre);


const psece_godine = [1,3,4,2,7,6]

const dogAge = (ages) => {
    const humanAge = ages.map((age) =>{
        if (age > 2 && age < 8){
            return (age * 4) /2;
        } else if(age > 2){
            return age *7
        } else{
            return age
        }
    });
    const manje_od10 = humanAge.filter((age) => age <10);
    return[humanAge,manje_od10]

}
console.log(dogAge(psece_godine))





















 
