const mongoose = require('mongoose');

const DroneSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  model: String,
  serialNumber: String,
  specifications: String,
  location: String,
  materials: String,
});

module.exports = mongoose.model('Drone', DroneSchema);
