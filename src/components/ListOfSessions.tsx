import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import httpClient from './service/httpClient';

const ListOfSessions = () => {
  const [selectValue, setSelect] = useState(''); // initialize state
  const [chosenDate, setDate] = useState('');
  const [listVotes, setVotes] = useState([]);
  const {
    data,
    loading,
  } = httpClient.useFetch(`${httpClient.urlBase!}/dates`);

  const handleChange = (event: any) => {
    setSelect(event.target.value);
    setVotes([]);
  };
  const handleSubmit = (event: any) => {
    event.preventDefault();
    let date: string = selectValue;
    if (date === '') {
      [date] = data;
    }
    setDate(date);
    httpClient.doFetch(`${httpClient.urlBase!}/votes/byDate?date=${date}`)
      .then((r) => {
        setVotes(r);
      });
  };

  return (
    <div>
      List of Sessions
      {loading ? <div>...loading</div>
        : (
          <form onSubmit={handleSubmit}>
            <div>
              <select onChange={handleChange}>
                {data.map((option: string) => (
                  <option key={option} value={option}>{option}</option>
                ))}
              </select>
              <input type="submit" value="Submit" />
            </div>
          </form>
        )}
      {listVotes.length > 0
        && (
        <div>
          <ul>
            {listVotes.map((element: any, index) => (
              <li key={index} value={element.id}>
                <Link to={`/sessions/${element.id}`}>{element.title}</Link>
              </li>
            ))}
          </ul>

        </div>
        )}

    </div>
  );
};
export default ListOfSessions;
