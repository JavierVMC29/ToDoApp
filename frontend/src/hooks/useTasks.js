import { useState, useEffect } from 'react';
import axios from 'axios';

// API
import API from '../enviroment';

/**
 * Return the user's labels
 * @returns Labels created by the user
 */
function useTasks(update) {
  const [tasks, setTasks] = useState();

  const getPriorityNumber = (priority) => {
    switch (priority) {
      case 'low':
        return 1;
      case 'medium':
        return 0;
      case 'high':
        return -1;
      default:
        return null;
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(`${API.url}/tasks`);
      const sortedTasks = response.data.sort(
        (a, b) => getPriorityNumber(a.priority) - getPriorityNumber(b.priority)
      );
      setTasks(sortedTasks);
    };
    fetchData();
  }, [update]);
  return tasks;
}

export default useTasks;
