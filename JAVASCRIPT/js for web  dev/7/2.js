//ZOMATO APPLICATION


const OrderDetail = {
  orderId: 123234,
  food: ["Pizza", "Biryani", "Coke"],
  cost: 620,
  customer_name: "Pri",
  customer_location: "Dhanbad",
  restaurant_location: "Dhanbad"
};

function placedOrder(OrderDetail) {
  console.log(`${OrderDetail.cost} Payment is in progress`);

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Payment is received and order is placed");

      OrderDetail.status = true;

      resolve(OrderDetail);
    }, 3000);
  });
}

function preparingOrder(OrderDetail) {
  console.log(
    `Your food preparation has started: ${OrderDetail.food.join(", ")}`
  );

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Your order is now prepared");

      OrderDetail.token = 123;

      resolve(OrderDetail);
    }, 3000);
  });
}

function pickupOrder(OrderDetail) {
  console.log(
    `Delivery boy is on the way to pick up your order from ${OrderDetail.restaurant_location}`
  );

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("I have picked up your order");

      OrderDetail.received = true;

      resolve(OrderDetail);
    }, 3000);
  });
}

function deliverOrder(OrderDetail) {
  console.log(
    `I am on my way to deliver your order to ${OrderDetail.customer_location}`
  );

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Order Delivered Successfully");

      OrderDetail.delivery = true;

      resolve(OrderDetail);
    }, 3000);
  });
}

// Promise Chaining
// placedOrder(OrderDetail)
//   .then((OrderDetail) => preparingOrder(OrderDetail))
//   .then((OrderDetail) => pickupOrder(OrderDetail))
//   .then((OrderDetail) => deliverOrder(OrderDetail))
//   .then((OrderDetail) => {
//     console.log("Final Order Details:");
//     console.log(OrderDetail);
//   })
//   .catch((error) => {
//     console.log("Error:", error.message);
//   });

//TO HANDLE THE ABOVE CODE : we will use async function
async function ordering(){
  try{
  const response1 =await placedOrder(OrderDetail);
  const response2 = await preparingOrder(response1);
  const response3 = await pickupOrder(response2);
  const response4 = await deliverOrder(response3);

  console.log(response4);

}
catch(error){
  console.log("Error: ",error);
}
}

ordering();