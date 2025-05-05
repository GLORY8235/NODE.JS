const express = require('express');
const app = express();
const path = require('path');

// Middleware to parse form data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

const comments = [
    { username: 'John Doe', comment: 'This is a great post!' },
    { username: 'Jane Smith', comment: 'I learned a lot from this.' },
    { username: 'Bob Johnson', comment: 'Thanks for sharing!' },
    { username: 'Alice Brown', comment: 'I found this very helpful!' },
];

app.get('/comments', (req, res) => {
    res.render('comments/index', { comments });
});

app.get('/comments/new', (req, res) => {
    res.render('comments/new');
});
app.post('/comments', (req, res) => {
    const { username, comment } = req.body;
    comments.push({ username, comment });
    res.send("Comment submitted successfully!");
})

app.get('/tacos', (req, res) => {
    res.send('GET /tacos response');
});


app.post('/tacos', (req, res) => {
    const { meat, qty } = req.body;
    res.send(`Ok, here are your ${qty} ${meat} tacos`);
});

app.listen(8080, () => {
    console.log("Listening on port 8080");
});
