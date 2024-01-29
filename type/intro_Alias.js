"use strict";
console.log("intro Alias!");
const studentInfo1 = {
    name: "Haseeb",
    class: "X",
    address: {
        city: "Karachi",
        country: "Pakistan",
    },
    age: 18,
};
console.log(studentInfo1.address.country);
const studentInfo2 = {
    name: "Shayan",
    class: "Xii",
    address: {
        city: "Peshawar",
        country: "Pakistan",
    },
    age: 22,
};
const myproduct = {
    name: "Laptop",
    price: 10000,
    quantity: 6,
};
const calculateTotalPrice = (product) => {
    return product.price * product.quantity;
};
console.log(calculateTotalPrice(myproduct));
