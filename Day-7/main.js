// 1. How will you create a new copy of the object below while updating 
// the value of address.details[0] to “5“?

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

// ANSWER:
// OPTION 1:
const copiedObj = {
  ...obj,
  address: {
    ...obj.address,
    details: ["5", obj.address.details[1]],
  },
};

// OPTION 2:
const copiedObj1 = Object.assign({}, obj, {
  address: Object.assign({}, obj.address, {
    details: ["5", obj.address.details[1]],
  }),
});

// For nested cloing we need to deep cloning or structured clone, 
// The structuredClone method can clone most data types, such as objects, arrays, primitive values.
const copiedObj2 = structuredClone(obj)
obj.address.details[0] = 5
console.log(copiedObj2)

// OUTPUT: 
// {
//    name: "Harry Potter",
//    age: 12,
//    address: {
//      details: ["5", "Privet Drive"],
//      area: "Little Whinging",
//      city: "Surrey",
//      state: "England",
//    },
// };


// 2. Write a function filterObj that will filter out all the keys of a flat object
// that have objects or arrays using Object.keys and Object.entries. Example:
// filterObject(obj1); //This should return {a:"Apple", d:"Dog"}

let obj1 = {
  a: "Apple",
  b: ["Basketball", "Baseball"],
  c: { call: "cellphone" },
  d: "Dog",
};

const filterObject = (sampleObj) => {
  const filterdObject = Object.entries(sampleObj).filter(([key, value]) => {
    if (!(typeof value === "object" || Array.isArray(value))) {
      return [key, value];
    }
  });

  return Object.fromEntries(filterdObject);
};

filterObject(obj1);
// OUTPUT:
// {a: 'Apple', d: 'Dog'}

console.log(Object.keys(filterObject(obj1)));
// OUTPUT:
// ['a', 'b']
