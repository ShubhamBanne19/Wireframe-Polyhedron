console.log("Hello, World!");

const accountId = 124124;
let accountEmail = "shubham@example.com";
var accountPassword = "securePassword123";
accountCity = "New York";
let accountState; // declared but not initialized
console.log("Account State:", accountState);
let accountMutable = "Initial Value";
console.log("Before mutation:", accountMutable);
accountMutable = "Mutated Value";
console.log("After mutation:", accountMutable);

// accountId = 4321; // This will cause an error / not allowed

accountEmail = "shubham2@example.com";
accountPassword = "newSecurePassword456";
accountCity = "Los Angeles";
console.log("Account ID:", accountId);

console.log("Account Email:", accountEmail);
console.log("Account Password:", accountPassword);
console.log("Account City:", accountCity);

console.table({ accountId, accountEmail, accountPassword, accountCity });
console.table([
  { accountId, accountEmail, accountPassword, accountCity },
  { accountId: 56789, accountEmail: "shubham3@example.com", accountPassword: "anotherSecurePassword789", accountCity: "Chicago" }
]);  
{} // block scope example 

/*
  This is a multi-line comment block.   
    It can span multiple lines.
    Useful for detailed explanations or documentation.
*/

// Single-line comment: This is a simple log statement

//very important note- don't use 'var' to declare variables in modern JavaScript. Use 'let' and 'const' instead for better scoping and to avoid hoisting issues.