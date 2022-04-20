
let count = 0 // pocetna vrednost 0

const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");

btns.forEach(function(btn){
    btn.addEventListener ("click", function(e) {

    const styles = e.currentTarget.classList;
    
    if (styles.contains ("decrease")){
        count --;

    } else if (styles.contains("inrease")) {
        count ++;
    } else{ 
        count = 0;
    }
        if (count > 0){
            value.style.color = "#f9346c";
        } 
        if (count < 0) {
            value.style.color = "red";
        } 
        if (count === 0){
            value.style.color = "green";
        }

        value.textContent = count;
    
    });
});