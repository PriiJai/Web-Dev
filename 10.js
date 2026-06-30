//SCOPE AND CLOSURE , HOF:HIGHER ORDER FUNCTION



// //Global Scope
// let a = 10;
// const b =20;
// console.log(a);

//access in function
// let a = 10;
// const b =20;
// function  greet(){
// console.log(a);
// }
// greet();

// let a = 10;
// const b =20;
// if(true){
//   console.log(a);

// }
// function  greet(){
// console.log(a);
// }
// greet();



// let a = 10;
// const b =20;
// if(true){
//   let d = 30;//block level scope
//   console.log(b);
//   console.log(d);

// }
// //  console.log(d);//error

// function  greet(){

//   let c = 30; //functional scope
// console.log(c);
// }
// // console.log(c);//error
// greet();


///FOR LET AND CONST
//GLOBAL SCOPE: ACCESSIBLE TO ALL
//FUNCTIONAL SCOPE : ACCESSIBLE ONLY TO THAT FUNCTION
//BLOCK LEVEL SCOPE: ACCESSIBLE ONLY TO THAT BLOCK


//FOR VAR: does not respect the block 


// let global = 30;
// function greet(){
//   let global = 40;
//   console.log(global)
// }
// greet(); //40


// let global = 30;
// function greet(){
//   let global = 40;
//   function meet(){
//     console.log(global)
//   }
//   meet();
// }
// greet();

// let global = 30;
// function greet(){
//   // let global = 40;
//   function meet(){
//     console.log(global)
//   }
//   meet();
// }
// greet(); 

// let global = 30;
// function greet(){
//   let global = 40;

//   function meet(){
//     let global = 10;
//     console.log(global)
//   }
//   meet();
// }
// greet(); 

// function createCounter(){
//   function increment (){
//     console.log("i am increment function");
//   }
//   // increment()
//   // return increment;
//   // return increment();
//   return increment;
// }

// const count = createCounter();
// count();


// function createCounter(){
//   let count = 0;
//   function increment (){
//   count ++;
//  return count;
//   }
// console.log(count); //not accessible 
// const counter = createCounter();



// function createCounter(){
//   let count = 0;
//   function increment (){
//   count ++;
//    return count;
//   }
//   return increment;
// }

// const counter = createCounter();
// console.log(counter());
// console.log(counter());
// console.log(counter());
// console.log(counter());

// //OUTPUT : 1,2,3,4, becuase of closure




//closure in bancking system
//  let balance = 500;
// //  balance += "Rohit";
//  balance -=40;
// console.log(balance);

// let user = {
//   balance : 500,
//   deposit:function(amount){
//     // console.log(this);
//     if(typeof amount =="number" && amount >0){
//     this.balance+=amount;
//     return this.balance;
//     }
//   }

// }
// console.log(user.deposit(100));
// console.log(user.deposit("100")); //error
// console.log(user.deposit(1sd00)); //error



// let user = {
//   balance : 500,
//   deposit:function(amount){
//     if(typeof amount =="number" && amount >0){
//     this.balance+=amount;
//     return this.balance;
//     }
//   } ,

// withdraw:function(amount){
//     if(typeof amount =="number" && amount >0 && this.balance>=amount){
//     this.balance+=amount;
//     return this.balance;
//     }
//   },
// getBalance: function(){
//   return this.balance;
// }
// }

// // user.balance="Rohit"; can get access throught his too
// user.balance="Rohit";
// console.log(user.getBalance());

//we get direct acees 
//only get access to method 
//balance : they cant get the direct access of balance

//use private

// function createBankAccount(){
//   let balance  = 500;
//   return{
  
//   deposit:function(amount){
//     if(typeof amount =="number" && amount >0){
//     balance+=amount;
//     return balance;
//     }
//   } ,

// withdraw:function(amount){
//     if(typeof amount =="number" && amount >0 && this.balance>=amount){
//     balance-=amount;
//     return balance;
//     }
//   },
// getBalance: function(){
//   return balance;
// }
// }
 
// }

// const customer = createBankAccount();
// // console.log(customer);
// console.log(customer.withdraw(200));
// // console.log(customer.balance);//error

// //now no direct access


//  HIGHER ORDER FUNCTION
// function double(){
//   function execute(){
//     console.log("hello");
//   }
//   return execute;
// }
// const n = double();
// n();

// function double(){
//   return function execute(){
//     console.log("hello");
//   }
// }
// const n = double();
// n();

function double(value){
  return function execute(num){
    return num*value;
  }

}
const n = double(20);
const n = double(20)(5);
// n();
// console.log(n);
// console.log(n);
console.log(n(5));