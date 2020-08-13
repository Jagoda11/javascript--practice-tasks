/**
 * - Create an array of employees.
 * - Each employee should be an object with 3 properties: name, salary and info
 * - name should be a string
 * - salary should be a number
 * - info should be an object that contains 2 properties: address and telephone number
 */

const employees = [
  {
    name: "Pinky",
    salary: 5,
    info: {
      address: "Harvard",
      telephone: 123,
      contacts : [{
        name : "Brains",
      }],
    },
  },
  {
    name: "Brains",
    salary: 55,
    info: {
      address: "Harvard",
      telephone: 123,
      contacts : [{
        name: "Pinky",
      }]
    },
  },
  {
    name: "Peter Griffin",
    salary: 55,
    info: {
      address: "we don't know",
      telephone: 123,
    },
  },
  {
    name: "Family Guy",
    salary: 55,
    info: {
      address: "USA",
      telephone: 123,
    },
  },
];

console.log(employees[1].info.contacts[0].name);

employees[1].info.contacts.push({name : "Peter"});
console.log(employees[1].info.contacts[1].name);

console.table(employees); 