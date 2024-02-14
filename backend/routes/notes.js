const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    const obj = {
        a: 'this is a test2',
        b: 36
    }
    res.json(obj);
})

module.exports = router;