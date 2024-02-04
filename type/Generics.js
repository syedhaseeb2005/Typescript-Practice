"use strict";
console.log("Intro to Generics!");
// Generics in Ts allow you to create reusable component or function that can work with multipledata types.
function logandReturn(value) {
    return value;
}
const numberResult = logandReturn(42);
const stringResult = logandReturn("Haseeb");
const booleanResult = logandReturn(true);
// console.log(numberResult);
// console.log(stringResult);
// console.log(booleanResult);
// Practice Generics
function addValue(value) {
    return value;
}
const addnumber = addValue(2 + 2);
const addstring = addValue("syed" + "haseeb");
console.log(addnumber);
console.log(addstring);
