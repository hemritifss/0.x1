import axios from 'axios';

const API_URL = 'http://localhost:5000/api/drones/';

const addDrone = (droneData) => {
  return axios.post(API_URL, droneData, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
  });
};

const getUserDrones = () => {
  return axios.get(API_URL, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
  });
};

export default {
  addDrone,
  getUserDrones,
};
