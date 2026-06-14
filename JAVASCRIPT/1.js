//primitive data type(7)
//number,string,boolean,undefined,null,bigint ,symbol

//number 

let a = 20;
let b = 2.36;
console.log(a, b);

//string 

let c = "Pri";
let d =' Pri you can do it';
console.log(c,d);


//boolean
let login = true;
let f = false;
console.log(login , f);


//undefined(if any variable is declared but no value is assigned so the default value is undefined)
let user;
console.log(user);

// cont p;
// console.log(p);// errror assign value when declared


//bigint
let n = 1230443333434533532n;
console.log(n);


//null( we dont want to put anything in the variable no value but why not undefined(unintentional by the user but asigned by the program)?? because it is intentional by the user  )

let weather1= null;
console.log(weather1)

// let weather = current-weather("Dwarka")
// //25
// //null
// //undefined 

//symbol(used for creating unique things)
const id1 = Symbol("id");
const id2 = Symbol("id");
console.log(id1 , id2);
console.log(id1 ==id2); //false


//non primitive data type
// array, object ,function 


//arr
let arr= [10,20,11,"Rohit", true]
console.log(arr);


//object

// Rohit 12312 18 gen
let obj={
  name: "Rohit",
  
}

