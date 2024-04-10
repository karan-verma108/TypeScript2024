// const logAndReturn = (
//   value: number | string | boolean
// ): number | string | boolean => {
//   return value;
// };

// const numberOutput = logAndReturn(43);
// const stringOutput = logAndReturn("hello typescript generics!");
// const booleanOutput = logAndReturn(true);

// console.log(numberOutput);
// console.log(stringOutput);
// console.log(booleanOutput);

//  now let's do it with generics

// const logAndReturn = <Type>(value: Type): Type => {
//   return value;
// };

// const numberOutput = logAndReturn<number>(43);
// const stringOutput = logAndReturn<string>("hello typescript generics!");
// const booleanOutput = logAndReturn<boolean>(true);

// console.log(numberOutput);
// console.log(stringOutput);
// console.log(booleanOutput);

// excercise

// const add = <Type extends number>(a: Type, b: Type): number => {
//   return a + b;
// };

// const result1 = add<number>(4, 5);

const add = <T, U>(a: T, b: U) => {
  console.log(typeof a);
  console.log(typeof b);
};

add<string, number>("six", 5);
