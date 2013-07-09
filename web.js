var express = require('express');
var fs = require('fs');
var index=('index.html');
var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  fs.readFile("./index.html", function read(err,data){
if (err ){throw err;}content=data;
	response.send(data);
});
 // response.send('Hello Boss!\n welcome back');
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
