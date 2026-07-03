

// fetch("https://api.github.com/users")
// .then((response)=>{
//   return response.json();
// })

// .then((data)=>{
//   //console.log(data);
//   const parent = document.getElementById("first");
//   const image = document.createElement('img');
//   image.src= data[0].avatar_url;

// parent.append(image);
// })



fetch("https://api.github.com/users")
.then((response)=>{
  return response.json();
})

.then((data)=>{
  //console.log(data);
  const parent = document.getElementById("first");

  for (let i= 0; i<data.length; i++){
  const image = document.createElement('img');
  image.src= data[i].avatar_url;
  image.style.height = "40px";
  image.style.width = "40px";


parent.append(image);
  }
})


//json:javascript object notation

//JSON  -> ALL LANGUAGES UNDERSTAND IT -> NO UNDEFINED ALLOWED -> NO FUNCTION ALLOWED -> IT IS A STRING FORMAL (IT IS UNIVERSAL )
//JAVASCRIPT OBJECT: ONLY BY JAVASCRIPT




