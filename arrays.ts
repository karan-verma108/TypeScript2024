// three ways to define an array in typescript

// 1) using square brackets 

// let names:string[] = ['karan', 'vinita', 'rahul'];
// console.log(names);

// 2) using array constructor 

// let names:string[] = new Array('karan', 'vinita', 'rahul');
// console.log(names);

// 3) using Array.of method 

// console.log(names);


let fruits:string[] = ['mango', 'apple', 'lemon', 'raspberry'];
//1) using for loop
// for(let i=0;i<fruits.length;i++){
//     console.log(fruits[i]);
// }

// 2) using for..of loop
// for(let fruit of fruits){
//     console.log(fruit);
// }

// 3) using forEach method 
// fruits.forEach((currValue)=> console.log(currValue));
fruits.push('guava');
console.log(fruits);
