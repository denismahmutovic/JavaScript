// Koliko ima razmaka u varijabli recenica

// const recenica = "Danas je Petak"

// let broj = 0
// for (let i = 0; i < recenica.length; i++){
//     if(recenica[i] === " "){
//         broj+=1
//     }
// }
// console.log("broj razmaka je ", + broj)



// U datom stringu zadnje slovo svake reci prebaciti da bude veliko

let  string = "ovo je string ";
let newString = "";
let len = string.length;


for (let i = 0; i < len; i++) {
    if (i === len -1) {
        newString += string[i].toUpperCase();
    } else if (string[i + 1] === " ") {
        newString += string[i].toUpperCase();
    } else {
        newString += string[i];
    }
}

console.log(newString);

