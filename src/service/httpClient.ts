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
      const item = await response.json();
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
  return response.json();
};
const getResponsePromise = async (search: string) => {
  const response = await fetch(`${urlBase!}/search?textSearch=${search}`, {
    mode: 'cors',
    headers: { 'Content-Type': 'application/json' },
  });
  if (response.ok) {
    return response.json();
  }
  throw response;
};
export default {
  urlBase,
  useFetch,
  doFetch,
  getResponsePromise,
};
