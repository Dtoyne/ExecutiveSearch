var express = require('express');
var app = express();
var path = require('path');
var bs = require("./");
var contact = '/contact.html';
var about = '/about.html';
var index = '/index.html';


app.engine('html', require('ejs').renderFile);

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
  res.render('index.html');
});

app.get('/contact', (req, res) => {
  res.sendFile(path.join(__dirname + contact));
});

app.get('/about', (req, res) => {
  res.sendFile(path.join(__dirname + about));
});


app.listen(process.env.PORT || 5000);
