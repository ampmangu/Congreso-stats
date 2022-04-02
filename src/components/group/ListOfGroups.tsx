import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import httpClient from '../../service/httpClient';
import '../../styles/listOfGroups.scss';
import LoadingAnimation from '../commons/LoadingAnimation';
import Select from 'react-select';

const ListOfGroups = () => {
  const { t } = useTranslation();
  const {
    data,
    loading,
  } = httpClient.useFetch(`${httpClient.urlBase!}/groups`);
  const groupOptions = [
    {
      value: 'XIV',
      label: 'XIV',
    },
    {
      value: 'XIII',
      label: 'XIII',
    },
    {
      value: 'XII',
      label: 'XII',
    },
    {
      value: 'XI',
      label: 'XI',
    },
    {
      value: 'X',
      label: 'X',
    },
  ];
  const [groupValue, setGroupValue] = React.useState(groupOptions[0]);
  const handleSelectChange = (event: any) => {
    console.log(event);
    setGroupValue(event);
  };
  return (
    <div className="listOfGroups">
      <div className="headerSelection">
        <h2>{t('list_of_groups')}</h2>
        <Select
          id="group-select"
          name="form-field-name"
          value={groupValue}
          onChange={handleSelectChange}
          options={groupOptions}
        />
      </div>
      {loading ? <LoadingAnimation />
        : (
          <ul>
            {data.filter((value: any) => value.legislatura === groupValue.value)
              .map((option: any) => (
                <li>
                  <Link
                    to={`/groups/${option.grupo.replace(/\s/g, '')}`}
                  >
                    {option.grupo}
                  </Link>
                </li>

              ))}
          </ul>
        )}
    </div>
  );
};
export default ListOfGroups;
