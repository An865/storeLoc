const path = require('path');
const router = require('express').Router();

// GET "/api/stores" responds with all notes from the database
router.get('/stores', (req, res) => {
    store
        .getNotes()
        .then((stores) => {
            return res(stores);
        })
        .catch((err) => res.status(500).json(err));
});

module.exports = router;
