const name = "Shubham";
const repoCount = 50;

console.log(`Hello ${name}, you have ${repoCount} repositories on GitHub.`);

const gameName = new String("Chess");

console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameNam.charAt(2));

const newString = gameName.substring(1,4);
console.log(newString); // "hes"

const anotherString = gameName.slice(1,4);
console.log(anotherString); // "hes"

const yetAnotherString = gameName.slice(-4,-1);
console.log(yetAnotherString); // "hes"

const newStringOne = "   Hello World   ";
console.log(newStringOne.trim()); // "Hello World"

const url = "https://www.example.com/path/to/page?query=123#section";
url.replace("https://", "").replace("www.", "").split("/")[0];
console.log(url); // "example.com"

url.includes("example"); // true

console.log (gameName.split("")); // [ 'C', 'h', 'e', 's', 's' ]


//string methods
// examples of common String methods
const s = "  Hello, JavaScript! 👋  ";
console.log("original:", JSON.stringify(s)); // original: "  Hello, JavaScript! 👋  "

console.log("charAt(2):", s.charAt(2)); // charAt(2): H
console.log("charCodeAt(2):", s.charCodeAt(2)); // charCodeAt(2): 72
console.log("codePointAt(17):", s.codePointAt(17)); // codePointAt(17): 112

console.log("concat:", s.concat(" Welcome")); // concat:   Hello, JavaScript! 👋   Welcome
console.log("includes('Java'):", s.includes("Java")); // includes('Java'): true
console.log("startsWith('  He'):", s.startsWith("  He")); // startsWith('  He'): true
console.log("endsWith('👋  '):", s.endsWith("👋  ")); // endsWith('👋  '): true

console.log("indexOf('a'):", s.indexOf("a")); // indexOf('a'): 10
console.log("lastIndexOf('a'):", s.lastIndexOf("a")); // lastIndexOf('a'): 12

console.log("slice(2,9):", s.slice(2, 9)); // slice(2,9): Hello, 
console.log("substring(2,9):", s.substring(2, 9)); // substring(2,9): Hello, 
// substr is deprecated but still present in many engines
console.log("substr(2,9) [deprecated]:", s.substr(2, 9)); // substr(2,9) [deprecated]: Hello, J

console.log("split(','):", s.split(",")); // split(','): [ '  Hello', ' JavaScript! 👋  ' ]
console.log("repeat(2):", s.repeat(2)); // repeat(2):   Hello, JavaScript! 👋    Hello, JavaScript! 👋  

console.log("replace('JavaScript','JS'):", s.replace("JavaScript", "JS")); // replace('JavaScript','JS'):   Hello, JS! 👋  
// replaceAll replaces all occurrences (ES2021+)
console.log("replaceAll(' ', '·'):", s.replaceAll(" ", "·")); // replaceAll(' ', '·'): ··Hello,·JavaScript!·👋··

console.log("search(/Java/):", s.search(/Java/)); // search(/Java/): 9
console.log("match(/a/g):", s.match(/a/g)); // match(/a/g): [ 'a', 'a' ]
console.log("matchAll(/a/g):", Array.from(s.matchAll(/a/g))); 
// matchAll(/a/g): [ { '0': 'a', index: 10, input: '  Hello, JavaScript! 👋  ', groups: undefined },
//                    { '0': 'a', index: 12, input: '  Hello, JavaScript! 👋  ', groups: undefined } ]

console.log("toLowerCase():", s.toLowerCase()); // toLowerCase():   hello, javascript! 👋  
console.log("toUpperCase():", s.toUpperCase()); // toUpperCase():   HELLO, JAVASCRIPT! 👋  

console.log("trim():", JSON.stringify(s.trim())); // trim(): "Hello, JavaScript! 👋"
console.log("trimStart():", JSON.stringify(s.trimStart())); // trimStart(): "Hello, JavaScript! 👋  "
console.log("trimEnd():", JSON.stringify(s.trimEnd())); // trimEnd(): "  Hello, JavaScript! 👋"

console.log("padStart(25, '.'): ", s.trim().padStart(25, ".")); // padStart(25, '.'): ....Hello, JavaScript! 👋
console.log("padEnd(25, '-'): ", s.trim().padEnd(25, "-")); // padEnd(25, '-'): Hello, JavaScript! 👋----

console.log("normalize('NFC'):", s.normalize("NFC")); // normalize('NFC'):   Hello, JavaScript! 👋  
console.log("localeCompare('hello'):", s.trim().localeCompare("Hello", undefined, { sensitivity: "base" })); 
// localeCompare('hello'): 1

console.log("valueOf():", s.valueOf()); // valueOf():   Hello, JavaScript! 👋  
console.log("toString():", s.toString()); // toString():   Hello, JavaScript! 👋  

// static helpers
console.log("String.fromCharCode(72,101,108,108,111):", String.fromCharCode(72, 101, 108, 108, 111)); 
// String.fromCharCode(...): Hello
console.log("String.fromCodePoint(0x1F44B):", String.fromCodePoint(0x1F44B)); // String.fromCodePoint(...): 👋
console.log("String.raw`Line\\n`: ", String.raw`Line\n`); // String.raw`Line\n`:  Line\n