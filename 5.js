//STRING

// const str1 = "Pri";
// const str2 = 'PRIY';
// const str3 = `Jai`; //Modern way (we can go in next line but in others it shows error ...string in multiple lines)

// const str4 = `I 
// am 
// Priyanka
// Kumari`;
// console.log(str1,str2,str3 , str4);

// //for adding in between we can do in `` and use ${}
// const day = 6;
// const bd = `My birthday is on ${day}`
// console.log(bd);

// const str = "Hello everyone"
// console.log(str.length); //spaces are also counted as char
// console.log(str[0]);
// console.log(str[3]);
// //string is immutable so we cannt change elements
// str[2] = "s";
// console.log(str);
// //fot uppercase
// console.log(str.toUpperCase()); //new string is made
// const a = str.toUpperCase();
// const b = str.toLowerCase();
// console.log(str)
// console.log( a )
// console.log(b)



//Finding substring 
// const str = "Hello everyone"
// console.log(str.indexOf('ever'));
// //if not present: returns -1
// console.log(str.indexOf('code'));
//uppercase and lowercase matters so we can do covert all to uppercase or lowercase then find

//if multiple substring are present then 1st one will be considered(give 1st index)
// const str = "Hello everyone everyone"
// console.log(str.indexOf('ever'));
// //for last index of(in case of multiple the 1st index of last substing will be considered)
// console.log(str.lastIndexOf ('ever'));

// //includes: if present or not in true or false
// console.log(str.includes('ever'));



//.slice(from start index , till what end index) eg: .slice(2,9) : but last index 9 will not be considered in slicing
// const str = "Hello everyone everyone"
// console.log(str.slice(2,5));
// console.log(str.slice(2,7));
// console.log(str.slice(3)); 

// const str = "Hello everyone everyone";
// console.log(str.slice(-4));
// console.log(str.slice(-5,-2)); //index -2 is not included


//for substring: same as slicing but here no concept of negative index
// const str = "Hello everyone everyone";
// console.log(str.substring());
// console.log(str.substring(2,5));


//Add/Attach mutiple string
// const a = "Priyanka";
// const b = "Kumari";
// const c = a+b;
// console.log(c)
// const d = a + " "+ b;
// console.log(d);

// console.log(24+"Pri");
// console.log(24+"Pri"+10);
// console.log(24+50+"Pri"+10);

//REPLACE
// const a = " My name is Pri Pri";
// console.log(a.replace("Pri","Jai")); //replace only one the 1st string match
// //for all
// console.log(a.replaceAll("Pri","Jai"));


//Trim
// const user=" Priya ";
// console.log(user);
// console.log(user.trim())
// console.log(user.trimStart())
// console.log(user.trimEnd());

//split
// const names ="Priya,Riya,Ria,Priyanka";
// console.log(names.split(","));

// const names ="Priya Riya Ria Priyanka";
// console.log(names.split(" "));






