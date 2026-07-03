//ASYNC AWAIT

// function greet(){
//   return "Pri";
// }

// const response = greet();
// console.log(response);



//async function always returns a promise and to get the value from promise we use .then

// async function greet(){
//   return "Pri";
// }

// const response = greet();
// // console.log(response);
// response.then((data)=>console.log(data));


// //another way of promise
// async function greet(){
//   // return "Pri"; //below is is another way of writing it
//   return new Promise((resolve,reject)=>{
//     return ("Pri")
//   })
// }

// const response = greet();

// response.then((data)=>console.log(data));



// //for reject we use .catch for the errors
// async function greet(){
//   // return "Pri"; //below is is another way of writing it
//   return new Promise((resolve,reject)=>{
//     reject ("Pri")
//   })
// }

// const response = greet();

// response.then((data)=>console.log(data))
// .catch((error)=>{
//   console.log("Error: ", error);
// })


//it is an async task(the below format is too complex and it is not fimiliar to us)
// fetch ("https://api.github.com/users")
// .then((response)=>response.json())
// .then((data)=>console.log(data));


//easy format like this but this one give error
// const reponse = fetch ("https://api.github.com/users")
// const data = reponse.json();
// console.log(data);

//use await
const reponse = await fetch ("https://api.github.com/users")
const data = await reponse.json();
console.log(data);
