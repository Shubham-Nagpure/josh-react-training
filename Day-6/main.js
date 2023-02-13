const dataSet = [
  {
    id: 1,
    first_name: "Nicki",
    email: "ncrozier0@squarespace.com",
    date_of_birth: "2009/05/09",
  },
  {
    id: 2,
    first_name: "Raychel",
    email: "rmcgrady1@cpanel.net",
    date_of_birth: "1996/11/05",
  },
  {
    id: 3,
    first_name: "Demetris",
    email: "dkilshall2@elpais.com",
    date_of_birth: "2018/12/31",
  },
  {
    id: 4,
    first_name: "Amata",
    email: "abraiden3@canalblog.com",
    date_of_birth: "2012/05/23",
  },
  {
    id: 5,
    first_name: "Venita",
    email: "vheap4@clickbank.net",
    date_of_birth: "2020/10/04",
  },
  {
    id: 6,
    first_name: "Fairfax",
    email: "fcrichton5@merriam-webster.com",
    date_of_birth: "2009/12/23",
  },
  {
    id: 7,
    first_name: "Kathleen",
    email: "kvasyukhnov6@devhub.com",
    date_of_birth: "2010/12/20",
  },
  {
    id: 8,
    first_name: "Sam",
    email: "scorck7@sitemeter.com",
    date_of_birth: "2020/08/30",
  },
  {
    id: 9,
    first_name: "Virgilio",
    email: "vferandez8@e-recht24.de",
    date_of_birth: "2000/09/07",
  },
  {
    id: 10,
    first_name: "Townie",
    email: "tpetyt9@upenn.edu",
    date_of_birth: "2018/09/01",
  },
];

// 1. Take the above array of objects. Accomplish the following tasks:

// Write a function filterByName that accepts a string as a parameter
// and returns an array with only those objects where the first_name field includes that string.
// ANSWER:

const filterByName = (query) => {
  return dataSet.filter((obj) => obj.first_name.includes(query));
};
filterByName("Nicki");
// OUTPUT:
// [
//   {
//     id: 1,
//     first_name: "Nicki",
//     email: "ncrozier0@squarespace.com",
//     date_of_birth: "2009/05/09",
//   }
// ]

// Use Array.map to return an array of all the email fields.
const filterByEmail = () => {
  return dataSet.map((obj) => obj.email);
};
filterByEmail();
// OUTPUT:
// [
//   "ncrozier0@squarespace.com",
//   "rmcgrady1@cpanel.net",
//   "dkilshall2@elpais.com",
//   "abraiden3@canalblog.com",
//   "vheap4@clickbank.net",
//   "fcrichton5@merriam-webster.com",
//   "kvasyukhnov6@devhub.com",
//   "scorck7@sitemeter.com",
//   "vferandez8@e-recht24.de",
//   "tpetyt9@upenn.edu",
// ]

// Use Array.sort to return the array sorted in descending order by date_of_birth.
const filterByDob = () => {
  return dataSet.sort(
    (obj1, obj2) =>
      new Date(obj1["date_of_birth"]) - new Date(obj2["date_of_birth"])
  );
};
// OUTPUT:
// [
// {id: 2, "first_name": 'Raychel', "email": 'rmcgrady1@cpanel.net', "date_of_birth": '1996/11/05'},
// {id: 9, "first_name": 'Virgilio', "email": 'vferandez8@e-recht24.de', "date_of_birth": '2000/09/07'},
// {id: 1, "first_name": 'Nicki', "email": 'ncrozier0@squarespace.com', "date_of_birth": '2009/05/09'},
// {id: 6, "first_name": 'Fairfax', "email": 'fcrichton5@merriam-webster.com', "date_of_birth": '2009/12/23'},
// {id: 7, "first_name": 'Kathleen', "email": 'kvasyukhnov6@devhub.com', "date_of_birth": '2010/12/20'},
// {id: 4, "first_name": 'Amata', "email": 'abraiden3@canalblog.com', "date_of_birth": '2012/05/23'},
// {id: 10, "first_name": 'Townie', "email": 'tpetyt9@upenn.edu', "date_of_birth": '2018/09/01'},
// {id: 3, "first_name": 'Demetris', "email": 'dkilshall2@elpais.com', "date_of_birth": '2018/12/31'},
// {id: 8, "first_name": 'Sam', "email": 'scorck7@sitemeter.com', "date_of_birth": '2020/08/30'},
// {id: 5, "first_name": 'Venita', "email": 'vheap4@clickbank.net', "date_of_birth": '2020/10/04'},
// ]

// Write a function getById that accepts a number as a parameter
// and returns the object where the id is equal to that number.
const filterById = (query) => {
  return dataSet.find((obj) => obj.id === query);
};
filterById(2);
// OUTPUT:
// {
//   id: 2,
//   first_name: "Raychel",
//   email: "rmcgrady1@cpanel.net",
//   date_of_birth: "1996/11/05",
// }

// 2. What makes a method mutating or non mutating in Javascript?
// ANSWER: If the state of object is changing or affecting then that method is mutating method.

// Find out whether each of the following methods are mutating or non-mutating. How can you verify this?:
const globalArray = [1, 2, 5, 4, 6];

const isMutable = (copiedArray) => {
  return JSON.stringify(globalArray) === JSON.stringify(copiedArray);
};

// push
const isPushMutable = (copiedArray) => {
  console.log("Push is mutable: ", !isMutable(copiedArray.push(8)));
};
isPushMutable([...globalArray]);
// OUTPUT: Push is mutable:  true

// pop
const isPopMutable = (copiedArray) => {
  console.log("Pop is mutable: ", !isMutable(copiedArray.pop()));
};
isPopMutable([...globalArray]);
// OUTPUT: Pop is mutable:  true

// filter
const isFilterMutable = (copiedArray) => {
  copiedArray.filter((element) => element > 3);
  console.log("Filter is mutable: ", !isMutable(copiedArray));
};
isFilterMutable([...globalArray]);
// OUTPUT: Filter is mutable:  false

// find
const isFindMutable = (copiedArray) => {
  copiedArray.find((element) => element > 3);
  console.log("Find is mutable: ", !isMutable(copiedArray));
};
isFindMutable([...globalArray]);
// OUTPUT: Find is mutable:  false

// sort
const isSortMutable = (copiedArray) => {
  copiedArray.sort((value1, value2) => value1 - value2);
  console.log("Sort is mutable: ", !isMutable(copiedArray));
};
isSortMutable([...globalArray]);
// OUTPUT: Sort is mutable:  true

// map
const isMapMutable = (copiedArray) => {
  copiedArray.map((element) => element * 2);
  console.log("Map is mutable: ", !isMutable(copiedArray));
};
isMapMutable([...globalArray]);
// OUTPUT: Map is mutable:  false
