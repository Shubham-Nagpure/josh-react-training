// Declare a variable - let a;. On another line assign any value you like to a.
// Log the value of a before and after assignment. Try doing the same with const.
let a;
console.log(a); // Output will be undefined, because a is not initialized
a = 10;
console.log(a); // Output will be 10, because we assign value to a.

const data = 20; // We can not declare const with out initialization.
console.log(data); // Output will be 20
// data = 30;
// constant can be only initialize when they declare.
// if we try to reassign value of const it will throw error.
// console.log(data);

// Use the typeof operator to find the types of different variables.
// Specially note what the typeof operator returns for arrays, null values and NaN.
let b;
const date = new Date();
const bigInt = BigInt(1231234567897897456985236411);

console.log(typeof "data"); // string
console.log(typeof (data + "data")); // string
console.log(typeof data); // number
console.log(typeof NaN); // number := NaN is not a number, means its not legel number but type of NaN will be number.
console.log(typeof bigInt); // bigint
console.log(typeof true); // boolean
console.log(typeof undefined); // undefined
console.log(typeof b); // undefined := variable is declared but the value is not assigned, then the value of that variable will be undefined.
console.log(typeof null); //object := null is nothing, but in javascript typeof null is onject
console.log(typeof {}); // object
console.log(typeof []); // object
console.log(typeof new Array()); //object
console.log(typeof date); // object
console.log(typeof function () {}); // function
console.log(typeof (() => {})); //function

// How can you find if a variable is an array besides typeof?
let detectArray = [1, 2, 3];
console.log(typeof detectArray);
// output of above statement is object. if want to check object is array or not in javascript we have static method on javascript array object
// Array.isArray(); := The isArray() method returns true if an object is an array, otherwise false.
console.log(Array.isArray(detectArray)); // Output will be true

// How can you find if a variable is an NaN besides typeof?
let detectNan = Number("test");
console.log(detectNan); // Output will be NaN
console.log(typeof detectNan); 
// Output will be number := NaN is not a number, means its not legel number but type of NaN will be number.
// we can check NaN with the help of isNaN() method which returns true if a value is NaN else return false.
console.log(isNaN(detectNan)); // Output will be true.
// The isNaN() method converts the value to a number before testing it.
// So Number(undefined) will be NaN and its type is number, and output of isNaN(undefined) will be true which is wrong.
// Should always use isNaN method from scope of global Numbe object.
console.log(Number.isNaN(undefined)); // Output will be false, which is expected output.


// How can you find if a variable is an null besides typeof?
let detectNull = null;
console.log(detectNull); // Output will be null
console.log(typeof detectNull);
// Output will be object :=  null is nothing, but in javascript typeof null is onject.
// we can check null type correctly with the help of strictly equal operator(===).
console.log(detectNull === null);
// Output will be true,


// Use let and const to create arrays and objects.
let array = [1, 2, 3];
const arrayConstant = ["a", "b", "c"];

let obj = { a: 1, b: 2 };
const objConstant = { c: 3, d: 4 };

// Try modifying, deleting properties within the array.
array.push(4);
arrayConstant.push('d');
array.pop();
arrayConstant.pop();

// What actually happens in both cases :=
// We can reassign array with another array, but we can not reassign arrayConstant with another array because it declared using const.
// But can add or modify items in both arrays.


// Try modifying, deleting properties within the object.
obj.c = 3
delete obj.c
objConstant.e = 5
delete objConstant.e

// What actually happens in both cases :=
// We can reassign obj with another object, but we can not reassign objConstant with another object because it declared using const.
// But can add or modify items in both arrays.
