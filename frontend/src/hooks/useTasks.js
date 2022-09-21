import { useState, useEffect } from 'react';
import axios from 'axios';

// API
import API from '../enviroment';

/**
 * Return the user's labels
 * @returns Labels created by the user
 */
function useTasks() {
  const [tasks, setTasks] = useState();
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(`${API.url}/tasks`);
      setTasks(response.data);
    };
    fetchData();
  }, []);
  return tasks;
}

export default useTasks;
