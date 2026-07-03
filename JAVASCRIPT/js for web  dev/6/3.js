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

.catch((error)=>{
  const parent= document.getElementById("first");
  parent.textContent = error.message;
})



