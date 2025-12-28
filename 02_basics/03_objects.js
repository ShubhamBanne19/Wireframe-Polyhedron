//objects in javascript

const person = {
    name: "John",
    age: 30,
    isEmployed: true,
};

// singleton  object in javascript
//

//object literals in javascript

const JsUser = {
    name: "Shubham",
    "full name": "Shubham Kumar",
    age: 25,
    email: "shubham@example.com",
    isAdmin: false,
    courses: ["JavaScript", "React", "Node.js"],
    [getDetails]() {
        return `${this.name}, ${this.age} years old`;
    },
    [mySym] : "id",
};

console.log(JsUser.name); // Shubham
console.log(JsUser["age"]); // 25
console.log(JsUser["full name"]); // Shubham Kumar

// full name is not valid identifier so we have to use bracket notation to access it

console.log(JsUser.courses); // ["JavaScript", "React", "Node.js"]

// adding new property to object
JsUser.phone = "123-456-7890";
console.log(JsUser.phone); // 123-456-7890

// modifying existing property
JsUser.age = 26;
console.log(JsUser.age); // 26

// deleting property
delete JsUser.isAdmin;
console.log(JsUser.isAdmin); // undefined

JsUser.email = undefined; // setting email to undefined