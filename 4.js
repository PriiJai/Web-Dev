//Number
// let a = 10;
// console.log(a);

// let a = 10;
// let b = 345.6821
// console.log(b);

//METHODS WE CAN APPLY

//toFixed() : till fixed numbers...rounds off
// let a = 10;
// let b = 345.6821
// console.log(b.toFixed(2));
// console.log(b.toFixed(1));
// console.log(typeof b.toFixed(2)); // returns string


// let a = 10;
// let b = 345.6821
// c= b.toFixed(2) //does not change the value of data and makes a new string
// console.log(c);

// toPrecision():  it also returns string
// let a = 10;
// let b = 345.6821
// console.log(b.toPrecision(5));
// console.log(b.toPrecision(6));
// console.log(b.toPrecision(4));


//toString(): number to string
// let a = 10;
// let b = 345.6821;
// console.log(b.toString());


// new Number: creates number but as object

// let a = new Number(20);
// console.log(a);
// console.log(typeof a);



// let a = new Number(20);
// let b = new Number(20);
// console.log(a==b);// false : objects are compared they should point to one value


// let obj1={
//   name:"pri"
// }
// let obj2={
//   name:"pri"
// }
// console.log(obj1==obj2);

// let obj1={
//   name:"pri"
// }
// let obj2= obj1
// console.log(obj1==obj2);



// console.log(Boolean(0));
// console.log(Boolean(new Number(10)));
// console.log(Boolean({name:"Rohit"}));
// console.log(Boolean([]));


//Non primitive: Compared on basics of reference
// Primitibe : copy by value

// let a = 10;
// let b = a;
// console.log(a==b);



// //Math.abs
// console.log(Math.abs(-4));
// console.log(Math.PI);
// console.log(Math.SQRT2);
// console.log(Math.LN10);
// console.log(Math.LN2);
// console.log(Math.ceil(6.3));
// console.log(Math.floor(6.3));

// console.log(Math.log10(20));
// console.log(Math.max(10,20,4554.2445,2454));
// console.log(Math.min(10,20,4554.2445,2454));

// console.log(Math.random());// Generates random value(in range 0 to 1 : 0 is included but not 1)

// //Gambling game: random number (0-9)
// console.log((Math.floor(Math.random()*10)));
// //for (0-10)
// console.log((Math.floor(Math.random()*10+1)));

// // for (0-5)
// console.log((Math.floor(Math.random()*6)));

// // for (0-6)
// console.log((Math.floor(Math.random()*6+1)));


//Math.floor(Math.random()*totalNumberofOutcome)+shift)

//for :15-25

// console.log((Math.floor(Math.random()*11)+15));

//Math.floor(Math.random()*(max-min+1)+min))

//OTP GENERATE: 4 DIGIT: 1000-9999
// console.log(Math.floor(Math.random()*(9990-1000+1))+1000);
//this is not secure method 





