"use strict";
console.log("hello boolean and biginit!");
// Introduction of Boolean
let mynameisHaseeb = true;
console.log(mynameisHaseeb);
// Q1 Write a typescript fuction called isEventhat takes a number as a parameter and return true if the number is evenand false otherwise
const isEven = (num) => {
    if (num % 2 === 0) {
        return true;
    }
    else {
        return false;
    }
};
console.log(isEven(9));
