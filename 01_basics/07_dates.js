// Dates in JavaScript

const currentDate = new Date();
console.log("Current Date and Time:", currentDate); // Outputs the current date and time    

console.log(currentDate.toString()); // Converts date to string format // e.g., "Mon Jun 10 2024 14:23:45 GMT+0000 (Coordinated Universal Time)"
console.log(currentDate.toDateString()); // Converts to date string only // e.g., "Mon Jun 10 2024"
console.log(cuurentDate.tolocalDateString()); // Converts to locale-specific date string // e.g., "6/10/2024" in US format

// let myCreatedDate = new Date('2020-01-15T10:30:00');
let myCreatedDate = new Date(2020, 0, 15, 10, 30, 0); // Note: Month is 0-indexed (0 = January)
console.log("My Created Date:", myCreatedDate.toString()); // e.g., "Wed Jan 15 2020 10:30:00 GMT+0000 (Coordinated Universal Time)"


let newDate1 = new Date();

console(newDate1);
console.log(newdate.getMonth()+ 1); // Month (0-11, so add 1 for human-readable format)

newDate.toLocaleString('default', {weekday: 'long'}); // Full weekday name
newDate.toLocaleString('default', {month: 'long'}); // Full month name

newDate.toLocaleString('default', {weekday: 'short'}); // Short weekday name