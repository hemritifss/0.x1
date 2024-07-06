import React, { useEffect, useState } from 'react';
import axios from 'axios';
import DroneForm from './Drone/DroneForm';
import DroneList from './Drone/DroneList';
import './Dashboard.css';

const Dashboard = () => {
  const [drones, setDrones] = useState([]);

  useEffect(() => {
    const fetchDrones = async () => {
      const res = await axios.get('http://localhost:5000/api/drones', {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });
      setDrones(res.data);
    };

    fetchDrones();
  }, []);

  return (
    <div className="dashboard">
      <h1>My Drones</h1>
      <DroneForm />
      <DroneList drones={drones} />
    </div>
  );
};

export default Dashboard;
