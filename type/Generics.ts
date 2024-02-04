console.log("Intro to Generics!");

// Generics in Ts allow you to create reusable component or function that can work with multipledata types.

function logandReturn<G>(value: G): G {
  return value;
}

const numberResult = logandReturn<number>(42);
const stringResult = logandReturn<string>("Haseeb");
const booleanResult = logandReturn<boolean>(true);

// console.log(numberResult);
// console.log(stringResult);
// console.log(booleanResult);

// Practice Generics

function addValue<T>(value: T): T {
  return value;
}
const addnumber = addValue<number>(2 + 2);
const addstring = addValue<string>("syed" + "haseeb");
console.log(addnumber);
console.log(addstring);
