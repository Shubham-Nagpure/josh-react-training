// Write a function to check deep equality of two nested objects/array
const compareDeep = (obj1, obj2) => {
  if (typeof obj1 !== typeof obj2) return false;

  if (typeof obj1 === "object") {
    if (Array.isArray(obj1)) {
      if (obj1.length !== obj2.length) return false;

      return obj1.every((val, i) => compareDeep(val, obj2[i]));
    }

    const keys1 = Object.keys(obj1);
    if (keys1.length !== Object.keys(obj2).length) return false;

    return keys1.every(
      (key) => obj2.hasOwnProperty(key) && compareDeep(obj1[key], obj2[key])
    );
  }

  return obj1 === obj2;
};

const firstObject = {
  name: "Harry Potter",
  age: 12,
  address: {
    details: ["4", "Privet Drive"],
    area: "Little Whinging",
    city: "Surrey",
    state: "England",
  },
};

const secondObject = {
  name: "Harry Potter",
  age: 12,
  address: {
    details: ["4", "Privet Drive"],
    area: "Little Whinging",
    city: "Surrey",
    state: "England",
  },
};

compareDeep(firstObject, secondObject);
// OUTPUT:
// true

// Write a recursive function to create a deep clone of a nested object
const deepClone = (obj) => {
  switch (typeof obj) {
    case "object":
      if (Array.isArray(obj)) {
        return obj.map((element) => deepClone(element));
      } else {
        const clonedObj = {};
        const keys = Object.keys(obj);
        for (let i = 0; i < keys.length; i++) {
          clonedObj[keys[i]] = deepClone(obj[keys[i]]);
        }
        return clonedObj;
      }
    default:
      return obj;
  }
};

const originalObj = {
  name: "Harry Potter",
  age: 12,
  address: {
    details: ["4", "Privet Drive"],
    area: "Little Whinging",
    city: "Surrey",
    state: "England",
  },
};

deepClone(originalObj);
// OUTPUT:
// {
//   name: "Harry Potter",
//   age: 12,
//   address: {
//     details: ["4", "Privet Drive"],
//     area: "Little Whinging",
//     city: "Surrey",
//     state: "England",
//   },
// };

// Write a function that returns a nested key within an object:
const obj = {
  name: "Harry Potter",
  age: 12,
  address: {
    details: ["4", "Privet Drive"],
    area: "Little Whinging",
    city: "Surrey",
    state: "England",
  },
};

const getNestedKey = (obj, key) => {
  const nestedKeys = key.split(".");
  let result = obj;
  for (let i = 0; i < nestedKeys.length; i++) {
    result = result?.[nestedKeys[i]];
  }
  return result ?? obj[key];
};

getNestedKey(obj, "address.details.1");
// OUTPUT
// "Privet Drive
