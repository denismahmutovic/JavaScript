var lista = document.getElementsByTagName("Li") 

var i;  
for (i = 0; i < lista.length; i++ ){
    var span = document.createElement("SPAN");
    var txt = document.createElement("/u00d7")
    span.className = "close";
    span.appendChild(tnx);
    lista[i].appendChild(span);
}

// close dugme

var close = document.getElementsByClassName("close");
var i;
for(i = 0; i< close.length; i++){
    close[i].onclick = function (){
        var div = this.parentElement;
        div.style.display = "none";

    
    }
}
var list = document.querySelector ("ul")
list.addEventListener("click", function(ev){
    if (ev.target.tagName === "li"){
        ev.target.classList.toggle ("cheked");
    }
},false);


 var list = document.querySelector("ul")
 