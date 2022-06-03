// TEST

// 1. zadatak iz minje u kilometre// 

// const milje = [15,20,1,60,45,120]
// const fun =(arr) =>{
//     const izMilja = arr.map((el)=> el * 1.6)
//     const total = izMilja.reduce((total,value) => total+value)
//     return total
// }
// console.log(fun(milje))


const numbers = [1,2,3,4,5,6,7,8,9,10]
const fun = (broj)=>{
    const parni = broj.filter((el)=> el %2===0).map((el)=> el *el)
    const zbir = parni.reduce((total,value)=> total+value)
    return zbir

}
console.log(fun(numbers))