//primitive data type(7)
//number,string,boolean,undefined,null,bigint ,symbol

//number 

let a = 20;
let b = 2.36;
console.log(a, b);
console.log(typeof a)
console.log(typeof b)


//string 

let c = "Pri";
let d =' Pri you can do it';
console.log(c,d);
console.log(typeof d)


//boolean
let login = true;
let f = false;
console.log(login , f);
console.log(typeof f)


//undefined(if any variable is declared but no value is assigned so the default value is undefined)
let user;
console.log(user);
console.log(typeof user)

// cont p;
// console.log(p);// errror assign value when declared


//bigint
let n = 1230443333434533532n;
console.log(n);
console.log(typeof n)


//null( we dont want to put anything in the variable no value but why not undefined(unintentional by the user but asigned by the program)?? because it is intentional by the user  )

let weather1= null;
console.log(weather1)
console.log(typeof weather1);

// let weather = current-weather("Dwarka")
// //25
// //null
// //undefined 

//symbol(used for creating unique things)
const id1 = Symbol("id");
const id2 = Symbol("id");
console.log(id1 , id2);
console.log(id1 ==id2); //false
console.log(typeof symbol)


//non primitive data type
// array, object ,function 


//arr
let arr= [10,20,11,"Rohit", true]
console.log(arr);
console.log(typeof arr)


//object

// Rohit 12312 18 gen
let obj={
  name: "Rohit",
  account:12312,
  age: 19,
  category:'gen'
}

//function

function add(){
  console.log("Hello")
}

add();

//functuon can be stored in variablle

let s = function add(){
  console.log("Hello")
}

console.log(s);

console.log(s());

console.log(typeof s)



//PriMITIVE DATA TYPE IS Immutable

let h= 20;
h = 20;

console.log(h)


// let str ="Pri";
// str[0]='M';
// console.log(str)
//ERROR



let str1 ="Pri";
str1="Mohan";
console.log(str1);


//NON Primitive data type mutable


let arr1 = [10,20,30,40];
arr1[0]=70;
arr1.push(90);
console.log(arr1);

let obj1 = {
  name:"Mohan",
  age:20
}

console.log(obj1);

console.log(obj1.name);

obj1.name ="Rohan";
console.log(obj1);

console.log(obj1.name);



//immutable (in space where it stores the valye in the address one formed cannot be changed)
let i = 10;
let j = i;

j = 20;




console.log(i,j);



//object
//refers to same data 
//obj2 and obj3 refer to same data

let obj2 = {
  name:"Mohan",
  age:20
}

let obj3 = obj2;
obj3.name="Rohan"
console.log(obj2)




