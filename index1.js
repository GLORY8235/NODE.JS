const express = require('express');
const app = express();
const path = require('path');

// Middleware to parse form data
app.use(express.urlencoded({ extended: true }));
app.use(express.json())
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

const commets = [
    { username: 'John Doe',
     comment: 'This is a great post!'

     },

    { username: 'Jane Smith',
     comment: 'I learned a lot from this.'

    },

    { username: 'Bob Johnson',
     comment: 'Thanks for sharing!'

     },

     { username: 'Alice Brown',
     comment: 'I found this very helpful!'

     },
     
];

// GET /tacos route
app.get('/tacose', (req, res) => {
    res.send('GET /tacos response');
});

// POST /tacos route
app.post('/tacosy', (req, res) => {
   const {meat, qty } = req.body;
    res.send(`ok, here are your ${qty} ${meat} tacos`);
});

// Start the server
app.listen(8080, () => {
    console.log("ON PORT 8080");
});


// is used in an Express.js application to parse incoming request bodies that are sent via HTML forms (i.e. with