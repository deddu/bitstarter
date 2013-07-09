var express = require('express');
var fs = require('fs');
var index=('index.html');
var app = express.createServer(express.logger());

app.get('/', function(request, response) {
fs.readFile("./index.html", function read(err,data){
if (err ){
	throw err;
	response.writeHead(400, {"Content-Type":"text/plain"});
	response.write("index not found");
	response.end();
}
content=data;
response.writeHead(200,{"Content-Type":"text/html"});
response.write(content);
response.end();
//console.log(content);
});


 // response.send('Hello Boss!\n welcome back');
});




var port = process.env.PORT || 5000;
app.listen(port, function() {
  //readfile()
  console.log("Listening on " + port);
});
