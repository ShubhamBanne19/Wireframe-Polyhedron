const score = 400;
console.log(typeof score); // number

const balance  = new Number(100);
console.log(balance)
console.log(typeof balance); // object

console.log(balance.toString()); // "100"
console.log(balance.toFixed(2)); // "100.00"

const  otherNumber = 23.4567;
console.log(otherNumber.toPrecision(3)); 

const hundreds  = 1000000
console.log(hundreds.toLocaleString("en-IN")); // "10,00,000"

//DSA 
Number.MAX_VALUE; // largest possible number
Number.MIN_VALUE; // smallest possible number
Number.MAX_SAFE_INTEGER; // 2^53 - 1
Number.EPSILON; // smallest difference between two representable numbers

// +++++++++++maths Subject ++++++++++++++

console.log(Math.PI); // 3.141592653589793
console.log(Math.E); // 2.718281828459045
console.log(Math.sqrt(16)); // 4
console.log(Math.pow(2, 3)); // 8 // 2 raised to the power 3
console.log(Math.abs(-10)); // 10
console.log(Math.ceil(4.2)); // 5 // rounds up
console.log(Math.floor(4.8)); // 4 // rounds down
console.log(Math.round(4.5)); // 5 // rounds to nearest integer
console.log(Math.min(3, 1, 4, 2)); // 1 // minimum value
console.log(Math.max(3, 1, 4, 2)); // 4 // maximum value
console.log(Math.random()); // random number between 0 and 1
console.log((Math.random()*10) + 1); // random number between 1 and 10

const min = 10;
const max = 20;
const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
console.log(randomNum); // random number between 10 and 20

// Math.random() is often used in applications like games for generating random events, in simulations for stochastic processes, and in security for generating random tokens or keys.