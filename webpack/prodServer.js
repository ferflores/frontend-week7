var path = require('path');
var express = require('express');
var publicDir = path.join(__dirname, '../public/');
var app = express();

app.use('/dist', express.static(publicDir + 'dist/'));

app.get('*', function(req, res) {
  res.sendFile(publicDir + '/index.html');
});

app.listen('80', function(err){
  if(err) {
    console.log(err);
    return;
  }
  console.log('Production server listening at http://localhost:3000');
});
