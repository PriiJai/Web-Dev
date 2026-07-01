// const parent = document.getElementById("parent");
// // console.log(parent);
// // console.log(parent.children);

// for (let child of parent.children){
//   child.addEventListener('click',()=>{
//     child.textContent = "I am clicked"
//   })
// }

//this applies event listener to all

//we dont have to apply to all

// //e.target is best way instead of manual ways
// const parent = document.getElementById("parent");
// parent.addEventListener('click',(e)=>{
//   // console.log(e.target);
//   e.target.textContent = " I am clicked"
// })

// //to remove the eventlistener

// //not this ..it does not remove 
// parent.removeEventListener('click',(e)=>{
//   // console.log(e.target);
//   e.target.textContent = " I am clicked"
// })


//so the better way to remove

// const parent = document.getElementById("parent");
// function handleClick(e){
//   e.target.textContent = " I am clicked"

// }
// parent.addEventListener('click', handleClick)
// // parent.removeEventListener('click', handleClick)


// const parent = document.getElementById("parent");
// function handleClick(e){
//   e.target.textContent = " I am clicked"

// }
// parent.addEventListener('click', handleClick)
// parent.removeEventListener('click', handleClick)
//if we are writing in the last the removeEventListener then what is the use of this eventListener so we write it in handleClick(e)
//so the eventListener at least work once

const parent = document.getElementById("parent");
function handleClick(e){
  e.target.textContent = " I am clicked"
  parent.removeEventListener('click', handleClick);

}
parent.addEventListener('click', handleClick);

