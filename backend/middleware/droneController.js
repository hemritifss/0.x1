const Drone = require('../models/Drone');

exports.addDrone = async (req, res) => {
  const { model, serialNumber, specifications, location, materials } = req.body;

  try {
    const newDrone = new Drone({
      user: req.user.id,
      model,
      serialNumber,
      specifications,
      location,
      materials,
    });

    const drone = await newDrone.save();
    res.json(drone);
  } catch (error) {
    res.status(500).send('Server error');
  }
};

exports.getUserDrones = async (req, res) => {
  try {
    const drones = await Drone.find({ user: req.user.id });
    res.json(drones);
  } catch (error) {
    res.status(500).send('Server error');
  }
};

exports.getDroneById = async (req, res) => {
  try {
    const drone = await Drone.findById(req.params.id);
    if (!drone) {
      return res.status(404).send('Drone not found');
    }
    res.json(drone);
  } catch (error) {
    res.status(500).send('Server error');
  }
};

exports.updateDrone = async (req, res) => {
  const { model, serialNumber, specifications, location, materials } = req.body;

  try {
    let drone = await Drone.findById(req.params.id);
    if (!drone) {
      return res.status(404).send('Drone not found');
    }

    drone.model = model || drone.model;
    drone.serialNumber = serialNumber || drone.serialNumber;
    drone.specifications = specifications || drone.specifications;
    drone.location = location || drone.location;
    drone.materials = materials || drone.materials;

    await drone.save();
    res.json(drone);
  } catch (error) {
    res.status(500).send('Server error');
  }
};

exports.deleteDrone = async (req, res) => {
  try {
    const drone = await Drone.findById(req.params.id);
    if (!drone) {
      return res.status(404).send('Drone not found');
    }

    await drone.remove();
    res.send('Drone removed');
  } catch (error) {
    res.status(500).send('Server error');
  }
};
