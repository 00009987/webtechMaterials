const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
	res.send('This is MC module home page');
});

router.get('/claims', (req, res) => {
	res.send('A list of MC claims');
});

module.exports = router;
