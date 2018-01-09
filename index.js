var express = require('express');
var app = express();

app.get('/', function(req, res){
  res.send("SERVERRRR");
});

app.listen(3000, function(){
  console.log("APP LISTENING ON PORT 3000");
});
