console.log("its array map & filter!");

// Map & Filter Method in Ts

const numbers: number[] = [1, 2, 3, 4, 5];

// !Map Method

// Q1: Doubling the number
const mapNumber = numbers.map((number: number) => number * 2);
// console.log(mapNumber);

// Q2 Convert number into string
const toStrings: string[] = numbers.map((number: number) => number.toString());
// console.log(toStrings);

// Q3 Given an Array of string representing names, create a new array that contains the uppercase versionof each name

const names: string[] = ["haseeb", "ayan", "shayan"];
const toupperCase = names.map((name: string) => name.toUpperCase());
// console.log(toupperCase);

// Q4 Given an Array of string representing number, create a new Array that contains the sqrt of the number

const Numbers: string[] = ["1", "4", "16", "25"]
const toSqrt = Numbers.map((number: string) => Math.sqrt(+number)); // + ki jaga parseInt bhi use kar sakhty hy
// console.log(toSqrt);




// !Filter Method

//Q1: Filtering the even number
const evenNumber = numbers.filter((number: number) => number % 2 === 0);
// console.log(evenNumber);

// Q2: Filtering the number greater than 3
const DivideBy3: number[] = numbers.filter((number: number) => number > 3);
// console.log(DivideBy3);


// Q3 Filtering the name word greater than 5
const Names:string[] = ["haseeb", "ayan", "shayan","ahmed"];
const arr:string[] = Names.filter((name: string) => name.length > 5);
// console.log(arr);

// Q4 filtering the name start with letter a  
const StartletA = Names.filter((name: string) => name.startsWith("a"))
console.log(StartletA);
