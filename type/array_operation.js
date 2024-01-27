"use strict";
// Intro Array Operation & Iteration
// Array Methods //
// unshift Method //
const fruits = ["banana", "apple", "grapes", "mango", "pear"];
// const addElementAtFirstIndex = fruits.unshift("pear")
// console.log("fruites",fruits);
// console.log(addElementAtFirstIndex);
// shift Method //
// const addElementAtFirstIndex = fruits.shift();
// console.log("fruites",fruits);
// console.log(addElementAtFirstIndex);
// push Method //
// const addElementAtFirstIndex = fruits.push("pear")
// console.log("fruites",fruits);
// console.log(addElementAtFirstIndex);
// pop Method //
// const addElementAtFirstIndex = fruits.pop();
// console.log("fruites", fruits);
// console.log(addElementAtFirstIndex);
// Array Iteration in Ts (loop)
// using for loop //
// for (let i = 0; i < fruits.length; i++) {
//   const element = fruits[i];
//     console.log(element);    
// }
// use for..of loop
for (const fruit of fruits) {
    console.log(fruit);
}
// forEach Method
// fruits.forEach((fruit) => console.log(fruit));
