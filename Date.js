// const now= new Date(); // fromm the device
// console.log(now); //in 5hrs late than ist
// console.log(now.toString()); ///in ist

// //how the js is accessing the system? its time date and all?

// console.log(now.toISOString());
// console.log(now.toLocaleString());


//Local time chal rha
// const now= new Date(); 
// console.log(now.getDay());
// console.log(now.getFullYear());
// console.log(now.getDate());
// console.log(now.getTime());
// const now= new Date(); 

// console.log(now.getHours());
// console.log(now.getSeconds());
// console.log(now.getMinutes())
// console.log(now.getMonth()); //month starts from 0 (0 based indexing)

//days: Mon-tue(1 based)
//Month: 0,1...
//year month hour minute second millisecons
// const now= new Date(2026,5,19,12,59,124); //but in output we get start from (1) and even time is in the 5 mins late (this is inconsistent) UTC
// console.log(now);
// console.log(now.toString());

// const now = Date.now();
// console.log(now); // in milisecond


// const now = Date.now();
// const date = new Date(now)
// console.log(date);
// console.log(date,toString());


//Timestamp
const now = Date.now();
const date = new Date(-12343548243);
console.log(date);
console.log(date.toISOString());

console.log(date);











