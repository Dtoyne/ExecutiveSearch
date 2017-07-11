var express = require('express');
var app = express();
var path = require('path');

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/index.html'));
});

app.get('/contact', (req, res) => {
  res.sendFile(path.join(__dirname + '/contact.html'));
});

app.get('/about', (req, res) => {
  res.sendFile(path.join(__dirname + '/about.html'));
});

app.listen(process.env.PORT || 5000)
