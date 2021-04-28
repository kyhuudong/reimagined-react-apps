const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('We have a new connection');
});

module.exports = router;