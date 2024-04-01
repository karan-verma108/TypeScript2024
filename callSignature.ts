type Student = {
  name: string;
  age: number;
  gender?: string;
  greet:(country:string) => string;         //call signature
};

const student1: Student = {
  name: "karan",
  age: 25,
  greet:(country): string => `Hello, my name is ${student1.name} and i'm ${student1.age} years old and i'm from ${country}`
};

const student2: Student = {
  name: "roy",
  age: 26,
  greet:(country): string => `Hello, my name is ${student1.name} and i'm ${student1.age} years old and i'm from ${country}`
};

// const intro = (student1: Student) => {
//   const { name, age } = student1;
//   console.log(`Hello, my name is ${name} and i'm ${age} years old`);
// };

// intro(student1);
console.log(student1.greet('India'));
console.log(student2.greet('Nepal'));
