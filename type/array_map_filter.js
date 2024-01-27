"use strict";
console.log("its array map & filter!");
// Map & Filter Method in Ts
const numbers = [1, 2, 3, 4, 5];
// !Map Method
// Q1: Doubling the number
const mapNumber = numbers.map((number) => number * 2);
// console.log(mapNumber);
// Q2 Convert number into string
const toStrings = numbers.map((number) => number.toString());
// console.log(toStrings);
// Q3 Given an Array of string representing names, create a new array that contains the uppercase versionof each name
const names = ["haseeb", "ayan", "shayan"];
const toupperCase = names.map((name) => name.toUpperCase());
// console.log(toupperCase);
// Q4 Given an Array of string representing number, create a new Array that contains the sqrt of the number
const Numbers = ["1", "4", "16", "25"];
const toSqrt = Numbers.map((number) => Math.sqrt(+number)); // + ki jaga parseInt bhi use kar sakhty hy
// console.log(toSqrt);
// !Filter Method
//Q1: Filtering the even number
const evenNumber = numbers.filter((number) => number % 2 === 0);
// console.log(evenNumber);
// Q2: Filtering the number greater than 3
const DivideBy3 = numbers.filter((number) => number > 3);
// console.log(DivideBy3);
// Q3 Filtering the number greater than 5
const Names = ["haseeb", "ayan", "shayan", "ahmed"];
const arr = Names.filter((name) => name.length > 5);
// console.log(arr);
const StartletA = Names.filter((name) => name.startsWith("a"));
console.log(StartletA);
