"use strict";
console.log("Intro union_intersection!");
// Intro to Union and it can be denoted by | (pipe)
// const inputValue = (values:string | number | boolean) => {};
// inputValue(55)
// inputValue('hello world')
// inputValue(true)
// Practice, w will create a functionthat can accept differnet type of argumentand perform different actions based on type of the input. Suppose we want ro create a function that doublesthe value if the input is a number or convert the input to uppercase if its is string. to achieve this , we can use a union type to allow the function to accept both number and string.
const inputValue = (value) => {
    if (typeof value === "string") {
        return value.toUpperCase();
    }
    else if (typeof value === "number") {
        return value * 2;
    }
    else {
        console.log("Invalid value");
    }
};
// console.log(inputValue(20));
// console.log(inputValue("haseeb"));
// Q2 we want to create a function that formatthe value passed to it in a specific way based on its type:
// (i) if the value is a number, it should add a dollar sign and format it with two decimal places
// (ii) if the value is a string, it should capatilize the first letter.
// (iii) if the value is a boolean, it should return 'yes' for true and 'no' for false.
const formatValue = (values) => {
    if (typeof values === "string") {
        return values.charAt(0).toUpperCase() + values.substring(1);
    }
    else if (typeof values === "number") {
        return values.toFixed(2);
    }
    else if (typeof values === "boolean") {
        return values ? "yes" : "no";
    }
};
const employee = {
    name: "haseeb",
    age: 18,
    emp_id: 123,
    department: "IT",
};
const users = { name: "haseeb", age: 19 };
const mylocation = { city: "karachi", country: "Pakistan" };
const createUserProfile = (user, location) => {
    return { ...user, ...location };
};
const completeInfo = createUserProfile(users, mylocation);
const userData = { id: 1, name: "haseeb", email: "haseeb@gmail.com" };
const accountData = { accountId: 1, accountType: "savings", balance: 10000 };
const combineUserandAccount = (user, account) => {
    return { ...user, ...account };
};
const combined = combineUserandAccount(userData, accountData);
console.log(combined);
