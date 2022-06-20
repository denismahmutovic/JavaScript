// posao = new Promise((resolve,reject)=> {
//     response = 480;

// })
// if(response === 200){
//     resolve()
// } else{
//     reject()
// }
// .finally/





posao = new Promise((resolve,reject)=>{
    response = 200;
    for(let i = 0;i < 9000000;i++){}
        if(response === 200){
            resolve([1,2,3,4,5]);  
        } else{
            reject("GREEESKAA")
        }
        
    }  
)
posao.then((data)=>{
    console.log("uspesno povukao podatke",data);
    arr = data.filter((el)=> el % 2 === 0)
    
    return arr; 

})
.then((arr)=> {
    console.log("druga func",arr)  //parni brojevi
})
.catch((err)=>{
    console.log("neuspesno povukao podatke",err)
   
    
})
// ----------------------------------------------------------------.



