// const auto = {
//     marka:"audi",
//     model: "a7",
//     maxBrzina:260,
//     trenutna: 0,
//     drive:function(){
//          this.trenutna + 20;
//     },
//     break:function(){
//         this.trenutna -10
//     },
//     stop:function(){
//         this.trenutna - this.trenutna

//     }


// } 
// console.log(auto.drive())

const car = {
    make: "audi",
    model: "a3",
    maxSpred:220,
    currentSpedd: 0,
    drive:function(num){
        this.currentSpedd + num
        if(this.currentSpedd +this.currentSpedd ){
            alert("ne moze ovako")
         } else{
             this.currentSpedd += num
         }
    },
    break:function(num){
        this.currentSpedd - num
    
    },
    stop:function(){
        this.currentSpedd = 0
    },

}

car.drive (180)
car.drive(41)
console.log(car)



