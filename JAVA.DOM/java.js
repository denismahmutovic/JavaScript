const glavniDiv = document.querySelector("#pocetak")
const body = document.querySelector("body")
const paragraf = document.createElement("p")
paragraf.textContent = "ovo je p dodat i js"
glavniDiv.appendChild(paragraf)
glavniDiv.classList.add("kocka") // dodavanje classe
paragraf.classList.add("text")
const dugme = document.createElement("button")
dugme.innerText = "Click me"
glavniDiv.append(dugme)
const onButtonClick = ()=>{
    paragraf.classList.toggle("veci-fond")
    skriveniDiv.classList.toggle("nevidljiv")

}
dugme.addEventListener("click",)

paragraf.classList.toggle("veci-fond",onButtonClick)

const skriveniDiv = document.createElement("div")
skriveniDiv.innerHTML = `<h1> ovo je H1 </>
                        <p> neki paragrag</p>`

