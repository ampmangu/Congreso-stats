import React from 'react';
import httpClient from './service/httpClient';

const ListOfSessions = () => {
  const {
    data,
    loading,
  } = httpClient.useFetch(`${httpClient.urlBase!}/dates`);
  return (
    <div>
      List of Sessions
      {loading ? <div>...loading</div>
        : (
          <div>
            <select>
              {data.map((option: string) => (
                <option key={option} value={option}>{option}</option>
              ))}
            </select>
          </div>
        )}
    </div>
  );
};
export default ListOfSessions;
