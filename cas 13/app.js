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

// const car = {
//     make: "audi",
//     model: "a3",
//     maxSpred:220,
//     currentSpedd: 0,
//     drive:function(num){
//         this.currentSpedd + num
//         if(this.currentSpedd +this.currentSpedd ){
//             alert("ne moze ovako")
//          } else{
//              this.currentSpedd += num
//          }
//     },
//     break:function(num){
//         this.currentSpedd - num
    
//     },
//     stop:function(){
//         this.currentSpedd = 0
//     },

// }

// car.drive (180)
// car.drive(41)
// console.log(car)



// const car = {
//     mark: "Audi",
//     Model:" q7",
//     MaxSpeed:220,
//     currentSpeed: 0,
//     Drive:function(value){
//         if(this.currentSpeed + value > this.MaxSpeed ){
//             alert ("Ne moze ovo ovako");
//         } else{
//             this.currentSpeed += value;
//         }
//     },
//     breke:function(value){
//         this.currentSpeed -= value
        
//     },
//     stop:function(){
//         this.currentSpeed = 0
//     }

// }
// car.Drive(180)
// console.log(car)
// car.Drive(41)
// console.log(car)























const car = {
    mark: "Audi",
    Model:" q7",
    MaxSpeed:220,
    currentSpeed: 0,
    Drive:function(value){
        this.currentSpeed += value
    },
    brake:function(value){
        this.currentSpeed -= value
        
    },
    stop:function(){
        this.currentSpeed = 0
    }

}

car.Drive(50)
car.Drive(10)
car.Drive(40)
car.Drive(80)
car.Drive(40)
car.brake(120)


console.log(car)







