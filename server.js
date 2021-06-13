/* Packages, Libraries, etc. */
const express = require('express');
const app = express();
const fs = require('fs')
const http = require('http');

//fs.readFile(filename, encoding, callback(error, data)) where data is contents of the file
module.exports = server = (data) => {
fs.appendFile('./index.html', data, function (err, html) {
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