// Write a function mapBy to convert an array of objects into an object mapped by the specified key:

// Example:
let users = [
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
];

const mapBy = (obj, key) => {
  return obj.reduce((obj, value) => ({ ...obj, [value[key]]: value }), {});
};

mapBy(users, "first_name");

// OUTPUT:
// {
//   "Nicki" :{
//     id: 1,
//     first_name: "Nicki",
//     email: "ncrozier0@squarespace.com",
//     date_of_birth: "2009/05/09",
//   },
//   "Raychel": {
//     id: 2,
//     first_name: "Raychel",
//     email: "rmcgrady1@cpanel.net",
//     date_of_birth: "1996/11/05",
//   },
// };

// Write a function groupBy to convert an array of objects into groups based on the specified key:

let users1 = [
  {
    id: 1,
    first_name: "Nicki",
    email: "ncrozier0@squarespace.com",
    date_of_birth: "2009/05/09",
    gender: "Male",
  },
  {
    id: 2,
    first_name: "Raychel",
    email: "rmcgrady1@cpanel.net",
    date_of_birth: "1996/11/05",
    gender: "Female",
  },
  {
    id: 3,
    first_name: "Demetris",
    email: "dkilshall2@elpais.com",
    date_of_birth: "2018/12/31",
    gender: "Male",
  },
  {
    id: 4,
    first_name: "Amata",
    email: "abraiden3@canalblog.com",
    date_of_birth: "2012/05/23",
    gender: "Female",
  },
];

const groupBy = (obj, key) => {
  return obj.reduce((output, value) => {
    const property = value[key];
    if (!output[property]) output[property] = [];

    output[property].push(value);
    return output;
  }, {});
};

groupBy(users1, "gender");

// OUTPUT:
// Female: [
//   {
//     id: 2,
//     first_name: "Raychel",
//     email: "rmcgrady1@cpanel.net",
//     date_of_birth: "1996/11/05",
//     gender: "Female",
//   },
//   {
//     id: 4,
//     first_name: "Amata",
//     email: "abraiden3@canalblog.com",
//     date_of_birth: "2012/05/23",
//     gender: "Female",
//   },
// ];
// Male: [
//   {
//     id: 1,
//     first_name: "Nicki",
//     email: "ncrozier0@squarespace.com",
//     date_of_birth: "2009/05/09",
//     gender: "Male",
//   },
//   {
//     id: 3,
//     first_name: "Demetris",
//     email: "dkilshall2@elpais.com",
//     date_of_birth: "2018/12/31",
//     gender: "Male",
//   },
// ];

// Write a function that sorts an array of objects by the key that is passed in the second argument,
//  and in the order passed as the 3rd argiment.
// Example:
let users2 = [
  {
    id: 1,
    first_name: "Nicki",
    email: "ncrozier0@squarespace.com",
    date_of_birth: "2009/05/09",
    gender: "Male",
  },
  {
    id: 2,
    first_name: "Raychel",
    email: "rmcgrady1@cpanel.net",
    date_of_birth: "1996/11/05",
    gender: "Female",
  },
  {
    id: 3,
    first_name: "Demetris",
    email: "dkilshall2@elpais.com",
    date_of_birth: "2018/12/31",
    gender: "Male",
  },
  {
    id: 4,
    first_name: "Amata",
    email: "abraiden3@canalblog.com",
    date_of_birth: "2012/05/23",
    gender: "Female",
  },
];

// ANSWER:
const sort = (obj, key = "id", order = "asc") => {
  switch (key) {
    case "id":
      obj.sort((firstObj, secondObj) => firstObj[key] - secondObj[key]);
      break;
    case ("first_name", "email", "gender"):
      obj.sort((firstObj, secondObj) =>
        firstObj[key].toLocaleCompare(secondObj[key])
      );
      break;
    case "date_of_birth":
      obj.sort(
        (firstObj, secondObj) =>
          new Date(firstObj["date_of_birth"]) -
          new Date(secondObj["date_of_birth"])
      );
      break;
    default:
      obj.sort((firstObj, secondObj) => firstObj[key] - secondObj[key]);
      break;
  }
  if (order === "asc") obj.reverse();

  return obj;
};

sort(users2, "id", "desc"); //Should return users sorted by id in descending order

// OUTPUT:
// [
//   {
//     id: 4,
//     first_name: "Amata",
//     email: "abraiden3@canalblog.com",
//     date_of_birth: "2012/05/23",
//     gender: "Female",
//   },
//   {
//     id: 3,
//     first_name: "Demetris",
//     email: "dkilshall2@elpais.com",
//     date_of_birth: "2018/12/31",
//     gender: "Male",
//   },
//   {
//     id: 2,
//     first_name: "Raychel",
//     email: "rmcgrady1@cpanel.net",
//     date_of_birth: "1996/11/05",
//     gender: "Female",
//   },
//   {
//     id: 1,
//     first_name: "Nicki",
//     email: "ncrozier0@squarespace.com",
//     date_of_birth: "2009/05/09",
//     gender: "Male",
//   },
// ];

// Given 2 arrays with related objects, return a new array where objects having the same id from each of the arrays are merged.
//  Try to achieve it with a complexity - O(n).
// Example:

let userNames = [
  {
    id: 1,
    first_name: "Nicki",
  },
  {
    id: 2,
    first_name: "Raychel",
  },
  {
    id: 3,
    first_name: "Demetris",
  },
  {
    id: 4,
    first_name: "Amata",
  },
];

let userEmails = [
  {
    id: 2,
    email: "rmcgrady1@cpanel.net",
  },
  {
    id: 1,
    email: "ncrozier0@squarespace.com",
  },
  {
    id: 4,
    email: "abraiden3@canalblog.com",
  },
  {
    id: 3,
    email: "dkilshall2@elpais.com",
  },
];

mergeById(userNames, userEmails);

const mergeById = (arr1, arr2, key) => {
  const mergeArray = [...arr1, ...arr2];
  const mergeByIdArray = mergeArray.reduce((output, value) => {
    const property = value[key];
    console.log(output, value, property);
    if (!output[property]) output[property] = [];

    output[property] = { ...output[property], ...value };
    return output;
  }, {});

  return Object.values(mergeByIdArray);
};

// OUTPUT:
// [
//   {
//     id: 1,
//     first_name: "Nicki",
//     email: "ncrozier0@squarespace.com",
//   },
//   {
//     id: 2,
//     first_name: "Raychel",
//     email: "rmcgrady1@cpanel.net",
//   },
//   {
//     id: 3,
//     first_name: "Demetris",
//     email: "dkilshall2@elpais.com",
//   },
//   {
//     id: 4,
//     first_name: "Amata",
//     email: "abraiden3@canalblog.com",
//   },
// ];

// ● Write a function to filter an array of strings to hold only unique values
const dupValueArray = [1, 2, 3, 4, 1, 2, 1, 2, 3, 4];

const filterDuplicate = (obj) => {
  return obj.filter((value, index) => obj.indexOf(value) === index);
};

filterDuplicate(dupValueArray);

// OUTPUT:
// [1, 2, 3, 4]
