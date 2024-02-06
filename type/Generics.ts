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

function addValue<T , U>(a :T, b : U) {
  console.log(typeof a);
  console.log(typeof b);
  
}
const addnumber = addValue<number , string>(5 , "haseeb");
const addstring = addValue("haseeb" , 5);
// console.log(addnumber);
// console.log(addstring);
