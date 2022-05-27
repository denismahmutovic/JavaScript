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

const data1 = [1,3,4,2,7,6];
const doAgeToHuman =(ages) => {
    const humanAge = ages.map(age =>{
        if(age > 2 && age < 8){
            return(age *4) /2
        } else if (age >2){
            return age * 7;
        }
    });

const less = humanAge.filter((el) => el <10);
return less

};

console.log(doAgeToHuman (data1));






