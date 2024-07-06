import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Auth.css';
import 'aos/dist/aos.css';
import AOS from 'aos';

AOS.init();

const Register = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    name: '',
    prename: '',
    phoneNumber: '',
    email: '',
    establishment: ''
  });
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/auth/register', formData);
      localStorage.setItem('token', res.data.token);
      navigate('/dashboard');
    } catch (err) {
      console.error(err);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="auth-container" data-aos="fade-up">
      <form onSubmit={handleRegister} className="auth-form">
        <h2>Register</h2>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          name="username"
          placeholder="Username"
          value={formData.username}
          onChange={handleChange}
          required
        />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <label htmlFor="name">First Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <label htmlFor="prename">Last Name:</label>
        <input
          type="text"
          id="prename"
          name="prename"
          placeholder="Prename"
          value={formData.prename}
          onChange={handleChange}
          required
        />
        <label htmlFor="phoneNumber">Phone Number:</label>
        <input
          type="text"
          id="phoneNumber"
          name="phoneNumber"
          placeholder="Phone Number"
          value={formData.phoneNumber}
          onChange={handleChange}
          required
        />
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <label htmlFor="establishment">Establishment:</label>
        <input
          type="text"
          id="establishment"
          name="establishment"
          placeholder="Establishment"
          value={formData.establishment}
          onChange={handleChange}
          required
        />
        <button type="submit" className="btn btn-primary">Register</button>
      </form>
    </div>
  );
};

export default Register;

