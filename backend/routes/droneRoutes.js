const express = require('express');
const router = express.Router();
const { addDrone, getUserDrones, getDroneById, updateDrone, deleteDrone } = require('../controllers/droneController');
const auth = require('../middleware/authMiddleware');

router.post('/', auth, addDrone);
router.get('/', auth, getUserDrones);
router.get('/:id', auth, getDroneById);
router.put('/:id', auth, updateDrone);
router.delete('/:id', auth, deleteDrone);

module.exports = router;
