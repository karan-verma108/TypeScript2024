function greetEmployees(emp1:string,emp2:string,emp3:string):string{
    return `Welcome to the team: ${emp1} ${emp2} ${emp3}`;
}

// let result = greetEmployees('karan', 'rahul', 'gaurav');
// console.log(result);

// write a function isPalindrome that takes a string as parameter and returns true if it reads the same (forward and backward), false if otherwise

const isPalindrome = (str:string):boolean =>{
    let myPalindrom = str.split('').reverse().join('');
    return myPalindrom === str;
}

// let result = isPalindrome('karan');
// console.log(result);

// create a function called calculateAverage that takes an array of numbers as parameter and returns the average of those numbers 

const calculateAverage = (arr: number[]):number =>{
    let sum = arr.reduce((prev,next)=> prev+=next);
    return sum/arr.length;
}

// let result = calculateAverage([4,4,4,4]);
// console.log(result);

// write a function called findMaxValue that takes an array of numbers as parameter and returns the maximum value in that array 

let maxVal:number;
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

const findMaxValue = (arr:number[]):number =>{
  return arr.reduce((prev,next)=> prev>next ? maxVal = prev : maxVal = next);
}

let result = findMaxValue([2,44,22,0,98,100]);
console.log(result);

// defualt parameters

// const greet = (name:string, id:number=1):string =>{   //here id is given value of 1 as a default parameter value
//     return `welcome to the team ${name} whose id is ${id}`
// }

// let result = greet('karan');
// console.log(result);

// optional paramters

const greet = (name:string, id?:number):string =>{   //here id is an optional paramter
    if(id){
        return `welcome to the team ${name} whose id is ${id}`
    } else{
        return `welcome to the team ${name}`;
    }
}

// let result = greet('karan',3);
// console.log(result);