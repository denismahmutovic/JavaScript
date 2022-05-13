// Koliko ima razmaka u varijabli recenica

const recenica = "Danas je Petak"

let broj = 0
for (let i = 0; i < recenica.length; i++){
    if(recenica[i] === " "){
        broj+=1
    }
}
console.log("broj razmaka je ", + broj)

