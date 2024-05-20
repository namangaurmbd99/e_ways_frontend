// src/api.js
import axios from 'axios';

const API_BASE_URL = "http://localhost:3000/api/v1";

export const login = async (username, password) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/sessions`, {
      username,
      password,
    });
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : new Error("An error occurred. Please try again.");
  }
};
