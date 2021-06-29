const path = require('path');
const router = require('express').Router();

module.exports = function (data) {
    // GET "/api/stores" responds with all data from the spreadsheet
    router.get('/stores', (req, res) => {
        res.send(data);
    });

    return router;
};
