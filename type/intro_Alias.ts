console.log("intro Alias!");

type Person = {
  name: string;
  class?: string;
  address: {
    city: string;
    country: string;
  };
  age: number;
};

const studentInfo1: Person = {
  name: "Haseeb",
  class: "X",
  address: {
    city: "Karachi",
    country: "Pakistan",
  },
  age: 18,
};
console.log(studentInfo1.address.country);

const studentInfo2: Person = {
  name: "Shayan",
  class: "Xii",
  address: {
    city: "Peshawar",
    country: "Pakistan",
  },
  age: 22,
};

type Product = {
  name: string;
  price: number;
  quantity: number;
};
const myproduct: Product = {
  name: "Laptop",
  price: 10000,
  quantity: 6,
};

const calculateTotalPrice = (product:Product) => {
  return product.price * product.quantity;
};
console.log(calculateTotalPrice(myproduct));

