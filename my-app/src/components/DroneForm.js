import React, { useState } from 'react';
import axios from 'axios';
import { TextField, Button, Alert } from '@mui/material';

const DroneForm = () => {
  const [model, setModel] = useState('');
  const [serialNumber, setSerialNumber] = useState('');
  const [specifications, setSpecifications] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/drones', {
        model,
        serial_number: serialNumber,
        specifications
      });
      setMessage('Drone added successfully!');
      setModel('');
      setSerialNumber('');
      setSpecifications('');
    } catch (error) {
      setMessage(`Error: ${error.response?.data?.msg || error.message}`);
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        label="Model"
        value={model}
        onChange={(e) => setModel(e.target.value)}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Serial Number"
        value={serialNumber}
        onChange={(e) => setSerialNumber(e.target.value)}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Specifications"
        value={specifications}
        onChange={(e) => setSpecifications(e.target.value)}
        fullWidth
        margin="normal"
        multiline
        rows={3}
      />
      <Button variant="contained" color="primary" type="submit">
        Add Drone
      </Button>
      {message && <Alert severity="success" className="mt-3">{message}</Alert>}
    </form>
  );
};

export default DroneForm;
