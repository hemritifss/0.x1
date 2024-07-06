import React, { useState } from 'react';
import axios from 'axios';
import './DroneForm.css';

const DroneForm = () => {
  const [model, setModel] = useState('');
  const [serialNumber, setSerialNumber] = useState('');
  const [specifications, setSpecifications] = useState('');
  const [location, setLocation] = useState('');
  const [materials, setMaterials] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/drones', {
        model,
        serialNumber,
        specifications,
        location,
        materials,
      }, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });
      console.log(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="drone-form">
      <h2>Add a Drone</h2>
      <input type="text" placeholder="Model" value={model} onChange={(e) => setModel(e.target.value)} required />
      <input type="text" placeholder="Serial Number" value={serialNumber} onChange={(e) => setSerialNumber(e.target.value)} required />
      <input type="text" placeholder="Specifications" value={specifications} onChange={(e) => setSpecifications(e.target.value)} required />
      <input type="text" placeholder="Location" value={location} onChange={(e) => setLocation(e.target.value)} required />
      <input type="text" placeholder="Materials" value={materials} onChange={(e) => setMaterials(e.target.value)} required />
      <button type="submit">Add Drone</button>
    </form>
  );
};

export default DroneForm;
