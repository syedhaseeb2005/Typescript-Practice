console.log("Today Learning Type_inference!");

let myName = "HASEEB"; // the compiler infers the type string for the variable

let myAge = 25; // the compiler infers the type number for the variable

let isMarried = false; // the compiler infers the type boolean for the variable

let myArray = [1, 2, 3, 4, 5]; // the compiler infers the type number[] for the variable

// Practice
// Q1: Declare a variable message and initialize it with the value "Hello, Typescript!". Infer the type message using type inference

let messages = "Hello, Typescript!";
console.log(typeof messages);

// Q2 Write a function calculateArea that takes the length and width paramter of type number and return their product.Infer the return type of the function using type inference.

const calculateArea = (length: number, width: number) => {
    return length * width;
}
// function call
console.log(calculateArea(10 ,20));
console.log(typeof calculateArea(10 ,20));

