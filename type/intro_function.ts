console.log("Its function!");

// Introduction to function

// Greet Function define

// function greet(name: string, age: number) {
//   console.log(`my name is ${name} & my id is ${age}`);
// }
// // function call
// greet("haseeb", 10);

// use arrow function
const greet = (name: string, age: number) => {
  //   console.log(`my name is ${name} & my age is ${age}`);
};
// function call
greet("haseeb", 10);

// Fucntion return: how to specify the return typeof a function in typescript

// Q1: to specify the return type of a function , you can use the colon (:) followed by the desired type after the fucntion parameter list

// const greet1 = (name: string, age: number):string => {
//   return `my name is ${name} & my age is ${age}`;
// };
// // function call
// const myGreet = greet1("haseeb", 19);
// console.log(myGreet);

// Q2: Write a function called isPalindrome that takes a string as a paramter and return true if the string is a palindrome (reads the same forward and backward) and false otherwise

const isPalindrome = (str: string):boolean => {
  let isPlain = str.split("").reverse().join("");
  return isPlain === str;
};
console.log(isPalindrome("racecar"));

// Q3 Create a function called calculateAverage that takes an array of number as a paramter and returns the average of those numbers

const calculateAverage = (number: number[]):number => {
    const sum = number.reduce((a, b) => a + b);
    console.log("sum",sum);
    const average = sum / number.length;
    console.log("average",average);
    return average;
}
(calculateAverage([1, 2, 3, 4, 5]));

// Q2 Create a fucntion call findMaxValue that takes an array of numbers as a paramter and return the maximum value in the array.

const findMaxValue = (number : number[]) =>{
    const Maxnum = Math.max(...number);
    console.log("MaxNum",Maxnum);   
}
findMaxValue([1, 2, 3, 4, 5]);