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
// console.log(userName, userAge);
// // //destructuring of array
// // const arr = [ 10,20,30,40,50]; //want 2 values from starting 
// // const [first,second]= arr;
// // console.log(first,second);


// loop in object
const user = {
name : "Pri",
age: 20,
emailid: "priyanka06kumari0403@gmail.com",
amount : 1100,
"home address":"dhanbad"
}

//for of loop in arrays
for(let keys of Object.keys(user))no   {

}    