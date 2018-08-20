var express = require('express');
var ws = require('./ws');

var app = express();

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/middle.html');
    res.redirect(301, 'http://www.google.com');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
