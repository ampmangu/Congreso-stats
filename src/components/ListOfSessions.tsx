import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Select from 'react-select';

import { useTranslation } from 'react-i18next';
import httpClient from './service/httpClient';
import '../styles/listOfSessions.scss';
import LoadingAnimation from './LoadingAnimation';
import moment from 'moment';

const ListOfSessions = () => {
  const [, setDate] = useState('');
  const [listVotes, setVotes] = useState([]);
  const [legislaturaOption, setLegislaturaOption] = useState({ value: 'XIV', label: 'XIV' });
  const [datesLegislaturaOption, setDatesLegislaturaOption] = useState({ value: '', label: '' });
  const {
    data,
    loading,
  } = httpClient.useFetch(`${httpClient.urlBase!}/dates`);

  const changeSelectOptionHandler = (event: any) => {
    setLegislaturaOption(event);
    setDatesLegislaturaOption({ value: '', label: '' });
  };
  const handleChange = (event: any) => {
    setDatesLegislaturaOption(event);
    setDate(event.value);
    setVotes([]);
  };
  const handleSubmit = (event: any) => {
    event.preventDefault();
    httpClient.doFetch(`${httpClient.urlBase!}/votes/byDate?date=${datesLegislaturaOption.value}`)
      .then((r) => {
        setVotes(r);
      });
  };

  const { t } = useTranslation();

  return (
    <div className="listOfSessions">
      <h2>{t('list_of_sessions')}</h2>
      {loading ? <LoadingAnimation />
        : (
          <form onSubmit={handleSubmit}>
            <div>
              <Select
                id="legislatura-select"
                name="form-field-name"
                value={legislaturaOption}
                onChange={changeSelectOptionHandler}
                options={data.map((item: any) => item.legislatura).filter((value: any, index: any, self: any) => self.indexOf(value) === index).map((v: any) => ({ value: v, label: v }))}
              />
              <Select
                id="date-select"
                name="form-field-name"
                value={datesLegislaturaOption}
                onChange={handleChange}
                //Todo: Change this to any other way
                options={data.filter((value: any) => value.legislatura === legislaturaOption.value).map((v: any) => ({ label: moment(v.date.toString(), 'YYYY-MM-DD').format('DD-MM-YYYY'), value: v.date })).sort((a: any, b: any) => {
                  const aDate = moment(a.value, 'YYYY-MM-DD').toDate();
                  const bDate = moment(b.value, 'YYYY-MM-DD').toDate();
                  return bDate.getTime() - aDate.getTime();
                })} />
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
                  <Link to={`/sessions/${element.id}`}>{element.titulo + ' ' + (element.titulosubgrupo.trim() === "" ? element.textoexpediente : element.titulosubgrupo)}</Link>
                </li>
              ))}
            </ul>
          </div>
        )}
    </div>
  );
};
export default ListOfSessions;
