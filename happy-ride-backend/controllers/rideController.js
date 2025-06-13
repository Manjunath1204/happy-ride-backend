const Ride = require('../models/Ride');
const jwt = require('jsonwebtoken');
const config = require('../config');

function verifyToken(req) {
  const token = req.headers.authorization?.split(" ")[1];
  return jwt.verify(token, config.jwtSecret);
}

exports.bookRide = async (req, res) => {
  try {
    const { pickup, drop, fare } = req.body;
    const { userId } = verifyToken(req);
    const ride = await Ride.create({ user: userId, pickup, drop, fare });
    res.status(201).json(ride);
  } catch (err) {
    res.status(401).json({ error: "Unauthorized" });
  }
};
