/*
 * Write your server code in this file.  Don't forget to add your name and
 * @oregonstate.edu email address below, so we know whose code we're grading.
 *
 * name: Patrick Iacob
 * email: iacobp@oregonstate.edu
 */
var fs = require('fs');


var indexContent = fs.readFileSync('public/index.html');
var styleContent = fs.readFileSync('public/style.css');
var jsContent = fs.readFileSync('public/index.js');
var errnotfoundContent = fs.readFileSync('public/404.html');
port=3000
if(parseInt(process.env.PORT)){
    port=parseInt(process.env.PORT)
}
console.log("PORT:", process.env.PORT);

function requestHandler(req, res) {
  console.log("method:", req.method);
  console.log("url:", req.url);
  console.log("headers:", req.headers);
  switch(String(req.url)){
    case '/': case '/index.html':
        res.writeHead(200, {"Content-Type": "text/html"});
        res.write(indexContent);
        break
    case '/style.css':
        res.writeHead(200, {"Content-Type": "text/css"});
        res.write(styleContent);
        break
    case '/index.js':
        res.writeHead(200, {"Content-Type": "application/javascript"});
        res.write(jsContent);
        break
    case '/404.html':
        res.writeHead(200, {"Content-Type": "text/html"});
        res.write(errnotfoundContent);
        break
    default:
        res.writeHead(404, {"Content-Type": "text/html"});
        res.write(errnotfoundContent);
        break
  }
  res.end();
}

var http = require("http");
var server = http.createServer(requestHandler);

server.listen(port, function (err) {
  console.log("Server running on port ",port);
});