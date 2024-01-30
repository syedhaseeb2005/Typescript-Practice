console.log("Intro to Enums!");

enum Role {
  Admin = "admin",
  User = "user",
}

type LoginDetails = {
  name?: string;
  email: string;
  password: string;
  role: Role;
};
const user: LoginDetails = {
  name: "Haseeb",
  email: "haseeb@gmail.com",
  password: "123456",
  role: Role.Admin,
};
const user2: LoginDetails = {
  name: "User2",
  email: "user2@gmail.com",
  password: "123456",
  role: Role.User,
};

const isAdmin = (user: LoginDetails) => {
  const { email, role } = user;
  return role === Role.Admin ? `${email} is an admin!` : `${email} is a user!`;
};
console.log(isAdmin(user));
