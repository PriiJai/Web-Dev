// async function github() {
//   const response = await fetch("https://api.github.com/users");
//   const data = await response.json();


//   const parent = document.getElementById("first");
  
//   for (let user of data){

//     const element = document.createElement("div");
//     element.classList.add("user");


//     const image = document.createElement("img");
//     image.src = user.avatar_url;

//     const userName = document.createElement("h2");
//     userName.textContent= user.login;

//     const anchor = document.createElement("a");
//     anchor.href = user.html_url;
//     anchor.textContent = "Visit Profile";

//     element.append(image,userName,anchor);
//     parent.append(element);



//   }
  
// }
// github();



//if we have error we have to handle them so we write them in try block

async function github() {
  try {
  const response = await fetch("https://api.github.com/users");
  if(!response.ok){
    throw new Error("Data is not present");
  }
  const data = await response.json();


  const parent = document.getElementById("first");
  
  for (let user of data){

    const element = document.createElement("div");
    element.classList.add("user");


    const image = document.createElement("img");
    image.src = user.avatar_url;

    const userName = document.createElement("h2");
    userName.textContent= user.login;

    const anchor = document.createElement("a");
    anchor.href = user.html_url;
    anchor.textContent = "Visit Profile";

    element.append(image,userName,anchor);
    parent.append(element);



  }
}
catch(error){
  console.log("error");
}
}
github();