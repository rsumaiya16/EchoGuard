// src/screens/LoginScreen.jsx

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from '../components/Footer.jsx';


const LoginScreen = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    contact: '',
    password: '',
  });

  const navigate = useNavigate();  // Using useNavigate to redirect after successful login

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.contact || !formData.password) {
      alert("Please fill out all fields!");
      return;
    }

    // Redirect to HomeScreen and pass user name as state
    navigate('/home', { state: { name: formData.name } });
  };
  return (
    <div className="flex justify-center items-center h-screen bg-gray-200">
      <div className="w-96 p-6 bg-white rounded shadow-md">
        <h2 className="text-2xl text-center mb-4">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-2 mt-1 border rounded"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 mt-1 border rounded"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="contact" className="block">Contact</label>
            <input
              type="text"
              name="contact"
              value={formData.contact}
              onChange={handleChange}
              className="w-full p-2 mt-1 border rounded"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full p-2 mt-1 border rounded"
            />
          </div>
          <div className="mb-4">
            <button type="submit" className="w-full py-2 bg-blue-500 text-white rounded">Login</button>
          </div>
        </form>
      </div>
      <footer className="absolute bottom-0 w-full text-center p-2 bg-blue-600 text-white">
        <p>EchoGuard - Your safety is our priority</p>
      </footer>
    </div>
  );
};

export default LoginScreen;
