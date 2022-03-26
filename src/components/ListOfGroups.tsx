import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import httpClient from './service/httpClient';
import '../styles/listOfGroups.scss';
import LoadingAnimation from './LoadingAnimation';

const ListOfGroups = () => {
  const { t } = useTranslation();
  const {
    data,
    loading,
  } = httpClient.useFetch(`${httpClient.urlBase!}/groups`);
  return (
    <div className="listOfGroups">
      <h2>{t('list_of_groups')}</h2>
      {loading ? <LoadingAnimation />
        : (
          <ul>
            {data.map((option: string) => (
              <li>
                <Link to={`/groups/${option.replace(/\s/g, '')}`}>{option}</Link>
              </li>
            ))}
          </ul>
        )}
    </div>
  );
};
export default ListOfGroups;
