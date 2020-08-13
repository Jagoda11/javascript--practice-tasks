/**
 * Complete this function that takes the list of employees as input
 * and return the average salary of them.
 *
 * @param {{name:String, salary:Number}[]} employees
 */
function getAverageSalary(employees) {
  // sum of all numbers with salary:
  const result = employees.reduce(   (accumulative_sum, { salary }) => accumulative_sum + salary,    0     );

  // exactly the same as reduce 
  let sum = 0;
  for (let i = 0; i < employees.length; i++) {
     sum += employees[i].salary;
  }

  // vol.2 : exactly the same as reduce 
  let sum2 = 0;
  for (const employee of employees) {
    sum2 += employee.salary;
  }

  // average
  return result / employees.length;
}

const externalEmployees = [
  {
    name: "John",
    salary: 1100,
  },
  {
    name: "Sarah",
    salary: 1200,
  },
  {
    name: "Mark",
    salary: 1100,
  },
  {
    name: "Diana",
    salary: 1300,
  },
];

const avg = getAverageSalary(externalEmployees);
console.log("The average salary is: ", avg);
