var express = require('express');
var app = express();

var Token = true;
app.get('/', function(req, res){
  res.send('go to /getCookie');
});

app.get('/getCookie', function(req, res){
   res.cookie('Token', Token, {maxAge: 10800}).send('check the cookies');
});

app.listen(3000);