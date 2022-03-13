import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import httpClient from './service/httpClient';
import '../styles/listOfSessions.scss';
import LoadingAnimation from './LoadingAnimation';

const ListOfSessions = () => {
  const [selectValue, setSelect] = useState(''); // initialize state
  const [, setDate] = useState('');
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
  const { t } = useTranslation();

  return (
    <div className="listOfSessions">
      {t('list_of_sessions')}
      {loading ? <LoadingAnimation />
        : (
          <form onSubmit={handleSubmit}>
            <div>
              <select onChange={handleChange}>
                {data.map((option: string) => (
                  <option key={option} value={option}>{option}</option>
                ))}
              </select>
              <button id="submit_button" type="submit" name={t('session_submit')}>{t('session_submit')}</button>
            </div>
          </form>
        )}
      {listVotes.length > 0
        && (
        <div>
          <ul>
            {listVotes.map((element: any) => (
              <li key={element.id} value={element.id}>
                <Link to={`/sessions/${element.id}`}>{element.titulo + element.titulosubgrupo}</Link>
              </li>
            ))}
          </ul>
        </div>
        )}
    </div>
  );
};
export default ListOfSessions;
