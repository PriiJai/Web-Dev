// const grandparent = document.getElementById("grandparent");
// grandparent.addEventListener('click',()=>{
//   console.log("Grandparent is clicked")
// })

// const parent = document.getElementById("parent");
// parent.addEventListener('click',()=>{
//   console.log("parent is clicked")
// })

// const child = document.getElementById("child");
// child.addEventListener('click',()=>{
//   console.log("child is clicked")
// })

//when you click child you get 
// child is clicked
//  parent is clicked
//  Grandparent is clicked
//in console of browser
//as they are part of it 
//if click parent then grandparent will also be clicked


//this is bublling process




//to change the ordering 

//by default it is false

// const grandparent = document.getElementById("grandparent");
// grandparent.addEventListener('click',()=>{
//   console.log("Grandparent is clicked")
// },true)

// const parent = document.getElementById("parent");
// parent.addEventListener('click',()=>{
//   console.log("parent is clicked")
// },true)

// const child = document.getElementById("child");
// child.addEventListener('click',()=>{
//   console.log("child is clicked")
// },true)

//output //reverse order
// Grandparent is clicked
//  parent is clicked
//  child is clicked


// window -> document -> html -> head and body -- body-> granparent ->parent -> child

//3 phase

//capture phase: from top to target

//target phase:  child is the tagret , target till where we click
//false

//bublling phase: then buble phase child check if event listener there then go to top and keep checking and that goes and keeps executing from target to top

//true and false
//capture phase is on or off
//true then it starts executing from capture phase till target

//if true in capture phase it executes
//if false in capture phase it does not executes


//by default it is false  , we dont write 



//when we apply eventlistener it give object of eventlistener
//in event object too many information is there 
// .addEventListener('click',(e)=>{
//   console.log(e);
//this e is the event obejct

// const grandparent = document.getElementById("grandparent");
// grandparent.addEventListener('click',(e)=>{
//   console.log(e);
//   console.log("Grandparent is clicked")
// })

// const parent = document.getElementById("parent");
// parent.addEventListener('click',()=>{
//   console.log("parent is clicked")
// })
// const child = document.getElementById("child");
// child.addEventListener('click',()=>{
//   console.log("child is clicked")
// })


// //we can apply e : event obejct to any 
// //e.stopPropagation : for no bublling
// const grandparent = document.getElementById("grandparent");
// grandparent.addEventListener('click',(e)=>{
//   console.log(e);
//   console.log("Grandparent is clicked")
// })

// const parent = document.getElementById("parent");
// parent.addEventListener('click',(e)=>{
//    console.log(e);
//   console.log("parent is clicked")
// })
// const child = document.getElementById("child");
// child.addEventListener('click',(e)=>{
//    console.log(e);
//    e.stopPropagation(); //no bublling
//   console.log("child is clicked")
// })



//e.target: to find which element has triggered this event

// const grandparent = document.getElementById("grandparent");
// grandparent.addEventListener('click',(e)=>{
//   console.log(e.target);
  
// })

// const parent = document.getElementById("parent");
// parent.addEventListener('click',(e)=>{
  
// })
// const child = document.getElementById("child");
// child.addEventListener('click',(e)=>{
 
// })


//see which element triggered that event: e.target : pints single element
const grandparent = document.getElementById("grandparent");
grandparent.addEventListener('click',(e)=>{
  console.log(e.target);
  
})