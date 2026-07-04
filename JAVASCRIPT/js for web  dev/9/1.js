//THIS ,CALL,APPLY,BLIND
//this: in class , in object ,in method
//strict mode vs non strict mode
//global Object: In window: it is called window, in node js: it is called global
//all these have a global name that is golbalThis

//normal function: in strict mode,this will point to global object
//in strict mode: it will point to undefined


// LEARN about this keyword
// console.log(this); //it points out to an empty result(empty object) in the node js enovironment
//but in windows/in the browser it points to the global object that is window

//call apply bind , this point to the invoking object

//In class constructor , this will point to newly create empty object
//arrow function takes this keyword from it lexical environment (outside)(outside function)



// var a = 10;
// b = 20;
// console.log(a,b);


// function greet(name , name){
//   console.log(name,name);
// }

// greet("Pri","Jai");




//use strict mode

// 'use strict'

// var a = 10;
// var b = 20;
// console.log(a,b);


// function greet(name1, name2){
//   console.log(name1,name2);
// }

// greet("Pri","Jai");


//the node js environment does not know about window object 
//window object is a global object not a part of java script 
//check 2.js and 2.html

