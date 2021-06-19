/* Packages, Libraries, etc. */
const express = require('express');
const app = express();
const path = require('path');

module.exports = server = (data) => {
    const port = process.env.PORT || 8080;

    // sendFile will go here
    app.get('/', function (req, res) {
        res.sendFile(path.join(__dirname, '/index.html'));
    });

    app.listen(port);
    console.log('Server started at http://localhost:' + port);
};
