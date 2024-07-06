import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import Dashboard from './components/Dashboard';
import DroneForm from './components/Drone/DroneForm';
import DroneList from './components/Drone/DroneList'; 
import FlightList from './components/FlightList';
import NotificationList from './components/Notification'; 
import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';
import './App.css'; 

const App = () => {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/drones" element={<DroneList />} />
          <Route path="/flights" element={<FlightList />} />
          <Route path="/notifications" element={<NotificationList />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
};

export default App;

