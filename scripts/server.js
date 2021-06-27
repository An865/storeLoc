/* Packages, Libraries, etc. */
const express = require('express');
const app = express();
const htmlRoutes = require('../routes/htmlrouters');
const apiRoutes = require('../routes/apirouters');

module.exports = server = (data) => {
    // for parsing application/json
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
    //use the following code to serve images, CSS files, and JavaScript files in a directory named public
    app.use(express.static('public'));

    app.use('/api', apiRoutes);
    app.use('/', htmlRoutes);

    const PORT = process.env.PORT || 8080;

    app.listen(PORT, () =>
        console.log(`Listening on PORT: http://localhost:${PORT}`)
    );
};
