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
var logAndReturn = function (value) {
    return value;
};
var numberOutput = logAndReturn(43);
var stringOutput = logAndReturn("hello typescript generics!");
var booleanOutput = logAndReturn(true);
console.log(numberOutput);
console.log(stringOutput);
console.log(booleanOutput);
