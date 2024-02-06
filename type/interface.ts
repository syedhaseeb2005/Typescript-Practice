console.log('Intro to Interface!');

// Intro Interface 

//******************* Syntax ********************** // 

// interface Greet {
//     name: string;
//     age: number;
// }
// const greets: Greet = {
//     name: "haseeb",
//     age: 18
// }


// Practice

interface Products {
    name: string;
    price: number;
    quantity: number;
}

const myproducts1: Products = {
    name: "Laptop",
    price: 10000,
    quantity: 6,
}
const myproducts2: Products = {
    name: "Mouse",
    price: 1000,
    quantity: 10,
}

// calculate total  price

const calculateTotalPrices = (product: Products) => {
    const { price, quantity } = product;
    return price * quantity
}
const totalPrice1 = calculateTotalPrices(myproducts1);
const totalPrice2 = calculateTotalPrices(myproducts2);
console.log("totalPrice1", totalPrice1);
console.log("totalPrice2", totalPrice2);
