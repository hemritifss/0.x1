import React from 'react';
import './DroneItem.css';

const DroneItem = ({ drone }) => {
  return (
    <div className="drone-item">
      <h3>{drone.model}</h3>
      <p>Serial Number: {drone.serialNumber}</p>
      <p>Specifications: {drone.specifications}</p>
      <p>Location: {drone.location}</p>
      <p>Materials: {drone.materials}</p>
    </div>
  );
};

export default DroneItem;
