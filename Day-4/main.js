// Q: What happens when you add a for loop/while loop/switch case block inside a function
// and use return instead of break?
// Do statements after the loop run?
// What is the return value?
// Can we pass a return value from within a loop?
// Can you return from inside an if block?
// What impact does that have?

const forLoopFunction = () => {
  let counter = 1;
  for (counter; counter < 25; counter++) {
    if (counter % 5 == 0) return "exit using return";
    console.log(counter);
  }
};

// forLoopFunction() : It will stop execution when if condition match and return from for loop and function.
// OUTPUT:
// 1
// 2
// 3
// 4
// 'exit using return'

function whileLoopFunction() {
  counter = 1;
  while (25 >= counter) {
    if (counter % 5 == 0) return "exit using return";
    console.log(counter);
    counter++;
  }
}

// whileLoopFunction() : It will stop execution when if condition match and return from for while loop and function.
// OUTPUT:
// 1
// 2
// 3
// 4
// 'exit using return'

function switchCaseFunction(age) {
  switch (true) {
    case age <= 12:
      console.log("child");
      return "child";
    case age >= 13 && age <= 18:
      console.log("teen");
      return "teen";
    case age > 18:
      console.log("adult");
      return "adult";
    default:
      console.log(typeof age);
      return "Invalid age";
  }
}

// switchCaseFunction(12) : It will return from for while loop and function.
// OUTPUT:
// child
// 'child'

// ANSWER:
//
// Q: What impact does that have?
// If we use return statement inside function, it will stop code execution once return statement execute.
//
// Q: Use return instead of break. Do statements after the loop run?
// => No, It will not execute any statement after return statement.
//
// Q: What is the return value?
// => it will return value which we pass to return. If no value pass to return it will return undefiend.
//
// Q: Can we pass a return value from within a loop?
// => Yes, we can pass return value. eg. `return 'exit using return';`

// Q: Can you return from inside an if block?
// => If the 'if' block is inside the function then only we can use return inside the 'if' block, and if the condtion matched code inside the if (i.e. return;) will get executed and function execution will terminate.

// Q: Take a function that accepts a function as a parameter (also known as callback function).
function test(callback) {
  console.log(callback());
}

function callbackFunc() {
  console.log("Calling the callback function");
  return 5;
}

// Q: Explore the following cases - what is printed in the console, and what gets returned:
test(callbackFunc);
// ANSWER:
// It will print "Calling the callback function"
// It will return undefined : because when we call callbackFunc then it will return 5 but test function is not return anything
// and thats why it will return undefined

test(callbackFunc());
// ANSWER:
// It will print "Calling the callback function"
// While calling callback() it will throw an typeError, because we already call that function and it is return value 5
// and test function trying to call 5() and it is not function it is number and hence it will throw typeError.

test(() => callbackFunc());
// ANSWER:
// We are passing anonymous function so it will execute like
// (()=> callbackFunc())()
// It will print "Calling the callback function"
// It will return undefined : because when we call callbackFunc then it will return 5 but test function is not return anything
// and thats why it will return undefined

// Q: What happens when you return callback() from the test function?
function test(callback) {
  return callback();
}

test(callbackFunc);
// ANSWER:
// It will print "Calling the callback function"
// It will return 5 : because when we call callbackFunc then it will return 5 but test function is returning value.

test(callbackFunc());
// ANSWER:
// It will print "Calling the callback function"
// While calling callback() it will throw an typeError, because we already call that function and it is return value 5
// and test function trying to call 5() and it is not function it is number and hence it will throw typeError.

test(() => callbackFunc());
// ANSWER:
// We are passing anonymous function so it will execute like
// (()=> callbackFunc())()
// It will print "Calling the callback function"
// It will return 5 : because when we call callbackFunc then it will return 5 but test function is returning value.

// Q: What happens when you return callback from the test function?
function test(callback) {
  return callback;
}

test(callbackFunc);
// ANSWER:
// It will return callbackFunc definition, because we are not calling that function.

test(callbackFunc());
// ANSWER:
// It will print "Calling the callback function"
// It will return 5 : because when we call callbackFunc then it will return 5,
// so in parameter we have return value and we are returning that value in test function.

test(() => callbackFunc());
// ANSWER:
// It will return () => callbackFunc(), because we are not calling that function.
