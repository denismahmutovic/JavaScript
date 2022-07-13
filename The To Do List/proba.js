//  Elements
let taskInput = document.querySelector("#new-task")
let aliTask = document.querySelector(".all-tasks")
const btnAdd = document.querySelector("#create-task")

function addTack(event) {
event.preventDefault();

let inputValue = taskInput.value;
if(inputValue === ""){
    alert("prazno polje")
} else{
    aliTask.innerHTML += `<li class="task">
    <p>${inputValue}</p>
    <button class="delete" title="Delete>x</button>
    </li>`
    taskInput.value = "";
    taskInput.focus();

}
}
btnAdd.addEventListener("click",addTack);   
