//REJECT CONDITION
// Internet down
// Server down
// DNS down

//whenever server reponds anything that is in fullfilled
//if error is there we have to handle it 


fetch("https://api.github.com/uers")//wrong url
.then((response)=>{
  console.log(response);
  if(!response.ok){
    throw new Error("Data is not present in server")
  }
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

.finally(()=>{
  console.log(" CLEANUP TIME ")
})

