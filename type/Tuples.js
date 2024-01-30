"use strict";
console.log("Intro of Tuples");
// Example Usage
const person1 = ["Haseeb", 18, true];
const person2 = ["Ayan", 14, false];
//Function to display person information
const displayPersonInfo = (person) => {
    const [name, age, hasDriveLicense] = person;
    console.log(`Name: ${name}, Age: ${age}, Has Drive License: ${hasDriveLicense ? "Yes" : "NO"}`);
};
const product1 = ["Iphone", 1000, 10];
const product2 = ["Samsung", 2000, 5];
const displayProductInfo = (product) => {
    const [name, price, quantity] = product;
    console.log(`Name: ${name}, Price: ${price}, Quantity: ${quantity}`);
};
const subjectGrades = [
    ["Math", 80],
    ["Computer", 90],
    ["English", 85],
];
const calulate = (subjectGrades) => {
    const sum = subjectGrades.reduce((acc, curr) => acc + curr[1], 0);
    const average = sum / subjectGrades.length;
    console.log(average);
};
const weatherData = [
    ["Karachi", 23, "Smoke"],
    ["Lahore", 14, "Smoke"],
];
const displayWeather = (weatherData) => {
    for (const [city, temperature, weather] of weatherData) {
        console.log(`City: ${city}, Temperature: ${temperature}, Weather: ${weather}`);
    }
};
displayWeather(weatherData);
