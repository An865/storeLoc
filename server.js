/* Packages, Libraries, etc. */
const express = require('express');
const app = express();
const fs = require('fs')
const http = require('http');

module.exports = server = (data) => {fs.readFile('./index.html', function (err, html) {
   if (err) {
       throw err; 
   }       
   http.createServer((request, response) => {  
       response.writeHeader(200, {"Content-Type": "text/html"});  
       response.write(html);  
       response.end();  
   }).listen(8080);
});
console.log('My first Node test server is running on Port 8080.');
}
