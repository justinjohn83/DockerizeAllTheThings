var express = require('express')
var app = express()

// respond with "hello world" when a GET request is made to the homepage
app.get('/api/food', function (req, res) {
  var foods = ['Pizzas','Burgers','Hot Dogs'];
  console.log('Foods=' + foods);
  return res.send(foods);
})

app.listen(3000, function () {
  console.log('Listening on port 3000!')
})