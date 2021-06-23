/* Packages, Libraries, etc. */
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
//const path = require('path');

//bodyparser to parse json in req and res
app.use(bodyParser.json());

module.exports = server = (data) => {
    const port = process.env.PORT || 8080;

    // sendFile will go here
    app.get('/', function (req, res) {
        // res.sendFile(path.join(__dirname, '/index.html'));
        //res.json(data);
        res.status('200').json(data);
    });

    app.listen(port);
    console.log('Server started at http://localhost:' + port);
};
