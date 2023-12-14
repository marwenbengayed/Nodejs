const http = require("http");
//create a server object:
http
  .createServer(function (req, res) {
    res.write("<h1>Hello Node!!!!</h1>"); //write a response
    res.end(); //end the response
  })
  .listen(3000, function () {
    console.log("server start at port 3000"); //the server object listens on port 3000
  });