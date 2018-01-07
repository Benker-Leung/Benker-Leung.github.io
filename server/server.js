var express = require('express');
var app = express();

 app.use('/', express.static('public'));

app.listen(3000);

app.get('/', function(req, res){
  res.sendFile('./public/index.html');
});
