"use strict"; // Enforce strict mode for better error checking

//alert(3+3); // we are using nodejs so alert won't work here in browser it will work

// documentation to refer - mdn and tc39

let name = "Shubham"; // string data type
let age = 25; // number data type
let isEmployed = true; // boolean data type

/*Primitive Data Types*/
// number => 2 to the power 53
//bigint
//string => " " or ' ' or ` `
//boolean => true or false
//null => standalone value
//undefined => default value when variable is declared but not initialized
//symbol => unique identifier

/*Reference Data Types*/
//object => key-value pairs
//array => ordered collection of items
//function => block of code designed to perform a particular task

console.log(typeof name); // string
console.log(typeof age); // number
console.log(typeof null); // object (this is a known bug in JavaScript);
console.log(typeof undefined); // undefined