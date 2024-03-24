function greetEmployees(emp1, emp2, emp3) {
    return "Welcome to the team: ".concat(emp1, " ").concat(emp2, " ").concat(emp3);
}
// let result = greetEmployees('karan', 'rahul', 'gaurav');
// console.log(result);
// write a function isPalindrome that takes a string as parameter and returns true if it reads the same (forward and backward), false if otherwise
var isPalindrome = function (str) {
    var myPalindrom = str.split('').reverse().join('');
    return myPalindrom === str;
};
// let result = isPalindrome('karan');
// console.log(result);
// create a function called calculateAverage that takes an array of numbers as parameter and returns the average of those numbers 
var calculateAverage = function (arr) {
    var sum = arr.reduce(function (prev, next) { return prev += next; });
    return sum / arr.length;
};
// let result = calculateAverage([4,4,4,4]);
// console.log(result);
// write a function called findMaxValue that takes an array of numbers as parameter and returns the maximum value in that array 
var maxVal;
// const findMaxValue = (arr:number[]):number =>{
//     for(let i = 0; i<arr.length-1; i++){
//         if(arr[i]> arr[i+1]){
//             maxVal = arr[i];
//         } else{
//             maxVal = arr[i+1];
//         }
//     }
//     return maxVal;
// }
var findMaxValue = function (arr) {
    return arr.reduce(function (prev, next) { return prev > next ? maxVal = prev : maxVal = next; });
};
var result = findMaxValue([2, 44, 22, 0, 98, 100]);
console.log(result);
// defualt parameters
// const greet = (name:string, id:number=1):string =>{   //here id is given value of 1 as a default parameter value
//     return `welcome to the team ${name} whose id is ${id}`
// }
// let result = greet('karan');
// console.log(result);
// optional paramters
var greet = function (name, id) {
    if (id) {
        return "welcome to the team ".concat(name, " whose id is ").concat(id);
    }
    else {
        return "welcome to the team ".concat(name);
    }
};
// let result = greet('karan',3);
// console.log(result);
