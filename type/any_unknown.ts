console.log("Here is any vs unknown!");

// introduction to any 

let favNum:any = 5;
favNum = "five";
console.log(favNum);

let num1:unknown
num1 = 5;
num1 = "five";
num1 = true;
if(typeof num1 === "number"){
    console.log(num1);
}else if(typeof num1 === "boolean"){
    console.log(num1);
}