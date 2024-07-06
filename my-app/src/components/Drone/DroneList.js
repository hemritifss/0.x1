import React from 'react';
import DroneItem from './DroneItem';
import './DroneList.css';

const DroneList = ({ drones }) => {
  return (
    <div className="drone-list">
      <h2>Drone List</h2>
      {drones.map((drone) => (
        <DroneItem key={drone._id} drone={drone} />
      ))}
    </div>
  );
};

export default DroneList;
