// MAP
// const DATA = [100,65,76,80,99,53,1,2]
//  //parne brojeve
// const returnEven = (numbers) => {
// const evenNumber= numbers.filter((num) => num % 2===0 && num <= 50)
// // const lessTjan50 = evenNumber.filter((el) => el<= 50)
// return evenNumber

// }
// console.log(returnEven(DATA))


// const DATA  = [5,3,2,8,7,9]
// const retutnPow = (numbers) => {
//      const pow = numbers.map((el) => el *el +10)
//      return pow;



// }
// console.log(retutnPow(DATA))

// const DATA = [100,200,250,400,520]
// const cartTatal = DATA.reduce(
//     (previusValue,currenValue) => previusValue + currenValue,30 //inicijalan vrednost
// );
// console.log(cartTatal)


// const DATAA = [26,18,16,22,30,28];
// const sumAvgAge = (ages) => {
//     return sum = ages.reduce((prevValue,curVale) => prevValue + curVale) / ages.length;
    
// }
// console.log(sumAvgAge(DATAA))


// //sum trazi samo jedan da je tacan
// //every trazi sve ta su tacne 


// // includes trazimo tacnu vrednost 


// const element = ["fire","air","water"]
// console.log(element.join("-"))

// const DATA = [100,65,76,80,99,53,1,2]

// const brojevi = (age)=>{
//     const parni = age.filter((el) => el %2 === 0 && el <= 50)
//     return parni

// }
// console.log(brojevi(DATA))

// const DATA = [5,3,2,8,7,9]
// const dodaj = (broj) =>{
//     const pow = broj.map((el)=> el * el +10)
//     return pow
// }
// console.log(dodaj(DATA))




// const DATAA = [5,3,2,8,7,9]
// const finis = DATAA.reduce(
//     (prva,druga) => prva+druga
// )
// console.log(finis)


//  const DATAA = [26,18,16,22,30,28]
 

// const sumAge = (ages) => {
//     const age = ages.reduce((prvaa,drugaa) => prvaa + drugaa) /ages.length
//     return parseFloat (age.toFixed(2))

    
// }
// console.log(sumAge(DATAA)) 




// const sumAge = (ages) =>{
// const age = ages.reduce((prva,druga)=> prva+druga) / ages.length
//   return parseFloat(age.toFixed(2))
// }
// console.log(sumAge(DATAA))

// const DATAA = [26,18,16,22,30,28]
// const racunaj = (ages) =>{
//     const godine = ages.reduce((prehodna,sada)=> prehodna+sada) / ages.length
//     return parseFloat(godine.toFixed(2))

// }
// console.log(racunaj(DATAA))
//  const imena = ["dns","frs", "beni"]

//  const fun = (prvi,drugi) => {
//      const pomocni = prvi.concat(drugi);
//      const prazna = []
//     for(let i of pomocni){
//         if(i %2 ===0){
//             prazna.push(i)
//         }
//     }
//     prazna.unshift(10,20)
//     return pomocni+prazna
//  }
//  console.log(fun(DATAA,imena))

// const parni = DATAA.filter((el)=> el %2===0 && el <= 50)
// console.log(parni)


// el > 2 => el * 7
// el >2 and el <8 => el*4/2


// const ker = [1,3,4,2,7,6]

// const ker_age =(ages) =>{
//     const dog = ages.map((el)=>{
//         if(el >2 && el < 8 ){
//             return (el*4/2)
//         } else if(el >2){
//             return el * 7
//         }
//     })
// const vratiNiz10 = dog.filter((el)=> el <10)
// return vratiNiz10
// }
// console.log(ker_age(ker))


// const miles = [15,20,1, 60,45,120]

// const fun =(milje)=>{
//   
// }
// console.log(fun(miles))

// const DATA = [1,2,4,5,6,7,8,9,10]
// const fun = (funn)=>{
//     const parni = DATA.filter((el)=> el%2===0).map((el)=> el*el)
// const vrati = parni.reduce((total,value)=> total+value)
// return vrati

// }
// console.log(fun(DATA))

// const DATA = [1,2,4,5,6,7,8,9,10]
// const fun = (arr)=>{
//     const parni = arr.filter((el)=> el %2===0).map((el)=> el * el)
//     const zbir = parni.reduce((total,value)=> total+value)
//     return zbir
// }
// console.log(fun(DATA))


// const miles =[15,20,1,60,45,120]
// const fun = (arr)=>{
//     const milje = arr.map((el)=> el*1.6)
//     const zbir = milje.reduce((total,value)=> total+value)
//     return zbir
// }
// console.log(fun(miles))


// const miles = [15,20,1,60,45,120]

// const fun = (milje)=>{
//     const izdracunaj = milje.map((el)=> el*1.60)
//     const total = izdracunaj.reduce((total,value)=> total+value)
//     return total
    
// }
// console.log(fun(miles))

// const DATA = [1,2,3,4,5,6,7,8,9,10]

// const fun = ()=>{
//     const parni = DATA.filter((el)=> el%2===0).map((el)=> el*el)
//     const zbir = parni.reduce((total,value)=> total+value)
//     return zbir
// }
// console.log(fun(DATA))

// const imena = ["marko","sara","nevena"]
// const fun =()=>{
//     const VelikoSlovo = imena.map((el)=> el.toUpperCase())
//     return VelikoSlovo

// }
// console.log(fun(imena))

// const DATA = [100,65,76,80,99,53,1,2]

// const fun =(arr)=>{
//     const parni = arr.filter((el)=> el%2===0 && el <= 50)
//     return parni
// }
// console.log(fun(DATA))

// const DATA = [5,3,2,8,7,9]
// const fun = (arr)=>{
//     const dodaj = arr.map((el)=> el*el+10).reduce((total,value)=> total+value)

    
//     return dodaj
// }
// console.log(fun(DATA))

// const DATA = [100,200,250,400,520]
// const zbir = DATA.reduce((total,value)=> total+value,30)
// console.log(zbir)


// const DATA = [26,18,16,22,30,28]
// const fun = (ages)=>{
//    let len = ages.length
//    const sumAge = ages.reduce((total,value)=> total + value)
//    return Number ((sumAge / len).toFixed(2))


// }
// console.log(fun(DATA))

// const DATA = [51,30,39,29,10,13]
// const every=DATA.some((el)=> el >=1)
// console.log(every)

// const DATA = ["bostan","bostan",39,"grozdje", 10,"borovnica"]
// const ToString = DATA.join ("---")
// console.log(ToString)

const DATA = [10,12,20,50,25]
const fun = (arr)=>{
    const BroVeci = arr.filter((el)=> el >10)
    return BroVeci
}
console.log(fun(DATA))