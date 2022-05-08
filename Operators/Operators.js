// DECLARATION
var x;
var y;
var x;
var a, b, c, d, e;

// INSTANTIATION
x = 1; // number
y = 2;
z = "neki broj"; //string
a = true; // boolean
var niz = [1, 2, 3, 4,5]; // array (niz)

// CONCATENATIOON
// document.getElementById("js").innerHTML =  niz;
// console.log (typeof niz);

for (i = 0; i < niz.length; i++) {
    document.write(niz [i])

}
//  const person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};
//  document.getElementById("jss").innerHTML =
// person.firstName + " is " + person.age + " years old.";

var objekat = { ime: "denis", prezime: "mahmutovic" , godine: 26, bojeOciju: "plave"};
document.getElementById("js").innerHTML  = 
objekat.ime + " " + objekat.prezime + " " + objekat.godine + " " + objekat.bojeOciju;


// console.log (x==z);
// console.log (x===z);

// var broj = 10
// var broj = broj + 10
// var broj = broj +50
// document.write(broj)

// var broj = 10
// broj++
// broj ++
// broj --
// broj --
// document.write(broj)

var broj = 10
broj += 10
broj -= 20
broj += 3
broj *= 9
broj %= 27

document.write(broj)
