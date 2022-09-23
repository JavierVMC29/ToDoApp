import { useState, useEffect } from 'react';
import axios from 'axios';

// API
import API from '../enviroment';

/**
 * Return the user's labels
 * @returns Labels created by the user
 */
function useLabels(update) {
  const [labels, setLabels] = useState();
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(`${API.url}/labels`);
      setLabels(response.data);
    };
    fetchData();
  }, [update]);
  return labels;
}

export default useLabels;
