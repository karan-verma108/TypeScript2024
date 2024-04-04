// const checkValue = (value: string | number): string => {
//   let result =
//     typeof value === "string"
//       ? `The value ${value} is made upper case as -> ${value.toUpperCase()}`
//       : `The ${value} is doubled to -> ${value * 2}`;
//   return result;
// };

// // console.log(checkValue(5));
// // console.log(checkValue("hey guys!"));

// const checkInput = (value: number | string | boolean): string => {
//   if (typeof value === "number") {
//     return `${value}$`;
//   } else if (typeof value === "boolean") {
//     return value ? "yes" : "no";
//   } else if (typeof value === "string") {
//     return `${value[0].toUpperCase()}${value.slice(1, value.length)}`;
//   } else {
//     return `invalid input`;
//   }
// };

// console.log(checkInput(4));
// console.log(checkInput("hello"));
// console.log(checkInput(true));

type Person = {
  name: string;
  age: number;
};

type Employee = {
  employeeId: number;
  department: string;
};

// const EmployeeDetails: Person | Employee = {        //union
//   name: "nanu",
//   age: 32,
// };

const EmployeeDetails: Person & Employee = {        //intersection
  name: "nanu",
  age: 32,
  employeeId: 3,
  department: "Software Development",
};
