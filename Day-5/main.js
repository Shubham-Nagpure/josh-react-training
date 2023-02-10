// Q: What is the difference between ++i and i++?
// ANSWER:
let i = 1;
console.log(++i); // OUTPUT: 2
console.log(i++); // OUTPUT: 2
// If we take above example :
//     ++i will increament the value of i by 1 and return 2.
//     If ++ comes before its operand it is called the "pre-increment" operator,
//
//     i++ will return value of i ie. 2 and then increament its value by 1.
//     If ++ comes after its operand it is called the "post-increment" operator.

// Q: What do you think would happen if you pass an index beyond the range of the string?
// ANSWER:
let testString = "test";
console.log(testString[4]);
// OUTPUT: undefined
// length of testString is 4 and range is 3.
// If we pass an index beyond the range of string it will return undefined
//
// Q: If you pass a negative index?
console.log(testString[-1]);
// The square brackets always return undefined for negative indexes.
// If we use .at(pos) then it will return negative position. If pos is negative, then it’s counted from the end of the string.

// Q: Do you think JSON.stringify would work for arrays as well?
// ANSWER:
// Yes, It will convert array into string.
let array = [1, 2, 3];
console.log(JSON.stringify(array));
// OUTPUT:
// '[1,2,3]'
// JavaScript arrays are designed to hold data with numeric indexes.
// Also we can add named properties to them because an array is a type of object. like
//
// Exceptions to JSON.Stringify
// Arrays containing non-stringifiable entries are handled specially though.
let foo = [Symbol(), undefined, function () {}, "ok"];
JSON.stringify(foo);
// OUTPUT:
// '[null,null,null,"ok"]'

let namedArray = [];
namedArray["a"] = "test a";
namedArray["b"] = "test b";
console.log(JSON.stringify(namedArray));
// OUTPUT: []
// The JSON array data type cannot have named keys on an array.
// When we pass a array to JSON.stringify the named properties will be ignored.

// Q: What about nested objects?
// ANSWER:
// It is possible to parse nested object to stringify.
// eg:
const nestedObj = {
  name: "test",
  age: 30,
  project: [
    { name: "surefood", tech: ["rails", "ReactJS"] },
    { name: "mekari", models: ["rails", "VueJS"] },
  ],
};
console.log(JSON.stringify(nestedObj));
// OUTPUT:
// '{"name":"test","age":30,"project":[{"name":"surefood","tech":["rails","ReactJS"]},{"name":"mekari","models":["rails","VueJS"]}]}'

// Q: What happens if we pass numbers, strings, undefined, null to JSON.stringify?
// ANSWER:
// JSON.stringify can be applied to primitives as well.
JSON.stringify(1);
// OUTPUT: '1'
JSON.stringify("1");
// OUTPUT: '"1"'
JSON.stringify(null);
// OUTPUT: 'null'

// JSON is data-only language-independent specification, so some JavaScript-specific object properties are skipped by JSON.stringify.
// Function properties (methods).
// Symbolic keys and values.
// Properties that store undefined.
JSON.stringify(undefined);
// OUTPUT: undefined : will not convert into string

// Q: What happens if you pass a regular/invalid JSON string to JSON.parse?
//    What will happen if such an invalid function runs in the program?
//    Will other parts of the code execute correctly after that?
// ANSWER:
// If we pass regular JSON string to JSON.parse it will convert into javascript object
// eg:
const jsonObject = { a: 1, b: 2 };
const stringfyObj = JSON.stringify(jsonObject);
console.log(stringfyObj);
console.log(JSON.parse(stringfyObj));
// OUTPUT:
// {"a":1,"b":2}
// {a: 1, b: 2}

// If we pass invalid JSON string to JSON.parse it will throw a exception.
// eg.
let invalidJsonString = "{ a: 123 }";
const invalidStringfyObj = JSON.parse(invalidJsonString);
console.log(invalidJsonString);
// OUTPUT:
// When above line started executing at line No. 101 it wil throw an exception.
// Uncaught SyntaxError: Expected property name or '}' in JSON at position 1
// In such case program gets terminated and code after that will not execute.
// we can handle such exception using try and catch block or in JSON case we can handle such thing by converting that object into string and then parse it.
// eg:
const validStringfyObj = JSON.parse(JSON.stringify(invalidJsonString));
console.log(validStringfyObj);
// OUTPUT:
// { a: 123 }
