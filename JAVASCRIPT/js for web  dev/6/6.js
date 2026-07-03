//RESOLVE CALLBACK HELL PROBLEM WITH PROMISES
//REMOVE CALLBACK CONCEPT

//ZOMATO 
// const OrderDetail ={
//   orderId: 123234,
//   food: ("Pizza","biryani","coke"),
//   cost: 620,
//   customer_name : "Pri",
//   custumer_location : "Dhanbad",
//   retaurant_location:"Dhanbad"
// }


// function placedOrder(OrderDetail, ){
//   console.log(`${OrderDetail.cost} Payment is in progress`);

//   setTimeout(()=>{

//     console.log("Payment is recieverd and order is placed");
//     OrderDetail.status = true;
//     return OrderDetail;
    
//   },3000)
// }

// const Callback =(OrderDetail) =>{
// preparingOrder(OrderDetail);
// }


// function preparingOrder(OrderDetail){
//   console.log(`Your food preperation has started of ${OrderDetail.food}`)

//   setTimeout(( ) =>{
//     console.log("Your order is now prepared");
//     OrderDetail.token = 123;
    

//   },3000)
// }

// function pickupOrder(OrderDetail,){
//   console.log(`Delivery boy is own way to pick up your order from ${OrderDetail.retaurant_location}`);
//   setTimeout(()=>{
//     console.log("I have picked up your order");
//     OrderDetail.recieved = true;
    
//   },3000)
// }

// function deliverOrder(OrderDetail){
//   console.log(`I am on my way to deliver your order ${OrderDetail.custumer_location}`);

//   setTimeout(()=>{
//     console.log("Order Delivered Sucessfully");
//     OrderDetail.delivery = true;
//   },3000)
// }

// //we cant write like this
// // placedOrder(OrderDetail);
// // preparingOrder(OrderDetail);  
// // pickupOrder(OrderDetail);
// // deliverOrder(OrderDetail);


// // const newOrderDetail = placedOrder(OrderDetail);
// // preparingOrder(OrderDetail);  
// // pickupOrder(OrderDetail);
// // deliverOrder(OrderDetail);


// //DO LIKE THIS
// const OrderDetail ={
//   orderId: 123234,
//   food: ["Pizza","biryani","coke"],
//   cost: 620,
//   customer_name : "Pri",
//   custumer_location : "Dhanbad",
//   retaurant_location:"Dhanbad"
// }


// function placedOrder(OrderDetail, ){
//   console.log(`${OrderDetail.cost} Payment is in progress`);
//  return new Promise((resolve,reject)=>{
//       setTimeout(()=>{

//     console.log("Payment is recieverd and order is placed");
//     OrderDetail.status = true;
//     return OrderDetail;
//      resolve(OrderDetail);
    
//   },3000)
// })

//   }






// function preparingOrder(OrderDetail){
//   console.log(`Your food preperation has started of ${OrderDetail.food}`)
// return new Promise((resolve,reject)=>{
//  setTimeout(( ) =>{
//     console.log("Your order is now prepared");
//     OrderDetail.token = 123;
//      resolve(OrderDetail);
    

//   },3000)
// })
 
// }

// function pickupOrder(OrderDetail,){
//   console.log(`Delivery boy is own way to pick up your order from ${OrderDetail.retaurant_location}`);
//   return new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//     console.log("I have picked up your order");
//     OrderDetail.recieved = true;
//      resolve(OrderDetail);
//   },3000)
 

//   })
  
// }

// function deliverOrder(OrderDetail){
//   console.log(`I am on my way to deliver your order ${OrderDetail.custumer_location}`);
//   return new Promise ((resolve,reject) =>{
//      setTimeout(()=>{
//     console.log("Order Delivered Sucessfully");
//     OrderDetail.delivery = true;
//      resolve(OrderDetail);
//   },3000)


    
//   })

 
// }

// //use promise
// placedOrder(OrderDetail)
// .then((OrderDetail)=> preparingOrder(OrderDetail))
// .then ((OrderDetail)=> pickupOrder(OrderDetail))
// .then ((OrderDetail)=> deliverOrder(OrderDetail))
// .then((OrderDetail) => {
//   console.log(OrderDetail);
// })

// .catch((error)=>{
//   console.log("Eroor: ", error.message);
// })






//for reject


//DO LIKE THIS
const OrderDetail ={
  orderId: 123234,
  food: ["Pizza","biryani","coke"],
  cost: 620,
  customer_name : "Pri",
  custumer_location : "Dhanbad",
  retaurant_location:"Dhanbad"
}


function placedOrder(OrderDetail, ){
  console.log(`${OrderDetail.cost} Payment is in progress`);
 return new Promise((resolve,reject)=>{
      setTimeout(()=>{
        if (Math.random()>0.1){
          console.log("Payment is recieverd and order is placed");
    OrderDetail.status = true;
    return OrderDetail;
     resolve(OrderDetail);
          
        }
        else{
          reject("Payment is failed")
          
        }

    
    
  },3000)
})

  }






function preparingOrder(OrderDetail){
  console.log(`Your food preperation has started of ${OrderDetail.food}`)
return new Promise((resolve,reject)=>{
 setTimeout(( ) =>{
  if (Math.random>0.5){
    console.log("Your order is now prepared");
    OrderDetail.token = 123;
     resolve(OrderDetail);
  }
  else{
    reject("NO MORE ORDERS")

  }
  

  },3000)
})
 
}

function pickupOrder(OrderDetail,){
  console.log(`Delivery boy is own way to pick up your order from ${OrderDetail.retaurant_location}`);
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
      if (Math.random>0.5){
    console.log("I have picked up your order");
    OrderDetail.recieved = true;
     resolve(OrderDetail);
      }
      else{
        reject("Delivery boy not picking");
      }
  },3000)
 

  })
  
}

function deliverOrder(OrderDetail){
  console.log(`I am on my way to deliver your order ${OrderDetail.custumer_location}`);
  return new Promise ((resolve,reject) =>{
     setTimeout(()=>{
    console.log("Order Delivered Sucessfully");
    OrderDetail.delivery = true;
     resolve(OrderDetail);
  },3000)


    
  })

 
}

//use promise
placedOrder(OrderDetail)
.then((OrderDetail)=> preparingOrder(OrderDetail))
.then ((OrderDetail)=> pickupOrder(OrderDetail))
.then ((OrderDetail)=> deliverOrder(OrderDetail))
.then((OrderDetail) => {
  console.log(OrderDetail);
})

.catch((error)=>{
  console.log("Eroor: ", error.message);
})








