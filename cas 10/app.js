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


const DATAA = [26,18,16,22,30,28];
const sumAvgAge = (ages) => {
    return sum = ages.reduce((prevValue,curVale) => prevValue + curVale) / ages.length;
    
}
console.log(sumAvgAge(DATAA))


//sum trazi samo jedan da je tacan
//every trazi sve ta su tacne 


// includes trazimo tacnu vrednost 


const element = ["fire","air","water"]
console.log(element.join("-"))

