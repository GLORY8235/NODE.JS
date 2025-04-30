const express = require('express');
const app = express();

// Middleware to parse form data
app.use(express.urlencoded({ extended: true }));
app.use(express.json)

// GET /tacos route
app.get('/tacos', (req, res) => {
    res.send('GET /tacos response');
});

// POST /tacos route
app.post('/tacos', (req, res) => {
   const {meat, qty } = req.body;
    res.send(`ok, here are your ${qty} ${meat} tacos`);
});

// Start the server
app.listen(8000, () => {
    console.log("ON PORT 8000");
});
