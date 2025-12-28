// difference between singleton and non-singleton object

const msWordUser = new Object(); // non-singleton object

const msWordUser2 = {}  // non-singleton object

coonsole.log(msWordUser === msWordUser2); // false

// singleton object in javascript
const singletonObj = Object.create(null); // singleton object

msWordUser.id = "ms12345";
msWordUser.name = "Shubham";
msWordUser.email = "shubham@example.com";

console.log(msWordUser);

const regularUser = {
    email: "shubham@example.com",
    password: "password123",
    fullname: {
        userFullName: {
            firstName: "Shubham",
            lastName: "Kumar",
        },
    },

}

console.log(regularUser.fullname?.userFullName?.firstName); // Shubham
console.log(regularUser["fullname"]["userFullName"]["lastName"]); // Kumar

// optional chaining operator (?.) is used to access nested properties safely

const obj1 ={
    1:"a", 2:"b", 3:"c"
}
const obj2 ={
    "4":"a", "5":"b", "6":"c"
}
const  objexceptional = {
    "name": "object exception",
    "type": "test",
    "sadf": {
        "nested": "object",
        level2: {
            info: "deeply nested object"}

    }
}

console.log(obj1, obj2); // { '1': 'a', '2': 'b', '3': 'c' } { '4': 'a', '5': 'b', '6': 'c' }

const obj3 = Object.assign({}, obj1, obj2); // merges obj1 and obj2 into a new object

console.log(obj3); // { '1': 'a', '2': 'b', '3': 'c', '4': 'a', '5': 'b', '6': 'c' }

const obj4  = {...obj1, ...objexceptional}; // spreads properties of obj1 and objexceptional into a new object

console.log(obj4); 
// { '1': 'a', '2': 'b', '3': 'c', name: 'object exception', type: 'test', sadf: { nested: 'object', level2: { info: 'deeply nested object' } } }

const users = [
    {
        id: 1,
        name: "Alice",

    },
    {
        id: 2,
        name: "Bob"
    },

]

users[0].age = 25; // adding new property to first object in array

console.log(users);
// [ { id: 1, name: 'Alice', age: 25 }, { id: 2, name: 'Bob' }

console.log(Object.keys(regularUser)); // [ 'email', 'password', 'fullname' ]
console.log(Object.values(regularUser)); 
// [ 'shubham@example.com', 'password123', { userFullName: { firstName: 'Shubham', lastName: 'Kumar' } } ]

//form array in value pairs of name in user object
console.log(Object.entries(regularUser)); 
// [ [ 'email', 'shubham@example.com' ], [ 'password', 'password123' ], [ 'fullname', { userFullName: { firstName: 'Shubham', lastName: 'Kumar' } } ] ]

// check if property exists in object
console.log("email" in regularUser); // true

//object destructuring 
const course = {
    courseName: "JavaScript",
    courseDuration: "3 months",
    courseProvider: "Udemy",
}

// course.courseProvider = course
// console.log(courseProvider); // Udemy
const {courseProvider: courseInstructor} = course;

console.log(courseInstructor);

const navbar = ({company}) => {
    return `Welcome to ${company} website`;
} // destructuring in function parameter

console.log(navbar({company: "TechCorp"})); // Welcome to TechCorp website

// JSON - JavaScript Object Notation
// {
//     "name": "ChatGPT",
//     "version": "4.0",
//     "features": ["text generation", "code assistance", "language translation"],   
// }


[
    {        "id": 1,
        "name": "Alice",
        "email": "alice@example.com"},
    {
        "id": 2,
        "name": "Bob",
        "email": "bob@example.com"  
    }
]