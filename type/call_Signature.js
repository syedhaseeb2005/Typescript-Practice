"use strict";
console.log("Intro Call_Signature!");
const studentData = {
    name: "Haseeb",
    age: 20,
    class: "BSCS",
    rollNo: 10,
    greet: (country) => `Welocome my name is ${studentData.name} and my age is ${studentData.age} and I am from ${country}`,
};
// const introduction = (studentData: Student) => {
//   const { name, age } = studentData;
//   return `Welocome my name is ${name} and my age is ${age}`;
// };
// // console.log(introduction(studentData));
console.log(studentData.greet("Pakistan"));
