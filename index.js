const express = require('express');
const app = express();
const path = require('path');

const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname , '/dist')));

app.get('/' , (req , res) => {
    res.sendFile(path.resolve(__dirname , 'dist/pages' , 'index.html'));
});

app.get('/about' , (req , res) => {
    res.sendFile(path.resolve(__dirname , 'dist/pages' , 'about.html'));
});
    
app.get('/services' , (req , res) => {
    res.sendFile(path.resolve(__dirname , 'dist/pages' , 'services.html'));
});

app.get('/gallery' , (req , res) => {
    res.sendFile(path.resolve(__dirname , 'dist/pages' , 'gallery.html'));
});

app.get('/contact' , (req , res) => {
    res.sendFile(path.resolve(__dirname , 'dist/pages' , 'contact.html'));
});

app.get('/story' , (req , res) => {
    res.sendFile(path.resolve(__dirname , 'dist/pages' , 'story.html'));
});

app.get('/careers' , (req , res) => {
    res.sendFile(path.resolve(__dirname , 'dist/pages' , 'careers.html'));
});

app.get('/news' , (req , res) => {
    res.sendFile(path.resolve(__dirname , 'dist/pages' , 'news.html'));
});

app.get('/process' , (req , res) => {
    res.sendFile(path.resolve(__dirname , 'dist/pages' , 'process.html'));
});

app.get('*' , (req , res) => {
    res.sendFile(path.resolve(__dirname , 'dist/pages' , '404.html'));
});

app.listen(PORT);