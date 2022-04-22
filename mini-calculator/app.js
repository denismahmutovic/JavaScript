const num1 =document.querySelector(".num1");
const num2 = document.querySelector(".num2");
const result = document.querySelector(".result");
const btns = document.querySelectorAll(".btn");

btns.forEach(function (btn) {
    btn.addEventListener("click",function(e){
        const styles = e.currentTarget.classList;

        if( styles.contains("plus")){
            result = num1 + num2;
        }
        if(styles.contains ("minus")){
            result = num1 -num2;

        }
        if(styles.contains("devision")){
            result = num1 / num2;
        }
        if(styles.contains("multiplication")){
            result = num1 * num2;
        }
        
    })
})



    