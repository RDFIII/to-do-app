var express = require('express');
var app = express();
var bodyParser = require('body-parser');

var todoRoutes = require('./routes/todos');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', function(req, res){
  res.send("ROOT ROUTE");
});

app.use('/api/todos', todoRoutes);

app.listen(3000, function(){
  console.log("APP LISTENING ON PORT 3000");
});
