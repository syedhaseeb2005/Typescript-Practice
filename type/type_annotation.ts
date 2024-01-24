// introduction to type annotation
let FavNum = 10;
let myFullname = "Syed Haseeb";

let tostring = FavNum.toString();

// console.log(tostring);
// console.log(typeof tostring);

let sum = FavNum + 10;
// console.log(sum);

let nanValue: number = NaN;
// console.log(nanValue);

// Q1 declare a variable message of type string and assign it the value "hello, Typescript!"
let message: string = "hello, Typescript!";
console.log(message);

// Q2 create two variables, firstName and lastName, and assign them your first and last name respectively.concatenate thw two variables stored in a variable called fullname.

let firstname: string = "syed";
let lastname: string = "haseeb";
let fullname: string = firstname + lastname;
// console.log(fullname);

// Q3 DECLARE A variable sentance of type string and assign it a sentance of your choice. find the length of the string and store it in a variable called sentanceLength.

let sentanceLength: string = "Helloworld";
// console.log(sentanceLength.length);

// Q4 DECLARE a variable sentance of type string and assign it a sentance of your choice.Convert the entire sentance to uppercase and store the result in a variable called uppercaseText.then convert the entire sentance to lowercase and store the result in a variable called lowercaseText

let text: string = "helloworld";
let uppercaseText: string = text.toUpperCase();
// console.log(uppercaseText);
let lowercaseText: string = text.toLowerCase();
// console.log(lowercaseText);

// Q5 Declare a variable longText of type string and assignit a long sentance.Extract the first 10 characters from longtext and store them in a variable called shortText.

let longText: string = "my name is syed haseeb";
let shortText: string = longText.substring(0, 10);
// console.log(shortText);

// Q6 Declare a variable str1 and str2 of type string and assign them different sentances.Compare the two string and store the result (true or false)in a variable called areEqual.

let str1: string = "hello";
let str2: string = "world";
let areEqual: boolean = str1 === str2;
console.log(areEqual);

// Q7 Declare a variable product and price of type string and number.Create a string using template literals to display the product and  its  the format "the product {product} is priced at {price} dollars".

let product: string = "laptop";
let price: number = 1000;
let display:string = `the product ${product} is priced at ${price} dollars`;
console.log(display);
