console.log("Introduction to Object!");

const studentInfo: {
  name: string;
  class: string;
  address: {
    city: string;
    country: string;
  };
  age: number;
} = {
  name: "Haseeb",
  class: "X",
  address: {
    city: "Karachi",
    country: "Pakistan",
  },
  age: 18,
};
// console.log(studentInfo.address.city);

const products: {
  name: string;
  price: number;
  quantity: number;
} = {
  name: "Laptop",
  price: 10000,
  quantity: 6,
};
console.log(products.name);
