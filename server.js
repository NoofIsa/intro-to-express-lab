// server setup 
const express = require('express');
const app = express();

//-----------------------------------------------------------------------------------------------
// Route ex(1): greeting 
app.get('/greetings/:name', (req, res) => {
  const name = req.params.name;

  res.send(`<h1>Hello there ${name}!</h1>`);
});
//------------------------------------------------------------------------------------------------
// Route ex(2): Roll the Dice
app.get('/roll/:number', (req, res) => {
  const numberParam = req.params.number;
  const max = parseInt(numberParam, 10);

  // Validation: Check if it's a number
  if (isNaN(max)) {
    return res.send("You must specify a number.");
  }
// Generate random number between 0 and max 
  const rolled = Math.floor(Math.random() * (max + 1));
  res.send(`You rolled a ${rolled}.`);
});

//-----------------------------------------------------------------------------------------------------------
const collectibles = [
  { name: 'shiny ball', price: 5.95 },
  { name: 'autographed picture of a dog', price: 10 },
  { name: 'vintage 1970s yogurt SOLD AS-IS', price: 0.99 }
];
// Route ex(3): I Want THAT One!
app.get('/collectibles/:index', (req, res) => {
  const indexParam = req.params.index;
  const index = parseInt(indexParam, 10);

  // Check if it's a valid number and in range
  if (isNaN(index) || index < 0 || index >= collectibles.length) {
    return res.send("This item is not yet in stock. Check back soon!");
  }

  const item = collectibles[index];
  res.send(`So, you want the ${item.name}? For ${item.price}, it can be yours!`);
});
// Start server
app.listen(3000, () => {
  console.log('Listening on PORT: 3000');
});


