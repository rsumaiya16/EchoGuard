import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer.jsx";
import bgVideo from "../assets/loginbg.mp4"; // Add your video file in the assets folder

const LoginScreen = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact: "",
    password: "",
  });

  const navigate = useNavigate();

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

    // ✅ Pass user name via navigate state
    navigate("/home", { state: { name: formData.name } });
  };

  return (
    <div className="relative w-full h-screen flex items-center justify-center">
      {/* Background Video */}
      <video autoPlay loop muted className="absolute top-0 left-0 w-full h-full object-cover">
        <source src={bgVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Dark Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50"></div>

      {/* Login Form */}
      <div className="relative w-96 p-8 bg-opacity-90 rounded-lg shadow-lg z-10">
        <h2 className="text-3xl font-semibold text-center text-white">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block font-semibold mb-2 text-white">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 mt-1 border rounded focus:ring-2 focus:ring-blue-500 outline-none"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block font-semibold mb-2 text-white">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 mt-1 border rounded focus:ring-2 focus:ring-blue-500 outline-none"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="contact" className="block font-semibold text-white">Contact</label>
            <input
              type="text"
              name="contact"
              value={formData.contact}
              onChange={handleChange}
              className="w-full p-3 mt-1 border rounded focus:ring-2 focus:ring-blue-500 outline-none"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block font-semibold mb-2 text-white">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full p-3 mt-1 border rounded focus:ring-2 focus:ring-blue-500 outline-none"
              required
            />
          </div>
          <div className="mb-4">
            <button type="submit" className="w-full py-3 bg-pink-300/50 text-white rounded-lg font-semibold hover:bg-pink-700/50 transition">
              Login
            </button>
          </div>
        </form>
      </div>

      {/* Footer */}
      <footer className="absolute bottom-0 w-full text-center p-3 text-white font-mono">
        <p>EchoGuard - Your safety is our priority</p>
      </footer>
    </div>
  );
};

export default LoginScreen;
