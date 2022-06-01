// TEST

// 1. zadatak iz minje u kilometre// 

const miles = [15,20,1,60,120]
const fun = (milje)=>{
    const izr = milje.filter((el)=> el* 1.6)
    const totalDistanceinKilometers = izr.reduce((total,value)=> total+value)
    return totalDistanceinKilometers
}
console.log(fun(miles))