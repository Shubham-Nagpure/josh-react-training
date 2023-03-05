// 1. Write a function that can stop execution of a function for
// the number of milliseconds sent as an argument
// Example:
// const func = async () => {
//   console.log("Printing before");
//   //Call your function here eg. sleep(3000)
//   sleep(3000);
//   console.log("Printing after");
// };

const sleep = (milliseconds) => {
  return new Promise((resolve) => setTimeout(resolve, milliseconds));
};

const func = async () => {
  console.log("Printing before");
  await sleep(3000); // Delay execution for 3000 milliseconds
  console.log("Printing after");
};

// OUTPUT
// Printing before
// Printing afters

// 2.  Using promises - write a function that fetches data from an API endpoint
//  (GET https://reqres.in/api/users ). Log the data into the console once it is received

const getUsers = (url) => {
  const promise = new Promise(() => {
    fetch(url)
      .then((res) => res.json())
      .then((users) => console.log(users.data))
      .catch((error) => console.log(error));
  });
};

getUsers("https://reqres.in/api/users");

// Using Async Await
const asyncGetUsers = async (url) => {
  try {
    const response = await fetch(url);
    const users = await response.json();
    console.log(users.data);
  } catch (error) {
    console.log(error);
  }
};

asyncGetUsers("https://reqres.in/api/users");

// OUTPUT: [
//   {
//     id: 1,
//     email: "george.bluth@reqres.in",
//     first_name: "George",
//     last_name: "Bluth",
//     avatar: "https://reqres.in/img/faces/1-image.jpg",
//   },
//   {
//     id: 2,
//     email: "janet.weaver@reqres.in",
//     first_name: "Janet",
//     last_name: "Weaver",
//     avatar: "https://reqres.in/img/faces/2-image.jpg",
//   },
//   {
//     id: 3,
//     email: "emma.wong@reqres.in",
//     first_name: "Emma",
//     last_name: "Wong",
//     avatar: "https://reqres.in/img/faces/3-image.jpg",
//   },
//   {
//     id: 4,
//     email: "eve.holt@reqres.in",
//     first_name: "Eve",
//     last_name: "Holt",
//     avatar: "https://reqres.in/img/faces/4-image.jpg",
//   },
//   {
//     id: 5,
//     email: "charles.morris@reqres.in",
//     first_name: "Charles",
//     last_name: "Morris",
//     avatar: "https://reqres.in/img/faces/5-image.jpg",
//   },
//   {
//     id: 6,
//     email: "tracey.ramos@reqres.in",
//     first_name: "Tracey",
//     last_name: "Ramos",
//     avatar: "https://reqres.in/img/faces/6-image.jpg",
//   },
// ];

// 3. What will be printed to the console when the promise resolves and when it rejects?
const testAsyncFunction = () => {
  return new Promise((resolve, reject) => {
    if (Math.random() > 0.5) {
      resolve("Test Resolve");
    } else {
      reject("Test Reject");
    }
  }).catch((err) => {
    console.log("Error caught in testAsyncFunction: ", err);
  });
};

testAsyncFunction()
  .then((res) => {
    console.log("Response in then block: ", res);
  })
  .catch((err) => console.log("Error in catch block: ", err));

// ANSWER:
// When Promist is resolves
// => when promise is resolved then it will invoke the callback function. Resolve means our promise is fulfilled.
//    It will print Response in then block Test Resolve
//
//  When Promise is rejected
//  => When promise is rejected then it will invoke catch callback function. In rejected case it will print
//     "Error caught in testAsyncFunction:  Test Reject"
//     "Response in then block:  undefined"

// Using async await
const testFunction = async () => {
  try {
    if (Math.random() > 0.5) {
      return "Test Resolve";
    } else {
      throw new Error("Test Reject");
    }
  } catch (err) {
    console.log("Error caught in testAsyncFunction: ", err);
  }
};

async function asyncTestFunction() {
  try {
    const result = await testFunction();
    console.log("Response in then block: ", res);
  } catch (err) {
    console.log("Error caught in catch block: ", err);
  }
}

asyncTestFunction();

// Q4. What will be printed to the console?
const testAsyncFunction2 = () => {
  return Promise.reject("Test static reject");
};

testAsyncFunction2()
  .then((res) => {
    console.log("Response in then block", res);
  })
  .catch((err) => console.log("Error in catch block", err));

// OUTPUT:
// Error in catch block Test static reject

//Using async await
const testFunction2 = async () => {
  throw new Error("Test static reject");
};

async function asynctestFunction2() {
  try {
    const result = await testFunction2();
    console.log("Response in try block", result);
  } catch (err) {
    console.log("Error in catch block", err.message);
  }
}

asynctestFunction2();

// Q5. What will be printed to the console?
const testAsyncFunction3 = () => {
  return new Promise((resolve, reject) => {
    if (Math.random() > 0.5) {
      resolve("Test Resolve");
    } else {
      reject("Test Reject");
    }
  }).catch((err) => {
    console.log("Error caught in testAsyncFunction", err);
    throw new Error("Forced error");
  });
};

testAsyncFunction3()
  .then((res) => {
    console.log("Response in then block: ", res);
  })
  .catch((err) => console.log("Error in catch block: ", err));

// Using Async await
const testFunction3 = async () => {
  try {
    if (Math.random() > 0.5) {
      return "Test Resolve";
    } else {
      throw new Error("Test Reject");
    }
  } catch (err) {
    console.log("Error caught in testAsyncFunction", err);
    throw new Error("Forced error");
  }
};

async function asyncTestFunction3() {
  try {
    const result = await testFunction3();
    console.log("Response in try block: ", result);
  } catch (err) {
    console.log("Error in catch block: ", err.message);
  }
}

asyncTestFunction3();

// OUTPUT:
// There is two possible output of above code
//
// 1. if the Math.random() returns value greater than 0.5 then the output will be
// => Response in then block: Test Resolve
//
// 2. if the Math.random() returns value less than 0.5 then the output will be
// => Error caught in testAsyncFunction Test Reject
//    Error in catch block:  Error: Forced error

// 6. Create a promise that makes a fetch call, but resolves with the data only 2 seconds after the data has been received in the fetch
const ApiCallFunction = (url) => {
  return new Promise((resolve, reject) => {
    fetch(url)
      .then((res) => res.json())
      .then(async (res) => {
        await sleep(2000); // sleep function defined on line 11
        resolve(res);
      })
      .catch(reject);
  });
};

ApiCallFunction("https://reqres.in/api/users")
  .then((data) => console.log(data))
  .catch((error) => console.log(error));

// Using Async await
async function asyncApiCallFunction(url) {
  let res = await fetch(url);
  res = await res.json();
  console.log(res);
}

asyncApiCallFunction("https://reqres.in/api/users");
