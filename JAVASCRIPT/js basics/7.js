//OBJECTS
//in key-value pair
// const user = {
// name : "Pri",
// age: 20,
// emailid: "priyanka06kumari0403@gmail.com",
// amount : 1100
// }

// console.log(user);
// console.log(typepof user);

//CRUD OPERATION: CREATE,READ,UPDATE,DELETE
// console.log(user.age);

//insert
// user.aadhar = 1234;
// console.log(user);

//update
// user.amount = 1105;
// console.log(user);

//delete
// delete user.emailid;
// console.log(user);

// const user = {
// name : "Pri",
// age: 20,
// emailid: "priyanka06kumari0403@gmail.com",
// amount : 1100,
// "home address":"dhanbad"
// }
// console.log(user["name"]);
// console.log(user.age);
// console.log(user["home address"]);


// const user = {
// name : "Pri",
// age: 20,
// emailid: "priyanka06kumari0403@gmail.com",
// amount : 1100,
// "home address":"dhanbad"
// }

// const user2 = user;
// user2.age = 90; //also changes in user
// console.log(user);
// console.log(user2);



// const user = {
// name : "Pri",
// age: 20,
// emailid: "priyanka06kumari0403@gmail.com",
// amount : 1100,
// "home address":"dhanbad"
// }

// //Important
// console.log(Object.keys(user));// for keys
// console.log(Object.values(user));//for values
// console.log(Object.entries(user)); // for key values both


// //FOR LOOP
// const user = {
// name : "Pri",
// age: 20,
// emailid: "priyanka06kumari0403@gmail.com",
// amount : 1100,
// "home address":"dhanbad"
// }

// // for (let num in user){
// //   console.log(num)
// // }//keys

// for (let keys in user){
//   console.log(keys, user[keys]);
// }

// //user.keys user["name"] user["age"]


// const user = {
// name : "Pri",
// age: 20,
// emailid: "priyanka06kumari0403@gmail.com",
// amount : 1100,
// "home address":"dhanbad"
// }

// // const name = user.name;
// // const age = user.age;
// // console.log(name,age);
// //shorthand for this
// //destructuring of objects
// const{name, age} = user;
// console.log(name, age);
// const{amount} = user;
// console.log(amount);

// const {name:userName, age:userAge} = user;
// console.log(userName, userAge); //change variable names
// // //destructuring of array
// // const arr = [ 10,20,30,40,50]; //want 2 values from starting 
// // const [first,second]= arr;
// // console.log(first,second);


// // loop in object
// const user = {
// name : "Pri",
// age: 20,
// emailid: "priyanka06kumari0403@gmail.com",
// amount : 1100,
// "home address":"dhanbad"
// }

// // //for of loop in arrays
// // for(let keys of Object.keys(user)) {
// //   console.log(keys);
// // }  

// // for(let values of Object.values(user)){
// //   console.log(values);
// // }
// // for (let entries of Object.entries(user)){
// //   console.log(entries);

// //for destructuring 
// for (let [keys,values] of Object.entries(user)){
//   console.log(keys,values);
// }

// // const key = Object.keys(user);
// // for(let keys of key ) {
// //   console.log(keys);
// // }  

// const value = Object.values(user);
// for(let values of value ){
//   console.log(values);
// }

// const user = {
// name : "Pri",
// age: 20,
// emailid: "priyanka06kumari0403@gmail.com",
// amount : 1100,
// "home address":"dhanbad"
// }

//  greeting :function(){
//   // console.log(`I can do it ${user.name}`);
//   console.log(`I can do it ${this.name}`);
//   return 20;

// } 

//  greeting :function(){
//   // console.log(`I can do it ${user.name}`);
//   console.log(`I can do it ${this.name}`);
//   return 20;

// } 
// }


// const user2 = {
//   name : "Mohan",
//   account:201,
//   greeting :function(){
//   // console.log(`I can do it ${user.name}`);
//   console.log(`I can do it ${this.name}`);
//   return 20;

// } 
// }


// user2.greeting = user.greeting;

// user2.greeting();

// const re =user.greeting();
// console.log(re);



// //nested object
// const user = {
// name : "Pri",
// age: 20,
// emailid: "priyanka06kumari0403@gmail.com",
// amount : 1100,
// address:{
//   city:"dhanbad",
//   state:"Jharkhand"
// }
// }
// // console.log(user);
// // console.log(user.address.city)
// const user2 = {...user}; //spread operator //diff copy of user2 independent 
// user2.name= "Ria";
// console.log(user);
// console.log(user2);


// const user = {
// name : "Pri",
// age: 20,
// emailid: "priyanka06kumari0403@gmail.com",
// amount : 1100,
// address:{
//   city:"dhanbad",
//   state:"Jharkhand"
// }
// }

// //shallow copy
// // const user2 = {...user};
// // user2.address.city="Dhaiya";
// // console.log(user);

// //deep copy
// const user2= structuredClone(user);
// user2.address.city= "Dhaiya";
// console.log(user);


// //Limitations of Structured Clone
// //cannot clone functions
// //cannot clone dom elements


// //key can written as number
// const user = {
//   name:"Pri",
//   age: 20,
//   0: 100,
//   2: "Mohan"
// }

// const arr = [10,20,30,40];
// //array stored in form of object
// // {
// //   0:10,
// //   1:20,
// //   2:30,
// //   3: 40;
// // }
// console.log(user);
// // console.log(user.0) //error
// console.log(user[0])
// console.log(user["2"])


//key: strong || symbol

const sym = Symbol("id");
 const user = {
  name:"Pri",
  age: 20,
  0: 100,
  2: "Mohan",

[sym]: "Hello ji"
 }
 
 console.log(user);
