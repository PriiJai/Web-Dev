// console.log(window);



//both give error when we run it in the terminal (in our node js environment)
// document.getElementById("first") ;
 
// console.log(window);

//it wont work in the terminal


//the node js environment does not know about window object 
//window object is a global object not a part of java script 
//window object is created by browser 
//they are web api's through which we can enable a lot of featurs

//but in this node js environment we do have global object

// console.log(global);

//all these have a global name that is golbalThis

// console.log(globalThis); //runs in both browser and the node js terminal

// LEARN about this keyword
// console.log(this); //it points out to an empty result(empty object) in the node js enovironment
// //but in windows/in the browser it points to the global object that is window

// // let's check with strict
// 'use strict'
// console.log(this); // same as before


// //Function

// const user = {
//   name:"Pri",
//   age:30,
//   greet: function(){
//     // console.log(this);
//     // console.log(`Hi ${this.name}`);
//       //  console.log(user.name); //but we dont write it like this//do not hard code
//       console.log(this.name);
    
//   }
// }

// //this == user

// const user1 = {
//   name:"Jai",
//   age:20
// }
// user.greet();
// user1.greet = user.greet;

// user1.greet();


//we dont write greet for each user everytime so follow the below method //in js we do not repeat yourself

// function greet(){
//   console.log(`hi ${this.name}`);
// }
// const user = {
//   name:"Pri",
//   age:30,

// }

// const user2  = {
//   name:"Jai",
//   age:20
// }


// function greet(){
//   console.log(this);}
//   greet();

// 'use strict'
// function greet(){
//   console.log(this);
// }
// greet();

//undefined output


//normal function: in strict mode,this will point to global object
//in strict mode: it will point to undefined



// function greet(){
//   console.log(`hi ${this.name}`);
// }
// const user = {
//   name:"Pri",
//   age:30,

// }

// const user2  = {
//   name:"Jai",
//   age:20
// }

// greet(); //hi undefined 

//with 'use strict ' we get error(as in strict mode this is undefined)   




// function greet(){
//   console.log(`hi ${this.name}`);
// }

// function incrementAge(value,name){
//   this.age += value;
//   this.name = name;
//   console.log(this.age);
//   console.log(this.name);

// }
// const user = {
//   name:"Pri",
//   age:30,

// }

// const user2  = {
//   name:"Jai",
//   age:20
// }

// greet.call(user);

// greet.call(user2);

// //with this call i have made it resuable 
// // incrementAge.call(user);
// // incrementAge.call(user,5);
// // incrementAge.call(user2,5,"KAR");
// // incrementAge.apply(user2,[5,"KAR"]); //apply method same output
// const incr = incrementAge.bind(user2,5,"KAR"); //bind method same output
// console.log(incr);

// incr();


//Class

// class Person{
//   constructor(name,age){
//     this.name = name;
//     this.age = age;

//   }
// }

// // if created with new keyword -> this = {} //empty object 
// //this = {name:"Pri", age:20}
// const p1 = new Person("Pri",20);
// console.log(p1);



//In class constructor , this will point to newly create empty object


//Arrow function : this does not exist for arrow function

// const greet = ()=> {
//   console.log(this);
// }
// greet(); //output is an empty object 

//why it behaves like this?? becuase it does not has its own this keyword

// const greet = ()=> {
//   console.log(this);
// }

// function meet(){
//   console.log(this);
// }
// greet();
// meet(); //use strict undefined

//arrow function takes this from lexical environment scope

// console.log(this); //{} //empty object output
// const greet = ()=> {
//   console.log(this);
// }


// greet(); //{} //empty object output



// console.log(this);
// const greet = ()=> {
//   console.log(this);
// }


// greet();

//arrow function takes this keyword from it lexical environment (outside)(outside function)


// 'use strict'

                                          // const user ={
                                          //   name: "Pri",
                                          //   greet: function(){

                                          //     function meet(){
                                          //       console.log(this)
                                          //     }
                                          //     meet();
                                          //   }
                                          // }

                                          // user.greet();` //point to global object without scrit mode 
//with strict mode it points to undefined



//use that keyword

// const user ={
//   name: "Pri",
//   greet: function(){
//     const that = this;


//     function meet(){
//       console.log(that)
//     }
//     meet();
//   }
// }

// user.greet();



//that is a jugad but it is a good method
// const stopWatch = {
//   second : 0,
//   start: function(){

//     const that = this;

//     setInterval(function(){
      
//       that.second++;
//       console.log(that.second);
//     },1000)
//   }
// }

// stopWatch.start();


//this problem is solve by callback function

// const stopWatch = {
//   second : 0,
//   start: function(){

//     const that = this;

//     setInterval(()=>{
      
//       that.second++;
//       console.log(this.second);
//     },1000)
//   }
// }

// stopWatch.start();



// console.log(this);
// const user ={
//   name: "Pri",
//   greet: () =>{
// console.log(this);
//   }

// }

// user.greet();


// 'use strict'

// console.log(this);
// const user ={
//   name: "Pri",
//   greet: () =>{
// console.log(this);
//   }

// }

// user.greet();

