import axios from 'axios';
import { useEffect, useState } from 'react';

const urlBase = process.env.API_URL;

const readUrl = (url = '') => (url.startsWith('http://') || url.startsWith('https://') ? url : `${urlBase}/${url}`);

const get = (url = '', headers = {}) => axios.get(readUrl(url), {
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    ...headers,
  },
});
const useFetch = (url: string) => {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    const getURL = async () => {
      const response = await fetch(url, {
        mode: 'cors',
        headers: { 'Content-Type': 'application/json' },
      });
      const results = await response.json();
      const item = results;
      setData(item);
      setLoading(false);
    };
    getURL();
  }, []);

  return {
    data,
    loading,
  };
};
export default {
  get,
  urlBase,
  useFetch,
};
