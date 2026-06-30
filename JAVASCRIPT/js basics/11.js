//forEach,filter,reduce, map,set


// const arr=[10,20,30,"Pri", 90];
// arr.forEach((number)=> {
//   console.log(number);
// })

// const arr=[10,20,30,5,87, 90];
// arr.forEach((number,index)=> {
//   console.log(number,index);
// })

// const arr=[10,20,30,5,87, 90];
// arr.forEach((number,index,arr)=> {
//   console.log(number,index,arr);
// })




// const arr=[10,20,30,5,87,90];
// let sum = 0;
// arr.forEach((number)=> {
//   sum +=number;

// })
// console.log(sum);


//FILTER
// const arr=[10,20,30,5,87,90];
// //true:select , false: not selected
// const newArr = arr.filter((number)=> number>25) ;
// console.log(newArr);


// const compare = (number)=> number>25;
// compare(20);
// const arr=[10,20,30,5,87,90];
// //this=[10,20,30,5,87,90];
// arr.filtering = function(compare){
//   const ans =[];
// for (let num of this){
//    if (compare(num)){
//     ans.push(num);

//    }
  
// }
// return ans;
// }
// const newArr = arr.filtering((num)=>num>25);
// console.log(newArr);

// //error
// const a = [80,30,15,31,42,70];
// const answer =  a.filtering((num)=>num>25);
// console.log(answer);

//to make if generalised 

// const compare = (number)=> number>25;
// compare(20);
// const arr=[10,20,30,5,87,90];
// //this=[10,20,30,5,87,90];
// Array.prototype.filtering = function(compare){
//   const ans =[];
// for (let num of this){
//    if (compare(num)){
//     ans.push(num);

//    }
  
// }
// return ans;
// }
// const newArr = arr.filtering((num)=>num>25);
// console.log(newArr);

// const a = [80,30,15,31,42,70];
// const answer =  a.filtering((num)=>num>25);
// console.log(answer);


//the above method is not recomended

//mapping
// const arr = [10,20,30,5,90,87];

// const newArr= arr.map((num) => num *2);
// console.log(newArr);

// //fiter
// products.filter((product)=> product.price> 50);
// products.filter((product)=> product.price> 50).sort((a,b)=> b.price - a.price);
// //use map
// products.map((products)=> ({name: product.name, price: product.price}));

// products.filter((product)=> product.price> 50).sort((a,b)=> b.price - a.price).map((products)=> ({name: product.name, price: product.price}));




// //reduce
// //accumulator = sum = 0
// products.reduce((accumulator,currenValue)=>{
//   return accumulator+currenValue.price;
// }, 0)
// //total price



// products.filter((product,index,arr)=> product.price> 50).sort((a,b)=> b.price - a.price).map((products)=> ({name: product.name, price: product.price}));




// //DATA STRUCTURE : SET : UNIQUE VALUE PRESENT
// const arr = [10,20,30,10,25,15,10,20];
// console.log(arr);
// const s1 = new Set(arr);
// // const s1 = new Set();
// s1.add(11);
// console.log(s1);
// console.log(s1.has(20));
// console.log(s1.has(23));
// s1.delete(10);
// console.log(s1);
// console.log(s1.size);
// s1.clear();
// console.log(s1);


//SET USES:
// const email= [ "ro@gm","pm@gm","ro@gm"];
// const s1 = new Set(email)
// console.log(s1);

// const email= [ "ro@gm","pm@gm","ro@gm"];
// const uniqueEmail =[... new Set(email)]; //convert to array 
// console.log(uniqueEmail);

// const email= [ "ro@gm","pm@gm","ro@gm"];
// const s1 = new Set(email)
// for (let num of s1){
//   console.log(num);
// }


//map;
//key can be any data type
// const m1 = new Map([
//   ["Pri", 20],
//   [6,"PRI"],
//   [true,11],
//   [[10,30,11],"JAI"]
// ]);
// console.log(m1);

//to add more values on the set
const m1 = new Map([
  ["Pri", 20],
  [6,"PRI"],
  [true,11],
  [[10,30,11],"JAI"]
]);
m1.set({name:"PRII",age: 20},false);
console.log(m1.has("Pri"));
console.log(m1.get("Pri"));
console.log(m1.size);
//to iterate with for of

for(let [keys,values] of m1){
  console.log(keys,values);
}