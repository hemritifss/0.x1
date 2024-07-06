import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Table } from '@mui/material';

const Notification = () => {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    const fetchNotifications = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/notifications');
        setNotifications(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchNotifications();
  }, []);

  return (
    <div>
      <h2>Notifications</h2>
      <Table>
        <thead>
          <tr>
            <th>Flight Time</th>
            <th>Issues</th>
          </tr>
        </thead>
        <tbody>
          {notifications.map((notification) => (
            <tr key={notification.id}>
              <td>{notification.flight_time}</td>
              <td>{notification.issues}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default Notification;
