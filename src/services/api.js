// src/services/api.js
import axios from 'axios';

const API_URL = 'http://localhost:8000/api';

const api = axios.create({
  baseURL: API_URL,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      // Don't redirect on signin page
      if (!window.location.pathname.includes('/signin')) {
        window.location.href = '/signin';
      }
    }
    return Promise.reject(error);
  }
);

export default api;