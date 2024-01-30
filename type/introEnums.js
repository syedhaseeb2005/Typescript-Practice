"use strict";
console.log("Intro to Enums!");
var Role;
(function (Role) {
    Role["Admin"] = "admin";
    Role["User"] = "user";
})(Role || (Role = {}));
const user = {
    name: "Haseeb",
    email: "haseeb@gmail.com",
    password: "123456",
    role: Role.Admin,
};
const user2 = {
    name: "User2",
    email: "user2@gmail.com",
    password: "123456",
    role: Role.User,
};
const isAdmin = (user) => {
    const { email, role } = user;
    return role === Role.Admin ? `${email} is an admin!` : `${email} is a user!`;
};
console.log(isAdmin(user));
