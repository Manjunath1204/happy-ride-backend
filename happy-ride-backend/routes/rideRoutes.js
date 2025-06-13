const express = require('express');
const router = express.Router();
const { bookRide } = require('../controllers/rideController');

router.post('/book', bookRide);

module.exports = router;
