let score = "33ads";
console.log(typeof score); 

console.log(typeof String(score));
console.log(String(score));

let scoreNum = Number(score);
console.log(typeof scoreNum);
console.log(scoreNum);

let value = true;
console.log(typeof value);

// "1" => 1
// "33ads" => NaN
// true => 1
// false => 0

let isLoggedIn = "false";
let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(typeof booleanIsLoggedIn); // true because non-empty strings are truthy
console.log(booleanIsLoggedIn); // true

// 1 => true; 0 => false
// "" => false; "shubham" => true

let someNumber = 33;
let stringNumber = String(someNumber);
console.log(typeof stringNumber);
console.log(stringNumber);

let strToNum = Number("324");
console.log(typeof strToNum);
console.log(strToNum);  

// ******************Operations**************

let val1 = "100";
let val2 = 34;
let negValue = -value;

console.log(val1 + val2); // "10034" string concatenation
console.log(Number(val1) + val2); // 134 addition after conversion

let str1 = "Shubham ";
let str2 = "Kumar";

console.log(str1 + str2); // "Shubham Kumar" string concatenation
console.log(typeof (str1 + str2)); // string

