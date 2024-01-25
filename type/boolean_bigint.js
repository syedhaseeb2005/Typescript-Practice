"use strict";
console.log("hello boolean and biginit!");
// Introduction of Boolean
let mynameisHaseeb = true;
// console.log(mynameisHaseeb);
// Q1 Write a typescript fuction called isEventhat takes a number as a parameter and return true if the number is evenand false otherwise
const isEven = (num) => {
    if (num % 2 === 0) {
        return true;
    }
    else {
        return false;
    }
};
// console.log(isEven(9));
// Q2 Write a Typescript fuction called isdivisibleby4and8that takes a number as a paramter returning true if the number is is divisible by both 4 and 8
const isDivisibleBy4and8 = (num) => {
    if (num % 4 === 0 && num % 8 === 0) {
        return true;
    }
    else {
        return false;
    }
};
// console.log(isDivisibleBy4and8(40));
// Introduction to bigint
let bignumber = 9007199254740992n;
// console.log(maxnumber);
let anothernumber = BigInt(9007199254740991);
// console.log(anothernumber);
// sum the bignumber and anothernumber
let sums = bignumber + anothernumber;
console.log("sum", sums);
// subtract the bignumber and anothernumber
let subtract = bignumber - anothernumber;
console.log("subtract", subtract);
// multiply the bignumber and anothernumber
let multiply = bignumber * anothernumber;
console.log("multiply", multiply);
// divide the bignumber and anothernumber
let divide = bignumber / anothernumber;
console.log("divide", divide);
