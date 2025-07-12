// server setup 
const express = require('express');
const app = express();


// Routing 
app.get('/greetings/:name', (req, res) => {
  const name = req.params.name;

  res.send(`<h1>Hello there ${name}!</h1>`);
});

// Start server
app.listen(3000, () => {
  console.log('Listening on PORT: 3000');
});