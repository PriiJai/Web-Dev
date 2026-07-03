// //PROMISES


// console.log("Hello World Starts");

// //code
// //https://api.github.com/users

// const p1 =
// fetch("https://api.github.com/users") //this fetching is synchronous or asynchronous?? asynchronous

// console.log(p1);


// console.log("Hello World Starts");

// // Output:
// // Hello World Starts
// // Promise { <pending> }
// // Hello World Starts


// //what is "Promise { <pending> }" ??


// // Client -> p1= pending  -------- Github server -> either fullfiled -> or Reject (why?  Github server error , github working slow, api request hit (api limit reached))
// //pending : we dont read at this time 
// //we read when fullfiled or rejected 


// //Promise: 
// // OBJECT : ->1) Pending
// //          ->2) fullfilled
// //          ->3)Reject
 
// ///fullfilled , reject

// // p1.then((response)=>{
// //   console.log(response);
// // })
// //data we get here in byte 
// //we have to convert it into js object to read 


// // p1.then((response)=>{
// //   console.log(response.json()); //this is also asynchronous 
// // })


// //better way

// // const p2 = p1.then((response)=>{
// //  return response.jason
// // })

// // console.log(p2);

// //to read it const p2 = p1.then((response)=>{

//   const p2 = p1.then((response)=>{
//     return response.json();
// })

// p2.then((response)=>{
//   console.log(response)
// })






fetch("https://api.github.com/users")
.then((response)=>{
  return response.json();
})

.then((data)=>{
  console.log(data);
})



