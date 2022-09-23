import axios from 'axios';

// API
import API from '../enviroment';

export const addTask = async (task) => {
  try {
    const response = await axios.post(`${API.url}/tasks`, task);
    return response.data;
  } catch (error) {
    return null;
  }
};

export const addLabel = async (label) => {
  try {
    const response = await axios.post(`${API.url}/labels`, label);
    return response.data;
  } catch (error) {
    return null;
  }
};
