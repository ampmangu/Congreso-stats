import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import httpClient from './service/httpClient';
import '../styles/listOfGroups.scss';

const ListOfGroups = () => {
  const { t } = useTranslation();
  const {
    data,
    loading,
  } = httpClient.useFetch(`${httpClient.urlBase!}/groups`);
  return (
    <div className="listOfGroups">
      {t('list_of_groups')}
      {loading ? <div>...loading</div>
        : (
          <ul>
            {data.map((option: string) => (
              <li>
                <Link to={`/groups/${option}`}>{option}</Link>
              </li>
            ))}
          </ul>
        )}
    </div>
  );
};
export default ListOfGroups;
