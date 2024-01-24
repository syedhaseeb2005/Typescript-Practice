console.log("hello boolean and biginit!");

// Introduction of Boolean
let mynameisHaseeb: boolean = true;
// console.log(mynameisHaseeb);

// Q1 Write a typescript fuction called isEventhat takes a number as a parameter and return true if the number is evenand false otherwise

const isEven = (num: number): boolean => {
  if (num % 2 === 0) {
    return true;
  } else {
    return false;
  }
};
console.log(isEven(9));

// Q2 Write a Typescript fuction called isdivisibleby4and8that takes a number as a paramter returning true if the number is is divisible by both 4 and 8