const path = require('path');
const router = require('express').Router();

// All other routes respond with the index.html file
router.get('/index', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
});

router.get('/data', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/data.html'));
});

module.exports = router;
