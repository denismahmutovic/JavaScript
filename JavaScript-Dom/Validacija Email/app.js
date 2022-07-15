function validacija(){
    let input = document.querySelector("#email")
    let value = input.value
    if(value.includes("@") && value.includes(".")){
        let pozicijaAt = value.indexOf("@")  // uzimamo poziciju @
        let pozicijaTacka = value.indexOf(".") // uzimamo poziciju tacke ne uklucuje poslednju pozociju
        let izmedhyTacka = value.substring(pozicijaAt + 1, pozicijaTacka)

        if(izmedhyTacka.length > 0){   // da l i izmedju tacke i @ imamo vise od 0 karaktera
            let preAt = value.substring(0,pozicijaAt)  // da li pre @ imamo vise od 2 karaktra
             if(preAt.length > 2){
                 let polseTacke = value.substring(pozicijaTacka +1, value.length)
                 if(polseTacke.length > 1){  // dali posle tacke imamo vise do 1 karaktera
                     console.log("Email validan")
                 } else {
                     console.log("email nije validan")
                 }
             }                            
        } 
        
    } else{
        console.log("Email nije validan")
    }               
    
}