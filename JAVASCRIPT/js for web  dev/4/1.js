//JS is a single threaded synchronous Language: one at a time in sequence synchronous
//EVENT LOOP

console.log("first")
console.log("second")
console.log("third")

let sum = 0;
for(let i = 0; i <20000000; i++)
  sum+=i;
console.log(sum)
console.log("Last")

//question here why no in synchronous way?? one at a time?? who is counting?? how?? 
// console.log("Hello ji");

// setTimeout(() =>{
//   console.log("Time Out Executed");
// },5000);

// console.log("I am out")




console.log("Hello ji");

setTimeout(() =>{
  console.log("Time Out Executed 1");
},5000)
setTimeout(() =>{
  console.log("Time Out Executed 2");
},6000);


console.log("I am out")

//how is here Javascript counting both the timers if it is single threaded??
//who is handling this??
//here comes the concept of Web API(Application Programming Interface)
//API(Application Programming Interface): it is just a function call //window objectis there is Web API ..in browser console check

let arr = [100,20,50];
arr.push(60);//function call
arr.map(x=> x*10); //function call

function hello(){
  console.log("Hello ji");
}

hello(); //function call


//browser is multithreaded


//Callback Queue
//Event loop

//WEB API -> windows object : let's take : DOM API -> DOM TREE -> Callback fn -> Callback Queue -> Event loop -> call stack here callback -> then it runs

//FETCH
console.log("Start the operation");
fetch("https://api.github.com/users").then(() =>{
  console.log("Git Hub user info");

})
console.log("end of operation")

//  WEB API -> WINDOWS OBJECT -> FETCH ->fetch : link-data ->callbackfn  -> microtask queue-> eventloop -> then executes

//->Microtask queue has more priority than call back queue by event loop
//fetch -> callbackfn -> microtask queue 





