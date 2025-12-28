// arrays in javascript

const myArr = [1, 2, 3, 4, 5, 6, "ab", "cd", true, false, null, undefined];

// prototype in arrays  - arrays have prototype methods and properties like length , push , pop etc

const marvel_heroes = ["spiderman", "ironman", "thor", "hulk"];
const dc_heroes = new Array("batman", "superman", "flash", "aquaman");

marvel_heros.push(dc_heroes); // adds dc_heroes array as a single element at the end
console.log(marvel_heroes); // [ 'spiderman', 'ironman', 'thor', 'hulk', [ 'batman', 'superman', 'flash', 'aquaman' ] ]

const allHeros = marvel_heroes.concat(dc_heroes); // returns a new array by merging both arrays but does not modify original array
console.log(marvel_heroes); // [ 'spiderman', 'ironman', 'thor', 'hulk', [ 'batman', 'superman', 'flash', 'aquaman' ] ]


// spread operator 

const allHeros2 = [...marvel_heroes, ...dc_heroes]; // spreads elements of both arrays into a new array
console.log(allHeros2); // [ 'spiderman', 'ironman', 'thor', 'hulk', 'batman', 'superman', 'flash', 'aquaman' ]

const anotherArray = [1,2, 3, ...[4,5,6], 7,8];

const real_another_array = anotherArray.flat(Infinity);

console.log(anotherArray); // [ 1, 2, 3, 4, 5, 6, 7, 8 ]
console.log(real_another_array); // [ 1, 2, 3, 4, 5, 6, 7, 8 ]

// data scrapping from array of objects using map

console.log(Arrays.isArray("hitesh")); // false
console.log(Arrays.isArray([1,2,3])); // true

console.log(Array.from("hitesh")); // [ 'h', 'i', 't', 'e', 's', 'h' ]

//Intresting case
console.log(Array.from ({name:"asfd"})); // []  as from method only works on iterable objects and object is not iterable
// so it returns empty array

console.log(Array.from ({0:"a",1:"b",2:"c",length:3})); // [ 'a', 'b', 'c' ]