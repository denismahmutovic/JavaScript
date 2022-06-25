// posao = new Promise((resolve,reject)=> {
//     response = 480;

// })
// if(response === 200){
//     resolve()
// } else{
//     reject()
// }
// .finally/





// posao = new Promise((resolve,reject)=>{
//     response = 200;
//     for(let i = 0;i < 9000000;i++){}
//         if(response === 200){
//             resolve([1,2,3,4,5]);  
//         } else{
//             reject("GREEESKAA")
//         }
        
//     }  
// )
// posao.then((data)=>{
//     console.log("uspesno povukao podatke",data);
//     arr = data.filter((el)=> el % 2 === 0)
    
//     return arr; 

// })
// .then((arr)=> {
//     console.log("druga func",arr)  //parni brojevi
// })
// .catch((err)=>{
//     console.log("neuspesno povukao podatke",err)
   
    
// })
// // ----------------------------------------------------------------.

// fetch ("httos://catfact.ninja/facts")
// .then((result)=>{
//     res = result.json();
//     return res
// })
// .then((res)=>{
//     console.log(res)

// })
// .catch((err)=>{
//     console.log(err,"===========")
// })

// const vezba = new Promise((resolve,reject)=>{
//     const rand = Math.floor(Math.radnom()* 2);
//     if(rand == 0){
//         resolve()
//     } else {
//         reject()
//     }
// })
// vezba
// .then(()=> console.log("Success"))
// .catch(()=>console.log("nije prosao"))
// fetch("https://pokeapi.co/api/v2/pokemon/ditto")
// .then((res)=> res.json())
// .then((data)=> console.log(data))
// .catch((err)=>console.log(err))

// const fetchPokemon = async(id)=>{
//     const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
//     const data = await res.json()
//     console.log(data)
// }
// fetchPokemon(1)

// const obecanje1 = new Promise ((resolve,reject)=>{
//     let suma = 0
//     for(let i = 0;i<1000000;i++){
//         suma += i
//     } 
//     resolve(suma)
// } ) 

// obecanje1
// .then(rezultat =>{
//     console.log("stigao je rezultat obecanja:",rezultat)
// })

// console.log("stigli smo  do ovg dela")




//  function mojaFunc (){
     
//      a = 11;
//      b = 12;
//      function drugaFunc(arg1){
//          console.log("drugaa");
//         console.log(a + arg1);
        
//      }
//      return drugaFunc
     
//  } 

//  res = mojaFunc()
//  res(9)

 

//  mojaFunc()() //moze i ovako



// quary PARAM (s) ? u http

// const BASE_URL = "https://jsonplaceholder.typicode.com";

// const getUser = async ()=> {
//    const resposne = await fetch(BASE_URL + "/users?id=1");
//    const post = await resposne.json()
//    return post
  
// }
// getUser().then((res)=> console.log(res))

//nizovu objekti

 
// const getUser = async () =>{
//     const resposne = await fetch("https://jsonplaceholder.typicode.com/posts");
//     const posts = await resposne.json()
//     const trazimo =  posts.filter((el)=> el.title === 'nesciunt quas odio')
//     return trazimo.map((el)=>{
//         return{title:"Naslov", id:el.id}
//     })

// }
// getUser().then((res)=> console.log(res))
// .catch((data)=>{
//     console.log("test nije prosao",(data))
// })

const user = async ()=>{
    const resposnee = await fetch("https://jsonplaceholder.typicode.com/users");
    const post = await resposnee.json()
    const trazi = post.filter((el)=> el.name === "Leanne Graham")
    const trazi2 = post.filter((el)=>el.username === "Antonette" )
    return trazi2.map((el)=>{
        return {name:"Denis.m",id:el.id}
    })
} 

user().then((res)=> console.log(res))

// const getUser = async () =>{
// const resposne = await fetch("https://jsonplaceholder.typicode.com/users"
       
//     .then(res =>{
//         if(res.ok){
//             console.log("Succest")
//         } else{
//             console.log("Unsuccest")
//         } return res
//     })
//     const posts = await resposne.json()
//     return posts
    

// }
// getUser().then((res)=> console.log(res))




// fetch("https://jsonplaceholder.typicode.com/users?id=1",
// {
//     method: 'POST', // or 'PUT'
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(
//         {   
//             name:"Denis",
//             Prezime:"Mahmutovic"
//         }

//     ),
//   })
//   .then(res => res.json())
//   .then(data => console.log(data))


