
const newElement = document.createElement("h2");
// console.log("newElement");
// console.log(newElement);
newElement.textContent="How are you all";
newElement.id= "second"


//select element
const element = document.getElementById("first");
// element.after(newElement);
// element.before(newElement);
element.after(newElement);

const newElement2 = document.createElement("h3");
newElement2.textContent="I can do it";
newElement2.id = "third";
// // newElement2.className="PRI";//not best practice to assign class
// newElement2.className="PRI";
// newElement2.className="JAI";
// //now class "PRI" IS NOT  THERE

// newElement2.className="PRI";
// newElement2.className+="JAI";
// newElement2.className="PRI";
// newElement2.className+=" JAI";

//THE ABOVE ARE SO CONFUSING

newElement2.classList.add("Pri");
newElement2.classList.add("JAI");
// newElement2.classList.remove("Pri");

newElement2.style.backgroundColor = "pink";
newElement2.style.fontSize = "30px"
newElement2.setAttribute("Pri", "everyone");


element.before(newElement2);


console.log(newElement2);
console.log(newElement2.getAttribute("id"));
console.log(newElement2.getAttribute("class"));
console.log(newElement2.getAttribute("Pri"));


//to add we used before and after


// const list = document.createElement("li")
// list.textContent="MILK";
// const list2 = document.createElement("li")
// list2.textContent="CAKE";
// const list3 = document.createElement("li")
// list3.textContent="ice";
// const list4 = document.createElement("li")
// list4.textContent="cream";

// const unorderElement = document.getElementById("listing");
// unorderElement.append(list);
// unorderElement.append(list2);
// //we can do it together too
// // unorderElement.append(list,list2);

// unorderElement.prepend(list3);
// //APPEND ADDS IN THE LAST AS CHILDREN
// //prepent adds in the starting

// // to add in between 
// // list.after(list4);

// //another way to add 
// //to have the access by parent
// console.log(unorderElement);
// console.log(unorderElement.children);
// console.log(unorderElement.children[1]);

// unorderElement.children[1].after(list4);



// //in real worldn(data from bbacked in array so we do it like this)
// const arr = ["Milk","ice","cream","Cake"];
// //this array to be displayed in list
// const unorderElement= document.getElementById("listing"); //to select parent
// for (let food of arr){
//   console.log(food);
//   const list =document.createElement("li");
//   list.textContent = food;
//   unorderElement.append(list);
// }
// //the  above method is not optimized it is not good for the ui
//the changes is made in ui as mamy times the number of elements are there is arr //it updates the data in the ui so many times it is such a heavy process

//best way : create all element in list , then send all element to append

//best practice

// const arr = ["Milk","ice","cream","Cake"];

// const unorderElement= document.getElementById("listing"); 
// const fragment = document.createDocumentFragment();
// for (let food of arr){
//   console.log(food);
//   const list =document.createElement("li");
//   list.textContent = food;
//   fragment.append(list);
  
// }
// unorderElement.append(fragment);

//if fragment option is not there then how to create it ?? //do it think it 

// const arr = ["Milk","ice","cream","Cake"];

// const unorderElement= document.getElementById("listing"); 
// const fragment = document.createDocumentFragment();
// //make array
// for (let food of arr){
//   console.log(food);
//   const list =document.createElement("li");
//   list.textContent = food;
//   fragment.append(list);
  
// }
// unorderElement.append(fragment);





const arr = ["Milk","ice","cream","Cake"];

const unorderElement= document.getElementById("listing"); 
const fragment = document.createDocumentFragment();
for (let food of arr){
  console.log(food);
  const list =document.createElement("li");
  list.textContent = food;
  fragment.append(list);
  
}
unorderElement.append(fragment);

//how to delete an element 
const s1 = document.getElementById("first");
s1.remove();


//to select
// document.getElementById("ten");
//store it somewhere 
//to select
//  const month = document.getElementById("ten");
//  console.log(month);
//  console.log(month.children); //modern way
//  console.log(month.childNodes); //text is /n  //old way


//  //create a new list
//  const lister = document.createElement("li");
//  lister.textContent="Help";
//old way to add
// month.insertAdjacentElement("afterbegin",lister)
// month.insertAdjacentElement("beforebegin",lister)
// month.insertAdjacentElement("afterend",lister);
// month.insertAdjacentElement("beforeend",lister);

//.insertBrfore (older (classic and powerful))



 //create a new list

 //to select
document.getElementById("ten");

 const month = document.getElementById("ten");
 const lister = document.createElement("li");
//  lister.textContent="Help";
lister.innerHTML="<h2>Help<h2>"; //danger operation
//data is of user do not add in innerHTML
//seen as html 
//never use innerHTML
//risk of data getting attacked

// lister.textContent= "h2>Help</h2>" //considered as text 
month.prepend(lister);

