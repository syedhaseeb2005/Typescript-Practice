console.log("Intro of Tuples");

// define a tuples type forperson information
type personInfo = readonly [string, number, boolean];

// Example Usage
const person1: personInfo = ["Haseeb", 18, true];
const person2: personInfo = ["Ayan", 14, false];

//Function to display person information

const displayPersonInfo = (person: personInfo) => {
  const [name, age, hasDriveLicense] = person;
  console.log(
    `Name: ${name}, Age: ${age}, Has Drive License: ${
      hasDriveLicense ? "Yes" : "NO"
    }`
  );
};

// displayPersonInfo(person1);
// displayPersonInfo(person2);

// ! Q1 You are building a simple e-commerce and need to store a product information. define a tuples type call ProductInfoto represent eachh product, containing the following elements:

type ProductInfo = [string, number, number];

const product1: ProductInfo = ["Iphone", 1000, 10];
const product2: ProductInfo = ["Samsung", 2000, 5];

const displayProductInfo = (product: ProductInfo) => {
  const [name, price, quantity] = product;
  console.log(`Name: ${name}, Price: ${price}, Quantity: ${quantity}`);
};

// displayProductInfo(product1);
// displayProductInfo(product2);

// Q2 You are creating a student management system and want to keep track of student grades for different subject.Define a tuple type call SubjectGrade to represent a subject and its corresponding grade.Create an arrayof SubjectGrade tuples to store the grade of student in three different subjects: Math, Computer , English.Calulate and display the average grade of the student

type SubjectGrade = [string, number];

const subjectGrades: SubjectGrade[] = [
  ["Math", 80],
  ["Computer", 90],
  ["English", 85],
];

const calulate = (subjectGrades: SubjectGrade[]) => {
  const sum = subjectGrades.reduce((acc, curr) => acc + curr[1], 0);
  const average = sum / subjectGrades.length;
  console.log(average);
};
// calulate(subjectGrades)

// Q3 You are working on a weather Application and you need to store weather datafor different cities. Define a tuple type called WeatherData to represent the weather information,

type WeatherData = [string, number, string];

const weatherData: WeatherData[] = [
  ["Karachi", 23, "Smoke"],
  ["Lahore", 14, "Smoke"],
];

const displayWeather = (weatherData: WeatherData[]) => {
  for (const [city, temperature, weather] of weatherData) {
    console.log(
      `City: ${city}, Temperature: ${temperature}, Weather: ${weather}`
    );
  }
};
displayWeather(weatherData);
