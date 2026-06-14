//variable 

let name ="Pri"

let age = 20;

age = 30;

console.log(name , age);


const account = 1234;

// account = 32; error we cannt change value of const

console.log(account);


//var old wau we dont use it now 
var a = 10;

a = 20;

var a = 50;

console.log(a);


//IT DOES NOT REPECT THE SCOPE 
if(true){
  var a= 20;
}

console.log(a);


// just respect function scope
function fun(){
  var c =20;
}

console.log(c);



