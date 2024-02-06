console.log("Intro to Generics!");
// Generics in Ts allow you to create reusable component or function that can work with multipledata types.
function logandReturn(value) {
    return value;
}
var numberResult = logandReturn(42);
var stringResult = logandReturn("Haseeb");
var booleanResult = logandReturn(true);
// console.log(numberResult);
// console.log(stringResult);
// console.log(booleanResult);
// Practice Generics
function addValue(a, b) {
    console.log(typeof a);
    console.log(typeof b);
}
var addnumber = addValue(5, "haseeb");
var addstring = addValue("haseeb", 5);
// console.log(addnumber);
// console.log(addstring);
