import React from 'react';
import { Redirect } from 'react-router-dom';
import httpClient from '../service/httpClient';

const Searcher = () => {
  const [search, setSearch] = React.useState('');
  const [results, setResults] = React.useState([]);

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    await httpClient.getResponsePromise(search)
      .then((data: any) => {
        setResults(data);
      })
      .catch((error: any) => console.log(error));
  };
  const changeSearch = (event: any) => {
    setSearch(event.target.value);
  };
  return (
    <>
      <form onSubmit={handleSubmit} method="get">
        <input onChange={changeSearch} type="text" placeholder="Search..." />
      </form>
      {results !== undefined && results.length > 0
            && (
            <Redirect to={{
              pathname: '/results',
              state: { results },
            }}
            />
            )}
    </>
  );
};

export default Searcher;
