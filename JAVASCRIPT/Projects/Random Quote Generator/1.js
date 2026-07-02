const quotes = [
  "Believe you can and you're halfway there.",
  "Do something today that your future self will thank you for.",
  "Dream big and dare to fail.",
  "Happiness is not by chance, but by choice.",
  "Don’t watch the clock; do what it does. Keep going.",
  "Success is the sum of small efforts repeated day in and day out.",
  "Your limitation—it’s only your imagination.",
  "Push yourself, because no one else is going to do it for you.",
  "Great things never come from comfort zones.",
  "Dream it. Wish it. Do it.",
  "Stay positive, work hard, make it happen.",
  "Little things make big days.",
  "Don’t stop when you’re tired. Stop when you’re done.",
  "Wake up with determination. Go to bed with satisfaction.",
  "Do something today that scares you.",
  "It always seems impossible until it’s done.",
  "Don’t wait for opportunity. Create it.",
  "Sometimes later becomes never. Do it now.",
  "The harder you work for something, the greater you’ll feel when you achieve it.",
  "Success doesn’t just find you. You have to go out and get it."
];
//querry selector selects 1 
const button = document.querySelector('button');
const quote = document.querySelector("h1")
button.addEventListener('click',()=>{
  const index = Math.floor(Math.random()*20);

  quote.textContent= quotes[index];

})