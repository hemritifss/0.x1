import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Table, Button } from '@mui/material';

const FlightList = () => {
  const [flights, setFlights] = useState([]);

  useEffect(() => {
    const fetchFlights = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/flights');
        setFlights(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchFlights();
  }, []);

  const handleAnalyze = async (flightId) => {
    try {
      await axios.post(`http://localhost:5000/api/flights/analyze/${flightId}`);
      alert('Analysis completed for flight ID ' + flightId);
    } catch (error) {
      console.error(error);
    }
  };

  const handleCheckWeather = async (flightId) => {
    try {
      await axios.post(`http://localhost:5000/api/flights/check-weather/${flightId}`);
      alert('Weather and equipment check completed for flight ID ' + flightId);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h2>Flight List</h2>
      <Table>
        <thead>
          <tr>
            <th>Flight Time</th>
            <th>Status</th>
            <th>Issues</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {flights.map((flight) => (
            <tr key={flight.id}>
              <td>{flight.flight_time}</td>
              <td>{flight.status}</td>
              <td>{flight.issues}</td>
              <td>
                <Button variant="contained" color="primary" onClick={() => handleAnalyze(flight.id)}>
                  Analyze
                </Button>
                <Button variant="contained" color="secondary" onClick={() => handleCheckWeather(flight.id)}>
                  Check Weather
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default FlightList;
