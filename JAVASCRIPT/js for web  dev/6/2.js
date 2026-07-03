// const j1 = {
//   name: "Pri",
//   age: 20,
//   address: "Dhanbad",
//   c:undefined //ignored by json
// }

// //convert to JSON

// const jsonFormat = JSON.stringify(j1);
// console.log(jsonFormat);



const jsonFormat = `{
  "name":"Pri",
  "age":30,
  "address":"Dhanbad"

}`;

// convert json to javascript object

const JsObject = JSON.parse(jsonFormat);
console.log(JsObject)