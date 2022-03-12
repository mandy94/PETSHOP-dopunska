// Serverski kod
var express = require('express');
var app = express();

app.use(express.static(__dirname + '/static'));

// ENDPOINT 
app.get('/helou', function (req, res) {
    res.send('hello world');
    console.log("Helou");
});

// sendfile - depricated method (  it means that the class or method is no longer considered important.)
app.get('/main-page', function ( req, res){
    console.log( __dirname );
    res.sendFile( __dirname + '/static/html/main.html');
});

app.get('/about', function (req,res){
    res.sendFile( __dirname + '/static/html/about.html');
});

app.listen(3000);
console.log("Server je poceo. Ctrl+c za gasenje servera. Ili instalirajte nodemon kao sav normalan svet.");