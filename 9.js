//HOISTING
// 9//CODE RUN --> EXECUTION CONTEXT
//1: memory allocation
//2: execution phase 
//global execution phase
//Byte code 
//code space
// console.log(a); //undefined
// var a = 10;
// var b = 20;
// // console.log(a); 

// function addNumber(num1,num2){
//   var sum = num1+num2;
//   return sum;
// }

// var sum1 = addNumber(a,b);
// var sum2 = addNumber(4,5);
// console.log(sum1,sum2);





// var sum2 = addNumber(4,5);

// var a = 10;
// var b = 20;


// function addNumber(num1,num2){
//   var sum = num1+num2;
//   return sum;
// }



// console.log(sum2);


//let const
//Memory allocation
//a=> <ininitialised> (Temporal dead zone)
//b=> <ininitialised> (Temporal dead zone)
//Execution phase
  
// console.log(a);//error
// console.log(b) ;//error
// let a = 10;
// const b = 20;


let a = 10;
const b = 20;
const addNumber= function(num1,num2){
  var sum = num1+num2;
  return sum;
}

const result = addNumber(a,b);
console.log(result);

