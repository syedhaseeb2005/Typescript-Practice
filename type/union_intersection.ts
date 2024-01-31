console.log("Intro union_intersection!");

// Intro to Union and it can be denoted by | (pipe)

// const inputValue = (values:string | number | boolean) => {};

// inputValue(55)
// inputValue('hello world')
// inputValue(true)

// Practice, w will create a functionthat can accept differnet type of argumentand perform different actions based on type of the input. Suppose we want ro create a function that doublesthe value if the input is a number or convert the input to uppercase if its is string. to achieve this , we can use a union type to allow the function to accept both number and string.

const inputValue = (value: string | number) => {
  if (typeof value === "string") {
    return value.toUpperCase();
  } else if (typeof value === "number") {
    return value * 2;
  } else {
    console.log("Invalid value");
  }
};
// console.log(inputValue(20));
// console.log(inputValue("haseeb"));

// Q2 we want to create a function that formatthe value passed to it in a specific way based on its type:
// (i) if the value is a number, it should add a dollar sign and format it with two decimal places
// (ii) if the value is a string, it should capatilize the first letter.
// (iii) if the value is a boolean, it should return 'yes' for true and 'no' for false.

const formatValue = (values: string | number | boolean) => {
  if (typeof values === "string") {
    return values.charAt(0).toUpperCase() + values.substring(1);
  } else if (typeof values === "number") {
    return values.toFixed(2);
  } else if (typeof values === "boolean") {
    return values ? "yes" : "no";
  }
};
// console.log(formatValue("hello"));
// console.log(formatValue(10.27332497));
// console.log(formatValue(false));

// Introduction to Union and its denoted by &

type Persondata = {
  name: string;
  age: number;
};
type Employee = {
  emp_id: number;
  department: string;
};

type employeeDeatails = Persondata & Employee;

const employee: employeeDeatails = {
  name: "haseeb",
  age: 18,
  emp_id: 123,
  department: "IT",
};

//******************* Practice ********************** //
type User = {
  name: string;
  age: number;
};
type myLocation = {
  city: string;
  country: string;
};

const users: User = { name: "haseeb", age: 19 };
const mylocation: myLocation = { city: "karachi", country: "Pakistan" };

const createUserProfile = (user: User, location: myLocation) => {
  return { ...user, ...location };
};
const completeInfo: User & myLocation = createUserProfile(users, mylocation);
// console.log(completeInfo);

// Q2 Your Task is o create a function that called combinedUserandAccountthat takes a User Object and an Account Object as argument and return a new Object representing the combined information of the user and their account

type UserData = {
  id: number;
  name: string;
  email: string;
};
type AccountData = {
  accountId: number;
  accountType: string;
  balance: number;
};

const userData:UserData = {id:1 , name:"haseeb",email:"haseeb@gmail.com"}
const accountData:AccountData = {accountId:1 , accountType:"savings",balance:10000}

const combineUserandAccount = (user: UserData, account: AccountData) => {
  return { ...user, ...account };
};

const combined:UserData & AccountData  = combineUserandAccount(userData, accountData);
console.log(combined);
