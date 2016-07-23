var path = require('path');
var express = require('express');

process.env.PWD = process.cwd();

var publicDir = process.env.PWD + '/public';
var app = express();

app.use('/dist', express.static(process.env.PWD + '/public'));

app.get('*', function(req, res) {
  res.sendFile(publicDir + '/index.html');
});

app.listen(process.env.PORT || 3000, function(err){
  if(err) {
    console.log(err);
    return;
  }
  console.log('Production server listening at http://localhost:3000');
});
