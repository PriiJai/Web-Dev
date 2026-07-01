 //<h1 style="background-color: orange; color : brown;"" id:"first"> I can do it</h1>


 //1st thought
 //convert this element in object of js

 temp = {
  tagName:"h1",
id : "fist"
style:{
  background-color:"orange",
  color:"brown"
},
textContent:"I can do it"
} 

temp.textContent= " Hello guys"


//there are commands that automatically converts any elements in obj
//in browser those syntax are
//it will return object
const temp = window.document.getElementById("first");
console.log(temp);//just write temp in browser console


//run it in browser
const temp = window.document.getElementById("first");
temp
<h1 style=​"background-color:​ orange;​ color :​ brown;​" id=​"first">​ I can do it​</h1>​
console.dir(temp)
typeof temp 
'objext'
temp.textContent= "PRI IS HERE"
'PRI IS HERE'
temp.style.backgroundColor = "pink"


window.alert("Hello")
undefined
window.console.log("Hello world")
VM1064:1 Hello world
undefined
window.open
ƒ open() { [native code] }
window.open()
Window {window: Window, self: Window, document: document, name: '', location: Location, …}
open()
Window {window: Window, self: Window, document: document, name: '', location: Location, …}
document.getElementById("second")

document
console.dir(document)

//everything here is in object form(in the browser)
window <- Browser
document 
htmp 
1) head 
-> Meta 
->title

2) body 
-> H1  -> I can do it
-> h2


document.getElementById " "

//same answer we ger for 
//  <h1 style="background-color: orange; color : brown;" id="first"> I can do it by 
//     <span style="display: none;">JULY</span></h1>
const temp = document.getElementById("first")
undefined
temp
<h1 style=​"background-color:​ orange;​ color :​ brown;​" id=​"first">​ I can do it​</h1>​
temp.innerHTML
' I can do it'
temp.innerText
'I can do it'
temp.textContent
' I can do it'


 //<h1 style="background-color: orange; color : brown;" id="first"> I can do it by 
   // <span style="display: none;">JULY</span></h1>
const temp = document.getElementById("first")
undefined
temp
<h1 style=​"background-color:​ orange;​ color :​ brown;​" id=​"first">​…​</h1>​
temp.innerHTML //text content with tahs
' I can do it by \n    <span style="display: none;">JULY</span>'
temp.innerText  ///WHAT IS THERE IS THE UI
'I can do it by'

temp.textContent //only text content ignore tags
'I can do it by \n   JULY'


//in form of array-> object
document.getElementsByTagName("li")
HTMLCollection(3) [li, li, li]0: li1: li2: lilength: 3[[Prototype]]: HTMLCollection
const list = document.getElementsByTagName("li")
undefined
list
HTMLCollection(3) [li, li, li]0: li1: li2: lilength: 3[[Prototype]]: HTMLCollection
for (let num of list)
    console.log(num)
VM502:2 <li>​::marker​" Fridge "</li>​
VM502:2 <li>​::marker​" Cooler "</li>​
VM502:2 <li>​::marker​" Press "</li>​
undefined

//how to convert the whole list in array
const list = document.getElementsByTagName("li")
undefined
list
HTMLCollection(3) [li, li, li]
const arr = [...list];
undefined
arr
(3) [li, li, li]0: li1: li2: lilength: 3[[Prototype]]: Array(0)


