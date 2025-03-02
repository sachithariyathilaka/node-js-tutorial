const http = require("http");

http.createServer(function (request, response) {
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.end('Welcome to the Node JS Server !!');
}).listen(8090);

console.info('Server running at port 8090');