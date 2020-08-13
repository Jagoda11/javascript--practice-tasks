/**
 * Complete this function to return the name of the employee with the highest salary
 * @param {{name:String, salary:Number}[]} employees
 */
function getNameOfHighestSalaryEmployee_old(employees) {
  // highest salary :
  const salaries = employees.map((emb) => emb.salary);
  console.log(salaries);
  const maxValueOfSalary = Math.max(...salaries, 0);

  console.log(maxValueOfSalary);

  // find a name
  for (let i = 0; i < employees.length; i++) {
    if (employees[i].salary === maxValueOfSalary) {
      return employees[i].name;
    }
  }

  // same as for loop : find a name
  for (const employee of employees) {
    if (employee.salary === maxValueOfSalary) {
      return employee.name;
    }
  }
}

// the same thing in a different way find a highest number and a name at the same time :-) 
/**
 * Complete this function to return the name of the employee with the highest salary
 * @param {{name:String, salary:Number}[]} employees
 */
function getNameOfHighestSalaryEmployee(employees) {
  let salary = 0;
  let name = "";
  
  for (const employee of employees) {
    if (employee.salary > salary) {
      salary = employee.salary;
      name = employee.name;
    }
  }

  return name;
}

const employees = [
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

const employeeName = getNameOfHighestSalaryEmployee(employees);
console.log("The employee with the highest salary is called: ", employeeName);
