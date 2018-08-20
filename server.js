var express = require('express');
var ws = require('./ws');

var app = express();

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/middle.html');
    //change google.com to the website host pdf file
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
