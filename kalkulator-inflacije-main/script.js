function inflationCalculator() {
    let inflationRate = document.querySelector("#inflationRate")
    let money = document.querySelector("#money")
    inflationRate = parseFloat(inflationRate.value)
    money = parseFloat(money.value)
   
    let years = document.querySelector("#years").value
    years = parseFloat(years)

    let vredonst = money + (money*(inflationRate / 100))
    
    let newElemeny = document.createElement("div")
    newElemeny.className = "New-Value"
    newElemeny.innerText = `Danasnjih ${money} vredi isto kao ${vredonst} za ${years} godina`
    // apend elemenat
    document.querySelector(".container").appendChild(newElemeny)
}