const express = require('express');
const router = express.Router();

// Dummy data for drones (for GET request example)
const drones = [
  { id: 1, model: 'Model X', serial_number: '12345', specifications: 'Specs' }
];

// Get all drones (example route)
router.get('/', (req, res) => {
  res.json(drones);
});

// Add a new drone
router.post('/', (req, res) => {
  const { model, serial_number, specifications } = req.body;
  if (!model || !serial_number || !specifications) {
    return res.status(400).json({ msg: 'Please include all fields' });
  }
  const newDrone = {
    id: drones.length + 1,
    model,
    serial_number,
    specifications
  };
  drones.push(newDrone);
  res.json(newDrone);
});

module.exports = router;
