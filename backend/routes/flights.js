const express = require('express');
const router = express.Router();

// Dummy data for flights
const flights = [
  { id: 1, flight_time: '2024-07-04 12:00:00', status: 'Completed', issues: 'None' },
  { id: 2, flight_time: '2024-07-04 15:00:00', status: 'In Progress', issues: 'High wind' }
];

// Get all flights
router.get('/', (req, res) => {
  res.json(flights);
});

module.exports = router;
