"use strict";
console.log("Starting functional_default_optional!");
//  Default Paramters Function
const greet1 = (name, age = 18) => {
    return `my name is ${name} and age is ${age}`;
};
console.log(greet1("haseeb"));
// Optional Paramters Function
const greet2 = (name, age) => {
    if (age) {
        return `my name is ${name} and age is ${age}`;
    }
    else {
        return `my name is ${name}`;
    }
};
console.log(greet2("haseeb"));
