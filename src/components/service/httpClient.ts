import { useEffect, useState } from 'react';

const urlBase = process.env.API_URL;

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
const doFetch = async (url: string) => {
  const response = await fetch(url, {
    mode: 'cors',
    headers: { 'Content-Type': 'application/json' },
  });
  const voteList = await response.json();
  return voteList;
};
export default {
  urlBase,
  useFetch,
  doFetch,
};
