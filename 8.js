//FUNCTION

// function greeting(){
//   console.log("Namaste, This is Priyanka");
// }
// greeting();

//why do we make function? reusability factor 
// function addNumber(num1 , num2){ //parameter
//   const sum = num1 +num2;
//   console.log(sum);
// }addNumber();
// // }
// addNumber(2,3); //argument
// addNumber(6,7);
// console.log(greeting);
// console.log(greeting()); //undefined because no return value in the function

// function greeting(){
//   console.log("Namaste, This is Priyanka");
//   return 10;
// }
// greeting();
// console.log(greeting());


// function addNumber(num1 , num2){
//   const sum = num1 +num2;
//   console.log(sum);
// }
// addNumber();//Nan
// addNumber(6,7,8);//Only sum the first two parameters


// function addNumber(num1 , num2, num3){
//   const sum = num1 +num2+num3;
//   console.log(sum);
// }

// addNumber(6,7);//Nan
// addNumber(6,7,8);

// function addNumber(num1 , num2, num3=0, num4=0){
//   const sum = num1 +num2+num3+num4;
//   console.log(sum);
// }

// addNumber(6,7); //13
// addNumber(6,7,8); //21

// addNumber(12,32,45,45,64,64) //add 4 numbers

// //for unknown number of arguments
// //use rest operator //make array 


// function addNumber(...num){
 
  
//   console.log(num);
// }
// addNumber(6,7);
// addNumber(67,565,344);
// addNumber(4,5655,345,35,45,234,23,24,56,34);

// function addNumber(...num){
//   let sum = 0;
//   for (let n of num ){
//     sum+=n;
//   }
  
//   console.log(sum);
// }
// addNumber(6,7);
// addNumber(67,565,344);
// addNumber(4,5655,345,35,45,234,23,24,56,34);



// const arr = [ 10,20,30,40,50];
// const [first,second]= arr; //destructuring of array
// console.log(first,second);

//use rest operator
// const arr = [ 10,20,30,40,50];
// const [first,second, ...num]= arr;
// console.log(first,second,num);

//spread operator //to open the arrays inside the arrays
// const arr = [ 10,20,30,40,50];
// const arr2 = [30,70,90,10];
// const ans=[...arr,...arr2];
// console.log(ans);

//finction:expression
// const addNumber = function(num1,num2){
//   return num1+num2;
// }

// console.log(addNumber); //[Function: addNumber]
// console.log(addNumber(3,4));

//difference between both ways of creating function

// console.log(addNumber(6,7)); //this works ...concept of hosting
// function addNumber(num1,num2){
//   return num1+num2;
// }


// console.log(addNumber(3,4)); //error
// const addNumber = function(num1,num2){
//   return num1+num2;
// }


//arrow function //important 

//function(){}  //()=>{}
// const greeting = () =>{
//   console.log("hello ,guys")
// }
// greeting();

// const addNumber = (num1,num2) =>{
//   return num1+num2;
// }
// console.log(addNumber(5,6));


//if only one value to be returned and only return 
//const addNumber = (num1,num2) =>{return num1+num2};
// const addNumber = (num1,num2) => num1+num2;
// console.log(addNumber(5,6));

// let arr =[10,20,30,40,50];
// arr.sort((a,b)=> a-b);
// console.log(arr); //arrow function in sorting

// const squareNumber = (num) => num*num;
// console.log(squareNumber(8));
//if we have only 1(single parameter) parameter
//const squareNumber = (num) => num*num;
// const squareNumber = num => num*num;
// console.log(squareNumber(8));

// const greeting = () => {
//   let user ={
//     name: "Pri",
//     age:20,
//   }
//   return user;
// }
// console.log(greeting());


// const greeting = () => {
//   return {
//     name: "Pri",
//     age:20,
//   }
  
// }
// console.log(greeting());


//error
// const greeting = () => {name: "Pri",age:20}
// console.log(greeting());

//so use({ })
// const greeting = () => ({name: "Pri",age:20})
// console.log(greeting());

//IIFE - IMMEDIATELY INVOKE FUNCTION
// (function greet(){
//   console.log("Namaste");
// })();

// (() => {
//   console.log("Hi")
// })
// ();

//CALLBACK FUNCTION: FUNCTION PASSESD AS ARGUMENT TO ANOTHER FUNCTION