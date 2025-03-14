
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser, registerUser } from "../api/api"; 
import Footer from "../components/Footer.jsx";
import bgVideo from "../assets/loginbg.mp4";

const LoginScreen = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact: "",
    emergencyContact: "",
    password: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await loginUser(formData);
      console.log("Navigating with name:", response.user.name); 
      navigate("/home", { state: { name: response.user.name } }); 
    } catch (error) {
      setError(error.message || "Login failed. Please try again.");
    }
  };
  

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      const response = await registerUser(formData); 
      navigate("/home", { state: { name: response.name } });
    } catch (error) {
      setError(error.message || "Sign Up failed. Please try again.");
    }
  };

  return (
    <div className="relative w-full h-screen flex items-center justify-center">
      <video autoPlay loop muted className="absolute top-0 left-0 w-full h-full object-cover">
        <source src={bgVideo} type="video/mp4" />
      </video>

      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50"></div>

      <div className="relative w-96 p-8 bg-opacity-90 rounded-lg shadow-lg z-10">
        <h2 className="text-3xl font-semibold text-center text-white">Login</h2>
        {error && <p className="text-red-400 text-center">{error}</p>}
        
        <form>
          <div className="mb-4">
            <label className="block font-semibold mb-2 text-white">Name</label>
            <input type="text" name="name" value={formData.name} onChange={handleChange} 
              placeholder="Enter your name" className="w-full p-3 mt-1 border rounded-full focus:ring-2 focus:ring-blue-500 outline-none" required />
          </div>
          <div className="mb-4">
            <label className="block font-semibold mb-2 text-white">Email</label>
            <input type="email" name="email" value={formData.email} onChange={handleChange} 
              placeholder="example@gmail.com" className="w-full p-3 mt-1 border rounded-full focus:ring-2 focus:ring-blue-500 outline-none" required />
          </div>
          <div className="mb-4">
            <label className="block font-semibold text-white">Contact</label>
            <input type="text" name="contact" value={formData.contact} onChange={handleChange} 
              placeholder="Provide valid number" className="w-full p-3 mt-1 border rounded-full focus:ring-2 focus:ring-blue-500 outline-none" required />
          </div>
          <div className="mb-4">
            <label className="block font-semibold text-white">Emergency Contact</label>
            <input type="text" name="emergencyContact" value={formData.emergencyContact} onChange={handleChange} 
              placeholder="Provide valid number" className="w-full p-3 mt-1 border rounded-full focus:ring-2 focus:ring-blue-500 outline-none" required />
          </div>
          <div className="mb-4">
            <label className="block font-semibold mb-2 text-white">Password</label>
            <input type="password" name="password" value={formData.password} onChange={handleChange} 
              placeholder="Use a strong password" className="w-full p-3 mt-1 border rounded-full focus:ring-2 focus:ring-blue-500 outline-none" required />
          </div>
          <div className="mb-4 flex space-x-2">
            <button onClick={handleLogin} className="w-1/2 py-3 bg-pink-300/50 text-white rounded-full font-semibold hover:bg-pink-700/50 transition">
              Login
            </button>
            <button onClick={handleSignUp} className="w-1/2 py-3 bg-blue-300/50 text-white rounded-full font-semibold hover:bg-blue-700/50 transition">
              Sign Up
            </button>
          </div>
        </form>
      </div>

      <footer className="absolute bottom-0 w-full text-center p-3 text-white font-mono">
        <p>EchoGuard - Your safety is our priority</p>
      </footer>
    </div>
  );
};

export default LoginScreen;

