"use strict";
// const character = 'mario';
// console.log(character);
const inputs = document.querySelectorAll('input');
console.log(inputs);
const cric = (diameter) => {
    return diameter * Math.PI;
};
console.log(cric(2));
let mixed = ['abeer', 3];
mixed.push(4);
console.log(mixed);
let abeer = {
    name: 'abeer',
    belt: 'black',
    age: 22,
};
// abeer.name=10
let character;
let array;
array = ['abeer'];
// let array:string []=[];
array.push('muneeb');
let mixedArray = [];
let uid;
let object;
object = []; //array is also a somekind of object
object = {};
let objecTwo;
objecTwo = {
    name: 'abeer',
    belt: 'black',
    age: 30,
    // skills:"check"
};
let age = 22;
console.log({ age });
age = true;
console.log({ age });
age = 'twentyTwo';
console.log({ age });
age = {
    name: 'abeer',
    age: 20,
};
console.log({ age });
let mixedArrayTwo = [];
mixedArrayTwo.push(22);
mixedArrayTwo.push('twentyTwo');
mixedArrayTwo.push(true);
console.log(mixedArrayTwo);
let mixedObject;
mixedObject = { name: "abeer", age: "twentyTwo" };
console.log(mixedObject);
mixedObject = { name: abeer, age: 33 }; //Assigning name a object
console.log(mixedObject);
