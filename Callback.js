// //CALLBACK FUNCTION: FUNCTION PASSESD AS ARGUMENT TO ANOTHER FUNCTION
// function greet(){
//   console.log("hello, how are you")
// }

// function meet(callback){
//   console.log("I am very nice")
//   callback();

  
// }

// greet();
// meet();

// meet(greet()) //as argument but not like this //function call
// meet(greet); //callback function



//DO NOT DO LIKE THIS
// function greet(){
//   console.log("hello, how are you")
// }

// function leave(){
//   console.kog("I am leaving");
// }

// function meet(){
//   console.log("I am very nice")
//   // callback();
// // greet(); hardcode
// // leave(); hardcode
//   //more codes to be excecuted
//   console.log("Have a nice day");
// }

// meet();
// greet();



// function greet(){
//   console.log("hello, how are you")
// }

// function leave(){
//   console.log("I am leaving");
// }

// function meet(callback){
//   console.log("I am very nice")
// callback();
//   console.log("Have a nice day");
// }

// meet(greet);
// meet(leave);

// //CALLBACK IN REAL WORLD: 
// arr.sort((a,b)=> a-b); //ascending
// arr.sort((a,b)=> b-a); //ascending

// //CALLBACK IN REAL WORLD: IN ZOMATO :
// function zomatoOrderPlaced(){
//   console.log("We have started your preparing your fool");
// }
// function payment(amount){
//   console.log(`${amount}payment has initialized`)
//   console.log("Payment is recieved")

//   //GST
//   //PAYMENT TO RIDER
//   //PROFIT OF THE ZOMATO COMPANY
// }
// payment(500);

//ZOMATO + BLINKIT MERGED
function blinkitOrderPlaced(){
  console.log("We have started packing")
}
function zomatoOrderPlaced(){
  console.log("We have started your preparing your fool");
}
function payment(amount,callback){
  console.log(`${amount} payment has initialized`)
  console.log("Payment is recieved");
  // zomatoOrderPlaced();//hardcode not needed with callback
callback();
  //GST
  //PAYMENT TO RIDER
  //PROFIT OF THE ZOMATO COMPANY
}
payment(500, zomatoOrderPlaced);
payment(300, blinkitOrderPlaced);
