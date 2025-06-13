const mongoose = require('mongoose');

const RideSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  pickup: String,
  drop: String,
  status: { type: String, default: 'pending' },
  fare: Number,
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Ride', RideSchema);
