"use strict";
let greet;
greet = () => {
    console.log("Hello check 123");
};
greet();
//c?:number|string question mark for optional
//c:number|string = 10 default value if not provided
let add = (a, b, c = 10) => {
    console.log(a + b);
    console.log(c);
};
add(3, 4);
let minus = (a, b) => {
    return a - b;
};
let result = minus(5, 6);
console.log(result);
const logDetails = (name, uid) => {
    console.log(`${name} has uid of ${uid} without type`);
};
const userDetails = (user) => {
    console.log(`${user.name} says hello without type`);
};
logDetails("abeer", 1);
userDetails({ name: "abeer", uid: "1" });
const logDetailsWithType = (name, uid) => {
    console.log(`${name} has uid of ${uid} with type`);
};
const userDetailsWithType = (user) => {
    console.log(`${user.name} says hello with type`);
};
logDetailsWithType("ABEER", 1);
userDetailsWithType({ name: "ABEER", uid: "2" });
let greetTen;
greetTen = (name, greetings) => {
    console.log(name, greetings);
};
greetTen("abeer", "hello");
let cal;
cal = (numOne, numTwo, action) => {
    if (action === "add") {
        return numOne + numTwo;
    }
    return numOne - numTwo;
};
console.log(cal(1, 2, "add"));
let logDetailsTen;
logDetailsTen = (abeer) => {
    console.log(`${abeer.name} is ${abeer.age} years old`);
};
logDetailsTen({ name: "abeer", age: 22 });
