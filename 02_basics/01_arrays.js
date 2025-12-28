// arrays in javascript 

const myArr = [1, 2, 3, 4, 5, 6, "ab", "cd", true, false, null, undefined]
console.log(myArr);
console.log(typeof myArr); // object

// accessing elements
console.log(myArr[0]); // 1


// while copying arrays don't use = operator as it will create reference copy thats why if we change in one array it will reflect in other array also

const myHeros = ["shaktiman", "naagraj", "doga", "batman"];
const myArr2 = new Array("item1", "item2", "item3");

// we get prototype length property inside array

// Array Methods

myHeros.push("superman"); // adds element at last

console.log(myHeros);
myHeros.pop(); // removes last element
console.log(myHeros);
myHeros.unshift("ironman"); // adds element at start
console.log(myHeros);

consolelog(myHeros.includes("doga")); // true
console.log(myHeros.join(", ")); // shaktiman, naagraj, doga, batman

// slice and splice 

console.log("A", myHeros); // [ 'shaktiman', 'naagraj', 'doga', 'batman' ]

const newHeros = myHeros.slice(1, 3); // does not modify original array

console.log(newHeros); // [ 'naagraj', 'doga' ]
console.log("B", myHeros);

myHeros.splice(1, 1, "nagraj"); // modifies original array
console.log("C", myHeros); // [ 'shaktiman', 'nagraj', 'doga', 'batman' ]
// first parameter is starting index, second is number of elements to remove, rest are elements to add

