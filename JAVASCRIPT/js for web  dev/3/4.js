//select
// const child1 = document.getElementById("child1");
// child1.addEventListener('click' , ()=> {
//   child1.textContent ="I am clicked"
// })

// const child2 = document.getElementById("child2");
// child2.addEventListener('click' , ()=> {
//   child2.textContent ="I am clicked"
// })

// const child3 = document.getElementById("child3");
// child3.addEventListener('click' , ()=> {
//   child3.textContent ="I am clicked"
// })
// const child4 = document.getElementById("child4");
// child4.addEventListener('click' , ()=> {
//   child4.textContent ="I am clicked"
// })
// const child5 = document.getElementById("child5");
// child5.addEventListener('click' , ()=> {
//   child5.textContent ="I am clicked"
// })

//dont do this manual work

//do it like this

const parent = document.getElementById("parent");
// console.log(parent);
// console.log(parent.children);

for (let child of parent.children){
  child.addEventListener('click',()=>{
    child.textContent = "I am clicked"
  })
}


//this is also not that much optimised so lets got to best method public 
//see in 5.js and 5.html
