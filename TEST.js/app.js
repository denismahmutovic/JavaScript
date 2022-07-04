const prvi = function(br) { 
    br = prompt("unesi broj");
    let pow = br * br;
    console.log(`The pow of ${br} je ${pow}`)
};

prvi()




const drugiZadatak = function() {
    const CART_DATA = [
        {
          id: 1,
          name: "Hawai Shirt",
          price: 30,
          amount: 2,
          categorty: "summer",
          rating: 4.5,
        },
        {
          id: 3,
          name: "Adidas Slippers",
          price: 35,
          amount: 1,
          categorty: "summer",
          rating: 4.5,
        },
        {
            id: 6,
            name: "White T-Shirt",
            price: 15,
            amount: 4,
            categorty: "summer",
            rating: 4.7,
        },
        {
            id: 4,
            name: "Summer hat",
            price: 7.5,
            amount: 3,
            categorty: "summer",
            rating: 40,
        }]
    
        const newObject = CART_DATA.map((el) => {
            return{name : el.name, 
                price : el.price * el.amount,}
          })
          console.log(newObject)


        const numProducts = CART_DATA.map(el => el.amount).reduce((preValue,currValue) => preValue + currValue);
        const newPrice = newObject.map((el) => el.price);
        const shippingCost = 320
        const total = newPrice.reduce((preValue, currValue) => preValue + currValue, shippingCost);
        console.log(`You got ${numProducts} products in cart, shipping cost is ${shippingCost}, your total is ${total}`)


}

drugiZadatak();


const treciZadatak = async() => {
    const data = await fetch("https://reqres.in/api/users?page=2");
    const product = await data.json();
    return product;
    
}

treciZadatak().then((res) => console.log(res.data));