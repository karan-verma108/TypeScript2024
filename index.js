"use strict";
// let a:number = 5;
Object.defineProperty(exports, "__esModule", { value: true });
// console.log(a);
// const addition = (a:number, b:number):number=>{
//     return a+b;
// }
// let result = addition(4,3);
// console.log(result);
var str = 'welcome to typescript!';
var upperCaseText = str.toUpperCase();
// console.log(`upper case text : ${upperCaseText}`);
var lowerCaseText = upperCaseText.toLocaleLowerCase();
// console.log(`lower case text : ${lowerCaseText}`);
var longText = 'this is supposed to be a long text okay';
var shortText = longText.slice(0, 11);
// console.log(`first 10 characters from ${longText} are : ${shortText}`);
var str1 = 'welcome to typescript';
var str2 = 'welcome to javascript';
var isEqual = (str1 === str2);
// console.log(isEqual);
var product = 'kawasaki';
var price = 1122;
// console.log(`product is ${product} and its price is ${price}`);
// write a function isEven that takes a number as a parameter and returns true if the number is even or false if otherwise
var isEven = function (num) {
    return num % 2 === 0;
};
// let result = isEven(5);
// console.log(result);  //gives false as output
// result ? console.log(`The number is even`) : console.log(`The number is odd`);
// write a function isDivisibleBy4And8 that takes a number as a paramter and returns true if it is or false if otherwise
var isDivisibleBy4And8 = function (num1) {
    return (num1 % 4 === 0 && num1 % 8 === 0);
};
// let result = isDivisibleBy4And8(8);
// console.log(result);
// BigInt 
var bigNumber = Number.MAX_SAFE_INTEGER;
console.log(bigNumber);
// let bigNumber:bigint = 9007199254740991n;
// console.log(bigNumber);
var favLang = 4;
favLang = 'eng';
favLang = true;
if (typeof favLang === 'string') {
    console.log("fav lang is eng");
}
else if (typeof favLang === "boolean") {
    console.log(favLang);
}
