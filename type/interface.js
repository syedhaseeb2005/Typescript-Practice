console.log('Intro to Interface!');
var myproducts1 = {
    name: "Laptop",
    price: 10000,
    quantity: 6,
};
var myproducts2 = {
    name: "Mouse",
    price: 1000,
    quantity: 10,
};
// calculate total  price
var calculateTotalPrices = function (product) {
    var price = product.price, quantity = product.quantity;
    return price * quantity;
};
var totalPrice1 = calculateTotalPrices(myproducts1);
var totalPrice2 = calculateTotalPrices(myproducts2);
console.log("totalPrice1", totalPrice1);
console.log("totalPrice2", totalPrice2);
