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



function createCounter(){
  let count = 0;
  function increment (){
  count ++;
   return count;
  }
  return increment;
}

const counter = createCounter();
console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());

//OUTPUT : 1,2,3,4, becuase of closure





 