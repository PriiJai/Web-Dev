// const element = document.getElementById("first");
// element.onclick = function handleClick(){

//   element.textContent ="Pri is here";
// }



//WE DONT USE THIS METHOD ALSO AS WE HAVE TO PERFORM SO MANY ACTIONS TOGETHER 
//THEN IT OVERRIDES THE 1ST ACTIONS OR SAY ALL THE ABOVE ACTIONS AND PERFORM THE LAST ONE
//EXAMPLE IS BELOW 


const element = document.getElementById("first");
element.onclick = function handleClick(){

  element.textContent ="Pri is here";
  element.style.backgroundColor= "pink"
}




element.onclick = function handleClick(){

  element.textContent ="I am the best";
}


//see it overrides and only 1 action is performed


//so for the best way lets see that in 3.js and 3.html

