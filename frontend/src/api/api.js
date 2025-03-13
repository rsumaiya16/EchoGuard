import axios from "axios";

// Base URL of your backend
const API_BASE_URL = "http://localhost:5001/api";

// Function to register a new user
export const registerUser = async (userData) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/users`, userData);
    return response.data;
  } catch (error) {
    console.error("Registration Error:", error.response?.data?.message || error.message);
    throw error;
  }
};

// Function to get all users
export const loginUser = async (userData) => {
    try {
      const response = await axios.post(`${API_BASE_URL}/users/login`, userData);

      return response.data;
    } catch (error) {
      throw new Error(error.response?.data?.message || "Login failed");
    }
  };
  
