//Callback Hell

// //Zomato application

// function placedOrder(Callback){
//   console.log("Payment is in progress");

//   setTimeout(()=>{

//     console.log("Payment is recieverd and order is placed")
//     Callback();
//   },3000)
// }

// function preparingOrder(){
//   console.log("Your food preperation has started")

//   setTimeout(() =>{
//     console.log("Your order is now prepared")

//   },3000)
// }
// placedOrder();
// preparingOrder();

//OUTPUT FOR THIS CODE BUT THIS IS WRONG
// Payment is in progress
// Your food preperation has started
// Payment is recieverd and order is placed
// Your order is now prepared


//SO WE GIVE IT AS CALL BACK
// function placedOrder(Callback){
//   console.log("Payment is in progress");

//   setTimeout(()=>{

//     console.log("Payment is recieverd and order is placed")
//     Callback();
//   },3000)
// }

// function preparingOrder(){
//   console.log("Your food preperation has started")

//   setTimeout(() =>{
//     console.log("Your order is now prepared")

//   },3000)
// }

// placedOrder(preparingOrder);



// function placedOrder(Callback){
//   console.log("Payment is in progress");

//   setTimeout(()=>{

//     console.log("Payment is recieverd and order is placed")
//     Callback();
//   },3000)
// }

// function preparingOrder(Callback){
//   console.log("Your food preperation has started")

//   setTimeout(() =>{
//     console.log("Your order is now prepared")
//Callback();

//   },3000)
// }

// function pickupOrder(){
//   console.log("Delivery boy is own way to pick up your order");
//   setTimeout(()=>{
//     console.log("I have picked up your order")
//     //pickupOrder() //never hardcode
//     
//   },3000)
// }

// placedOrder(preparingOrder(pickupOrder)); //PROGRAM CREASHES HERE  : WE CAN NOT DO LIKE THIS



//CALLBACK FUNCTION MEIN CALLBACK FUNCTION


// function placedOrder(Callback){
//   console.log("Payment is in progress");

//   setTimeout(()=>{

//     console.log("Payment is recieverd and order is placed");
//     Callback();
//   },3000)
// }

// function preparingOrder(Callback){
//   console.log("Your food preperation has started")

//   setTimeout(( ) =>{
//     console.log("Your order is now prepared")
//     Callback();

//   },3000)
// }

// function pickupOrder(){
//   console.log("Delivery boy is own way to pick up your order");
//   setTimeout(()=>{
//     console.log("I have picked up your order");
//     //pickupOrder() //never hardcode
    
//   },3000)
// }

// //callback function use
// placedOrder(() =>{
// preparingOrder(()=>{
//   pickupOrder();
// });
// });







// function placedOrder(Callback){
//   console.log("Payment is in progress");

//   setTimeout(()=>{

//     console.log("Payment is recieverd and order is placed");
//     Callback();
//   },3000)
// }

// function preparingOrder(Callback){
//   console.log("Your food preperation has started")

//   setTimeout(( ) =>{
//     console.log("Your order is now prepared")
//     Callback();

//   },3000)
// }

// function pickupOrder(Callback){
//   console.log("Delivery boy is own way to pick up your order");
//   setTimeout(()=>{
//     console.log("I have picked up your order");
//     //pickupOrder() //never hardcode
//     Callback();
//   },3000)
// }

// function deliverOrder(){
//   console.log("I am on my way to deliver your order");

//   setTimeout(()=>{
//     console.log("Order Delivered Sucessfully");
//   },3000)
// }

// //callback function use
// placedOrder(() =>{
// preparingOrder(()=>{
//   pickupOrder(()=>{
//     deliverOrder()
//   });
// });
// });



//THIS IS CALLBACK HELL
// placedOrder(() =>{
// preparingOrder(()=>{
//   pickupOrder(()=>{
//     deliverOrder()
//   });
// });
// });

// //FOR SO MANY LEVELS IT IS SUCH A HELL
// //CALLBACK IN CALLBACK IN CALLBACK IN CALLBACK AND SO SO 

// //IT IS FOR THE ASYNCHRONOUS TASK







// //ZOMATO

// const OrderDetail ={
//   orderId: 123234,
//   food: ("Pizza", "biryani","coke"),
//   cont: 620,
//   customer_name : "Pri",
//   custumer_location : "Dhanbad",
//   retaurant_location:"Dhanbad"
// }


// function placedOrder(OrderDetail, Callback){
//   console.log(`${OrderDetail.cost} Payment is in progress`);

//   setTimeout(()=>{

//     console.log("Payment is recieverd and order is placed");
//     OrderDetail.status = true;
//     Callback(OrderDetail);
//   },3000)
// }

// function preparingOrder(){
//   console.log("Your food preperation has started")

//   setTimeout(( ) =>{
//     console.log("Your order is now prepared")
    

//   },3000)
// }

// function pickupOrder(Callback){
//   console.log("Delivery boy is own way to pick up your order");
//   setTimeout(()=>{
//     console.log("I have picked up your order");
   
//     Callback();
//   },3000)
// }

// function deliverOrder(){
//   console.log("I am on my way to deliver your order");

//   setTimeout(()=>{
//     console.log("Order Delivered Sucessfully");
//   },3000)
// }



// //callback function //pass OrderDetail
// placedOrder(OrderDetail, () =>{
// preparingOrder();
// })



// // placedOrder(OrderDetail, () =>{
// // preparingOrder(OrderDetail,()=>{
// //   pickupOrder(()=>{
// //     deliverOrder()
// //   });
// // });
// // });








const OrderDetail ={
  orderId: 123234,
  food: ("Pizza","biryani","coke"),
  cost: 620,
  customer_name : "Pri",
  custumer_location : "Dhanbad",
  retaurant_location:"Dhanbad"
}


function placedOrder(OrderDetail, Callback){
  console.log(`${OrderDetail.cost} Payment is in progress`);

  setTimeout(()=>{

    console.log("Payment is recieverd and order is placed");
    OrderDetail.status = true;
    Callback(OrderDetail);
  },3000)
}

const Callback =(OrderDetail) =>{
preparingOrder(OrderDetail);
}


function preparingOrder(OrderDetail){
  console.log(`Your food preperation has started of ${OrderDetail.food}`)

  setTimeout(( ) =>{
    console.log("Your order is now prepared");
    OrderDetail.token = 123;
    Callback(OrderDetail)
    

  },3000)
}

function pickupOrder(OrderDetail,Callback){
  console.log(`Delivery boy is own way to pick up your order from ${OrderDetail.retaurant_location}`);
  setTimeout(()=>{
    console.log("I have picked up your order");
    OrderDetail.recieved = true;
    Callback(OrderDetail);
  },3000)
}

function deliverOrder(OrderDetail){
  console.log(`I am on my way to deliver your order ${OrderDetail.custumer_location}`);

  setTimeout(()=>{
    console.log("Order Delivered Sucessfully");
    OrderDetail.delivery = true;
  },3000)
}


// placedOrder(OrderDetail, () =>{
// preparingOrder();
// })



placedOrder(OrderDetail, () =>{
preparingOrder(OrderDetail,(OrderDetail)=>{
  pickupOrder(OrderDetail, (OrderDetail)=>{
    deliverOrder(OrderDetail);
  });
});
});


//THIS IS SO HARD 
//THIS IS CALLBACK HELL
//IT IS NOT MUCH EFFICIENT IN CODE READIBILITY
