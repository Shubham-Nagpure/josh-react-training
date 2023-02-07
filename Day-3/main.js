// 1. Declare a variable let age = 25;. Write a series of if else statements that will:
let age = 25;

/*
  Print child to the console if age is less than equal to 12.
  Print teen to the console if age is between 13 and 18 (inclusive).
  Print adult to the console if age is above 18
*/

if (age <= 12) {
  console.log("child");
} else if (age >= 13 && age <= 18) {
  console.log("teen");
} else if (age > 18) {
  console.log("adult");
} else {
  console.log("Invalid age");
}

// 2.  Do the same using switch case.

switch (age) {
  case age <= 12:
    console.log("child");
    break;
  case age >= 13 && age <= 18:
    console.log("teen");
    break;
  case age > 18:
    console.log("adult");
    break;
  default:
    console.log("Invalid age");
    break;
}

// 3. Declare a variable let arraySize = 25;. Using a for loop, add numbers from one onwards into an array till the arraySize is reached.
let arraySize = 25;
let array = [];
let number = 1;

for (number; number <= arraySize; number++) {
  array.push(number);
}

console.log(array);

// 4. Accomplish the same using a while loop.

let arrayForWhileLoop = [];
let counter = 1;

while (arraySize >= counter) {
  arrayForWhileLoop.push(counter);
  counter++;
}

console.log(arrayForWhileLoop);

// 5. Can you use return instead of break in loops?
/*
    ANSWER: You cannot use return statement in place of break statement.
            But inside a function, the for loop can be escaped with return statement.

            const test = () => {
              while (arraySize >= counter) {
                if (counter % 5 == 0) return "exit using return";
                console.log(counter);
                counter++;
              }
            };

            test();

            OUTPUT: 
            1
            2
            3
            4
            exit using return 
*/