const classBase = document.getElementsByClassName("third")
undefined
classBase
HTMLCollection(2) [h2#second.third, ul.third, second: h2#second.third]0: h2#second.third1: ul.thirdsecond: h2#second.thirdlength: 2[[Prototype]]: HTMLCollection
classBase[0]
<h2 class=​"third" id=​"second">​ It will take time​</h2>​
classbase[1]
VM1067:1 Uncaught ReferenceError: classbase is not defined
    at <anonymous>:1:1
(anonymous) @ VM1067:1
[NEW] Explain Console errors by using Copilot in Edge: click  to explain an error. Learn moreDon't show again
classBase[1]
<ul class=​"third" id=​"Pri">​…​</ul>​
classBase[1].id = "Pri"
'Pri'
classBase[1].id = "Pri"
'Pri'const classBase = document.getElementsByClassName("third")
undefined
classBase
HTMLCollection(2) [h2#second.third, ul.third, second: h2#second.third]0: h2#second.third1: ul.thirdsecond: h2#second.thirdlength: 2[[Prototype]]: HTMLCollection
classBase[0]
<h2 class=​"third" id=​"second">​ It will take time​</h2>​
classbase[1] //error
classBase[1]
<ul class=​"third" id=​"Pri">​…​</ul>​

//to make the id for any tags
classBase[1].id = "Pri"
'Pri'
classBase[1].id = "Pri"
'Pri'


//another way (selection) by tagname
document.querySelector("h1")
<h1 style=​"background-color:​ orange;​ color :​ brown;​" id=​"first">​…​</h1>​

//select by tagname
document.querySelector("h2")
<h2 class=​"third" id=​"second">​ It will take time​</h2>​
//selects only the 1st one 
undefined

//select by id
document.querySelector("#first")
<h1 style=​"background-color:​ orange;​ color :​ brown;​" id=​"first">​…​</h1>​

//select by class
document.querySelector(".third")
<h2 class=​"third" id=​"second">​ It will take time​</h2>​

//select all elements (as it only select the 1st)
document.querySelectorAll("h2")
NodeList(2) [h2#second.third, h2]
0
: 
h2#second.third
1
: 
h2
length
: 
2
[[Prototype]]
: 
NodeList
const list = document.querySelectorAll("h2")
undefined
list
NodeList(2) [h2#second.third, h2]
0
: 
h2#second.third
1
: 
h2
length
: 
2
[[Prototype]]
: 
NodeList
list [0]
const arr = [...list]
undefined
arr
(2) [h2#second.third, h2]
0
: 
h2#second.third
1
: 
h2
length
: 
2
[[Prototype]]
: 
Array(0)



//difference b/w  html collection and nodelist
NodeList vs HTMLCollection
1
2
When working with the DOM, two common collection types you’ll encounter are HTMLCollection and NodeList. While they look similar, their behavior—especially regarding updates when the DOM changes—is different.

HTMLCollection

Contains only element nodes (e.g., <div>, <p>).

Returned by methods like getElementsByClassName() or getElementsByTagName().

Always live – automatically updates when the DOM changes.

NodeList

Can contain any node type (elements, text, comments).

Returned by methods like querySelectorAll() (static) or childNodes (live).

Usually static – does not update after DOM changes unless obtained from a live source like childNodes.

Example: Live HTMLCollection

// Initial HTML: <p>One</p> <p>Two</p>
const paras = document.getElementsByTagName('p');
console.log("Before:", paras.length); // 2

const newP = document.createElement('p');
newP.textContent = 'Three';
document.body.appendChild(newP);

console.log("After:", paras.length); // 3 (auto-updated)
Copy
Here, paras reflects the new <p> without re-querying.

Example: Static NodeList

// Initial HTML: <p>One</p> <p>Two</p>
const paras = document.querySelectorAll('p');
console.log("Before:", paras.length); // 2

const newP = document.createElement('p');
newP.textContent = 'Three';
document.body.appendChild(newP);

console.log("After:", paras.length); // 2 (unchanged)
Copy
querySelectorAll() returns a static NodeList, so it doesn’t update automatically.

Example: Live NodeList via childNodes

const container = document.querySelector('div');
console.log("Before:", container.childNodes.length);

const span = document.createElement('span');
container.appendChild(span);

console.log("After:", container.childNodes.length); // Updated
Copy
childNodes returns a live NodeList.

Key Takeaways

Use HTMLCollection when you need a live list of elements only.

Use NodeList from querySelectorAll() for a static snapshot.

For live NodeLists, use properties like childNodes.

Live collections auto-reflect DOM changes; static ones require re-querying.