//ARRAYS

// let marks1= 100;
// let marks2 = 50;
// let marks3 = 40;
// let marks4 = 80;

// let marks = [ 100,50,40,80];
// console.log(marks);
// console.log(marks.length);

// let arr= [100,30,"Rohit",true];
// // console.log(arr);
// // console.log(arr[0]);
// // console.log(arr[2]);
// // console.log(typeof arr);

// // arr[1]= 90;
// // console.log(arr);


// //push(add element in the last)
// arr.push(90);
// arr.push("Strike");
// console.log(arr);

// //pop(delete element from the last)
// arr.pop();
// console.log(arr);

// //Starting add and delete the frist element
// //add at start index
// arr.unshift(10);
// arr.unshift(50);
// console.log(arr);

// //delete at start index
// arr.shift();
// console.log(arr);

// //using shift and unshift decreases the overall performance of the program


// let arr = [10,30,40,50,60,90,11];
// for (let i = 0; i <arr.length;i++){
//   console.log(arr[i]);
// }

// let arr = [10,30,40,50,60,90,11];
// for (let num of arr){
//   console.log(num);
// }

// let arr = [10,30,40,50,60,90,11];
// let arr2 = arr;
// arr2.push(30);
// console.log(arr); //original array will also change (because arr is copied by reference )Non-primitive: copy reference ans primitye copy diff data value

 
// const arr = [10,30,40,50,60,90,11];
// arr = [80,40,60];
// console.log(arr); //error

// const arr = [10,30,40,50,60,90,11];
// console.log(arr.slice(2,4));

// const arr = [10,30,40,50,60,90,11];
// const arr2 = arr.slice(2,4);
// console.log(arr2);
// console.log(arr);
//does not change the original array
// const arr3= arr.splice(1,3); //change the original array
// console.log(arr3);


// const arr = [10,30,40,50,60,90,11];
// const arr4 = arr.splice(1,3,"Rohit",19);// SPLICE IN ORGINAL 
// console.log(arr);  
// console.log(arr4);



// const arr = [10,30,40,50,60,90,11];
// const arr2 =["Pri" , 06, true];
// // arr.push(arr2);
// const arr3= arr.concat(arr2)
// console.log(arr3);


// const arr = [10,30,40,50,60,90,11];
// const arr2 =["Pri" , 06, true];
// const arr1 = [90,40,false]
// const arr3= arr.concat(arr2,arr1)
// console.log(arr3);



// const arr = [10,30,40,50,60,90,11];
// const arr1 =["Pri" ,6,true];
// const arr2 = [90,40,false]
// const arr3 = [arr,arr1,arr2]
// //spread operator
// const arr4=[...arr,...arr1,...arr2]
// console.log(arr4);

//ARRAY TO STRING
// const names=["Pri", "Jai", "Kum","Sha"];
//  console.log(names.toString());
//  console.log(typeof names.toString());

//  const names=["Pri", "Jai", "Kum","Sha"];
// console.log(names.join());
//  console.log(typeof names.join());
//  console.log(names.join(" "));
//  console.log(names.join("-"));

// //searching
// const names=["Pri", "Jai", "Kum","Sha"];
// console.log(names.indexOf("Jai"));
// console.log(names.indexOf("Bob"));
// console.log(names.lastIndexOf("Jai"));
// console.log(names.includes("Bob"));

//sorting

// const names=["Pri", "Jai", "Kum","Sha","Ria"];
// console.log(names.sort());

// const names=["Pri", "jai", "Kum","Sha","Ria"];
// console.log(names.sort()); //small letters


// //ascending order
//  const names=["Pri", "Jai", "Kum","Sha","Ria"];
//  console.log(names.reverse());

//  //decending order
// names.sort();
// names.reverse();
// console.log(names);


//sorting is based on the ASCII basis
// const a = [101,90,80,30,91];
// a.sort();
// console.log(a);

// const a = [10,"Pri","Kar",true];
// a.sort();
// console.log(a);


//normal sorting of numbers(ascending order)
// const arr = [ 10 , 40 , 31, 71 , 53 , 11];
// arr.sort((a,b)=> a-b); //this is one type of function for normal shorting
// console.log(arr);
// //-ve : a comes first
// //+be:  b comes first


// //decending order
// const arr = [ 10 , 40 , 31, 71 , 53 , 11];
// arr.sort((a,b)=> b-a); //reverse function
// console.log(arr);

//FLATTENING OF ARRAY
// const arr=[10,30,50,[40,90,11],80];
// console.log(arr);
// console.log(arr[3]);
// console.log(arr[4]);
// console.log(arr[3][0]);
// console.log(arr[3][1]);

// const arr=[10,30,50,[40,90,[60,11,61],11],80];
// console.log(arr);
// console.log(arr[3]);
// console.log(arr[3][1]);
// console.log(arr[3][2]);
// console.log(arr[3][2][0]);
// console.log(arr[3][2][2]);

// const arr=[10,30,50,[40,90,[60,11,61],11],80];
// console.log(arr.flat());//1 level flat
// console.log(arr.flat(2));//2 level flat
// //infinite level
// console.log(arr.flat(Infinity));

//Array is not array in JS it bahaves like Objects


const a = [11,343,434,"Pri",9.3,true];
console.log(a["0"]);
console.log(a["1"]);
a.name="Ria";
console.log(a);






