var student1 = {
    name: "karan",
    age: 25,
    greet: function (country) { return "Hello, my name is ".concat(student1.name, " and i'm ").concat(student1.age, " years old and i'm from ").concat(country); }
};
var student2 = {
    name: "roy",
    age: 26,
    greet: function (country) { return "Hello, my name is ".concat(student1.name, " and i'm ").concat(student1.age, " years old and i'm from ").concat(country); }
};
// const intro = (student1: Student) => {
//   const { name, age } = student1;
//   console.log(`Hello, my name is ${name} and i'm ${age} years old`);
// };
// intro(student1);
console.log(student1.greet('India'));
console.log(student2.greet('Nepal'));
