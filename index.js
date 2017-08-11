// write your code here
/*var http = require("http");
var server = http.createServer(function(request, response) {
  response.writeHead(200, {"Content-Type": "text/html"});
  response.write('<!DOCTYPE "html">');
  response.write("<html>");
  response.write("<head>");
  response.write("<title>Hello World</title>");
  response.write("</head>");
  response.write("<body>");
  response.write("Hello World");
  response.write("</body>");
  response.write("</html>");
  response.end();
});

server.listen(8080);
console.log("Server is listening");*/
var http = require('http');
http.createServer(function (request, response) {
  response.writeHead(200, {'Content-Type': 'text/plain'});
  response.write('Hello World');
  response.end();
}).listen(8080);
console.log("Server is listening");
