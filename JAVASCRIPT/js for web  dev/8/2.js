// //CLASSES

// const obj1 = {
//   name : "Pri",
//   age:30,
//   greet:function(){
//     console.log(`Hello ${this.name}`);
//   }
// }

// const obj2 = {
//   name : "Jai",
//   age:20,
//   greet:function(){
//     console.log(`Hello ${this.name}`);
//   }
// }

// const obj3 = {
//   name : "Kar",
//   age:10,
//   greet:function(){
//     console.log(`Hello ${this.name}`);
//   }
// }

//we are writing this in manual way so we can do this with the help of classes



class Person {
  constructor(name,age){
    this.name = name;
    this.age= age;
  }
  sayHi(){
    console.log(`Hi ${this.name}`);
  }
}

const person1 = new Person("Pri", 20);
const person2 = new Person("Jai", 21);
console.log(person1.name);
console.log(person1.age);
console.log(person1.sayHi());
console.log(person2.name);
console.log(person2.age);
console.log(person2.sayHi());


console.log(person1)  //but the method is not the sayHi is not getting printed

//Person.prototype


const ob1= {
  name: "Jais",
  age: 20,
  greet: function(){

  }
};
console.log(ob1);

// const ob2 = {};
// ob2.name= "KAR";


//inheritance
class Customer extends Person {
  constructor(name,age,account,balance){
    super(name,age);
    this.account = account;
    this.balance = balance;
  }
  checkBalance(){
  return this.balance
}

}

const c1 = new Customer("Karan", 20,12,500);
console.log(c1);
console.log(c1.name);
console.log(c1.sayHi);
console.log(c1.checkBalance);



const obj_1 = {
  name:"Pri",
  age:20
}

const obj_2 = Object.create(obj_1);
obj_2.account = 10;
console.log(obj_2.name);
console.log(obj_2.account);
