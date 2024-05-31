// - Write an SQL query to find the third highest salary from a table named `employees`.
// Your query should be extendable to n number of rows
// | EmployeeId | EmployeeName | Salary |
// | --- | --- | --- |
// | 1 | Sam | 50000 |
// | 2 | Tom | 80000 |
// | 3 | Tom | 60000 |
// | 4 | Sam | 70000 |
// | 5 | Sam | 90000 |
// | 6 | Abby | 90000 |

// query = "select * from employees Orderby Salary DESC limit 1 offset 2"

`Example:
Input:

{
  a: 1,
  b: {
    c: 2,
    d: {
      e: 3
    }
  }
}

Output:

{
  a: 1,
  c: 2,
  e: 3
}
`;

const { isObject } = require("util");
const flattened = (obj) => {
  let newObj = {};
  Object.keys(obj).forEach((key) => {
    if (isObject(obj[key])) {
      newObj = { ...newObj, ...flattened(obj[key]) };
    } else {
      newObj[key] = obj[key];
    }
  });
  return newObj;
};

// driver code
const flattenedObj = flattened({
  a: 1,
  b: {
    c: 2,
    d: {
      e: 3,
    },
  },
});

console.log(flattenedObj);
