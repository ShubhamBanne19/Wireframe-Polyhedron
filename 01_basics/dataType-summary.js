//Primitive 
// 7 Types : String, Number, Boolean, Null, Undefined, Symbol, BigInt

const score = 100; //Number
const scoreValue = 100.5; //Number
const isLoggedIn = false; //Boolean
const outsideTemp = null; //Null
let userEmail; //Undefined

const id = Symbol("12345"); //Symbol-for unique identifiers
const anotherId = Symbol("12345");

console.log(id === anotherId); // false

const bigNumber = 12345678901234234567890n; //BigInt

//Reference
// Object, Array, Function

const heros = ["shaktiman", "naagraj", "doga"]; //Array

let myObj = { //Object
    name: "Shubham",
    age: 25,
}

const myfuntion = function() { //Function
    console.log("Hello World");

}

console.log(typeof BigInt); // function

//  stack (Primitive) vs Heap (Reference/ Non-Primitive)

