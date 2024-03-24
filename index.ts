// let a:number = 5;

// console.log(a);

// const addition = (a:number, b:number):number=>{
//     return a+b;
// }

// let result = addition(4,3);
// console.log(result);

let str:string = 'welcome to typescript!';
let upperCaseText:string = str.toUpperCase();
// console.log(`upper case text : ${upperCaseText}`);

let lowerCaseText = upperCaseText.toLocaleLowerCase();
// console.log(`lower case text : ${lowerCaseText}`);

let longText:string = 'this is supposed to be a long text okay';
let shortText:string = longText.slice(0,11);
// console.log(`first 10 characters from ${longText} are : ${shortText}`);

let str1:string = 'welcome to typescript';
let str2:string = 'welcome to javascript';

let isEqual:boolean = (str1===str2);
// console.log(isEqual);

let product:string = 'kawasaki';
let price:number = 1122;

// console.log(`product is ${product} and its price is ${price}`);

// write a function isEven that takes a number as a parameter and returns true if the number is even or false if otherwise

const isEven = (num:number):boolean =>{
    return num%2===0;
}

// let result = isEven(5);
// console.log(result);  //gives false as output
// result ? console.log(`The number is even`) : console.log(`The number is odd`);

// write a function isDivisibleBy4And8 that takes a number as a paramter and returns true if it is or false if otherwise

const isDivisibleBy4And8 = (num1:number):boolean =>{
    return (num1%4===0 && num1%8===0);
}

// let result = isDivisibleBy4And8(8);
// console.log(result);

// BigInt 

let bigNumber:bigint = (Number as any).MAX_SAFE_INTEGER;
// console.log(bigNumber);


// let bigNumber:bigint = 9007199254740991n;
// console.log(bigNumber);

let favLang:any = 4;
favLang = 'eng';
favLang = true;

if(typeof favLang === 'string'){
    console.log(`fav lang is eng`); 
} else if(typeof favLang === "boolean"){
    console.log(favLang);
}









export {}