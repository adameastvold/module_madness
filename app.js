 var http = require('http');
 // var moduleOne = require('./module1.js');
 // var moduleTwo = require('./module2.js');
 var moduleThree = require('./module3.js');

 http.createServer(function(req, res) {
     res.writeHead(200);

     res.write(moduleThree.result());

     res.end();

 }).listen(3000);
