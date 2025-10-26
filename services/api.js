import axios from 'axios';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 30000,
});

// Request interceptor
api.interceptors.request.use(
  (config) => {
    // Get token from localStorage if available
    if (typeof window !== 'undefined') {
      const token = localStorage.getItem('token');
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor
api.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    if (error.response) {
      // Server responded with error
      return Promise.reject(error.response.data || error.response);
    } else if (error.request) {
      // Request made but no response
      return Promise.reject({
        message: 'Network error. Please check your connection.',
        error: error.request,
      });
    } else {
      // Something else happened
      return Promise.reject({
        message: error.message || 'An unexpected error occurred',
      });
    }
  }
);

// API wrapper methods
export const apiGet = async (url, params = {}) => {
  try {
    const response = await api.get(url, { params });
    return response;
  } catch (error) {
    throw error;
  }
};

export const apiPost = async (url, data = {}) => {
  try {
    const response = await api.post(url, data);
    return response;
  } catch (error) {
    throw error;
  }
};

export const apiPut = async (url, data = {}) => {
  try {
    const response = await api.put(url, data);
    return response;
  } catch (error) {
    throw error;
  }
};

export const apiPatch = async (url, data = {}) => {
  try {
    const response = await api.patch(url, data);
    return response;
  } catch (error) {
    throw error;
  }
};

export const apiDelete = async (url) => {
  try {
    const response = await api.delete(url);
    return response;
  } catch (error) {
    throw error;
  }
};

export default api;

