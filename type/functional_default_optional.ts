console.log("Starting functional_default_optional!");

//  Default Paramters Function

const greet1 = (name: string, age: number = 18) => {
  return `my name is ${name} and age is ${age}`;
};

console.log(greet1("haseeb"));

// Optional Paramters Function

const greet2 = (name: string, age?: number) => {
  if (age) {
    return `my name is ${name} and age is ${age}`;
  } else {
    return `my name is ${name}`;
  }
};

console.log(greet2("haseeb"));
