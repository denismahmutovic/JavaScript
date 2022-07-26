// --------------------------Pocetak--------------------------------
// console.dir(document);
// console.log(document.domain)
// console.log(document.URL)
// console.log(document.title)
// document.title = "hello"
// console.log(document.all)

// const headerTitle = document.getElementById("header-title")
// console.log(headerTitle)
// headerTitle.textContent = "Hello"
// headerTitle.innerText = 'Goodbye'
// headerTitle.style.borderBottom = "solid 3px red"
// headerTitle.style.fontSize = "30px"

// let items = document.getElementsByClassName("list-group-item")
// console.log(items)
// console.log(items[1])
// items[1].textContent = "hello"
// items[1].style.fontWeight = "bold"
// items[1].style.backgroundColor = "yellow"

      //querySelector//

// let header = document.querySelector("#main-header")
// header.style.borderBotton = "solid 3px red"

// let input = document.querySelector("input")
// input.value = "Hello world"

// let submit = document.querySelector(`input[type="submit"]`)
// submit.value ="Send"

// let item = document.querySelector(".list-group-item")
// item.style.color = "red" //prva

// let lastItem = document.querySelector(".list-group-item:last-child")
// lastItem.style.color = "blue" // zadnja

// let secondItem = document.querySelector(".list-group-item:nth-child(2)")
// secondItem.style.color = "coral" // biramo sami mesto na koje zelimo boju da primeniomo

//    QUERYSELECTOR ALL

// let title = document.querySelectorAll(".title")
// console.log(title)
// title[0].textContent = "Hello"


// let odd = document.querySelectorAll("li:nth-child(odd)")
// for(let i = 0;i < odd.length; i++){
//   odd[i].style.backgroundColor = "red"
// }  //Svaki parni da bude crven

// let even = document.querySelectorAll("li:nth-child(even)")
// for(let i = 0; i < even.length;i++){
//   even[i].style.backgroundColor = "yellow"
// }  // svaki neparni da bude zut
// --------------------------------kraj Prvi deo----------------------------------


// -----------------------------Pocetak Drugi Deo -------------------------------


 // parentElement
let itemList = document.querySelector("#items")
// childnodes
// console.log(itemList.parentNode)
// itemList.parentNode.style.backgroundColor = "#f4f4f4"
// console.log(itemList.parentNode.parentNode)

console.log(itemList.children)
console.log(itemList.children[2]);
itemList.children[1].style.backgroundColor = "yellow"

// itemList.childNodes[2].textContent = "text" // ubacujeno novi item
// FirsChild
// console.log(itemList.firstElementChild)
// // FirstElementChild
// itemList.firstElementChild.textContent = "Hello 1"


// lastChild
console.log(itemList.lastElementChild)
// LastElementChild
itemList.lastElementChild.textContent = "Hello 1"  // zadnje na listi menjamo ime u Hello 1

console.log(itemList.nextElementSibling)  // trazi sledeci elemenat div,span..
console.log(itemList.previousElementSibling) // trazi prehodni elemant div...

// Create a Div

let newDiv = document.createElement("div")
newDiv.className = "hello"
newDiv.id = "hello1"
newDiv.setAttribute("title","hello div")
let newDivText = document.createTextNode("Hello world")
newDiv.appendChild(newDivText)

let container = document.querySelector("header .container")
let h1 = document.querySelector("header h1")
console.log(newDiv)
container.insertBefore(newDiv,h1)

// ------------------------------KRAJ DRUGI DEO---------------------------------








