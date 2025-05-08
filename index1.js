const express = require('express');
const app = express();
const path = require('path');
const { v4: getid } = require('uuid');
// require('dotenv').config();
// const port = process.env.PORT || 8080;

 // Generate a unique ID

// Middleware to parse form data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

const comments = [
    {
    id: getid(),
     username: 'John Doe', comment: 'This is a great post!' },
    { id: getid(),
     username: 'Jane Smith', comment: 'I learned a lot from this.' },
    {
    id: getid(),
         username: 'Bob Johnson', comment: 'Thanks for sharing!' },
    { 
        id: getid(),
        username: 'Alice Brown', comment: 'I found this very helpful!' },
];

app.get('/comments', (req, res) => {
    res.render('comments/index', { comments });
});

app.get('/comments/new', (req, res) => {
    res.render('comments/new');
});
app.post('/comments', (req, res) => {
    const { username, comment } = req.body;
    comments.push({ username, comment, id: getid() });
    res.redirect('/comments');
})

app.get('/comments/:id', (req, res) => {
    const { id } = req.params;
    const comment = comments.find(c => c.id === (id));
    res.render('comments/show', { comment });
})
app.patch('/comments/:id', (req, res) => {
    const { id } = req.params;
    const { newcommentText } = req.body;
    const foundComment = comments.find(c => c.id === id);
    foundComment.comment = newcommentText;
    res.redirect('/comments');
});

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
