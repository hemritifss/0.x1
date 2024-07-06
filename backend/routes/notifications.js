const express = require('express');
const router = express.Router();

// Dummy data for notifications
const notifications = [
  { id: 1, flight_time: '2024-07-04 12:00:00', issues: 'Battery low' },
  { id: 2, flight_time: '2024-07-04 15:00:00', issues: 'High wind' }
];

// Get all notifications
router.get('/', (req, res) => {
  res.json(notifications);
});

module.exports = router;
